import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "py-2 bg-bg-secondary/95 backdrop-blur-2xl shadow-xl border-b border-border-primary/50"
          : "py-4 bg-gradient-to-b from-bg-secondary/80 to-bg-secondary/50 backdrop-blur-lg"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Premium Logo with enhanced glow effect */}
        <div className="relative group flex-shrink-0">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
          <Link
            to="/"
            className="relative flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden sm:inline text-lg md:text-xl font-bold tracking-tight gradient-text">
              Mehdi's Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Menu with enhanced styling */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex space-x-1 text-sm font-medium bg-bg-tertiary/40 rounded-full px-3 py-2 border border-border-primary/40 backdrop-blur-sm hover:border-border-primary/60 transition-colors">
            <li>
              <NavLink to="/" active={isCurrentPath("/")}>
                About
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

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="flex gap-2">
              <a
                href="https://github.com/Moosorkh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-primary/40 hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
                title="Visit GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/irdmousa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-primary/40 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
                title="Visit LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button with animation */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-all duration-300"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseLine size={28} className="transition-transform duration-300 rotate-90" />
            ) : (
              <RiMenu2Line size={28} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth transitions */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-bg-secondary/98 backdrop-blur-2xl overflow-hidden transition-all duration-300 ease-in-out border-t border-border-primary/40 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <ul className="space-y-3 mb-8">
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

          <div className="flex justify-center items-center gap-6 pt-6 border-t border-border-primary/30">
            <a
              href="https://github.com/Moosorkh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
              title="Visit GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/irdmousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
              title="Visit LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Modern Desktop NavLink Component
const NavLink = ({ to, active, children }) => (
  <>
    {active ? (
      <span className="relative px-4 py-2 text-text-primary font-semibold cursor-default bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full border border-primary/40 shadow-md">
        {children}
      </span>
    ) : (
      <Link
        to={to}
        className="relative px-4 py-2 text-text-secondary hover:text-text-primary transition-all duration-300 group rounded-full hover:bg-bg-elevated/50 border border-transparent hover:border-primary/20 overflow-hidden"
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Link>
    )}
  </>
);

// Enhanced Mobile NavLink Component
const MobileNavLink = ({ to, active, children }) => (
  <>
    {active ? (
      <span className="block py-3 px-5 text-text-primary font-semibold bg-gradient-to-r from-primary/15 to-secondary/15 rounded-xl border-l-4 border-primary shadow-md">
        {children}
      </span>
    ) : (
      <Link
        to={to}
        className="block py-3 px-5 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/40 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-primary/40 group"
      >
        <span className="flex items-center justify-between">
          <span>{children}</span>
          <FaArrowRight className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" size={14} />
        </span>
      </Link>
    )}
  </>
);

export default Navbar;