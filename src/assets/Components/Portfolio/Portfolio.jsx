import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaAmazon,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Portfolio</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* HTML5 */}
          <span className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out">
            <FaHtml5
              color="#E34F26"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              HTML5
            </span>
          </span>

          {/* CSS3 */}
          <span className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out">
            <FaCss3
              color="#1572B6"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              CSS3
            </span>
          </span>

          {/* React */}
          <span className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out">
            <FaReact
              color="#61DAFB"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              ReactJS
            </span>
          </span>

          {/* JavaScript */}
          <span className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out">
            <FaJs
              color="#F7DF1E"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              JavaScript
            </span>
          </span>

          {/* Figma */}
          <span className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out">
            <FaFigma
              color="#F24E1E"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Figma
            </span>
          </span>

          {/* MongoDB */}
          <span className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out">
            <SiMongodb
              color="#47A248"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              MongoDB
            </span>
          </span>

          {/* Redis */}
          <span
            className="relative group hover:bg-white p-2 rounded-xl transition-all duration-300 ease-in-out"
            style={{ padding: "0.5px" }}
          >
            <DiRedis
              color="#FF4438"
              size={75}
              className="group-hover:scale-100 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Redis
            </span>
          </span>

          {/* GitHub */}
          <span className="relative group p-2 bg-white rounded-full hover:bg-purple-200 transition-all duration-300 ease-in-out">
            <FaGithub
              color="#181717"
              size={50}
              className="group-hover:scale-110 group-hover:text-black"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity p-2">
              GitHub
            </span>
          </span>
        </div>

        {/* Work Experience */}
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

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
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

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
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
