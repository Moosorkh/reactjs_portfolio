import React, { useState, useEffect } from "react";

// Component for animating sections on load
const AnimatedSection = ({ 
  children, 
  delay = 0, 
  className = "", 
  initialState = false 
}) => {
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-16 opacity-0 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;