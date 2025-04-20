import React from "react";

const ProjectTags = ({ tags, color = "blue" }) => {
  // Get color-specific classes
  const getTagColorClasses = () => {
    switch (color) {
      case "green":
        return "bg-green-900/50 text-green-300";
      case "blue":
      default:
        return "bg-blue-900/50 text-blue-300";
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`${getTagColorClasses()} px-3 py-1 rounded-full text-xs font-medium`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;