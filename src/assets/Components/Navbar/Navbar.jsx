import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const location = useLocation();

  // Check if the current path matches the destination
  const isCurrentPath = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white px-10 py-4 md:px-20 shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wider">
        <Link to="/" className="hover:text-blue-400">
          Mehdi's Portfolio
        </Link>
      </div>

      {/* Menu Items for Larger Screens */}
      <ul className="hidden md:flex space-x-8 text-lg font-semibold">
        <li
          className={`${
            isCurrentPath("/")
              ? "text-blue-400 cursor-default"
              : "hover:text-blue-400"
          } transition-all duration-300`}
        >
          {isCurrentPath("/") ? (
            <span>About Me</span>
          ) : (
            <Link to="/">About Me</Link>
          )}
        </li>
        <li
          className={`${
            isCurrentPath("/portfolio")
              ? "text-blue-400 cursor-default"
              : "hover:text-blue-400"
          } transition-all duration-300`}
        >
          {isCurrentPath("/portfolio") ? (
            <span>Portfolio</span>
          ) : (
            <Link to="/portfolio">Portfolio</Link>
          )}
        </li>
        <li
          className={`${
            isCurrentPath("/resume")
              ? "text-blue-400 cursor-default"
              : "hover:text-blue-400"
          } transition-all duration-300`}
        >
          {isCurrentPath("/resume") ? (
            <span>Resume</span>
          ) : (
            <Link to="/resume">Resume</Link>
          )}
        </li>
        <li
          className={`${
            isCurrentPath("/contact")
              ? "text-blue-400 cursor-default"
              : "hover:text-blue-400"
          } transition-all duration-300`}
        >
          {isCurrentPath("/contact") ? (
            <span>Contact</span>
          ) : (
            <Link to="/contact">Contact</Link>
          )}
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => openMenu(!menu)}>
          {menu ? (
            <RiCloseLine
              size={30}
              className="hover:text-blue-400 transition-all duration-300"
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="hover:text-blue-400 transition-all duration-300"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menu && (
        <ul className="absolute top-16 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white text-center py-6 space-y-4 text-xl shadow-lg md:hidden">
          <li
            className={`${
              isCurrentPath("/")
                ? "text-blue-400 cursor-default"
                : "hover:text-blue-400"
            } transition-all duration-300`}
          >
            {isCurrentPath("/") ? (
              <span onClick={() => openMenu(false)}>About Me</span>
            ) : (
              <Link to="/" onClick={() => openMenu(false)}>
                About Me
              </Link>
            )}
          </li>
          <li
            className={`${
              isCurrentPath("/portfolio")
                ? "text-blue-400 cursor-default"
                : "hover:text-blue-400"
            } transition-all duration-300`}
          >
            {isCurrentPath("/portfolio") ? (
              <span onClick={() => openMenu(false)}>Portfolio</span>
            ) : (
              <Link to="/portfolio" onClick={() => openMenu(false)}>
                Portfolio
              </Link>
            )}
          </li>
          <li
            className={`${
              isCurrentPath("/resume")
                ? "text-blue-400 cursor-default"
                : "hover:text-blue-400"
            } transition-all duration-300`}
          >
            {isCurrentPath("/resume") ? (
              <span onClick={() => openMenu(false)}>Resume</span>
            ) : (
              <Link to="/resume" onClick={() => openMenu(false)}>
                Resume
              </Link>
            )}
          </li>
          <li
            className={`${
              isCurrentPath("/contact")
                ? "text-blue-400 cursor-default"
                : "hover:text-blue-400"
            } transition-all duration-300`}
          >
            {isCurrentPath("/contact") ? (
              <span onClick={() => openMenu(false)}>Contact</span>
            ) : (
              <Link to="/contact" onClick={() => openMenu(false)}>
                Contact
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
