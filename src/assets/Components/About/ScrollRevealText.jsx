import { useEffect, useRef } from "react";
import avatar from "../../portraint.webp";
import "./ScrollRevealText.css";

const ABOUT_COPY =
  "I'M MEHDI, A SENIOR FULL-STACK ENGINEER WITH 14+ YEARS BUILDING AND MODERNIZING PRODUCTION PLATFORMS. I WORK ACROSS RESPONSIVE INTERFACES, SECURE APIS, DATA, CLOUD DELIVERY, AUTOMATED TESTING, TECHNICAL SEO, AND AI-ASSISTED DEVELOPMENT.";

const words = ABOUT_COPY.split(" ");

const ACCENT_WORDS = {
  SENIOR: "accent",
  MODERNIZING: "accent",
  PRODUCTION: "secondary",
  RESPONSIVE: "primary",
  SECURE: "secondary",
  APIS: "accent",
  DATA: "primary",
  CLOUD: "secondary",
  AUTOMATED: "accent",
  TESTING: "primary",
  TECHNICAL: "secondary",
  SEO: "accent",
  "AI-ASSISTED": "primary",
};

const getWordAccent = (word) => ACCENT_WORDS[word.replace(/[^A-Z-]/g, "")] || "";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const ScrollRevealText = () => {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = null;

    const updateReveal = () => {
      frameId = null;

      if (reducedMotion.matches) {
        wordRefs.current.forEach((word) => {
          if (!word) return;
          word.style.opacity = "1";
          word.style.transform = "translateY(0)";
          word.classList.toggle("is-accented", Boolean(word.dataset.accent));
        });
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
      const hasPullupOverlap = window.matchMedia(
        "(min-width: 901px) and (min-height: 781px)"
      ).matches;
      const nextPanelTrack = section.parentElement?.querySelector(
        ".technical-highlights-pullup"
      );
      const sectionTop = bounds.top + window.scrollY;
      const nextPanelTop = nextPanelTrack
        ? nextPanelTrack.getBoundingClientRect().top + window.scrollY
        : sectionTop + section.offsetHeight;
      const completionDwell = hasPullupOverlap
        ? Math.min(stickyHeight * 0.4, 320)
        : 0;
      const scrollDistance = Math.max(
        nextPanelTop - sectionTop - stickyHeight - completionDwell,
        1
      );
      const progress = clamp((headerHeight - bounds.top) / scrollDistance, 0, 1);
      const revealPosition = progress * (words.length + 2.5);

      wordRefs.current.forEach((word, index) => {
        if (!word) return;
        const wordProgress = clamp((revealPosition - index) / 2.5, 0, 1);
        const easedProgress = 1 - Math.pow(1 - wordProgress, 3);

        word.style.opacity = String(0.14 + easedProgress * 0.86);
        word.style.transform = `translateY(${(1 - easedProgress) * 0.09}em)`;
        word.classList.toggle(
          "is-accented",
          Boolean(word.dataset.accent) && wordProgress >= 0.78
        );
      });

    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateReveal);
      }
    };

    updateReveal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-reveal" aria-labelledby="about-reveal-title">
      <div className="about-reveal__sticky">
        <div className="about-reveal__glow" aria-hidden="true" />
        <div className="about-reveal__inner">
          <div className="about-reveal__eyebrow">
            <span aria-hidden="true">02</span>
            <p>About Me · Scroll to read</p>
          </div>

          <div className="about-reveal__content">
            <h2 id="about-reveal-title" aria-label={ABOUT_COPY}>
              {words.map((word, index) => {
                const accent = getWordAccent(word);

                return (
                  <span
                    key={`${word}-${index}`}
                    ref={(node) => {
                      wordRefs.current[index] = node;
                    }}
                    className={`about-reveal__word${
                      accent ? ` about-reveal__word--${accent}` : ""
                    }`}
                    data-accent={accent || undefined}
                    aria-hidden="true"
                  >
                    {word}
                  </span>
                );
              })}
            </h2>

            <div className="about-reveal__portrait">
              <div className="about-reveal__portrait-glow" aria-hidden="true" />
              <img src={avatar} alt="Mehdi Azar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealText;
