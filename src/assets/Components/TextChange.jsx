import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi!",
    "Welcome to my portfolio!",
  ];

  const [currentText, setCurrentText] = useState(["", ""]);
  const [endValue, setEndValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks which text is typing
  const [isTyping, setIsTyping] = useState(true); // Flag to prevent clearing mid-typing

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        // Handle typing logic based on the current index
        if (currentIndex === 0) {
          // First text typing
          setCurrentText([texts[0].substring(0, endValue), ""]);
        } else if (currentIndex === 1) {
          // Second text typing
          setCurrentText([texts[0], texts[1].substring(0, endValue)]);
        }

        setEndValue((prev) => prev + 1); // Increment typing
      }

      // If the typing reaches the end of the current text
      if (endValue >= texts[currentIndex].length) {
        if (currentIndex === 0) {
          // Finished first text, move to second text
          setEndValue(0);
          setCurrentIndex(1);
        } else if (currentIndex === 1) {
          // Finished second text, reset everything
          setIsTyping(false);
          setTimeout(() => {
            setCurrentText(["", ""]); // Clear both lines after delay
            setEndValue(0); // Reset typing index
            setCurrentIndex(0); // Start typing the first line again
            setIsTyping(true); // Allow typing to restart
          }, 2000); // Delay before restarting
        }
      }
    }, 100); // Typing speed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [endValue, currentIndex, isTyping, texts]);

  return (
    <div className="transition ease duration-300 h-20 overflow-hidden">
      <div>{currentText[0]}</div>
      <div>{currentText[1]}</div>
    </div>
  );
};

export default TextChange;
