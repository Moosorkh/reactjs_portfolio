import React, { useState, useEffect, useCallback } from "react";

const TextChange = ({ typingSpeed = 70, pauseTime = 2000, cursorBlinkSpeed = 400 }) => {
  // Expanded text options with more professional content
  const texts = [
    "Hi there!",
    "Welcome to my portfolio!",
    "I'm a Software Developer",
    "Specializing in Full Stack Development.",
    "Building modern web applications"
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDarkReaderActive, setIsDarkReaderActive] = useState(false);

  // Check if Dark Reader is active on component mount
  useEffect(() => {
    const checkDarkReader = () => {
      // Multiple ways to detect Dark Reader
      const hasDarkReaderElements = document.querySelector('.darkreader') !== null;
      const hasDarkReaderStyles = Array.from(document.querySelectorAll('style')).some(style => 
        style.id === 'dark-reader-style' || style.innerHTML.includes('darkreader')
      );
      const hasDarkReaderClass = document.documentElement.classList.contains('darkreader');
      
      return hasDarkReaderElements || hasDarkReaderStyles || hasDarkReaderClass;
    };
    
    setIsDarkReaderActive(checkDarkReader());
    
    // Set up an observer to detect Dark Reader being toggled during the session
    const observer = new MutationObserver(() => {
      setIsDarkReaderActive(checkDarkReader());
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      childList: true,
      subtree: true 
    });
    
    return () => observer.disconnect();
  }, []);

  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  // Main typing/deleting logic
  const handleTypingEffect = useCallback(() => {
    const currentText = texts[currentIndex];
    
    // Calculate delay based on whether we're typing or deleting
    const delay = isTyping 
      ? typingSpeed 
      : typingSpeed / 2; // Faster when deleting
    
    setTimeout(() => {
      if (isTyping) {
        // Typing mode - add characters
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        // Check if we've completed typing the current text
        if (displayText.length === currentText.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
          setIsTyping(false);
        }
      } else if (isDeleting) {
        // Deleting mode - remove characters
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        // Check if we've deleted all text
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, delay);
  }, [currentIndex, displayText, isDeleting, isTyping, pauseTime, texts, typingSpeed]);

  // Run the effect when states change
  useEffect(() => {
    const typingTimer = handleTypingEffect();
    return () => clearTimeout(typingTimer);
  }, [displayText, isTyping, isDeleting, handleTypingEffect]);

  // Determine text class based on Dark Reader detection
  const getTextClass = () => {
    if (isDarkReaderActive) {
      // Simplified styling for Dark Reader - no background-clip or transparent text
      return "text-3xl md:text-4xl font-bold text-blue-400";
    } else {
      // Original styling for normal mode
      return "text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold";
    }
  };

  return (
    <div className="min-h-[7rem] md:min-h-[9rem] flex items-center">
      <div className="relative">
        {/* Apply different classes based on Dark Reader detection */}
        <span className={getTextClass()} data-darkreader-inline-color>
          {displayText}
        </span>
        <span 
          className={`inline-block w-2 h-8 md:h-9 ml-1 bg-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          style={{ verticalAlign: 'middle' }}
          data-darkreader-inline-bgcolor
        ></span>
      </div>
    </div>
  );
};

export default TextChange;