import React from "react";
import { comingSoonInfo } from "../data/projects";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const ComingSoonSection = ({ 
  registerRef, 
  expandedDescriptions, 
  toggleDescription, 
  needsReadMore 
}) => {
  // Function to render dynamic icons
  const renderIcon = (iconData) => {
    const { icon, color } = iconData;
    
    if (icon.startsWith("Fa")) {
      const IconComponent = FaIcons[icon];
      return <IconComponent color={color} size={40} />;
    } else if (icon.startsWith("Si")) {
      const IconComponent = SiIcons[icon];
      return <IconComponent color={color} size={40} />;
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl md:col-span-2 lg:col-span-4">
      <div className="flex flex-col items-center justify-center py-12 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          {comingSoonInfo.title}
        </h3>

        {/* Animated Progress Indicator */}
        <div className="relative w-64 h-4 bg-gray-700 rounded-full mb-8 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full animate-pulse"
            style={{ width: "70%" }}
          ></div>
        </div>

        {/* Animated Icons */}
        <div className="flex gap-8 mb-8">
          {comingSoonInfo.icons.map((iconData, index) => (
            <div
              key={index}
              className="animate-bounce p-3 bg-gray-800 rounded-full shadow-lg"
              style={{ animationDelay: `${iconData.delay}s` }}
            >
              {renderIcon(iconData)}
            </div>
          ))}
        </div>

        <p
          ref={(el) => registerRef("coming-soon", el)}
          className={`text-gray-300 text-center max-w-2xl ${
            expandedDescriptions["coming-soon"] ? "" : "line-clamp-3"
          }`}
        >
          {comingSoonInfo.description}
        </p>

        {(needsReadMore["coming-soon"] || expandedDescriptions["coming-soon"]) && (
          <button
            onClick={() => toggleDescription("coming-soon")}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mt-2 mb-4"
          >
            {expandedDescriptions["coming-soon"] ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ComingSoonSection;