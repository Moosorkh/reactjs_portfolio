import { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import "./ProjectsShowcase.css";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ease = (value) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};
const mix = (from, to, amount) => from + (to - from) * amount;
const PROJECT_ANIMATION_VIEWPORTS = 3.4;

const ProjectsGrid = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRefs = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!section || !cards.length) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 767px)");
    let animationFrame = 0;

    const render = () => {
      animationFrame = 0;

      if (reducedMotion.matches || compactLayout.matches) {
        cards.forEach((card) => card.style.removeProperty("transform"));
        titleRefs.current.filter(Boolean).forEach((title) => {
          title.style.removeProperty("transform");
          title.style.removeProperty("opacity");
        });
        section.style.setProperty("--projects-progress", "1");
        section.dataset.settled = "true";
        return;
      }

      const rect = section.getBoundingClientRect();
      // Keep the original animation pace while the extra section height below
      // becomes a true pinned rest after the grid has fully settled.
      const scrollDistance = Math.max(
        window.innerHeight * PROJECT_ANIMATION_VIEWPORTS,
        1
      );
      const rawProgress = clamp(-rect.top / scrollDistance);
      const rawTitleApproach =
        (window.innerHeight * 0.78 - rect.top) / (window.innerHeight * 0.48);
      const titleApproach = clamp(rawTitleApproach);

      const progress = clamp(rawProgress / 0.94);
      // Typography enters quickly, holds fully visible, then exits as the cards move.
      const prePinCardProgress =
        ease((rawTitleApproach - 1) / 0.45) * 0.04;
      const cardProgress = Math.max(
        prePinCardProgress,
        clamp(progress / 0.96)
      );
      const entrance = ease(cardProgress / 0.14);
      const settle = ease((cardProgress - 0.56) / 0.24);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cardWidth = clamp(width * 0.225, 230, 355);
      const cardHeight = cardWidth * 0.625;
      const columnGap = clamp(width * 0.018, 18, 32);
      const rowGap = clamp(height * 0.025, 16, 28);
      const columns = projects.length > 8 ? 3 : 4;
      const rows = Math.ceil(projects.length / columns);
      const orbitX = Math.min(width * 0.38, 610);
      const orbitY = Math.min(height * 0.23, 190);
      const titleEntry = ease(titleApproach);
      const titleExit = ease((progress - 0.33) / 0.52);
      const titleOpacity = 1;

      const titlePositions = [
        {
          from: -width * 0.82,
          hold: -width * 0.075,
          exit: width * 0.82,
          y: -height * 0.08,
        },
        {
          from: width * 0.82,
          hold: width * 0.075,
          exit: -width * 0.82,
          y: height * 0.105,
        },
      ];

      titleRefs.current.filter(Boolean).forEach((title, index) => {
        const position = titlePositions[index];
        const enteredX = mix(position.from, position.hold, titleEntry);
        title.style.opacity = String(titleOpacity);
        title.style.transform = `translate3d(${mix(enteredX, position.exit, titleExit)}px, ${position.y}px, 0)`;
      });

      cards.forEach((card, index) => {
        const angle =
          (index / cards.length) * Math.PI * 2 +
          cardProgress * Math.PI * 2.1 -
          Math.PI / 2;
        const depth = Math.cos(angle);
        const orbitPositionX = Math.sin(angle) * orbitX;
        const orbitPositionY = Math.cos(angle) * orbitY + (1 - entrance) * height * 0.62;
        const orbitPositionZ = depth * 520;
        const orbitScale = 0.64 + ((depth + 1) / 2) * 0.5;
        const orbitRotateY = -Math.sin(angle) * 42;
        const orbitRotateZ = Math.sin(angle) * 7;

        const column = index % columns;
        const row = Math.floor(index / columns);
        const gridPositionX =
          (column - (columns - 1) / 2) * (cardWidth + columnGap);
        const gridPositionY =
          (row - (rows - 1) / 2) * (cardHeight + rowGap) + 30;

        const x = mix(orbitPositionX, gridPositionX, settle);
        const y = mix(orbitPositionY, gridPositionY, settle);
        const z = mix(orbitPositionZ, 0, settle);
        const scale = mix(orbitScale, 1, settle);
        const rotateY = mix(orbitRotateY, 0, settle);
        const rotateZ = mix(orbitRotateZ, 0, settle);

        card.style.width = `${cardWidth}px`;
        card.style.height = `${cardHeight}px`;
        card.style.zIndex = String(Math.round((depth + 1) * 50));
        card.style.opacity = String(clamp(entrance * 1.2));
        card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
      });

      section.style.setProperty("--projects-progress", rawProgress.toFixed(4));
      section.dataset.settled = settle > 0.96 ? "true" : "false";
      if (progressRef.current) {
        progressRef.current.textContent = String(
          Math.min(projects.length, Math.max(1, Math.ceil(cardProgress * projects.length)))
        ).padStart(2, "0");
      }
    };

    const requestRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    reducedMotion.addEventListener?.("change", requestRender);
    compactLayout.addEventListener?.("change", requestRender);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      reducedMotion.removeEventListener?.("change", requestRender);
      compactLayout.removeEventListener?.("change", requestRender);
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects-showcase" aria-label="Selected projects">
      <div className="projects-showcase__stage">
        <div className="projects-showcase__backdrop" aria-hidden="true">
          <span ref={(node) => { titleRefs.current[0] = node; }}>PROJECTS</span>
          <span ref={(node) => { titleRefs.current[1] = node; }}>IN MOTION</span>
        </div>

        <div className="projects-showcase__eyebrow">
          <span>Selected work</span>
          <span><b ref={progressRef}>01</b> / {String(projects.length).padStart(2, "0")}</span>
        </div>

        <div className="projects-showcase__orbit">
          {projects.map((project, index) => {
            const destination = project.links?.liveDemo || project.links?.github;

            return (
              <article
                key={project.id}
                ref={(node) => { cardRefs.current[index] = node; }}
                className="projects-showcase__card"
              >
                <a
                  href={destination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-showcase__preview"
                  aria-label={`View ${project.title}`}
                >
                  <img src={project.image} alt="" />
                  <span className="projects-showcase__shade" />
                  <span className="projects-showcase__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="projects-showcase__title">{project.title}</span>
                  <span className="projects-showcase__open"><FaExternalLinkAlt /></span>
                </a>

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-showcase__github"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        <p className="projects-showcase__hint" aria-hidden="true">
          Scroll to explore <span>↓</span>
        </p>
      </div>
    </section>
  );
};

export default ProjectsGrid;
