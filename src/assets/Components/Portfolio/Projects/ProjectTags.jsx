import React from "react";

const ProjectTags = ({ tags, color = "blue" }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`bg-${color}-900/50 text-${color}-300 px-3 py-1 rounded-full text-xs font-medium`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;