import { useEffect, useRef, useState } from "react";
import {
  FaDatabase,
  FaLaptopCode,
  FaNodeJs,
  FaRobot,
  FaSearch,
  FaUniversalAccess,
} from "react-icons/fa";
import "./CapabilityShowcase.css";

const capabilities = [
  {
    title: "Frontend Mastery",
    icon: FaLaptopCode,
    color: "#4f8cff",
    description:
      "Building responsive, accessible interfaces with React, TypeScript, and modern CSS frameworks. Focus on performance and user experience.",
  },
  {
    title: "Backend Development",
    icon: FaNodeJs,
    color: "#7277f4",
    description:
      "Creating robust APIs and scalable server architectures with Node.js, C#, and .NET. Expert in database design and optimization.",
  },
  {
    title: "Database & DevOps",
    icon: FaDatabase,
    color: "#16c7bc",
    description:
      "PostgreSQL, MongoDB, Entity Framework. CI/CD pipelines, Docker, and cloud deployment with AWS and Azure.",
  },
  {
    title: "SEO & Digital Marketing",
    icon: FaSearch,
    color: "#f05a9d",
    description:
      "Technical SEO, content structure, analytics, and conversion-focused campaigns that improve visibility and turn qualified traffic into measurable growth.",
  },
  {
    title: "AI Automation",
    icon: FaRobot,
    color: "#f59e42",
    description:
      "Practical AI workflows, intelligent integrations, and automated processes that reduce repetitive work and connect business tools more effectively.",
  },
  {
    title: "Performance & Accessibility",
    icon: FaUniversalAccess,
    color: "#8dd957",
    description:
      "Fast, inclusive experiences built through Core Web Vitals optimization, semantic interfaces, resilient responsive behavior, and accessibility testing.",
  },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const PRE_REVEAL_HOLD_END = 0.075;
const APERTURE_REVEAL_END = 0.262;
const CONTENT_REVEAL_START = 0.234;
const CONTENT_REVEAL_END = 0.392;
const CARD_SCROLL_START = 0.466;
const CARD_SCROLL_END = 0.766;
const EXIT_START = 0.82;
const EXIT_END = 0.92;

const CapabilityShowcase = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const railRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const rail = railRef.current;
    const media = section?.querySelector(".capability-showcase__media");
    if (!section || !viewport || !rail) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopLayout = window.matchMedia(
      "(min-width: 901px) and (min-height: 781px)"
    );
    let frameId = null;

    const update = () => {
      frameId = null;

      if (reducedMotion.matches || !desktopLayout.matches) {
        section.style.setProperty("--aperture-half-width", "60%");
        section.style.setProperty("--aperture-half-height", "60%");
        section.style.setProperty("--aperture-chamfer", "0px");
        section.style.setProperty("--aperture-radius", "0px");
        section.style.setProperty("--aperture-light", "0");
        section.style.setProperty("--content-opacity", "1");
        section.style.setProperty("--exit-scale", "1");
        section.style.setProperty("--exit-opacity", "1");
        if (media) media.style.display = "block";
        rail.style.removeProperty("transform");
        cardRefs.current.forEach((card) => {
          card?.style.removeProperty("opacity");
          card?.style.removeProperty("--card-focus");
        });
        setActiveIndex(0);
        return;
      }

      const bounds = section.getBoundingClientRect();
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          )
        ) || 96;
      const stickyHeight = window.innerHeight - headerHeight;
      const scrollDistance = Math.max(section.offsetHeight - stickyHeight, 1);
      const progress = clamp((headerHeight - bounds.top) / scrollDistance, 0, 1);
      const revealProgress = clamp(
        (progress - PRE_REVEAL_HOLD_END) /
          (APERTURE_REVEAL_END - PRE_REVEAL_HOLD_END),
        0,
        1
      );
      const ignitionProgress = clamp(revealProgress / 0.12, 0, 1);
      const lineProgress = clamp((revealProgress - 0.1) / 0.4, 0, 1);
      const heightProgress = clamp((revealProgress - 0.44) / 0.56, 0, 1);
      const easedIgnition = 1 - Math.pow(1 - ignitionProgress, 3);
      const easedLine = 1 - Math.pow(1 - lineProgress, 3);
      const easedHeight = heightProgress * heightProgress * (3 - 2 * heightProgress);
      const ignitionRadius = easedIgnition * 7;
      const halfWidth = ignitionRadius + easedLine * (window.innerWidth * 0.6 - ignitionRadius);
      const lineHalfHeight = Math.max(2, ignitionRadius * (1 - easedLine * 0.72));
      const halfHeight = lineHalfHeight + easedHeight * (window.innerHeight * 0.6 - lineHalfHeight);
      const contentProgress = clamp(
        (progress - CONTENT_REVEAL_START) /
          (CONTENT_REVEAL_END - CONTENT_REVEAL_START),
        0,
        1
      );
      const easedContent =
        contentProgress * contentProgress * (3 - 2 * contentProgress);
      const cardProgress = clamp(
        (progress - CARD_SCROLL_START) /
          (CARD_SCROLL_END - CARD_SCROLL_START),
        0,
        1
      );
      const exitProgress = clamp(
        (progress - EXIT_START) / (EXIT_END - EXIT_START),
        0,
        1
      );
      const easedExit =
        exitProgress * exitProgress * (3 - 2 * exitProgress);
      const maxTravel = Math.max(rail.scrollHeight - viewport.clientHeight, 0);
      const position = cardProgress * (capabilities.length - 1);
      const nextIndex = clamp(Math.round(position), 0, capabilities.length - 1);
      const snappedProgress =
        capabilities.length > 1 ? nextIndex / (capabilities.length - 1) : 0;

      section.style.setProperty("--aperture-half-width", `${halfWidth}px`);
      section.style.setProperty("--aperture-half-height", `${halfHeight}px`);
      section.style.setProperty("--aperture-chamfer", `${easedHeight * 3.6}vw`);
      section.style.setProperty("--aperture-radius", `${(1 - easedHeight) * 999}px`);
      section.style.setProperty(
        "--aperture-light",
        String(Math.sin(revealProgress * Math.PI) * 0.42)
      );
      section.style.setProperty("--content-opacity", String(easedContent));
      section.style.setProperty("--exit-scale", String(1 - easedExit * 0.4));
      section.style.setProperty("--exit-opacity", String(1 - easedExit * 0.24));
      if (media) {
        media.style.display = contentProgress === 0 ? "none" : "block";
      }
      rail.style.transform = `translate3d(0, ${-snappedProgress * maxTravel}px, 0)`;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const focus = index === nextIndex ? 1 : 0;
        card.style.opacity = String(0.42 + focus * 0.58);
        card.style.setProperty("--card-focus", String(focus));
      });
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const requestUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    desktopLayout.addEventListener("change", requestUpdate);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      desktopLayout.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="capability-showcase"
      aria-labelledby="capability-showcase-title"
    >
      <div className="capability-showcase__sticky">
        <div className="capability-showcase__aperture-light" aria-hidden="true" />
        <div className="capability-showcase__media" aria-hidden="true">
          <video
            className="capability-showcase__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex="-1"
          >
            <source src="/coding-video.mp4" type="video/mp4" />
          </video>
          <div className="capability-showcase__video-shade" />
        </div>

        <div className="capability-showcase__inner">
          <header className="capability-showcase__heading">
            <span>Core Capabilities</span>
            <h2 id="capability-showcase-title" key={capabilities[activeIndex].title}>
              {capabilities[activeIndex].title}
            </h2>
          </header>

          <div ref={viewportRef} className="capability-showcase__viewport">
            <div ref={railRef} className="capability-showcase__rail">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <article
                    key={capability.title}
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    className="capability-showcase__card"
                    style={{ "--capability-color": capability.color }}
                  >
                    <div className="capability-showcase__card-surface">
                      <div className="capability-showcase__card-topline">
                        <span className="capability-showcase__icon"><Icon /></span>
                        <span>0{index + 1}</span>
                      </div>
                      <div>
                        <h3>{capability.title}</h3>
                        <p>{capability.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityShowcase;
