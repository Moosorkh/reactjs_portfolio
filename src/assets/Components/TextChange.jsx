import React, { useState, useEffect, useCallback } from "react";

const TextChange = ({ typingSpeed = 70, pauseTime = 2000, cursorBlinkSpeed = 400 }) => {
  // Expanded text options with more professional content
  const texts = [
    "Hi there!",
    "Welcome to my portfolio!",
    "I'm a Full Stack Developer",
    "Specialized in React, TypeScript & C# and more...",
    "Building modern web applications"
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

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

  return (
    <div className="min-h-[7rem] md:min-h-[9rem] flex items-center">
    <div className="relative">
    <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold">
        {displayText}
      </span>
      <span 
        className={`inline-block w-2 h-8 md:h-9 ml-1 bg-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        style={{ verticalAlign: 'middle' }}
      ></span>
      </div>
    </div>
  );
};

export default TextChange;