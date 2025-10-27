import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <FaSun size={24} className="animate-pulse" />
            ) : (
                <FaMoon size={24} />
            )}
        </button>
    );
};

export default ThemeToggle;
