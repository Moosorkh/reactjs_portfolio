import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCsharp, SiTypescript, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-primary transition-colors duration-300">
      <div className="container mx-auto pt-12 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              Mehdi's Portfolio
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Full-stack developer specializing in creating modern, responsive web applications 
              with React, TypeScript, C#, and other cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/Moosorkh" icon={<FaGithub size={18} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/irdmousa/" icon={<FaLinkedin size={18} />} label="LinkedIn" />
              <SocialLink href="mailto:Moosorkh@Gmail.com" icon={<FaEnvelope size={18} />} label="Email" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/">About Me</FooterLink>
              </li>
              <li>
                <FooterLink to="/portfolio">Portfolio</FooterLink>
              </li>
              <li>
                <FooterLink to="/resume">Resume</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge icon={<FaReact />} name="React" />
              <SkillBadge icon={<SiTypescript />} name="TypeScript" />
              <SkillBadge icon={<FaNodeJs />} name="Node.js" />
              <SkillBadge icon={<SiCsharp />} name="C#" />
              <SkillBadge icon={<FaCode />} name="ASP.NET" />
              <SkillBadge icon={<SiTailwindcss />} name="TailwindCSS" />
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border-primary to-transparent my-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
          <p>&copy; {currentYear} Mehdi. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-error">♥</span> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-bg-tertiary p-2 rounded-full hover:bg-bg-elevated transition-colors duration-300 text-text-secondary hover:text-primary"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-text-secondary hover:text-primary transition-colors duration-300 inline-block"
  >
    {children}
  </Link>
);

const SkillBadge = ({ icon, name }) => (
  <div className="bg-bg-tertiary px-3 py-1 rounded-full flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors">
    <span className="text-blue-400">{icon}</span>
    <span>{name}</span>
  </div>
);

export default Footer;