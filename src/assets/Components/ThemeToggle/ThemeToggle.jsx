import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { RiMoonFill, RiSunFill } from '@remixicon/react';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme, isAnimating } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`
        relative w-14 h-7 rounded-full p-1 transition-all duration-300 ease-in-out
        ${isDark ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-yellow-400 to-orange-400'}
        hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-primary
        ${isAnimating ? 'scale-95' : 'scale-100'}
        ${className}
      `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Toggle Circle */}
            <div
                className={`
          absolute top-1 w-5 h-5 rounded-full bg-white shadow-md
          transition-all duration-300 ease-in-out flex items-center justify-center
          ${isDark ? 'left-1' : 'left-8'}
        `}
            >
                {/* Icon inside the circle */}
                <div className={`transition-all duration-300 ${isAnimating ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                    {isDark ? (
                        <RiMoonFill size={14} className="text-blue-600" />
                    ) : (
                        <RiSunFill size={14} className="text-orange-500" />
                    )}
                </div>
            </div>

            {/* Background Icons */}
            <div className="relative w-full h-full flex items-center justify-between px-1">
                <RiSunFill
                    size={12}
                    className={`transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-0'} text-white`}
                />
                <RiMoonFill
                    size={12}
                    className={`transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-40'} text-white`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;
