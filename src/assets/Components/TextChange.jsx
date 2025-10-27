import React, { useState, useEffect, useMemo } from "react";

const TextChange = ({ typingSpeed = 70, pauseTime = 2000, cursorBlinkSpeed = 400, fadeDuration = 1000 }) => {
  const texts = useMemo(() => [
    "Hi there!",
    "Welcome to my portfolio!",
    "I'm a Software Developer",
    "Specializing in Full Stack Development",
    "Building modern web applications"
  ], []);

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && charIndex < currentText.length) {
      // Typing forward
      const typeTimeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typeTimeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Finished typing, pause before deleting
      setIsPaused(true);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      const deleteTimeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
      return () => clearTimeout(deleteTimeout);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [charIndex, currentIndex, isDeleting, isPaused, texts, typingSpeed, pauseTime]);

  return (
    <div className="min-h-[7rem] md:min-h-[9rem] flex items-center">
      <div className="relative">
        <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold">
          {displayText}
        </span>
        <span className="inline-block w-2 h-8 md:h-9 ml-1 bg-blue-400 animate-pulse" style={{ verticalAlign: 'middle' }}></span>
      </div>
    </div>
  );
};

export default TextChange;
