/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  FaAws,
  FaBullhorn,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaDocker,
  FaMobile,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaRobot,
  FaRocket,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import {
  SiCsharp,
  SiGithubactions,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
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
    description: "Building responsive, interactive UIs",
    concept: "User Experience & Interface Design",
    skills: [
      { name: "React & TypeScript", icon: SiTypescript, level: 90 },
      { name: "Next.js & SSR", icon: SiNextdotjs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "Responsive Design", icon: FaMobile, level: 90 },
    ],
    details:
      "I create accessible, component-driven interfaces with React and TypeScript, focusing on responsive behavior, clear interaction patterns, and production performance.",
    projects: [
      { name: "Map Search", tech: ["React", "Leaflet"], description: "Responsive synchronized map and list experience." },
      { name: "Portfolio Website", tech: ["React", "Tailwind", "Vite"], description: "Interactive portfolio with motion and theme support." },
    ],
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    gradient: "from-green-500 to-emerald-400",
    colors: ["#22c55e", "#34d399"],
    description: "Scalable server architectures",
    concept: "API Design & Data Management",
    skills: [
      { name: "Node.js & Express", icon: FaNodeJs, level: 88 },
      { name: "C# & .NET Core", icon: SiCsharp, level: 85 },
      { name: "RESTful APIs", icon: FaCogs, level: 92 },
      { name: "GraphQL", icon: SiGraphql, level: 80 },
    ],
    details:
      "I build secure backend services with Node.js, PHP/Laravel, and C#/.NET, applying clean architecture, reliable API contracts, and scalable service patterns.",
    projects: [
      { name: "Host Guest Platform", tech: ["Laravel", "PHP", "AWS"], description: "Booking platform with verification, payments, and messaging." },
      { name: "Invoice Management API", tech: ["Node.js", "Express", "PostgreSQL"], description: "Authenticated invoice workflows and PDF export." },
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
      { name: "Redis Cache", icon: SiRedis, level: 78 },
    ],
    details:
      "I design SQL and NoSQL data models with careful indexing, caching, and integrity constraints so applications remain fast as their data grows.",
    projects: [
      { name: "Invoice Tracker", tech: ["PostgreSQL", "Prisma"], description: "Relational invoice data with authenticated CRUD workflows." },
      { name: "Caching Layer", tech: ["Redis", "Node.js"], description: "Lower-latency access for frequently requested application data." },
    ],
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Entity Framework"],
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
      { name: "Kubernetes & Serverless", icon: SiKubernetes, level: 78 },
    ],
    details:
      "I ship resilient applications with AWS, container tooling, automated quality checks, and repeatable deployment workflows.",
    projects: [
      { name: "Host Guest Verification", tech: ["Rekognition", "Textract", "PHP"], description: "Cloud-assisted facial and document verification." },
      { name: "Automated Delivery", tech: ["Docker", "GitHub Actions", "AWS"], description: "Tested, repeatable builds across application environments." },
    ],
    tools: ["AWS", "EC2", "S3", "RDS", "Lambda", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "AI & Automation",
    icon: FaRobot,
    gradient: "from-amber-500 to-orange-400",
    colors: ["#f59e0b", "#fb923c"],
    description: "Intelligent workflows & integrations",
    concept: "Applied AI & Process Automation",
    skills: [
      { name: "AI API Integration", icon: FaRobot, level: 86 },
      { name: "Workflow Automation", icon: FaCogs, level: 88 },
      { name: "Document Intelligence", icon: FaSearch, level: 84 },
      { name: "Smart Data Pipelines", icon: FaChartLine, level: 82 },
    ],
    details:
      "I connect AI services to practical product workflows, automating repetitive tasks while keeping human review, reliability, and maintainability in focus.",
    projects: [
      { name: "Identity Verification", tech: ["Rekognition", "Textract", "AWS"], description: "Automated face and document verification with review safeguards." },
      { name: "Business Workflow Assistant", tech: ["AI APIs", "Node.js", "Webhooks"], description: "Connected workflows that classify, route, and summarize operational data." },
    ],
    tools: ["OpenAI APIs", "AWS AI Services", "Webhooks", "Node.js", "Automation Workflows"],
  },
  {
    title: "SEO & Digital Growth",
    icon: FaSearch,
    gradient: "from-pink-500 to-rose-400",
    colors: ["#ec4899", "#fb7185"],
    description: "Visibility, campaigns & conversion",
    concept: "Search Strategy & Digital Marketing",
    skills: [
      { name: "Technical & On-page SEO", icon: FaSearch, level: 84 },
      { name: "Digital Campaign Strategy", icon: FaBullhorn, level: 82 },
      { name: "Analytics & Tracking", icon: FaChartLine, level: 80 },
      { name: "Conversion Optimization", icon: FaRocket, level: 85 },
    ],
    details:
      "I connect technical SEO, structured content, campaign strategy, and analytics so visibility improvements lead to measurable audience and business growth.",
    projects: [
      { name: "Search Visibility Program", tech: ["Search Console", "Schema", "Lighthouse"], description: "Technical improvements that strengthen indexing and organic discovery." },
      { name: "Campaign Measurement", tech: ["Analytics", "UTM", "Conversion Events"], description: "Clear attribution and audience behavior tracking across campaigns." },
    ],
    tools: ["Google Analytics", "Search Console", "Lighthouse", "Schema", "Campaign Tracking"],
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
