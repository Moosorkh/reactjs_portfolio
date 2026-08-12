import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiCsharp, SiTypescript, SiTailwindcss, SiLaravel } from "react-icons/si";
import { scrollToSection } from "../../../utils/scroll";

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
              Senior full-stack engineer with 14+ years building and modernizing production
              platforms across frontend, backend, cloud delivery, technical SEO, and quality engineering.
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
                <FooterLink id="about">About Me</FooterLink>
              </li>
              <li>
                <FooterLink id="portfolio">Portfolio</FooterLink>
              </li>
              <li>
                <FooterLink id="contact">Contact</FooterLink>
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
              <SkillBadge icon={<SiLaravel />} name="Laravel" />
              <SkillBadge icon={<FaPhp />} name="PHP" />
              <SkillBadge icon={<SiCsharp />} name="C#" />
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

const FooterLink = ({ id, children }) => (
  <button
    onClick={() => scrollToSection(id)}
    className="text-text-secondary hover:text-primary transition-colors duration-300 inline-block"
  >
    {children}
  </button>
);

const SkillBadge = ({ icon, name }) => (
  <div className="bg-bg-tertiary px-3 py-1 rounded-full flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors">
    <span className="text-blue-400">{icon}</span>
    <span>{name}</span>
  </div>
);

export default Footer;
