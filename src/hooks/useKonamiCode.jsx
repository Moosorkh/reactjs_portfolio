import { useEffect, useRef } from 'react';
import { triggerFireworks } from '../utils/confetti';

const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];

export const useKonamiCode = (callback) => {
    const keysRef = useRef([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            keysRef.current.push(e.key);

            // Keep only the last 10 keys
            if (keysRef.current.length > KONAMI_CODE.length) {
                keysRef.current.shift();
            }

            // Check if sequence matches
            if (keysRef.current.length === KONAMI_CODE.length) {
                const matches = KONAMI_CODE.every((key, index) => key === keysRef.current[index]);

                if (matches) {
                    callback();
                    keysRef.current = [];
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
};

export const KonamiCodeListener = () => {
    useKonamiCode(() => {
        triggerFireworks();

        // Create secret message
        const message = document.createElement('div');
        message.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 30px 60px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        z-index: 9999;
        text-align: center;
        animation: scaleIn 0.5s ease-out;
      ">
        <h1 style="
          font-size: 48px;
          margin: 0 0 20px 0;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        ">🎮 You Found It! 🎮</h1>
        <p style="
          font-size: 24px;
          margin: 0;
          color: rgba(255,255,255,0.9);
        ">You've unlocked the secret developer mode!</p>
        <p style="
          font-size: 18px;
          margin: 20px 0 0 0;
          color: rgba(255,255,255,0.7);
        ">Achievement Unlocked: Master Gamer 🏆</p>
      </div>
      <style>
        @keyframes scaleIn {
          from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      </style>
    `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.style.transition = 'opacity 0.5s';
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 4000);
    });

    return null;
};
