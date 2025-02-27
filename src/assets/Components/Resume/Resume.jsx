import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Resume = () => {
  return (
    <div
      id="resume"
      className="min-h-screen p-6 md:p-20 lg:p-24 text-white bg-gray-900"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center tracking-wide">
        Resume
      </h2>

      <div className="text-center mb-8">
        <a
          href="/Mehdi_Azar_Technical_Resume.pdf"
          download="Mehdi_Azar_Technical_Resume.pdf"
          className="inline-block px-8 py-4 bg-teal-500 text-white rounded-full text-lg font-semibold hover:bg-teal-400 transition-all duration-300"
        >
          Download Resume
          <IoArrowForward className="inline ml-2" />
        </a>
      </div>

      <div className="md:flex flex-col items-center justify-center mx-0 md:mx-10 lg:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 bg-black shadow-xl">
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-around gap-12">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Career Summary
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              Innovative full-stack developer with extensive experience in building responsive and scalable web applications across diverse technology stacks. Proficient in advanced JavaScript frameworks and technologies, including React, TypeScript, and Node.js. Strong capability in utilizing C#, ASP.NET, and ReactNative for comprehensive backend-to-frontend integration. Highly skilled in managing and optimizing databases using Entity Framework, PostgreSQL, and other ORMs like Prisma and Sequelize. Expert in creating intuitive user interfaces and seamless user experiences using ReactJS, MUI, and Tailwind CSS.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Technical Skills
            </h4>
            <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed space-y-2">
              <li>
                <strong>Frontend:</strong> HTML5, CSS3, JavaScript, TypeScript, React, React Router, MUI, TailwindCSS, Bootstrap, SASS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, C#, ASP.NET, Entity Framework, PostgreSQL, MongoDB, AWS, Prisma, Sequelize, Mongoose
              </li>
              <li>
                <strong>DevOps/Tools:</strong> Git, GitHub, Docker, AWS, CI/CD Pipelines, Webpack, Firebase, Cypress
              </li>
              <li>
                <strong>AI/ML Tools:</strong> LangChain, GitHub Copilot
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Professional Experience
            </h3>

            <div className="mb-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                Full-Stack Developer
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Spearheaded the rapid clearance of development backlog, addressing all outstanding issues within the first month of tenure. Engineered a series of innovative features, including mobile-responsive map search, enhanced authentication systems, and interactive bed reservation systems. Led the design and implementation of more than a dozen UI improvements utilizing MUI, Tailwind CSS, and advanced ReactJS techniques.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                UI Tester
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Worked with developers to conduct UI testing using Playwright, improving efficiency by 40%. Utilized Agile methodology to identify and fix bugs, enhancing development speed and quality.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                Web Designer for SEO Company
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Designed and developed responsive SEO-optimized websites for small businesses, leading to a 25% increase in search engine rankings and a 30% boost in organic traffic. Integrated SQL databases and WordPress for dynamic website functionality.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                IT Specialist
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Provided comprehensive IT support, troubleshooting, and problem-solving across various software and hardware systems from 2008 to 2016.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
