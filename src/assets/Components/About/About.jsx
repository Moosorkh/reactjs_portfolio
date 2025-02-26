import React from "react";
import avatar from "../../7358602-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import TextChange from "../TextChange";
import { Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      id="About"
      className="text-white flex flex-col justify-between min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 shadow-xl"
    >
      {/* First Section from Home Component */}
      <div className="flex-grow">
        <p className="text-xl md:text-3xl font-bold leading-snug tracking-tighter mt-10">
          <TextChange />
        </p>

        <div className="md:flex w-full justify-center items-center md:px-20 mt-10">
          {/* Left section with description */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              I’m A Passionate Full Stack Developer.
            </h2>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              Let’s work together to bring ideas to life. Feel free to explore the
              <Link to="/portfolio"><strong>projects</strong></Link> section or reach out if collaboration sounds exciting!
            </p>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              With a solid foundation in both <strong>frontend</strong> and <strong>backend</strong> development, the focus is on crafting dynamic and scalable web applications. Hands-on experience includes working with technologies such as <strong>React</strong>, <strong>Node.js</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, and <strong>Python</strong>. The goal is always to create intuitive user experiences while solving complex technical challenges.
            </p>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              A background in <strong>full-stack development</strong> ensures the ability to bridge the gap between beautiful design and robust functionality. Whether architecting scalable systems, optimizing performance, or creating seamless UI interactions, the aim is to continually push boundaries and deliver exceptional results.
            </p>

            <p className="text-sm md:text-lg leading-relaxed mb-6">
              I've excelled in full-stack roles, swiftly clearing development backlogs and engineering advanced features such as a mobile-responsive map search and a drag-and-drop bed reservation system (just as an example). My work with React, C#, and PostgreSQL has not only enhanced user interaction but also system performance, demonstrating my capability to handle complex software solutions effectively.
            </p>

            <button
              className="mt-5 md:mt-10 text-white py-3 px-6 bg-[#607D8B] text-sm md:text-lg rounded-full hover:bg-[#FF8C00] transition-all duration-300 ease-in-out"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>

          {/* Right section with avatar */}
          <div className="md:w-1/2 flex justify-center p-6">
            <img
              className="w-64 md:w-80 rounded-full shadow-lg"
              src={avatar}
              alt="Avatar"
            />
          </div>
        </div>
      </div>

      {/* Bottom Margin to push the content up */}
      <div className="mt-auto mb-12" />
    </div>
  );
};

export default About;
