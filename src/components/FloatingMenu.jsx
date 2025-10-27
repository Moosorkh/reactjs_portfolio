import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaVolumeMute, FaVolumeUp, FaPalette, FaRocket } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { triggerFireworks, triggerStars } from '../utils/confetti';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(false);
    const { theme } = useTheme();

    const menuItems = [
        {
            icon: soundEnabled ? FaVolumeUp : FaVolumeMute,
            label: soundEnabled ? 'Sound On' : 'Sound Off',
            onClick: () => setSoundEnabled(!soundEnabled),
            color: 'from-green-400 to-green-600'
        },
        {
            icon: FaPalette,
            label: 'Themes',
            onClick: () => alert('More themes coming soon!'),
            color: 'from-pink-400 to-pink-600'
        },
        {
            icon: FaRocket,
            label: 'Fireworks',
            onClick: () => triggerFireworks(),
            color: 'from-yellow-400 to-orange-600'
        }
    ];

    return (
        <div className="fixed bottom-24 right-8 z-40">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
                    >
                        {menuItems.map((item, index) => (
                            <motion.button
                                key={index}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={item.onClick}
                                className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${item.color} text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 group`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <item.icon size={20} />
                                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ${isOpen ? 'rotate-90' : ''
                    }`}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
            >
                <FaCog size={24} />
            </motion.button>
        </div>
    );
};

export default FloatingMenu;
