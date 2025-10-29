import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    // Check for saved theme preference or default to 'dark'
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            // Check system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'dark'; // Default to dark for portfolio
    });

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Apply theme to document
        const root = document.documentElement;

        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }

        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setIsAnimating(true);
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');

        // Reset animation state after transition
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const value = {
        theme,
        toggleTheme,
        isAnimating,
        isDark: theme === 'dark',
        isLight: theme === 'light',
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
