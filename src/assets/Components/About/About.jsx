import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import avatar from "../../7358602-removebg-preview.png";
import TextChange from "../TextChange";
import { 
  FaReact, 
  FaNodeJs, 
  FaCode, 
  FaLaptopCode, 
  FaArrowRight, 
  FaGithub, 
  FaLinkedin,
  FaDatabase // Added as replacement for Entity Framework
} from "react-icons/fa";
import { SiTypescript, SiCsharp, SiDotnet } from "react-icons/si"; // Removed SiEntityframework, added SiDotnet

const About = () => {
  const navigate = useNavigate();
  const [animatedElements, setAnimatedElements] = useState({});
  
  useEffect(() => {
    // Initialize all elements as visible for initial animation
    const elements = document.querySelectorAll('.animate-on-scroll');
    const initialState = {};
    
    elements.forEach((el, index) => {
      initialState[`element-${index}`] = false;
      
      // Set a timeout to animate elements sequentially on first load
      setTimeout(() => {
        setAnimatedElements(prev => ({
          ...prev,
          [`element-${index}`]: true
        }));
      }, 300 + (index * 150));
    });
    
    setAnimatedElements(initialState);
    
    // Add scroll listener for elements that come into view later
    const handleScroll = () => {
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          setAnimatedElements(prev => ({
            ...prev,
            [`element-${index}`]: true
          }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="About"
      className="text-white min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24"
    >
      {/* Hero Section with animated text and profile */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 pt-4 md:pt-10">
          {/* Left side with text */}
          <div className="md:w-7/12 space-y-6 animate-on-scroll" id="element-0">
            <div className={`transition-all duration-1000 ease-out ${animatedElements['element-0'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="mb-4">
                <TextChange />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Full Stack Developer, Data Analyst & UI/UX Expert
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                With a solid foundation in both <span className="text-blue-400 font-medium">frontend</span> and <span className="text-blue-400 font-medium">backend</span> development, 
                I focus on crafting dynamic and scalable web applications. Let's work together to bring your ideas to life!
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 flex items-center">
                  <FaReact className="mr-1" />
                  React
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 flex items-center">
                  <SiTypescript className="mr-1" />
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 flex items-center">
                  <FaNodeJs className="mr-1" />
                  Node.js
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 flex items-center">
                  <SiCsharp className="mr-1" />
                  C#
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 flex items-center">
                  <SiDotnet className="mr-1" /> {/* Replaced SiEntityframework with SiDotnet */}
                  Entity Framework
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
                >
                  Contact Me
                  <FaArrowRight />
                </button>
                
                <button
                  onClick={() => navigate("/portfolio")}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-800 text-white font-medium rounded-full border border-gray-600 hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  View Portfolio
                  <FaArrowRight />
                </button>
              </div>
              
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://github.com/Moosorkh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/irdmousa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side with avatar */}
          <div className="md:w-5/12 flex justify-center animate-on-scroll" id="element-1">
            <div className={`relative transition-all duration-1000 ease-out ${animatedElements['element-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                className="w-64 md:w-80 rounded-full border-4 border-gray-800 shadow-2xl relative z-10"
                src={avatar}
                alt="Profile Avatar"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* About Me Content Section */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll" id="element-2">
            <div className={`transition-all duration-1000 ease-out ${animatedElements['element-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                <FaCode className="mr-3 text-blue-400" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  About Me
                </span>
              </h2>
              
              <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-lg mb-10">
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  I'm a passionate full-stack developer with hands-on experience in building responsive and scalable web applications across diverse technology stacks. 
                  My work includes both frontend and backend development, with a focus on creating intuitive user experiences while solving complex technical challenges.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  A background in <strong className="text-blue-400">full-stack development</strong> ensures my ability to bridge the gap between beautiful design and robust functionality. 
                  Whether architecting scalable systems, optimizing performance, or creating seamless UI interactions, I aim to continually push boundaries and deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
          
          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="animate-on-scroll" id="element-3">
              <div className={`bg-gray-800/80 rounded-xl p-6 h-full transition-all duration-1000 ease-out ${animatedElements['element-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="p-3 bg-blue-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaLaptopCode className="text-blue-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
                <p className="text-gray-300 mb-4">
                  I've excelled in full-stack roles, swiftly clearing development backlogs and engineering advanced features. My experience includes:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Mobile-responsive map search with React</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Enhanced authentication systems with C#</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Interactive drag-and-drop interfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Database optimization with PostgreSQL</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="animate-on-scroll" id="element-4">
              <div className={`bg-gray-800/80 rounded-xl p-6 h-full transition-all duration-1000 ease-out ${animatedElements['element-4'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="p-3 bg-purple-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaReact className="text-purple-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">Development Approach</h3>
                <p className="text-gray-300 mb-4">
                  My work with React, C#, and PostgreSQL has not only enhanced user interaction but also system performance, demonstrating my capability to handle complex software solutions effectively.
                </p>
                <p className="text-gray-300">
                  I prioritize:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Clean, maintainable code architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Performance optimization and scalability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Intuitive user experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Modern, responsive design principles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="animate-on-scroll" id="element-5">
            <div className={`bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl shadow-lg text-center transition-all duration-1000 ease-out ${animatedElements['element-5'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-base md:text-lg mb-6">
                Feel free to explore my <Link to="/portfolio" className="text-blue-400 hover:underline">projects</Link> or reach out if collaboration sounds exciting!
              </p>
              <button
                className="py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;