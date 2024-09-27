import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I am Mehdi,",
    "A Full Stack Developer.",
    "Welcome to my portfolio!",
  ];

  const [currentText, setCurrentText] = useState(["", ""]);
  const [endValue, setEndValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks which text is typing
  const [isTyping, setIsTyping] = useState(true); // Flag to prevent clearing mid-typing

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the first or second line based on the current index
      if (currentIndex === 0 && isTyping) {
        // First line typing
        setCurrentText([texts[0].substring(0, endValue), ""]);
      } else if (currentIndex === 1 && isTyping) {
        // First line is complete, second line starts typing
        setCurrentText([texts[0], texts[1].substring(0, endValue)]);
      }else if (currentIndex === 2 && isTyping) {
        // First line is complete, second line starts typing
        setCurrentText([texts[0], texts[1], texts[2].substring(0, endValue)]);
      }

      // Control the typing forward
      if (isTyping) {
        setEndValue((prev) => prev + 1);
      }

      // Once the first text is fully typed, move to the second text
      if (endValue >= texts[currentIndex].length) {
        if (currentIndex === 0) {
          // First line finished typing, start second line
          setEndValue(0); // Reset typing index for the second line
          setCurrentIndex(1); // Move to second text typing
        } else if (currentIndex === 1) {
            // Second line finished typing, start third line
            setEndValue(0); // Reset typing index for the second line
            setCurrentIndex(2); // Move to second text typing
            }
        else if (currentIndex === 2) {
          // Second line finished typing, reset everything
          setIsTyping(false); // Pause typing to avoid glitch
          setTimeout(() => {
            setCurrentText(["", ""]); // Clear both lines after delay
            setEndValue(0); // Reset typing index
            setCurrentIndex(0); // Start typing the first line again
            setIsTyping(true); // Allow typing to start
          }, 2000); // Delay before restarting
        } 
      }
    }, 30); // Typing speed

    return () => clearInterval(intervalId);
  }, [endValue, currentIndex, isTyping, texts]);

  return (
    <div className="transition ease duration-300 h-20 overflow-hidden">
      <div>{currentText[0]}</div>
      <div>{currentText[1]}</div>
      <div>{currentText[2]}</div>
    </div>
  );
};

export default TextChange;
