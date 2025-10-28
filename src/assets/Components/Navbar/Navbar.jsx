import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Check if the current path matches the destination
  const isCurrentPath = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "py-3 bg-bg-secondary/95 backdrop-blur-md shadow-lg"
          : "py-5 bg-bg-secondary/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <Link
            to="/"
            className="relative text-2xl font-bold tracking-wider gradient-text transition-all duration-300"
          >
            Mehdi's Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <NavLink to="/" active={isCurrentPath("/")}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" active={isCurrentPath("/portfolio")}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" active={isCurrentPath("/resume")}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" active={isCurrentPath("/contact")}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-border-primary">
            <ThemeToggle />
            <a
              href="https://github.com/Moosorkh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/irdmousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <RiCloseLine size={28} className="transition-all duration-300" />
          ) : (
            <RiMenu2Line size={28} className="transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-bg-secondary/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[32rem] border-t border-border-primary" : "max-h-0"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <ul className="space-y-4 mb-6">
            <li>
              <MobileNavLink to="/" active={isCurrentPath("/")}>
                About Me
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="/portfolio" active={isCurrentPath("/portfolio")}>
                Portfolio
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="/resume" active={isCurrentPath("/resume")}>
                Resume
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="/contact" active={isCurrentPath("/contact")}>
                Contact
              </MobileNavLink>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-6 pt-4 border-t border-border-primary">
            <ThemeToggle />
            <a
              href="https://github.com/Moosorkh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/irdmousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, active, children }) => (
  <>
    {active ? (
      <span className="relative py-2 text-primary font-semibold cursor-default">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded"></span>
      </span>
    ) : (
      <Link
        to={to}
        className="relative py-2 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded transition-all duration-300 group-hover:w-full"></span>
      </Link>
    )}
  </>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, active, children }) => (
  <>
    {active ? (
      <span className="block py-2 px-4 text-primary font-semibold bg-primary/10 rounded-lg">
        {children}
      </span>
    ) : (
      <Link
        to={to}
        className="block py-2 px-4 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-lg transition-colors duration-300"
      >
        {children}
      </Link>
    )}
  </>
);

export default Navbar;