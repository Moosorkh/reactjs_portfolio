import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  demoLink, 
  sourceLink, 
  tags = [], 
  featured = false,
  imageAlt = "Project screenshot" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group overflow-hidden rounded-xl bg-gray-800/80 shadow-lg transition-all duration-300 h-full flex flex-col ${
        featured ? 'md:col-span-2 md:flex-row' : ''
      } ${isHovered ? 'scale-[1.02] shadow-xl' : 'scale-100 shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'w-full'}`}>
        {/* Image */}
        <div className="aspect-video overflow-hidden bg-gray-900 relative">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'scale-105 brightness-90' : 'scale-100 brightness-75'
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
              <FaCode className="text-gray-500 text-5xl" />
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
        </div>
        
        {/* Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 z-10">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block text-xs px-2 py-1 bg-blue-900/70 text-blue-200 rounded-full border border-blue-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Project Info */}
      <div className={`flex flex-col justify-between p-5 flex-grow ${featured ? 'md:w-1/2' : 'w-full'}`}>
        <div>
          <h3 className={`font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ${
            featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
          }`}>
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-5">
            {description}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out shadow-sm"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
          
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out shadow-sm"
            >
              <FaGithub />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Subtle accent border that glows on hover */}
      <div 
        className={`absolute inset-0 pointer-events-none border border-transparent rounded-xl transition-colors duration-300 ${
          isHovered ? 'border-blue-500/30' : 'border-transparent'
        }`}
      ></div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  demoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
  imageAlt: PropTypes.string
};

export default ProjectCard;