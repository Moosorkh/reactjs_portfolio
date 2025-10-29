import React, { useState, useEffect, useRef } from "react";

const TextChange = ({ typingSpeed = 70, pauseTime = 2000, cursorBlinkSpeed = 400, fadeDuration = 1000 }) => {
  // Move texts outside component or memoize to prevent recreation
  const textsRef = useRef([
    "Hi there!",
    "Welcome to my portfolio!",
    "I'm a Full-Stack Developer",
    "Specializing in Modern Web Development",
    "Building scalable applications with React, Laravel & Cloud"
  ]);

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const timeoutsRef = useRef([]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  // Typing effect with proper cleanup
  useEffect(() => {
    const texts = textsRef.current;
    const currentText = texts[currentIndex];
    let charIndex = 0;

    // Clear all pending timeouts
    const clearTimeouts = () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };

    // Typing function
    const typeNextChar = () => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex++;
        const timeout = setTimeout(typeNextChar, typingSpeed);
        timeoutsRef.current.push(timeout);
      } else {
        // Pause before fading
        const timeout = setTimeout(startFade, pauseTime);
        timeoutsRef.current.push(timeout);
      }
    };

    // Fade out and move to next text
    const startFade = () => {
      setOpacity(0);
      const timeout = setTimeout(() => {
        setDisplayText("");
        setOpacity(1);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, fadeDuration);
      timeoutsRef.current.push(timeout);
    };

    typeNextChar();

    // Cleanup function
    return () => {
      clearTimeouts();
    };
  }, [currentIndex, typingSpeed, pauseTime, fadeDuration]);

  return (
    <div className="min-h-[7rem] md:min-h-[9rem] flex items-center">
      <div className="relative">
        <span
          className="text-3xl md:text-4xl gradient-text font-bold transition-opacity duration-700"
          style={{ opacity }}
        >
          {displayText}
        </span>
        <span
          className={`inline-block w-2 h-8 md:h-9 ml-1 bg-primary ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          style={{ verticalAlign: 'middle' }}
        ></span>
      </div>
    </div>
  );
};

export default TextChange;
