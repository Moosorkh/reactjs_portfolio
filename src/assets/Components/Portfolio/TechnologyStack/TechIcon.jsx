import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

const TechIcon = ({ name, icon, color, size = 50 }) => {
  // Dynamically load the icon from different icon libraries
  const getIcon = () => {
    if (icon.startsWith("Fa")) {
      const IconComponent = FaIcons[icon];
      return <IconComponent color={color} size={size} />;
    } else if (icon.startsWith("Si")) {
      const IconComponent = SiIcons[icon];
      return <IconComponent color={color} size={size} />;
    } else if (icon.startsWith("Di")) {
      const IconComponent = DiIcons[icon];
      return <IconComponent color={color} size={size} />;
    }
    return null;
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.span
      variants={iconVariants}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-2xl"
    >
      {getIcon()}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {name}
      </span>
    </motion.span>
  );
};

export default TechIcon;