import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({ 
  project, 
  registerRef, 
  expandedDescriptions,
  toggleDescription,
  needsReadMore 
}) => {
  const { 
    id, 
    title, 
    description, 
    image, 
    tags, 
    links, 
    color = "blue", 
    featured,
    icon,
    iconColor,
    status,
    badge
  } = project;

  // Render dynamic icon
  const renderIcon = () => {
    if (icon?.startsWith("Fa")) {
      const IconComponent = FaIcons[icon];
      return <IconComponent color={iconColor} size={40} />;
    } else if (icon?.startsWith("Si")) {
      const IconComponent = SiIcons[icon];
      return <IconComponent color={iconColor} size={40} />;
    }
    return null;
  };

  // Get color-specific classes
  const getBorderHoverClass = () => {
    return color === "green" ? "hover:border-green-500" : "hover:border-blue-500";
  };

  const getShadowHoverClass = () => {
    return color === "green" ? "hover:shadow-green-900/20" : "hover:shadow-blue-900/20";
  };

  const getTitleHoverClass = () => {
    return color === "green" ? "group-hover:text-green-400" : "group-hover:text-blue-400";
  };

  const getButtonClass = () => {
    return color === "green" ? "text-green-400 hover:text-green-300" : "text-blue-400 hover:text-blue-300";
  };

  const getLiveButtonClass = () => {
    return color === "green" 
      ? "bg-green-600 hover:bg-green-700 text-white" 
      : "bg-blue-600 hover:bg-blue-700 text-white";
  };

  const getBadgeClass = () => {
    return color === "green" ? "bg-green-600" : "bg-blue-600";
  };

  return (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 ${getBorderHoverClass()} transition-all duration-300 ${getShadowHoverClass()} hover:shadow-2xl group`}>
      {image ? (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          {featured && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
          {badge && (
            <div className={`absolute top-4 left-4 ${getBadgeClass()} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {badge}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-64 overflow-hidden bg-gray-900">
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 relative z-10">
              <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {renderIcon()}
              </div>
              <h3 className={`text-xl font-semibold text-white ${getTitleHoverClass()} transition-colors`}>
                {title}
              </h3>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        </div>
      )}

      <div className="p-6">
        {image && (
          <h3 className={`text-xl md:text-2xl font-semibold text-white mb-3 ${getTitleHoverClass()} transition-colors`}>
            {title}
          </h3>
        )}

        <p
          ref={(el) => registerRef(id, el)}
          className={`text-gray-300 mb-1 ${
            expandedDescriptions[id] ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        {(needsReadMore[id] || expandedDescriptions[id]) && (
          <button
            onClick={() => toggleDescription(id)}
            className={`${getButtonClass()} text-sm font-medium focus:outline-none mb-4`}
          >
            {expandedDescriptions[id] ? "Read Less" : "Read More"}
          </button>
        )}

        <ProjectTags tags={tags} color={color} />

        <div className="flex gap-4 pt-2 border-t border-gray-700">
          {links?.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaGithub /> GitHub
            </a>
          ) : status ? (
            <span className="text-gray-400 text-sm flex items-center">
              <FaCode className="mr-2" /> {status}
            </span>
          ) : null}

          {links?.liveDemo && (
            <a
              href={links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${getLiveButtonClass()} px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ml-auto`}
            >
              <FaExternalLinkAlt /> {id === "mary-eclair" ? "Live Store" : "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;