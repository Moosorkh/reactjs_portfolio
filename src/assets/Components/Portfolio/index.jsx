import React, { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import TechnologyStack from "./TechnologyStack";
import ProjectsGrid from "./Projects/ProjectsGrid";

// Main portfolio component that puts everything together
const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="min-h-screen p-10 md:p-24 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Header with animation */}
      <AnimatedSection className="text-center">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-12">
          Portfolio
        </h1>
      </AnimatedSection>

      {/* Technology Stack Section */}
      <TechnologyStack />

      {/* Projects Section Title */}
      <AnimatedSection delay={500} className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-16 text-white">
          Projects
        </h2>
      </AnimatedSection>

      {/* Projects Grid */}
      <ProjectsGrid />
    </div>
  );
};

export default Portfolio;