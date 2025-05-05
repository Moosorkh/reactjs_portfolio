import React, { useState, useEffect, useCallback } from "react";

const TextChange = ({ typingSpeed = 70, pauseTime = 2000, cursorBlinkSpeed = 400, fadeDuration = 1000 }) => {
  const texts = [
    "Hi there!",
    "Welcome to my portfolio!",
    "I'm a Software Developer",
    "Specializing in Full Stack Development",
    "Building modern web applications"
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [isTyping, setIsTyping] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  // Typing and fading logic
  const handleTypingEffect = useCallback(() => {
    const currentText = texts[currentIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      setOpacity(0);
      setTimeout(() => {
        setDisplayText("");
        setOpacity(1);
        setCurrentIndex((currentIndex + 1) % texts.length);
        setIsTyping(true);
      }, fadeDuration);
    }
  }, [currentIndex, displayText, isTyping, texts, typingSpeed, pauseTime, fadeDuration]);

  useEffect(() => {
    handleTypingEffect();
  }, [displayText, isTyping, handleTypingEffect]);

  return (
    <div className="min-h-[7rem] md:min-h-[9rem] flex items-center">
      <div className="relative">
        <span
          className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold transition-opacity duration-700"
          style={{ opacity }}
        >
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
