import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ComingSoonSection from "./ComingSoonSection";
import { projects, upcomingProjects } from "../data/projects";
import AnimatedSection from "../AnimatedSection";

const ProjectsGrid = () => {
  // Add state to track expanded descriptions
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  
  // Add state to track which descriptions need "Read More" buttons
  const [needsReadMore, setNeedsReadMore] = useState({});
  
  // Create refs for each description paragraph
  const descriptionRefs = useRef({});

  // Function to toggle description expansion
  const toggleDescription = (cardId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  // Function to check if description paragraphs exceed their container height
  const checkDescriptionHeights = () => {
    const newNeedsReadMore = {};
    
    Object.keys(descriptionRefs.current).forEach((id) => {
      const element = descriptionRefs.current[id];
      if (element) {
        // Get the line height and calculate the approximate number of lines
        const style = window.getComputedStyle(element);
        const lineHeight = parseInt(style.lineHeight) || 24; // Default line height if can't be determined
        const height = element.scrollHeight;
        const lineCount = Math.round(height / lineHeight);
        
        // If more than 3 lines, show the "Read More" button
        newNeedsReadMore[id] = lineCount > 3;
      }
    });
    
    setNeedsReadMore(newNeedsReadMore);
  };
  
  // Function to register refs
  const registerRef = (id, el) => {
    if (el) {
      descriptionRefs.current[id] = el;
    }
  };

  // Check which descriptions need "Read More" buttons after DOM is fully loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      checkDescriptionHeights();
    }, 500);
    
    // Recalculate on window resize
    window.addEventListener("resize", checkDescriptionHeights);
    return () => {
      window.removeEventListener("resize", checkDescriptionHeights);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatedSection delay={600} className="mt-12">
      {/* Changed from grid to flex wrap layout */}
      <div className="flex flex-wrap gap-6">
        {/* Completed Projects */}
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <ProjectCard
              project={project}
              registerRef={registerRef}
              expandedDescriptions={expandedDescriptions}
              toggleDescription={toggleDescription}
              needsReadMore={needsReadMore}
            />
          </div>
        ))}

        {/* Coming Soon Section */}
        <div className="w-full md:w-[calc(100%-12px)] lg:w-[calc(100%-18px)]">
          <ComingSoonSection 
            registerRef={registerRef}
            expandedDescriptions={expandedDescriptions}
            toggleDescription={toggleDescription}
            needsReadMore={needsReadMore}
          />
        </div>

        {/* Upcoming Projects */}
        {upcomingProjects.map((project) => (
          <div key={project.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <ProjectCard
              project={project}
              registerRef={registerRef}
              expandedDescriptions={expandedDescriptions}
              toggleDescription={toggleDescription}
              needsReadMore={needsReadMore}
            />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsGrid;