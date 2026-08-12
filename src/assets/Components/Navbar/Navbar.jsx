/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaCode, FaEnvelope, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { scrollToSection } from "../../../utils/scroll";
import avatar from "../../7358602-removebg-preview.png";
import "./Navbar.css";

const SECTIONS = [
  { id: "about", label: "about.tsx", icon: FaReact, color: "text-[#61dafb]" },
  { id: "skills", label: "skills.tsx", icon: FaCode, color: "text-accent" },
  { id: "portfolio", label: "projects.tsx", icon: FaFolderOpen, color: "text-highlight" },
  { id: "contact", label: "contact.tsx", icon: FaEnvelope, color: "text-secondary" },
];

const Navbar = ({ ready = true, onOpenContact }) => {
  const headerRef = useRef(null);
  const closeDialogRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [closeDialogOpen, setCloseDialogOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement || document.webkitFullscreenElement));
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    document.addEventListener("webkitfullscreenchange", syncFullscreenState);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
      document.removeEventListener("webkitfullscreenchange", syncFullscreenState);
    };
  }, []);

  useEffect(() => {
    if (!closeDialogOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setCloseDialogOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    closeDialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [closeDialogOpen]);

  const toggleFullscreen = async () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

    try {
      if (fullscreenElement) {
        const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;
        await exitFullscreen?.call(document);
        return;
      }

      const page = document.documentElement;
      const requestFullscreen = page.requestFullscreen || page.webkitRequestFullscreen;
      await requestFullscreen?.call(page);
    } catch {
      // Browsers can reject fullscreen when permissions or embedding rules disallow it.
    }
  };

  const leavePortfolio = () => {
    setCloseDialogOpen(false);
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.assign("/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Expose the header's real height so sections can offset by the exact
  // amount instead of a guessed padding value (which drifts across breakpoints).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setHeightVar = () => {
      document.documentElement.style.setProperty("--header-height", `${el.offsetHeight}px`);
    };

    setHeightVar();
    const observer = new ResizeObserver(setHeightVar);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-spy: highlight the tab for the section currently in view
  useEffect(() => {
    const sectionEls = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 bg-[#1e1e2e] font-mono transition-all duration-700 ease-out ${
        scrolled ? "shadow-2xl" : ""
      } ${ready ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 bg-[#252537] px-4 md:px-6 py-2 border-b border-white/10">
        <div className="window-controls" role="group" aria-label="Window controls">
          <button
            type="button"
            className="window-control window-control--close"
            onClick={() => setCloseDialogOpen(true)}
            aria-label="Close portfolio"
          >
            <span className="window-control__glyph" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="window-control window-control--minimize"
            onClick={onOpenContact}
            aria-label="Open contact section"
          >
            <span className="window-control__glyph" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`window-control window-control--fullscreen${isFullscreen ? " is-active" : ""}`}
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            aria-pressed={isFullscreen}
          >
            <span className="window-control__glyph window-control__glyph--fullscreen" aria-hidden="true" />
          </button>
        </div>

        <span className="hidden sm:block flex-1 text-center text-[11px] md:text-xs text-white/40 truncate">
          mehdi-azar — portfolio
        </span>
        <span className="sm:hidden flex-1" />

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/Moosorkh"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-1.5 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/irdmousa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-1.5 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={16} />
          </a>
          <div className="relative shrink-0">
            <img
              src={avatar}
              alt="Mehdi Azar"
              className="w-7 h-7 rounded-full object-cover border-2 border-white/20"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-success rounded-full border-2 border-[#252537]" />
          </div>
        </div>
      </div>

      {/* Tab strip */}
      <nav className="flex items-center bg-[#18181f] overflow-x-auto scrollbar-none">
        {SECTIONS.map(({ id, label, icon: Icon, color }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 px-4 md:px-5 py-2.5 text-xs md:text-sm whitespace-nowrap border-r border-white/10 border-t-2 transition-colors ${
                isActive
                  ? "bg-[#1e1e2e] text-white/90 border-t-primary"
                  : "text-white/40 border-t-transparent hover:text-white/70 hover:bg-white/[0.03]"
              }`}
            >
              <Icon className={isActive ? color : "text-white/30"} size={13} />
              {label}
            </button>
          );
        })}
      </nav>
    </header>
    {closeDialogOpen && createPortal(
      <div
        className="window-dialog-backdrop"
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setCloseDialogOpen(false);
        }}
      >
        <section
          className="window-dialog"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="window-dialog-title"
          aria-describedby="window-dialog-copy"
          data-lenis-prevent
        >
          <span className="window-dialog__eyebrow">Before you go</span>
          <h2 id="window-dialog-title">Do you wanna save your business before leaving?</h2>
          <p id="window-dialog-copy">
            Let&apos;s turn the idea into a reliable product before you close the window.
          </p>
          <div className="window-dialog__actions">
            <button ref={closeDialogRef} type="button" onClick={() => setCloseDialogOpen(false)}>
              <span>Yes, stay here</span>
              <span aria-hidden="true">→</span>
            </button>
            <button type="button" onClick={leavePortfolio}>
              <span>No, leave</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </section>
      </div>,
      document.body
    )}
    </>
  );
};

export default Navbar;
