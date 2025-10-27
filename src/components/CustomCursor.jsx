import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [isPointer, setIsPointer] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        const speed = 0.15;
        const dotSpeed = 0.25;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Check if hovering over clickable element
            const target = e.target;
            const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
            setIsPointer(!!isClickable);
        };

        const animate = () => {
            // Smooth follow effect for cursor
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;

            cursorX += dx * speed;
            cursorY += dy * speed;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

            // Faster follow for dot
            const dotDx = mouseX - dotX;
            const dotDy = mouseY - dotY;

            dotX += dotDx * dotSpeed;
            dotY += dotDy * dotSpeed;

            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Hide on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return null;
    }

    return (
        <>
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] transition-all duration-200 ${isPointer ? 'scale-150' : 'scale-100'
                    }`}
                style={{
                    mixBlendMode: theme === 'dark' ? 'difference' : 'normal',
                }}
            >
                <div
                    className={`w-full h-full rounded-full border-2 ${theme === 'dark' ? 'border-white' : 'border-blue-500'
                        } ${isPointer ? 'opacity-50' : 'opacity-30'}`}
                />
            </div>
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
                style={{
                    mixBlendMode: theme === 'dark' ? 'difference' : 'normal',
                }}
            >
                <div
                    className={`w-full h-full rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-blue-500'
                        }`}
                />
            </div>
            <style jsx>{`
        * {
          cursor: none !important;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
