// src/assets/Components/Footer/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171d32] text-white py-6 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
          <a href="mailto:youremail@gmail.com">
            <FaEnvelope size={25} />
          </a>
        </div>
        <p className="text-sm">&copy; 2024 Mehdi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
