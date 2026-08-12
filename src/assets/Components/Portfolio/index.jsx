import TechnologyStack from "./TechnologyStack";
import ProjectsGrid from "./Projects/ProjectsGrid";

// Main portfolio component that puts everything together
const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="min-h-screen px-10 md:px-24 bg-gradient-to-b from-bg-primary to-bg-secondary transition-colors duration-300"
    >
      <TechnologyStack />

      <ProjectsGrid />
    </div>
  );
};

export default Portfolio;
