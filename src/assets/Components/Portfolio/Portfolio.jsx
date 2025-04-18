import React, { useState, useEffect, useRef } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaDocker,
  FaAws,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import { DiRedis, DiPostgresql } from "react-icons/di";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSequelize,
  SiPython,
  SiCsharp,
  SiDotnet,
  SiMui,
  SiTypescript,
  SiGraphql,
  SiApollographql,
  SiPrisma,
  SiReactrouter,
  SiCypress,
  SiReact,
  SiShopify,
  SiNestjs,
} from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";
// Importing project image
import WeatherDashboardImage from "../../weatherdashboard.png";
import MapListToggleImage from "../../../assets/MapListToggleImage.png";
import invoiceTrackerImage from "../../../assets/invoiceTracker.png";
import MaryEclairPatisserie from "../../../assets/MaryEclairPatisserie.png";

const Portfolio = () => {
  const [animatedSections, setAnimatedSections] = useState({
    header: false,
    technologies: false,
    projectsTitle: false,
    projects: false,
  });

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

  // Animation on page load
  useEffect(() => {
    // Animate sections sequentially
    const sections = ["header", "technologies", "projectsTitle", "projects"];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setAnimatedSections((prev) => ({
          ...prev,
          [section]: true,
        }));
      }, 300 + index * 300); // Stagger the animations
    });

    // Check which descriptions need "Read More" buttons after DOM is fully loaded
    setTimeout(() => {
      checkDescriptionHeights();
    }, 500);

    // Recalculate on window resize
    window.addEventListener("resize", checkDescriptionHeights);
    return () => window.removeEventListener("resize", checkDescriptionHeights);
  }, []);

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

  return (
    <div
      id="Portfolio"
      className="min-h-screen p-10 md:p-24 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Header with animation */}
      <h1
        className={`text-2xl md:text-4xl text-white font-bold mb-12 text-center transition-all duration-700 transform ${
          animatedSections.header
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        Portfolio
      </h1>

      {/* Technology Stack Section with animation */}
      <div
        className={`flex flex-wrap items-center justify-center gap-6 mb-12 transition-all duration-1000 transform ${
          animatedSections.technologies
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <div className="flex flex-wrap md:w-1/1 gap-8 md:p-12 py-10">
          {/* Frontend Technologies */}
          <div className="w-full mb-6">
            <h3 className="text-xl text-white mb-4 text-center">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {/* HTML5 */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaHtml5 color="#E34F26" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  HTML5
                </span>
              </span>

              {/* CSS3 */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaCss3 color="#1572B6" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  CSS3
                </span>
              </span>

              {/* JavaScript */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaJs color="#F7DF1E" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  JavaScript
                </span>
              </span>

              {/* TypeScript */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiTypescript color="#3178C6" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  TypeScript
                </span>
              </span>

              {/* ReactJS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaReact color="#61DAFB" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  ReactJS
                </span>
              </span>

              {/* React Native */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiReact color="#61DAFB" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  React Native
                </span>
              </span>

              {/* React Router */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiReactrouter color="#CA4245" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  React Router
                </span>
              </span>

              {/* TailwindCSS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiTailwindcss color="#06B6D4" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  TailwindCSS
                </span>
              </span>

              {/* MUI */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiMui color="#007FFF" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Material UI
                </span>
              </span>

              {/* Bootstrap */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaBootstrap color="#7952B3" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Bootstrap
                </span>
              </span>

              {/* SASS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaSass color="#CC6699" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  SASS
                </span>
              </span>

              {/* Figma */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaFigma color="#F24E1E" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Figma
                </span>
              </span>

              {/* Shopify */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiShopify color="#95BF47" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Shopify
                </span>
              </span>
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="w-full mb-6">
            <h3 className="text-xl text-white mb-4 text-center">Backend</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {/* NodeJS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaNodeJs color="#339933" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  NodeJS
                </span>
              </span>

              {/* NestJS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiNestjs color="#E0234E" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  NestJS
                </span>
              </span>

              {/* ExpressJS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiExpress color="#000000" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  ExpressJS
                </span>
              </span>

              {/* C# */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiCsharp color="#239120" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  C#
                </span>
              </span>

              {/* ASP.NET */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiDotnet color="#512BD4" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  ASP.NET
                </span>
              </span>

              {/* Python */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiPython color="#306998" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Python
                </span>
              </span>

              {/* GraphQL */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiGraphql color="#E10098" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  GraphQL
                </span>
              </span>

              {/* Apollo */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiApollographql color="#311C87" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Apollo
                </span>
              </span>
            </div>
          </div>

          {/* Database & ORM Technologies */}
          <div className="w-full mb-6">
            <h3 className="text-xl text-white mb-4 text-center">
              Databases & ORMs
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {/* MongoDB */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiMongodb color="#47A248" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  MongoDB
                </span>
              </span>

              {/* PostgreSQL */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <DiPostgresql color="#336791" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  PostgreSQL
                </span>
              </span>

              {/* Redis */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <DiRedis color="#FF4438" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Redis
                </span>
              </span>

              {/* Sequelize */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiSequelize color="#52B0E7" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Sequelize
                </span>
              </span>

              {/* Prisma */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiPrisma color="#2D3748" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Prisma
                </span>
              </span>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="w-full mb-6">
            <h3 className="text-xl text-white mb-4 text-center">
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {/* GitHub */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaGithub color="#fff" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </span>

              {/* Git */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaGitAlt color="#F05032" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Git
                </span>
              </span>

              {/* Docker */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaDocker color="#2496ED" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Docker
                </span>
              </span>

              {/* AWS */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <FaAws color="#FF9900" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  AWS
                </span>
              </span>

              {/* Cypress */}
              <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                <SiCypress color="#466185" size={50} />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Cypress
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section Title with animation */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-16 text-center text-white transition-all duration-700 transform ${
          animatedSections.projectsTitle
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        Projects
      </h2>

      {/* Projects Grid with animation - IMPROVED VERSION */}
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 justify-center transition-all duration-700 transform ${
          animatedSections.projects
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-95"
        }`}
      >
        {/* Project 1 - Featured Project */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative overflow-hidden">
            <img
              src={MapListToggleImage}
              alt="Map List Toggle"
              className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              Mobile-responsive Map Search
            </h3>

            <p
              ref={(el) => registerRef("map-toggle", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["map-toggle"] ? "" : "line-clamp-3"
              }`}
            >
              An interactive React application that toggles between a map view
              and a list view, showcasing various locations with advanced
              filtering capabilities and responsive design.
            </p>

            {(needsReadMore["map-toggle"] ||
              expandedDescriptions["map-toggle"]) && (
              <button
                onClick={() => toggleDescription("map-toggle")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["map-toggle"] ? "Read Less" : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                JavaScript
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Leaflet
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                CSS
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <a
                href="https://github.com/Moosorkh/map-list-toggle.git"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://map-list-toggle.vercel.app/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ml-auto"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* AdoptPaws Project Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative overflow-hidden">
            <img
              src="https://i.imgur.com/xOBUOkG.jpeg"
              alt="AdoptPaws Pet Adoption Platform"
              className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              AdoptPaws - Pet Adoption
            </h3>

            <p
              ref={(el) => registerRef("adopt-paws", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["adopt-paws"] ? "" : "line-clamp-3"
              }`}
            >
              A modern, fully responsive pet adoption web application built with
              React and Material UI. Features include an interactive pet
              browsing experience with search and filtering.
            </p>

            {(needsReadMore["adopt-paws"] ||
              expandedDescriptions["adopt-paws"]) && (
              <button
                onClick={() => toggleDescription("adopt-paws")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["adopt-paws"] ? "Read Less" : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                TypeScript
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Material UI
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Vite
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <a
                href="https://github.com/Moosorkh/adoptpaws-react.git"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://adoptpaws-react.vercel.app/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ml-auto"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Invoice Tracker Project Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative overflow-hidden">
            <img
              src={invoiceTrackerImage}
              alt="Invoice Tracker - Advanced CRUD Application"
              className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              Invoice Tracker - Full Stack CRUD App
            </h3>

            <p
              ref={(el) => registerRef("invoice-tracker", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["invoice-tracker"] ? "" : "line-clamp-3"
              }`}
            >
              An invoice tracking application built with the PERN Stack
              (PostgreSQL, Express, React, Node.js), featuring advanced CRUD
              operations, JWT authentication, PDF exporting, and Dockerized
              deployment on Railway. Use the following credentials to login:{" "}
              <br />
              Email: "test@test.com" <br />
              Password: "123456" or <br />
              Simply register a new account to access the app.
            </p>

            {(needsReadMore["invoice-tracker"] ||
              expandedDescriptions["invoice-tracker"]) && (
              <button
                onClick={() => toggleDescription("invoice-tracker")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["invoice-tracker"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                TypeScript
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Node.js
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Express
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                PostgreSQL
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Prisma
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Docker
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Railway
              </span>
            </div>
            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <a
                href="https://github.com/Moosorkh/invoice-tracker.git"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://invoice-tracker.up.railway.app/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ml-auto"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Shopify Project Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative overflow-hidden">
            <img
              src={MaryEclairPatisserie}
              alt="Mary Éclair Pâtisserie - Shopify Store"
              className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Shopify
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
              Mary Éclair Pâtisserie
            </h3>

            <p
              ref={(el) => registerRef("mary-eclair", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["mary-eclair"] ? "" : "line-clamp-3"
              }`}
            >
              A custom Shopify e-commerce store designed and developed for an
              upscale French-inspired bakery specializing in artisan éclairs and
              pastries. Features include custom theme customization, responsive
              design, SEO optimization, integrated contact forms, and social
              media integration.
            </p>

            {(needsReadMore["mary-eclair"] ||
              expandedDescriptions["mary-eclair"]) && (
              <button
                onClick={() => toggleDescription("mary-eclair")}
                className="text-green-400 hover:text-green-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["mary-eclair"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                Shopify
              </span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                Liquid
              </span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                HTML5
              </span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                CSS3
              </span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                SEO
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <a
                href="https://github.com/yourusername/mary-eclair-patisserie" // replace with your actual GitHub repo link
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                Password: None
              </a>
              <a
                href="https://maryeclairpatisserie.myshopify.com/" // replace with your actual live Shopify link if live
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ml-auto"
              >
                <FaExternalLinkAlt /> Live Store
              </a>
            </div>
          </div>
        </div>

        {/* Weather Dashboard - Updated Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative overflow-hidden">
            <img
              src={WeatherDashboardImage}
              alt="Weather Dashboard"
              className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              Weather Dashboard
            </h3>

            <p
              ref={(el) => registerRef("weather-dashboard", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["weather-dashboard"] ? "" : "line-clamp-3"
              }`}
            >
              A full-stack weather application built with React, Material UI,
              NestJS, and PostgreSQL. Features include current weather data,
              5-day forecasts, search history management, and dark/light theme
              switching. Deployed on Railway with Docker containerization.
            </p>

            {(needsReadMore["weather-dashboard"] ||
              expandedDescriptions["weather-dashboard"]) && (
              <button
                onClick={() => toggleDescription("weather-dashboard")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["weather-dashboard"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                TypeScript
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Material UI
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                NestJS
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                PostgreSQL
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Prisma
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Docker
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Railway
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <a
                href="https://github.com/Moosorkh/Weather_Dashboard"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://weatherdashboard-production-5c78.up.railway.app/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ml-auto"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* More Projects Coming Soon Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl md:col-span-2 lg:col-span-4">
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              More Projects Coming Soon
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
              <div className="animate-bounce p-3 bg-gray-800 rounded-full shadow-lg">
                <FaReact color="#61DAFB" size={40} />
              </div>
              <div
                className="animate-bounce p-3 bg-gray-800 rounded-full shadow-lg"
                style={{ animationDelay: "0.2s" }}
              >
                <SiCsharp color="#239120" size={40} />
              </div>
              <div
                className="animate-bounce p-3 bg-gray-800 rounded-full shadow-lg"
                style={{ animationDelay: "0.4s" }}
              >
                <SiDotnet color="#512BD4" size={40} />
              </div>
              <div
                className="animate-bounce p-3 bg-gray-800 rounded-full shadow-lg"
                style={{ animationDelay: "0.6s" }}
              >
                <FaDocker color="#2496ED" size={40} />
              </div>
            </div>

            <p
              ref={(el) => registerRef("coming-soon", el)}
              className={`text-gray-300 text-center max-w-2xl ${
                expandedDescriptions["coming-soon"] ? "" : "line-clamp-3"
              }`}
            >
              I'm currently working on several exciting projects that showcase
              my full-stack development skills with React, C#, Entity Framework,
              and more. Check back soon to see my latest work!
            </p>

            {(needsReadMore["coming-soon"] ||
              expandedDescriptions["coming-soon"]) && (
              <button
                onClick={() => toggleDescription("coming-soon")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mt-2 mb-4"
              >
                {expandedDescriptions["coming-soon"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}
          </div>
        </div>

        {/* QA and Documentation Project Card */}
<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
  <div className="relative h-64 overflow-hidden bg-gray-900">
    <div className="flex items-center justify-center h-full">
      <div className="text-center p-6 relative z-10">
        <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <FaFileAlt color="#FFD700" size={40} />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
          QA & Technical Documentation
        </h3>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
  </div>

  <div className="p-6">
    <p
      ref={(el) => registerRef("qa-documentation", el)}
      className={`text-gray-300 mb-1 ${
        expandedDescriptions["qa-documentation"] ? "" : "line-clamp-3"
      }`}
    >
      Upcoming project focused on developing comprehensive test cases and technical documentation to support QA processes. Will include creating user guides, API documentation, and system architecture diagrams to enable efficient testing and validation for professional users and development teams.
    </p>

    {(needsReadMore["qa-documentation"] || expandedDescriptions["qa-documentation"]) && (
      <button
        onClick={() => toggleDescription("qa-documentation")}
        className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
      >
        {expandedDescriptions["qa-documentation"] ? "Read Less" : "Read More"}
      </button>
    )}

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Markdown
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Swagger
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Jira
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Draw.io
      </span>
    </div>

    <div className="flex gap-4 pt-2 border-t border-gray-700">
      <span className="text-gray-400 text-sm flex items-center">
        <FaCode className="mr-2" /> Internal Documentation
      </span>
    </div>
  </div>
</div>

        {/* API Design Project Card */}
<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
  <div className="relative h-64 overflow-hidden bg-gray-900">
    <div className="flex items-center justify-center h-full">
      <div className="text-center p-6 relative z-10">
        <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <SiDotnet color="#512BD4" size={40} />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
          API Design & Backend Architecture
        </h3>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
  </div>

  <div className="p-6">
    <p
      ref={(el) => registerRef("api-design", el)}
      className={`text-gray-300 mb-1 ${
        expandedDescriptions["api-design"] ? "" : "line-clamp-3"
      }`}
    >
      In-progress project developing robust RESTful APIs and backend services using C#.NET and ASP.NET Core. Will implement efficient database integration with PostgreSQL, optimize query performance, and ensure secure authentication mechanisms for a seamless user experience.
    </p>

    {(needsReadMore["api-design"] || expandedDescriptions["api-design"]) && (
      <button
        onClick={() => toggleDescription("api-design")}
        className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
      >
        {expandedDescriptions["api-design"] ? "Read Less" : "Read More"}
      </button>
    )}

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        C#.NET
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        ASP.NET
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        PostgreSQL
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Entity Framework
      </span>
    </div>

    <div className="flex gap-4 pt-2 border-t border-gray-700">
      <span className="text-gray-400 text-sm flex items-center">
        <FaCode className="mr-2" /> Private Repository
      </span>
    </div>
  </div>
</div>

        {/* Continuous UI Improvements Project Card */}
<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
  <div className="relative h-64 overflow-hidden bg-gray-900">
    <div className="flex items-center justify-center h-full">
      <div className="text-center p-6 relative z-10">
        <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <SiMui color="#007FFF" size={40} />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
          UI Enhancement Suite
        </h3>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
  </div>

  <div className="p-6">
    <p
      ref={(el) => registerRef("ui-improvements", el)}
      className={`text-gray-300 mb-1 ${
        expandedDescriptions["ui-improvements"] ? "" : "line-clamp-3"
      }`}
    >
       Planned project to implement over a dozen UI enhancements, applying modern design principles and frameworks. Will focus on increasing usability and aesthetic appeal using Material UI and Tailwind CSS, with emphasis on accessibility and responsive design across various devices.
    </p>

    {(needsReadMore["ui-improvements"] || expandedDescriptions["ui-improvements"]) && (
      <button
        onClick={() => toggleDescription("ui-improvements")}
        className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
      >
        {expandedDescriptions["ui-improvements"] ? "Read Less" : "Read More"}
      </button>
    )}

    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Material UI
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        Tailwind CSS
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        ReactJS
      </span>
      <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
        UX/UI Design
      </span>
    </div>

    <div className="flex gap-4 pt-2 border-t border-gray-700">
      <span className="text-gray-400 text-sm flex items-center">
        <FaCode className="mr-2" /> Multiple Repositories
      </span>
    </div>
  </div>
</div>

        {/* Insurance Selection Interface Project Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative h-64 overflow-hidden bg-gray-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6 relative z-10">
                <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SiReact color="#61DAFB" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Insurance Selection Interface
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          </div>

          <div className="p-6">
            <p
              ref={(el) => registerRef("insurance-interface", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["insurance-interface"]
                  ? ""
                  : "line-clamp-3"
              }`}
            >
              A dynamic insurance selection tool with cascading dropdown menus,
              where choices are saved and reflected immediately in the UI,
              facilitating a better user experience. Integrated with PostgreSQL
              database for persistent storage and real-time updates.
            </p>

            {(needsReadMore["insurance-interface"] ||
              expandedDescriptions["insurance-interface"]) && (
              <button
                onClick={() => toggleDescription("insurance-interface")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["insurance-interface"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                PostgreSQL
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Material UI
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                RESTful API
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm flex items-center">
                <FaCode className="mr-2" /> Private Repository
              </span>
            </div>
          </div>
        </div>

        {/* Onboarding Tutorial Project Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative h-64 overflow-hidden bg-gray-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6 relative z-10">
                <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaReact color="#61DAFB" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Onboarding Tutorial System
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          </div>

          <div className="p-6">
            <p
              ref={(el) => registerRef("onboarding-tutorial", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["onboarding-tutorial"]
                  ? ""
                  : "line-clamp-3"
              }`}
            >
              An interactive tutorial system for first-time users of the
              platform, guiding them through complex functionalities to enhance
              user understanding and satisfaction. Implemented using React
              Joyride library with custom tooltips and progress tracking.
            </p>

            {(needsReadMore["onboarding-tutorial"] ||
              expandedDescriptions["onboarding-tutorial"]) && (
              <button
                onClick={() => toggleDescription("onboarding-tutorial")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["onboarding-tutorial"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Joyride
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                CSS3
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                UX Design
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm flex items-center">
                <FaCode className="mr-2" /> Private Repository
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Authentication System */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative h-64 overflow-hidden bg-gray-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6 relative z-10">
                <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SiCsharp color="#239120" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Enhanced Authentication System
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          </div>

          <div className="p-6">
            <p
              ref={(el) => registerRef("auth-system", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["auth-system"] ? "" : "line-clamp-3"
              }`}
            >
              Custom login features for web applications, including tailored
              messages and notifications for new users, enhancing user
              engagement and security measures.
            </p>

            {(needsReadMore["auth-system"] ||
              expandedDescriptions["auth-system"]) && (
              <button
                onClick={() => toggleDescription("auth-system")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["auth-system"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                C#
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                ASP.NET
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Entity Framework
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Authentication
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm flex items-center">
                <FaCode className="mr-2" /> Private Repository
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Bed Reservation System */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl group">
          <div className="relative h-64 overflow-hidden bg-gray-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6 relative z-10">
                <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaReact color="#61DAFB" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Interactive Bed Reservation
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          </div>

          <div className="p-6">
            <p
              ref={(el) => registerRef("bed-reservation", el)}
              className={`text-gray-300 mb-1 ${
                expandedDescriptions["bed-reservation"] ? "" : "line-clamp-3"
              }`}
            >
              A user-friendly drag-and-drop interface for bed reservations and
              swapping, significantly improving user experience and operational
              efficiency.
            </p>

            {(needsReadMore["bed-reservation"] ||
              expandedDescriptions["bed-reservation"]) && (
              <button
                onClick={() => toggleDescription("bed-reservation")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none mb-4"
              >
                {expandedDescriptions["bed-reservation"]
                  ? "Read Less"
                  : "Read More"}
              </button>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                C#
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Entity Framework
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Drag-and-Drop
              </span>
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm flex items-center">
                <FaCode className="mr-2" /> Private Repository
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
