import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import avatar from "../../7358602-removebg-preview.png";
import TextChange from "../TextChange";
import { FaReact, FaNodeJs, FaCode, FaLaptopCode, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiCsharp, SiDotnet } from "react-icons/si";

const skills = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiCsharp />, label: "C#" },
  { icon: <SiDotnet />, label: "Entity Framework" },
];

const experience = [
  "Mobile-responsive map search with React",
  "Enhanced authentication systems with C#",
  "Interactive drag-and-drop interfaces",
  "Database optimization with PostgreSQL",
];

const approach = [
  "Clean, maintainable code architecture",
  "Performance optimization and scalability",
  "Intuitive user experiences",
  "Modern, responsive design principles",
];

const About = () => {
  const navigate = useNavigate();
  const [animatedElements, setAnimatedElements] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedElements(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const AnimatedWrapper = ({ id, children }) => (
    <div
      id={id}
      className={`animate-on-scroll transition-all duration-1000 ease-out ${animatedElements[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {children}
    </div>
  );

  return (
    <div id="About" className="text-white min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 pt-4 md:pt-10">
          <div className="md:w-7/12 space-y-6">
            <AnimatedWrapper id="hero-text">
              <TextChange />
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Full Stack Developer
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I transform ambitious ideas into high-performance applications, blending beautiful design with robust functionality.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 flex items-center">
                    {skill.icon} <span className="ml-1">{skill.label}</span>
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link to="/contact" className="button-primary">
                  Contact Me <FaArrowRight />
                </Link>
                <Link to="/portfolio" className="button-secondary">
                  View Portfolio <FaArrowRight />
                </Link>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/Moosorkh" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="icon-button">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/irdmousa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="icon-button">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </AnimatedWrapper>
          </div>
          <div className="md:w-5/12 flex justify-center">
            <AnimatedWrapper id="avatar">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img className="w-64 md:w-80 rounded-full border-4 border-gray-800 shadow-2xl relative z-10" src={avatar} alt="Mousa's Profile Picture" />
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 md:px-12 py-16">
        <AnimatedWrapper id="about">
          <h2 className="section-title"><FaCode className="text-blue-400 mr-2" /> About Me</h2>
          <div className="card">
            <p className="text-base md:text-lg leading-relaxed">
              I'm a passionate full-stack developer with a background in creating responsive, scalable web systems. Recently, I optimized a complex database-driven platform, improving load speeds by 40%.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedWrapper id="experience">
            <div className="card">
              <h3 className="card-title"><FaLaptopCode className="text-blue-400" /> Technical Expertise</h3>
              <ul className="list-disc pl-5 text-gray-300">
                {experience.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper id="approach">
            <div className="card">
              <h3 className="card-title"><FaReact className="text-purple-400" /> Development Approach</h3>
              <ul className="list-disc pl-5 text-gray-300">
                {approach.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper id="contact">
          <div className="cta">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Let's Collaborate</h3>
            <p className="text-base md:text-lg mb-6">
              Browse my <Link to="/portfolio" className="text-blue-400 hover:underline">portfolio</Link> or <Link to="/contact" className="text-blue-400 hover:underline">get in touch</Link> to discuss your next project!
            </p>
            <Link to="/contact" className="button-primary">Get In Touch</Link>
          </div>
        </AnimatedWrapper>
      </section>
    </div>
  );
};

export default About;
