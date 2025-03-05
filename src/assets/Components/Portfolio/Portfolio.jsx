import React, { useState, useEffect } from "react";
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
  FaRoute,
  FaDatabase,
  FaExternalLinkAlt,
  FaCode
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
} from "react-icons/si";
// Importing project image
import AdoptPawsImage from "../../AdoptPaws.png";
import VehicleVanguardImage from "../../VehicleVanguard.png";
import PersonalPortfolioImage from "../../portfolio_image.png";
import WeatherDashboardImage from "../../weatherdashboard.png";
import KanbanBoard from "../../KanbanBoard.png";
import MapListToggleImage from '../../../assets/MapListToggleImage.png';

const Portfolio = () => {
  const [animatedSections, setAnimatedSections] = useState({
    header: false,
    technologies: false,
    projectsTitle: false,
    projects: false
  });

  // Animation on page load
  useEffect(() => {
    // Animate sections sequentially
    const sections = ['header', 'technologies', 'projectsTitle', 'projects'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setAnimatedSections(prev => ({
          ...prev,
          [section]: true
        }));
      }, 300 + (index * 300)); // Stagger the animations
    });
  }, []);

  return (
    <div
      id="Portfolio"
      className="min-h-screen p-10 md:p-24 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Header with animation */}
      <h1 
        className={`text-2xl md:text-4xl text-white font-bold mb-12 text-center transition-all duration-700 transform ${
          animatedSections.header ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Portfolio
      </h1>

      {/* Technology Stack Section with animation */}
      <div 
        className={`flex flex-wrap items-center justify-center gap-6 mb-12 transition-all duration-1000 transform ${
          animatedSections.technologies ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
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
            <h3 className="text-xl text-white mb-4 text-center">Databases & ORMs</h3>
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
            <h3 className="text-xl text-white mb-4 text-center">DevOps & Tools</h3>
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
                <SiCypress color="#17202C" size={50} />
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
          animatedSections.projectsTitle ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        Projects
      </h2>

      {/* Projects Grid with animation */}
      <div 
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center transition-all duration-700 transform ${
          animatedSections.projects ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
        }`}
      >
        {/* Project 1 - Featured Project */}
        <div className="md:col-span-2 lg:col-span-2 bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img
                src={MapListToggleImage}
                alt="Map List Toggle"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Mobile-responsive Map Search
              </h3>
              <p className="text-gray-300 mb-4">
                An interactive React application that toggles between a map view and a list view, 
                showcasing various locations with advanced filtering capabilities and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">React</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">JavaScript</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Leaflet</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">CSS</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Responsive Design</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Moosorkh/map-list-toggle.git"
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://map-list-toggle.vercel.app/"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - Enhanced Authentication System */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <div className="h-48 flex items-center justify-center mb-4 bg-gray-700 rounded-lg overflow-hidden">
            <div className="text-center p-6">
              {/* Updated icon with no background */}
              <div className="mb-4">
                <SiCsharp color="#239120" size={60} className="mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Enhanced Authentication System
              </h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Custom login features for web applications, including tailored messages and 
              notifications for new users, enhancing user engagement and security measures.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">C#</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">ASP.NET</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Entity Framework</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Authentication</span>
            </div>
          </div>
        </div>

        {/* Project 3 - Interactive Bed Reservation System */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <div className="h-48 flex items-center justify-center mb-4 bg-gray-700 rounded-lg overflow-hidden">
            <div className="text-center p-6">
              {/* Updated icon with no background */}
              <div className="mb-4">
                <FaReact color="#61DAFB" size={60} className="mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Interactive Bed Reservation
              </h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              A user-friendly drag-and-drop interface for bed reservations and swapping, 
              significantly improving user experience and operational efficiency.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">React</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">C#</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Entity Framework</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Drag-and-Drop</span>
            </div>
          </div>
        </div>

        {/* More Projects Coming Soon Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg md:col-span-2 lg:col-span-3">
          <div className="flex flex-col items-center justify-center py-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">More Projects Coming Soon</h3>
            
            {/* Animated Progress Indicator */}
            <div className="relative w-64 h-4 bg-gray-700 rounded-full mb-8 overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full animate-pulse" style={{width: '70%'}}></div>
            </div>
            
            {/* Animated Icons */}
            <div className="flex gap-8 mb-8">
              <div className="animate-bounce">
                <FaReact color="#61DAFB" size={40} />
              </div>
              <div className="animate-bounce" style={{animationDelay: '0.2s'}}>
                <SiCsharp color="#239120" size={40} />
              </div>
              <div className="animate-bounce" style={{animationDelay: '0.4s'}}>
                <SiDotnet color="#512BD4" size={40} />
              </div>
              <div className="animate-bounce" style={{animationDelay: '0.6s'}}>
                <FaDocker color="#2496ED" size={40} />
              </div>
            </div>
            
            <p className="text-gray-300 text-center max-w-2xl">
              I'm currently working on several exciting projects that showcase my full-stack development 
              skills with React, C#, Entity Framework, and more. Check back soon to see my latest work!
            </p>
          </div>
        </div>
        
        {/* Weather Dashboard - Keep one of the original projects */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <img
            src={WeatherDashboardImage}
            alt="Weather Dashboard"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Weather Dashboard
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              A web application enabling users to search and view current weather data 
              and a 5-day forecast for cities worldwide with local storage functionality.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">TypeScript</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">TailwindCSS</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">Express</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">API Integration</span>
            </div>
            <div className="mt-3">
              <a
                href="https://github.com/Moosorkh/Module-9-Challenge.git"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 w-fit"
              >
                <FaGithub /> GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;