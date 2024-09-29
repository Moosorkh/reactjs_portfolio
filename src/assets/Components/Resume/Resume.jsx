import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Resume = () => {
  return (
    <div
      id="resume"
      className="min-h-screen p-6 md:p-20 lg:p-24 text-white bg-gray-900"
    >
      {/* Resume Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center tracking-wide">
        Resume
      </h2>

      <div className="text-center mb-8">
        {/* Download Link */}
        <a
          href="/resume.pdf" // Ensure this path is correct and the file is placed in the 'public' folder
          download="Mehdi_Azar_Technical_Resume.pdf" // Suggest a download name for the file
          className="inline-block px-8 py-4 bg-teal-500 text-white rounded-full text-lg font-semibold hover:bg-teal-400 transition-all duration-300"
        >
          Download Resume
          <IoArrowForward className="inline ml-2" />
        </a>
      </div>

      <div className="md:flex flex-col items-center justify-center mx-0 md:mx-10 lg:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 bg-black shadow-xl">
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-around gap-12">
          {/* Career Summary and Technical Skills */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Career Summary
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              A software development bootcamp graduate skilled in{" "}
              <strong>full-stack web development</strong> with hands-on
              experience in building <strong>responsive</strong> and{" "}
              <strong>scalable web applications</strong>. Proficient in modern
              technologies such as{" "}
              <strong>JavaScript, TypeScript, React, Python</strong>, and{" "}
              <strong>Node.js</strong>. Strong understanding of databases (
              <strong>SQL, MongoDB</strong>) and full-stack application
              development using both the <strong>MERN</strong> and{" "}
              <strong>Python stack</strong>. Collaborative team player with
              experience in <strong>agile methodologies</strong>,{" "}
              <strong>version control</strong>, and{" "}
              <strong>CI/CD pipelines</strong>.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Technical Skills
            </h4>
            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-2">
              <li>
                <strong>Frontend:</strong> HTML5, CSS, JQuery, JavaScript,
                TypeScript, Bootstrap, SASS, TailwindCSS, ReactJS
              </li>
              <li>
                <strong>Backend:</strong> MySQL, Express, ReactJS, Node,
                Postgres, AWS, Webpack, NoSQL
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, Webpack, Firebase, AWS,
                Docker, GitHub Copilot, CI/CD Pipelines, LangChain (AI-powered
                tools)
              </li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Professional Experience
            </h3>

            <div className="mb-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                Frontend Developer
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Collaborated with cross-functional teams to design and implement
                front-end applications, ensuring responsiveness and adherence to
                design guidelines. Utilized React, JavaScript, and CSS for
                building user-friendly interfaces.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                Database Developer
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Managed database architecture and design for enterprise-level
                systems, focusing on optimization and scalability using SQL and
                NoSQL solutions like PostgreSQL and MongoDB.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                Backend Developer
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Developed and maintained backend services and APIs using Node.js
                and Express. Ensured smooth integration with databases and
                front-end services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
