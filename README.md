## Introduction

**Portfolio Website** is a responsive web application built with React and TailwindCSS to showcase a personal portfolio. It features various sections such as About Me, Portfolio, Resume, and Contact, highlighting my professional background, skills, and projects. This project serves as a platform to present my skills in full-stack development, including frontend and backend technologies, as well as my experience in building scalable and responsive web applications.

## Features

- **About Me**: An introduction section that provides an overview of who I am and what I do, featuring dynamic text animation.
- **Portfolio**: A section showcasing my skills through a visual display of tech stack icons and a list of projects, including details and links to repositories and live demos.
- **Resume**: An organized summary of my professional experience and technical skills, presented in a clean and readable format.
- **Contact**: A fully functional contact form with validation for required fields and email format, as well as direct contact information.
- **Responsive Design**: The entire website is fully responsive, providing an optimal viewing experience across devices from mobile to desktop.
- **Smooth Page Transitions**: Transitions between pages are enhanced with smooth animations for a polished user experience.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:yourusername/portfolio-website.git
   cd portfolio-website

2. **Install Dependencies:**:

   ```bash
   npm install

3. **Run the Application:**:

   ```bash
   npm start

## Code Overview

### 1. Navbar with Dynamic Links
```jsx
import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const location = useLocation();

  const isCurrentPath = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white z-50">
      <div className="flex justify-between items-center px-10 py-4 md:px-20">
        <Link to="/" className="text-2xl font-bold">
          Mehdi's Portfolio
        </Link>
        <div className="md:hidden">
          <button onClick={() => openMenu(!menu)}>
            {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
          </button>
        </div>
        <ul className={`md:flex space-x-8 hidden`}>
          <li>{isCurrentPath("/") ? "About Me" : <Link to="/">About Me</Link>}</li>
          <li>{isCurrentPath("/portfolio") ? "Portfolio" : <Link to="/portfolio">Portfolio</Link>}</li>
          <li>{isCurrentPath("/resume") ? "Resume" : <Link to="/resume">Resume</Link>}</li>
          <li>{isCurrentPath("/contact") ? "Contact" : <Link to="/contact">Contact</Link>}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
```
### 2. Contact Page with Form Validation
```jsx
import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // handle form submission
    }
  };

  return (
    <div id="Contact" className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-600 to-blue-800 text-white p-10 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-6xl font-bold mb-6">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mb-10">Feel Free To reach out!</h3>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center"><FaEnvelope size={40} /><p className="mt-2">myemail@gmail.com</p></div>
          <div className="text-center"><FaPhoneAlt size={40} /><p className="mt-2">+123 456 789</p></div>
          <div className="text-center"><FaLinkedin size={40} /><p className="mt-2">LinkedIn</p></div>
          <div className="text-center"><FaGithub size={40} /><p className="mt-2">GitHub</p></div>
        </div>
      </div>
      <form className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {formErrors.name && <p className="text-red-500 text-xs mt-2">{formErrors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <p className="text-red-500 text-xs mt-2">{formErrors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded" type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
          {formErrors.subject && <p className="text-red-500 text-xs mt-2">{formErrors.subject}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 text-gray-700 border rounded" id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
          {formErrors.message && <p className="text-red-500 text-xs mt-2">{formErrors.message}</p>}
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-105" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
```

### 3. Animated About Page (About.jsx)
```jsx
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
```
## 4. Skills and Project Showcase (Portfolio.jsx)
```jsx
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
        {/* Project 1 - AdoptPaws */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            AdoptPaws
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            AdoptPaws is a frontend E-commerce website for a pet adoption center
            that includes a simple shopping cart feature.
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-400">
            <li>
              Built a responsive E-commerce web application using HTML, CSS, and
              JavaScript.
            </li>
            <li>Implemented cart functionality stored in localStorage.</li>
            <li>
              Integrated cart persistence across page reloads using JavaScript.
            </li>
            <li>Tools/Languages: HTML5, CSS3, JavaScript, LocalStorage</li>
          </ul>
          <div className="mt-3">
            <a href="#" className="text-blue-400">
              Repo
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-400">
              Deployed (With Vercel)
            </a>
          </div>
        </div>

        {/* Project 2 - VehicleVanguard */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
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
            <li>Promoted user interaction through a dynamic set of options.</li>
            <li>Tools/Languages: TypeScript</li>
          </ul>
          <div className="mt-3">
            <a href="#" className="text-blue-400">
              Repo
            </a>
          </div>
        </div>

        {/* Project 3 - Personal Portfolio */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
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
              Integrates with GitHub for showcasing repositories and deployment
              using Netlify.
            </li>
            <li>Tools/Languages: React, TailwindCSS, GitHub, Netlify</li>
          </ul>
          <div className="mt-3">
            <a href="#" className="text-blue-400">
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
  );
};

export default Portfolio;
```
## 5.Resume Page with Professional Experience (Resume.jsx)
```jsx
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Resume = () => {
  return (
    <div
      id="resume"
      className="min-h-screen p-6 md:p-10 lg:p-24 text-white bg-gray-900"
    >
      {/* Resume Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center tracking-wide">
        Resume
      </h2>

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
```

## Technologies Used
- Frontend: ReactJS, TailwindCSS
- Deployment: Netlify
- Version Control: Git, GitHub
- Icons: Remix Icon, FontAwesome

## Projects Featured
1. Personal Portfolio: A React-based portfolio showcasing my skills, projects, and professional experience.
2. AdoptPaws: An E-commerce web application for a pet adoption center built with HTML, CSS, and JavaScript.
3. VehicleVanguard: A command-line vehicle management system built with TypeScript.

## GitHub Repository
[GitHub](https://github.com/ironcodingofficial/portfolio-website.git)

## Deployed link
[Portfolio](https://react-portfolio-tailwind-css.netlify.app/)