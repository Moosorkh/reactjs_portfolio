import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaAmazon,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaGoogle,
} from "react-icons/fa";
import { DiRedis, DiPostgresql } from "react-icons/di";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSequelize,
  SiPython,
} from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="min-h-screen p-10 md:p-24 bg-gray-900">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Portfolio</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
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

        {/* Experience Section */}
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Netflix</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Amazon</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
