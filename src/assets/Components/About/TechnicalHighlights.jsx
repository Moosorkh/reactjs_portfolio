/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  FaAws,
  FaCheckCircle,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaDocker,
  FaMobile,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaRobot,
  FaSearch,
  FaServer,
  FaWordpress,
} from "react-icons/fa";
import {
  SiCsharp,
  SiGithubactions,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "./TechnicalHighlights.css";

const categories = [
  {
    title: "Frontend Development",
    icon: FaReact,
    gradient: "from-blue-500 to-cyan-400",
    colors: ["#3b82f6", "#22d3ee"],
    description: "Production interfaces from Figma",
    concept: "User Experience & Interface Design",
    skills: [
      { name: "React & TypeScript", icon: SiTypescript, level: 90 },
      { name: "Next.js & SSR", icon: SiNextdotjs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "React Native & Responsive UI", icon: FaMobile, level: 90 },
    ],
    details:
      "I turn Figma systems into responsive production interfaces with React, TypeScript, Next.js, React Native, Tailwind CSS, and maintainable component patterns.",
    projects: [
      { name: "Map Search", tech: ["React", "Leaflet"], description: "Responsive synchronized map and list experience." },
      { name: "Legal Web Platform", tech: ["WordPress", "PHP", "Figma"], description: "Reusable production framework used across roughly 50 sites." },
    ],
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    gradient: "from-green-500 to-emerald-400",
    colors: ["#22c55e", "#34d399"],
    description: "Secure services and product APIs",
    concept: "API Design & Data Management",
    skills: [
      { name: "Node.js & Express", icon: FaNodeJs, level: 88 },
      { name: "C# & .NET Core", icon: SiCsharp, level: 85 },
      { name: "RESTful APIs", icon: FaCogs, level: 92 },
      { name: "GraphQL", icon: SiGraphql, level: 80 },
    ],
    details:
      "I build and modernize backend services with C#/.NET, ASP.NET, Laravel, PHP, Node.js, Express, REST, GraphQL, Entity Framework, and Eloquent.",
    projects: [
      { name: "Host Guest Platform", tech: ["Laravel", "PHP", "PostgreSQL"], description: "Marketplace workflows, payments, messaging, maps, and admin operations." },
      { name: "Auto-Loan Platform", tech: ["C#", ".NET", "SQL Server"], description: "Multi-tenant financial platform and legacy modernization." },
    ],
    tools: ["Node.js", "Express", "PHP", "Laravel", "C#", ".NET Core", "REST APIs"],
  },
  {
    title: "Database & Storage",
    icon: FaDatabase,
    gradient: "from-purple-500 to-pink-400",
    colors: ["#a855f7", "#ec4899"],
    description: "Data modeling & optimization",
    concept: "Data Architecture & Performance",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 87 },
      { name: "MySQL", icon: SiMysql, level: 88 },
      { name: "MongoDB", icon: SiMongodb, level: 83 },
      { name: "Entity Framework & Eloquent", icon: FaDatabase, level: 86 },
    ],
    details:
      "I work across PostgreSQL, SQL Server, MySQL, and MongoDB, using Entity Framework and Eloquent to support reliable application data and migrations.",
    projects: [
      { name: "Host Guest Data Layer", tech: ["PostgreSQL", "Eloquent"], description: "Marketplace models, migrations, search, and operational data." },
      { name: "Loan Servicing Data", tech: ["SQL Server", "Entity Framework"], description: "Financial workflows across a multi-tenant platform." },
    ],
    tools: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Entity Framework", "Eloquent"],
  },
  {
    title: "Cloud & Delivery",
    icon: FaAws,
    gradient: "from-orange-500 to-yellow-400",
    colors: ["#f97316", "#eab308"],
    description: "Infrastructure, delivery & reliability",
    concept: "Cloud Architecture & DevOps",
    skills: [
      { name: "AWS Services (EC2, S3, RDS)", icon: FaAws, level: 82 },
      { name: "Docker Containers", icon: FaDocker, level: 85 },
      { name: "GitHub Actions", icon: SiGithubactions, level: 88 },
      { name: "Cloudflare & GitLab", icon: FaServer, level: 78 },
    ],
    details:
      "I ship production applications with AWS EC2, S3, RDS, and IAM, plus Cloudflare, Docker, GitHub Actions, GitLab, and repeatable CI/CD workflows.",
    projects: [
      { name: "Host Guest Delivery", tech: ["AWS", "GitHub Actions", "Cloudflare"], description: "Infrastructure, CI/CD, messaging, and production deployment." },
      { name: "Alternative Web Workflow", tech: ["Astro", "GitHub", "Cloudflare"], description: "A lean publishing workflow for faster, lower-maintenance launches." },
    ],
    tools: ["AWS", "EC2", "S3", "RDS", "IAM", "Cloudflare", "Docker", "GitHub Actions", "GitLab"],
  },
  {
    title: "Quality & AI Workflow",
    icon: FaRobot,
    gradient: "from-amber-500 to-orange-400",
    colors: ["#f59e0b", "#fb923c"],
    description: "AI-assisted delivery and test automation",
    concept: "Quality Engineering & Developer Tooling",
    skills: [
      { name: "Claude Code & Codex", icon: FaRobot, level: 86 },
      { name: "Playwright & Cypress", icon: FaCheckCircle, level: 88 },
      { name: "Jest & Browser QA", icon: FaSearch, level: 84 },
      { name: "CI Quality Gates", icon: FaCogs, level: 86 },
    ],
    details:
      "I use Claude Code and Codex to accelerate implementation and QA, backed by Playwright, Cypress, Jest, Lighthouse, and human review.",
    projects: [
      { name: "AI-Assisted QA", tech: ["Claude Code", "Codex", "Browser QA"], description: "Faster implementation and regression review across production sites." },
      { name: "Playwright Regression", tech: ["Playwright", "CI/CD", "GitLab"], description: "End-to-end coverage for core multi-tenant product workflows." },
    ],
    tools: ["Claude Code", "Codex", "Playwright", "Cypress", "Jest", "Lighthouse"],
  },
  {
    title: "WordPress & SEO",
    icon: FaWordpress,
    gradient: "from-pink-500 to-rose-400",
    colors: ["#ec4899", "#fb7185"],
    description: "Scalable publishing and organic visibility",
    concept: "Web Platforms & Technical SEO",
    skills: [
      { name: "Technical & On-page SEO", icon: FaSearch, level: 84 },
      { name: "WordPress & WooCommerce", icon: FaWordpress, level: 90 },
      { name: "Reusable Content Systems", icon: FaCogs, level: 88 },
      { name: "Lighthouse & Performance", icon: FaChartLine, level: 85 },
    ],
    details:
      "I build reusable WordPress and PHP systems, then pair technical SEO, structured content, and Lighthouse auditing with measurable search outcomes.",
    projects: [
      { name: "50-Site Web Framework", tech: ["WordPress", "PHP", "Figma"], description: "Parent-child page systems adopted across a high-volume production workflow." },
      { name: "Search Visibility Program", tech: ["Technical SEO", "Lighthouse"], description: "SEO improvements that increased search visibility by 25%." },
    ],
    tools: ["WordPress", "WooCommerce", "PHP", "Technical SEO", "Lighthouse", "Structured Content"],
  },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const SkillCard = ({ category, index, visible, onSelect, cardRef, onHover }) => {
  const Icon = category.icon;

  return (
    <article
      ref={cardRef}
      className="highlight-skill-orbit-card"
      style={{
        "--skill-from": category.colors[0],
        "--skill-to": category.colors[1],
        "--card-delay": `${index * 80}ms`,
      }}
      onFocus={() => onHover(index)}
      onBlur={() => onHover(null)}
    >
      <button
        type="button"
        className="highlight-skill-card"
        onClick={() => onSelect({
          ...category,
          icon: <Icon />,
        })}
      >
        <span className="highlight-skill-card__header">
          <span className="highlight-skill-card__icon"><Icon /></span>
          <span>
            <strong>{category.title}</strong>
            <small>{category.description}</small>
          </span>
        </span>

        <span className="highlight-skill-card__concept">
          <FaPalette /> {category.concept}
        </span>

        <span className="highlight-skill-card__skills">
          {category.skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <span className="highlight-skill-card__skill" key={skill.name}>
                <span className="highlight-skill-card__skill-label">
                  <span><SkillIcon /> {skill.name}</span>
                  <small>{skill.level}%</small>
                </span>
                <span className="highlight-skill-card__track">
                  <span style={{ width: visible ? `${skill.level}%` : "0%" }} />
                </span>
              </span>
            );
          })}
        </span>

        <span className="highlight-skill-card__action">View projects and details →</span>
      </button>
    </article>
  );
};

