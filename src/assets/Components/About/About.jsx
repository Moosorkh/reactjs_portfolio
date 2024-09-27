import React from "react";
import avatar from "../../7358602-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import TextChange from "../TextChange";

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
              With a solid foundation in both <strong>frontend</strong> and{" "}
              <strong>backend</strong> development, I specialize in crafting
              dynamic and scalable web applications. I have hands-on experience
              working with the latest technologies, including{" "}
              <strong>React</strong>, <strong>Node.js</strong>,{" "}
              <strong>JavaScript</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Python</strong>. I am driven by a deep passion for
              creating intuitive user experiences and solving complex technical
              problems.
            </p>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              My background in <strong>full-stack development</strong> empowers
              me to bridge the gap between beautiful design and robust
              functionality. Whether it's architecting scalable systems,
              optimizing performance, or crafting seamless UI interactions, I am
              always eager to push boundaries and deliver exceptional results.
            </p>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              Let's work together to bring your ideas to life. Feel free to
              check out my projects below or get in touch if you'd like to
              collaborate!
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
