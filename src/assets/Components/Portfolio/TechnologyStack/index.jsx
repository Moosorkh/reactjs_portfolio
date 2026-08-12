import { useEffect, useRef } from "react";
import TechCategory from "./TechCategory";
import { techCategories } from "../data/techStack";
import AnimatedSection from "../AnimatedSection";
import "./TechnologyStack.css";

const TechnologyStack = () => {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    const rows = rowRefs.current.filter(Boolean).map((row, index) => ({
      row,
      track: row.querySelector(".technology-marquee__track"),
      group: row.querySelector(".technology-marquee__group"),
      direction: index % 2 === 0 ? -1 : 1,
      position: 0,
      width: 0,
    }));
    let frameId = null;
    let previousTime = performance.now();
    let previousScrollY = window.scrollY;
    let scrollBoost = 0;
    let scrollDirection = 1;
    let isVisible = true;

    const measure = () => {
      rows.forEach((state) => {
        const previousWidth = state.width;
        state.width = state.group?.getBoundingClientRect().width || 0;
        if (!previousWidth && state.direction > 0) state.position = -state.width;
      });
    };

    const handleScroll = () => {
      const scrollDelta = window.scrollY - previousScrollY;
      const distance = Math.abs(scrollDelta);
      if (distance > 0.5) scrollDirection = Math.sign(scrollDelta);
      previousScrollY = window.scrollY;
      scrollBoost = Math.min(18, scrollBoost + distance / 18);
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) > 0.5) scrollDirection = Math.sign(event.deltaY);
      scrollBoost = Math.min(18, scrollBoost + Math.abs(event.deltaY) / 12);
    };

    const tick = (time) => {
      const delta = Math.min(time - previousTime, 40);
      previousTime = time;
      scrollBoost *= Math.pow(0.95, delta / 16.67);

      if (isVisible) {
        rows.forEach((state, index) => {
          if (!state.track || !state.width) return;
          const baseSpeed = 0.027 + index * 0.0025;
          const speedMultiplier = 1 + scrollBoost * 1.4;
          const reverseInfluence = Math.min(scrollBoost / 2, 1);
          const directionMultiplier =
            scrollDirection > 0 ? 1 : 1 - reverseInfluence * 2;
          state.position +=
            state.direction * baseSpeed * speedMultiplier * directionMultiplier * delta;

          if (state.position <= -state.width) state.position += state.width;
          if (state.position >= 0) state.position -= state.width;
          state.track.style.transform = `translate3d(${state.position}px, 0, 0)`;
        });
      }

      frameId = window.requestAnimationFrame(tick);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "25% 0px" }
    );
    const resizeObserver = new ResizeObserver(measure);

    measure();
    if (sectionRef.current) visibilityObserver.observe(sectionRef.current);
    rows.forEach(({ group }) => group && resizeObserver.observe(group));
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <AnimatedSection delay={300} className="technology-stack">
      <div ref={sectionRef} className="technology-stack__rows">
        {techCategories.map((category, index) => (
          <TechCategory
            key={category.id}
            title={category.title}
            technologies={category.technologies}
            direction={index % 2 === 0 ? "left" : "right"}
            rowRef={(node) => {
              rowRefs.current[index] = node;
            }}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TechnologyStack;
