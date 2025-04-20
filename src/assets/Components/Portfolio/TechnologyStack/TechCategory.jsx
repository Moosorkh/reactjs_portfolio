import React from "react";
import TechIcon from "./TechIcon";

const TechCategory = ({ title, technologies }) => {
  return (
    <div className="w-full mb-6">
      <h3 className="text-xl text-white mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech) => (
          <TechIcon
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
};

export default TechCategory;