const TechnicalHighlights = ({ onSelectSkill }) => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const hoveredIndexRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const geometry = { width: stage.clientWidth, height: stage.clientHeight };
    const pointer = { x: 0, y: 0 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let angle = -Math.PI / 2;
    let scrollBoost = 0;
    let lastScrollY = window.scrollY;
    let lastFrame = performance.now();
    let frameId;
    let isInView = true;
    let isMobile = window.innerWidth <= 700;

    const clearTransforms = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.removeProperty("transform");
        card.style.removeProperty("z-index");
        card.style.removeProperty("opacity");
      });
    };

    const updateGeometry = () => {
      geometry.width = stage.clientWidth;
      geometry.height = stage.clientHeight;
      const nextMobile = window.innerWidth <= 700;
      if (nextMobile !== isMobile) {
        isMobile = nextMobile;
        if (isMobile) clearTransforms();
      }
    };

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(stage);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
      },
      { rootMargin: "120px" }
    );
    visibilityObserver.observe(stage);

    const addScrollImpulse = (delta) => {
      if (isInView) {
        scrollBoost = clamp(scrollBoost + Math.abs(delta) * 0.0000014, 0, 0.00075);
      }
    };

    const handleScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      addScrollImpulse(delta);
    };
    const handleWheel = (event) => addScrollImpulse(event.deltaY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    const render = (now) => {
      const deltaTime = clamp(now - lastFrame, 0, 34);
      lastFrame = now;

      if (!isMobile && isInView) {
        pointer.x += (pointerTargetRef.current.x - pointer.x) * 0.055;
        pointer.y += (pointerTargetRef.current.y - pointer.y) * 0.055;

        if (!reducedMotion.matches) {
          const hoverDrag = hoveredIndexRef.current === null ? 1 : 0.12;
          angle +=
            (0.00025 + scrollBoost) *
            (1 + Math.max(0, pointer.y) * 0.55) *
            deltaTime *
            hoverDrag;
        }

        const referenceCard = cardRefs.current[0];
        const cardWidth = referenceCard?.offsetWidth || 344;
        const cardHeight = referenceCard?.offsetHeight || 304;
        const safeRadiusX = Math.max(
          0,
          geometry.width / 2 - cardWidth * 0.63 - 30
        );
        const safeRadiusY = Math.max(
          0,
          geometry.height / 2 - cardHeight * 0.63 - 24
        );
        const radiusX = Math.min(geometry.width * 0.34, 420, safeRadiusX);
        const radiusZ = Math.min(geometry.width * 0.22, 245);
        const radiusY = Math.min(geometry.height * 0.22, 118, safeRadiusY);
        const tilt = 0.32 + (pointer.y + 0.5) * 0.72;

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const theta = angle + (index * Math.PI * 2) / categories.length;
          const sine = Math.sin(theta);
          const cosine = Math.cos(theta);
          const depth = (cosine + 1) / 2;
          const x = sine * radiusX + cosine * pointer.x * 42;
          const y = cosine * radiusY * Math.sin(tilt) + sine * pointer.x * 20;
          const z = cosine * radiusZ * Math.cos(tilt);
          const hovered = hoveredIndexRef.current === index;
          const scale = 0.7 + depth * 0.27 + (hovered ? 0.1 : 0);

          card.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateX(${-pointer.y * 6 - cosine * 2}deg) rotateY(${pointer.x * 8 + sine * 2.5}deg) scale(${scale})`;
          card.style.zIndex = hovered
            ? "150"
            : String(Math.round(20 + depth * 60));
          card.style.opacity = hovered ? "1" : String(0.52 + depth * 0.48);
        });

        scrollBoost *= Math.pow(0.955, deltaTime / 16.67);
      }

      frameId = window.requestAnimationFrame(render);
    };

    frameId = window.requestAnimationFrame(render);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      clearTransforms();
    };
  }, []);

  const getNearestCardIndex = (clientX, clientY) => {
    let nearestIndex = null;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardBounds = card.getBoundingClientRect();
      const centerX = cardBounds.left + cardBounds.width / 2;
      const centerY = cardBounds.top + cardBounds.height / 2;
      const distance = Math.hypot(clientX - centerX, clientY - centerY);
      const activationRadius = Math.max(cardBounds.width, cardBounds.height) * 0.72;

      if (distance < activationRadius && distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerTargetRef.current = {
      x: clamp((event.clientX - bounds.left) / bounds.width - 0.5, -0.5, 0.5),
      y: clamp((event.clientY - bounds.top) / bounds.height - 0.5, -0.5, 0.5),
    };

    hoveredIndexRef.current = getNearestCardIndex(event.clientX, event.clientY);
  };

  const handlePointerLeave = () => {
    pointerTargetRef.current = { x: 0, y: 0 };
    hoveredIndexRef.current = null;
  };

  const handleCardFocus = (index) => {
    hoveredIndexRef.current = index;
  };

  const handleStageClickCapture = (event) => {
    // Keyboard activation should continue through the focused card's button.
    if (event.detail === 0) return;

    const nearestIndex = getNearestCardIndex(event.clientX, event.clientY);
    if (nearestIndex === null) return;

    const category = categories[nearestIndex];
    const Icon = category.icon;

    event.preventDefault();
    event.stopPropagation();
    hoveredIndexRef.current = nearestIndex;
    onSelectSkill({
      ...category,
      icon: <Icon />,
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`technical-highlights-grid ${visible ? "is-visible" : ""}`}
      aria-labelledby="technical-highlights-title"
    >
      <header className="technical-highlights-grid__header">
        <p>( Skills & Systems )</p>
        <h2 id="technical-highlights-title">Technical Highlights</h2>
        <span>Proficient in modern technologies that drive successful products.</span>
      </header>

      <div
        ref={stageRef}
        className="technical-highlights-orbit"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClickCapture={handleStageClickCapture}
      >
        <div className="technical-highlights-orbit__halo" aria-hidden="true" />
        <div className="technical-highlights-orbit__cards">
          {categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              visible={visible}
              onSelect={onSelectSkill}
              onHover={handleCardFocus}
              cardRef={(node) => {
                cardRefs.current[index] = node;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalHighlights;
