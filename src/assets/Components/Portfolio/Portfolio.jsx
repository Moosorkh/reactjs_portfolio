import React from "react";
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
} from "react-icons/fa";
import { DiRedis, DiPostgresql } from "react-icons/di";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSequelize,
  SiPython,
} from "react-icons/si";
// Importing project image
import AdoptPawsImage from "../../AdoptPaws.png";
import VehicleVanguardImage from "../../VehicleVanguard.png";
import PersonalPortfolioImage from "../../portfolio_image.png";
import WeatherDashboardImage from "../../weatherdashboard.png";

const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="min-h-screen p-10 md:p-24 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-12 text-center">
        Portfolio
      </h1>

      {/* Technology Stack Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
        <div className="flex flex-wrap md:w-1/1 gap-8 md:p-12 py-10">
          {/* Example tech icons with consistent styling */}
          {/* HTML5 */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaHtml5 color="#E34F26" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              HTML5
            </span>
          </span>

          {/* CSS3 */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaCss3 color="#1572B6" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              CSS3
            </span>
          </span>

          {/* JavaScript */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaJs color="#F7DF1E" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              JavaScript
            </span>
          </span>

          {/* ReactJS */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaReact color="#61DAFB" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              ReactJS
            </span>
          </span>

          {/* Figma */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaFigma color="#F24E1E" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Figma
            </span>
          </span>

          {/* MongoDB */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <SiMongodb color="#47A248" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              MongoDB
            </span>
          </span>

          {/* Redis */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <DiRedis color="#FF4438" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Redis
            </span>
          </span>

          {/* GitHub */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaGithub color="#000" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </span>

          {/* Git */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaGitAlt color="#F05032" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Git
            </span>
          </span>

          {/* ExpressJS */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <SiExpress color="#000000" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              ExpressJS
            </span>
          </span>

          {/* NodeJS */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaNodeJs color="#339933" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              NodeJS
            </span>
          </span>

          {/* PostgreSQL */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <DiPostgresql color="#336791" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              PostgreSQL
            </span>
          </span>

          {/* TailwindCSS */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <SiTailwindcss color="#06B6D4" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              TailwindCSS
            </span>
          </span>

          {/* Python */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <SiPython color="#306998" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Python
            </span>
          </span>

          {/* Sequelize */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <SiSequelize color="#52B0E7" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Sequelize
            </span>
          </span>

          {/* Bootstrap */}
          <span className="relative group p-2 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110">
            <FaBootstrap color="#7952B3" size={50} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Bootstrap
            </span>
          </span>
        </div>
      </div>

      {/* Projects Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-16 text-center text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center">


        {/* Project 1 - Weather Dashboard */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <img
            src={WeatherDashboardImage}
            alt="Personal Portfolio"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Weather Dashboard
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              The Weather Dashboard is a web application enabling users to search and view current weather data and a 5-day forecast for cities worldwide. Users can store their search history locally, allowing quick access to previously searched cities.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-400">
              <li>Built with: TypeScript, TailwindCSS, and Express for a modern, full-stack approach</li>
              <li>Features Real-time weather data for searched cities</li>
              <li>
                5-day weather forecast display
              </li>
              <li>Persistent local storage of search history (local feature only)</li>
              <li>Tools/Languages: TypeScript, TailwindCSS, Express, OpenWeatherMap API</li>
              <li>Interactive UI with light/dark mode toggle and hover effects</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://github.com/Moosorkh/Module-9-Challenge.git"
                target="_blank"
                className="text-blue-400"
              >
                Repo
              </a>{" "}
              |{" "}
              <a href="https://module-9-challenge.onrender.com/" target="_blank" className="text-blue-400">
                Deployed (Render)
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - AdoptPaws */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <img
            src={AdoptPawsImage}
            alt="AdoptPaws"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              AdoptPaws
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              AdoptPaws is a frontend E-commerce website for a pet adoption
              center that includes a simple shopping cart feature.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-400">
              <li>
                Built a responsive E-commerce web application using HTML, CSS,
                and JavaScript.
              </li>
              <li>Implemented cart functionality stored in localStorage.</li>
              <li>
                Integrated cart persistence across page reloads using
                JavaScript.
              </li>
              <li>Tools/Languages: HTML5, CSS3, JavaScript, LocalStorage</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://github.com/Moosorkh/AdoptPaws.git"
                target="_blank"
                className="text-blue-400"
              >
                Repo
              </a>{" "}
              |{" "}
              <a
                href="https://adopt-paws.vercel.app/"
                target="_blank"
                className="text-blue-400"
              >
                Deployed (With Vercel)
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - VehicleVanguard */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <img
            src={VehicleVanguardImage}
            alt="VehicleVanguard"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              VehicleVanguard
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              VehicleVanguard is a command-line application that allows users to
              manage different types of vehicles.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-400">
              <li>
                Designed and implemented a vehicle management system using
                TypeScript.
              </li>
              <li>Led the integration of complex vehicle-specific actions.</li>
              <li>
                Promoted user interaction through a dynamic set of options.
              </li>
              <li>Tools/Languages: TypeScript</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://github.com/Moosorkh/vehiclevanguard.git"
                target="_blank"
                className="text-blue-400"
              >
                Repo
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - Personal Portfolio */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <img
            src={PersonalPortfolioImage}
            alt="Personal Portfolio"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Personal Portfolio
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              This personal portfolio was built using React and TailwindCSS. It
              showcases my projects, skills, and experience in a clean format.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-400">
              <li>Built using React and TailwindCSS for styling.</li>
              <li>Features responsive design and interactive hover effects.</li>
              <li>
                Integrates with GitHub for showcasing repositories and
                deployment using Netlify.
              </li>
              <li>Tools/Languages: React, TailwindCSS, GitHub, Netlify</li>
            </ul>
            <div className="mt-3">
              <a
                href="https://github.com/Moosorkh/reactjs_portfolio.git"
                className="text-blue-400"
              >
                Repo
              </a>{" "}
              |{" "}
              <a href="#" className="text-blue-400">
                Deployed (With Netlify)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;