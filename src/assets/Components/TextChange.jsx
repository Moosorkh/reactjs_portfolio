import React, { useState, useEffect, useCallback, useRef } from "react";

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
  const isTypingRef = useRef(false);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  const handleTypingEffect = useCallback(() => {
    if (isTypingRef.current) return;
    isTypingRef.current = true;

    const currentText = texts[currentIndex];

    // Typing Effect
    const typeText = (charIndex = 0) => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        setTimeout(() => typeText(charIndex + 1), typingSpeed);
      } else {
        setTimeout(() => fadeText(), pauseTime);
      }
    };

    // Fade Effect
    const fadeText = () => {
      setOpacity(0);
      setTimeout(() => {
        setDisplayText("");
        setOpacity(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        isTypingRef.current = false;
      }, fadeDuration);
    };

    typeText();
  }, [currentIndex, texts, typingSpeed, pauseTime, fadeDuration]);

  useEffect(() => {
    handleTypingEffect();
  }, [currentIndex, handleTypingEffect]);

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
