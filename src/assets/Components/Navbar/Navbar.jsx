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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "py-2 bg-bg-secondary/98 backdrop-blur-xl shadow-2xl border-b border-border-primary"
          : "py-4 bg-bg-secondary/70 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Premium Logo with glow effect */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
          <Link
            to="/"
            className="relative flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight gradient-text">
              Mehdi Irdmousa
            </span>
          </Link>
        </div>

        {/* Desktop Menu with modern styling */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex space-x-1 text-sm font-medium bg-bg-tertiary/50 rounded-full px-2 py-1 border border-border-primary">
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="flex gap-1">
              <a
                href="https://github.com/Moosorkh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary border border-border-primary hover:bg-bg-elevated hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/irdmousa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-bg-tertiary border border-border-primary hover:bg-bg-elevated hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
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

// Modern Desktop NavLink Component
const NavLink = ({ to, active, children }) => (
  <>
    {active ? (
      <span className="relative px-4 py-2 text-text-primary font-semibold cursor-default bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
        {children}
      </span>
    ) : (
      <Link
        to={to}
        className="relative px-4 py-2 text-text-secondary hover:text-text-primary transition-all duration-300 group rounded-full hover:bg-bg-elevated"
      >
        {children}
      </Link>
    )}
  </>
);

// Enhanced Mobile NavLink Component
const MobileNavLink = ({ to, active, children }) => (
  <>
    {active ? (
      <span className="block py-3 px-5 text-text-primary font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-l-4 border-primary">
        {children}
      </span>
    ) : (
      <Link
        to={to}
        className="block py-3 px-5 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-xl transition-all duration-300 hover:border-l-4 hover:border-primary/50"
      >
        {children}
      </Link>
    )}
  </>
);

export default Navbar;