import React from "react";
import TechCategory from "./TechCategory";
import { techCategories } from "../data/techStack";
import AnimatedSection from "../AnimatedSection";

const TechnologyStack = () => {
  return (
    <AnimatedSection delay={300} className="flex flex-wrap items-center justify-center gap-6 mb-12">
      <div className="flex flex-wrap md:w-1/1 gap-8 md:p-12 py-10">
        {techCategories.map((category, index) => (
          <TechCategory
            key={category.id}
            title={category.title}
            technologies={category.technologies}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TechnologyStack;