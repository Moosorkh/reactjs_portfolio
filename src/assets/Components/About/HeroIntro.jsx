/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "../../../utils/scroll";
import "./HeroIntro.css";

const STACK = [
  { label: "React", color: "bg-[#61dafb]" },
  { label: "TypeScript", color: "bg-[#3178c6]" },
  { label: "Node.js", color: "bg-[#8cc84b]" },
  { label: ".NET", color: "bg-[#512bd4]" },
  { label: "AWS", color: "bg-[#ff9900]" },
  { label: "AI Automation", color: "bg-[#f59e0b]" },
  { label: "SEO", color: "bg-[#ec4899]" },
];

// Each block eases in on its own beat once the boot sequence hands over.
const Reveal = ({ visible, delay = 0, className = "", children }) => (
  <div
    className={`transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
      visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-[6px]"
    } ${className}`}
    style={{ transitionDelay: `${visible ? delay : 0}ms` }}
  >
    {children}
  </div>
);

const HeroIntro = ({ visible }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let isInView = true;

    const resumePlayback = () => {
      if (document.hidden || !isInView) return;
      video.play().catch(() => {
        // Muted autoplay can still be deferred while a tab is backgrounded.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) resumePlayback();
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    video.addEventListener("canplay", resumePlayback);
    video.addEventListener("stalled", resumePlayback);
    window.addEventListener("focus", resumePlayback);
    window.addEventListener("pageshow", resumePlayback);
    document.addEventListener("visibilitychange", resumePlayback);
    resumePlayback();

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", resumePlayback);
      video.removeEventListener("stalled", resumePlayback);
      window.removeEventListener("focus", resumePlayback);
      window.removeEventListener("pageshow", resumePlayback);
      document.removeEventListener("visibilitychange", resumePlayback);
    };
  }, []);

  return (
  <div className="relative h-full overflow-hidden">
    <div
      className="hero-intro__media absolute inset-y-0 right-0 w-full md:w-[66%] pointer-events-none"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
      }}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center opacity-80 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hello-world.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/55 via-bg-primary/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-bg-primary/25" />
    </div>

    <div className="relative z-10 h-full flex flex-col container mx-auto px-6 md:px-12">
      <div className="flex-1 flex items-center py-8 min-h-0">
        <div className="w-full max-w-3xl">
        <Reveal visible={visible} delay={100}>
          <p className="text-sm md:text-base text-primary font-mono mb-4 tracking-wide">
            <span className="text-text-tertiary">$</span> whoami
          </p>
        </Reveal>

        <Reveal visible={visible} delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            <span className="gradient-text">Full Stack</span>
            <br />
            <span className="text-text-primary">Developer</span>
          </h1>
        </Reveal>

        <Reveal visible={visible} delay={320}>
          <p className="text-base md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
            Building <span className="text-primary font-semibold">scalable products</span>,{" "}
            <span className="text-accent font-semibold">AI automations</span>, and{" "}
            <span className="text-secondary font-semibold">search-ready experiences</span> from
            interface to cloud.
          </p>
        </Reveal>

        <Reveal visible={visible} delay={440}>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {STACK.map(({ label, color }) => (
              <span key={label} className="badge badge-primary">
                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${color}`} />
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal visible={visible} delay={560}>
          <div className="hero-intro__actions">
            <button
              onClick={() => scrollToSection("contact")}
              className="hero-cta hero-cta--primary"
            >
              <span>Let&apos;s Talk</span>
              <span className="hero-cta__arrow" aria-hidden="true">
                <FaArrowRight />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="hero-cta hero-cta--secondary"
            >
              <span>View Work</span>
              <span className="hero-cta__arrow" aria-hidden="true">
                <FaArrowRight />
              </span>
            </button>

            <div className="flex gap-3 md:ml-2">
              <a
                href="https://github.com/Moosorkh"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-bg-tertiary border border-border-primary rounded-xl hover:border-primary transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl group-hover:scale-110 group-hover:text-primary transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/in/irdmousa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-bg-tertiary border border-border-primary rounded-xl hover:border-primary transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl group-hover:scale-110 group-hover:text-primary transition-all" />
              </a>
            </div>
          </div>
        </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <Reveal visible={visible} delay={800} className="flex justify-center pb-8 shrink-0">
        <button
          onClick={() => scrollToSection("portfolio")}
          className="flex flex-col items-center gap-2 text-text-tertiary hover:text-primary transition-colors"
          aria-label="Scroll to portfolio"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Have a look</span>
          <span className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
            <span className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
          </span>
        </button>
      </Reveal>
    </div>
  </div>
  );
};

export default HeroIntro;
