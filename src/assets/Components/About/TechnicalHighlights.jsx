/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaAws,
  FaBell,
  FaBolt,
  FaCheckCircle,
  FaChartLine,
  FaCode,
  FaCogs,
  FaDatabase,
  FaDocker,
  FaExclamationTriangle,
  FaFileAlt,
  FaFilter,
  FaGlobe,
  FaInfoCircle,
  FaLayerGroup,
  FaLock,
  FaMobile,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaRobot,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaSitemap,
  FaTachometerAlt,
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
    showcase: "frontend-process",
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
    showcase: "capability-process",
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
    showcase: "capability-process",
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
    showcase: "capability-process",
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
    showcase: "capability-process",
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
    showcase: "capability-process",
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

const processShowcases = {
  "Frontend Development": {
    stages: ["Wireframe", "Components", "JSX / TSX", "Styling", "Responsive", "Interaction", "Live UI"],
    domain: "product-ui.dev",
    brand: "Northstar",
    nav: ["Features", "Solutions", "Pricing"],
    eyebrow: "MODERN PRODUCT SYSTEMS",
    heading: ["Build faster.", "Ship better."],
    description: "Thoughtful interfaces built for real people and real products.",
    action: "Start building",
    tree: ["Page", "Navbar", "Hero", "CardGrid"],
    code: ["<Navbar />", "<Hero />", "<CardGrid />", "<Button />"],
    tokens: ["grid-cols-3", "gap-6", "rounded-xl", "backdrop-blur"],
    stats: [["12,540", "Active users"], ["98.8%", "Reliability"], ["4.9 / 5", "Experience"]],
    audits: ["Performance", "Responsive", "Accessible"],
    status: "Specification -> architecture -> implementation -> production UI",
  },
  "Backend Development": {
    layout: "flow",
    stages: ["Request", "Routing", "Validation", "Business Logic", "Data Layer", "Response", "Monitoring"],
    domain: "api-core.dev",
    live: true,
    // Each entry is one slide, scaled up from one column of the reference
    // architecture diagram: an icon-badge header, then either a code block
    // (request/response) or a connected stack of items (routing/logic/data).
    slides: [
      {
        key: "request",
        icon: FaGlobe,
        title: "Client Request",
        type: "code",
        lines: ["POST /api/orders", "Authorization: Bearer ••••", "{ items: 3, userId: 2841 }"],
      },
      {
        key: "routing",
        icon: FaSitemap,
        title: "Routing & Controller",
        type: "items",
        items: [
          { icon: FaGlobe, name: "Router", caption: "Resolves endpoint" },
          { icon: FaCogs, name: "Controller", caption: "Orchestrates call" },
          { icon: FaShieldAlt, name: "DTO Validation", caption: "Validates shape" },
        ],
      },
      {
        key: "validation",
        icon: FaShieldAlt,
        title: "Validation Layer",
        active: true,
        type: "triple",
        left: {
          icon: FaCode,
          title: "Incoming Payload",
          lines: [
            "POST /api/orders",
            "",
            "Headers",
            "Authorization: Bearer ••••••••••",
            "Content-Type: application/json",
            "",
            "Body",
            "{",
            '  "userId": 2841,',
            '  "items": [',
            '    { "productId": "sku_123", "qty": 2 },',
            '    { "productId": "sku_456", "qty": 1 }',
            "  ],",
            '  "couponCode": "SAVE10",',
            '  "total": 129.99',
            "}",
          ],
        },
        arrowInLabel: "Parse",
        items: [
          { icon: FaLock, name: "Auth Guard", caption: "Verify JWT & user permissions" },
          { icon: FaCode, name: "Schema Check (Zod)", caption: "Validate request schema" },
          { icon: FaCheckCircle, name: "DTO Validation", caption: "Type coercion & constraints" },
          { icon: FaFilter, name: "Input Normalizer", caption: "Sanitize & normalize data" },
        ],
        arrowOutLabel: "Approve",
        right: {
          icon: FaCheckCircle,
          title: "Validation Result",
          results: [
            { label: "Required fields", value: "PASS", ok: true },
            { label: "Types valid", value: "PASS", ok: true },
            { label: "Auth verified", value: "userId: 2841", ok: true },
            { label: "Rate limit OK", value: "remaining: 98", ok: true },
            { label: "Sanitized DTO ready", value: "READY", ok: true },
            { label: 'Unknown field "debug"', value: "REMOVED", ok: false },
          ],
        },
        badge: "Validation Passed",
      },
      {
        key: "logic",
        icon: FaBolt,
        title: "Business Logic",
        active: true,
        type: "items",
        items: [
          { icon: FaCode, name: "OrderService", caption: "Coordinates" },
          { icon: FaChartLine, name: "Pricing Engine", caption: "Applies rules" },
          { icon: FaBolt, name: "Event Publisher", caption: "Publishes event" },
        ],
      },
      {
        key: "data",
        icon: FaDatabase,
        title: "Data Access Layer",
        type: "items",
        items: [
          { icon: FaDatabase, name: "PostgreSQL", caption: "Primary database" },
          { icon: FaDatabase, name: "Redis", caption: "Cache layer" },
          { icon: FaSitemap, name: "Queue", caption: "Background jobs" },
        ],
      },
      {
        key: "response",
        icon: FaCode,
        title: "JSON Response",
        type: "code",
        lines: ['"status": "success",', '"orderId": "ORD-88321",', '"total": 129.99'],
      },
      {
        key: "monitoring",
        type: "dashboard",
        dashStats: [
          { icon: FaShieldAlt, label: "Uptime", value: "99.98%", sub: "Last 30 days" },
          { icon: FaTachometerAlt, label: "Avg latency", value: "182 ms", sub: "↓ 12 ms vs 1h ago" },
          { icon: FaExclamationTriangle, label: "Error rate", value: "0.02%", sub: "↓ 0.01% vs 1h ago" },
          { icon: FaChartLine, label: "Throughput (RPM)", value: "1.2k", sub: "↑ 8% vs 1h ago" },
          { icon: FaLayerGroup, label: "Queue health", value: "Healthy", sub: "Lag: 12 jobs" },
        ],
        charts: [
          {
            title: "Request Throughput (RPM)",
            points: [40, 55, 48, 62, 58, 70, 64, 78, 72, 66, 80, 74],
            peakLabel: "1.2k",
            color: "var(--process-from)",
          },
          {
            title: "Latency Trend (ms)",
            legend: [
              { label: "p50", color: "var(--process-from)" },
              { label: "p95", color: "#38bdf8" },
              { label: "p99", color: "#f4fbf7" },
            ],
            series: [
              { color: "var(--process-from)", points: [20, 22, 18, 24, 21, 23, 19, 25, 22, 20, 24, 21] },
              { color: "#38bdf8", points: [40, 44, 38, 46, 42, 45, 40, 48, 44, 41, 47, 43] },
              { color: "#f4fbf7", points: [58, 62, 56, 64, 60, 63, 57, 66, 61, 59, 65, 60] },
            ],
          },
        ],
        incidents: {
          title: "Alerts & Incidents",
          items: [
            { icon: FaCheckCircle, text: "No active incidents", sub: "All systems operational", ok: true },
            { icon: FaInfoCircle, text: "High latency resolved", sub: "p95 latency back to normal" },
            { icon: FaInfoCircle, text: "Retry storm resolved", sub: "Orders service" },
            { icon: FaInfoCircle, text: "Cache hit rate improved", sub: "Redis cache layer" },
          ],
        },
        services: [
          { icon: FaGlobe, name: "API Gateway", ms: "123 ms" },
          { icon: FaLock, name: "Auth Service", ms: "98 ms" },
          { icon: FaCode, name: "OrderService", ms: "142 ms" },
          { icon: FaDatabase, name: "PostgreSQL", ms: "87 ms" },
          { icon: FaDatabase, name: "Redis", ms: "45 ms" },
          { icon: FaSitemap, name: "Queue", ms: "Lag: 12" },
        ],
        activity: [
          { name: "POST /api/orders", meta: "200 OK", time: "13:08:41", ok: true },
          { name: "Cache hit", meta: "Redis", time: "13:08:39" },
          { name: "Job processed", meta: "EmailSender", time: "13:08:38" },
          { name: "Retry resolved", meta: "PaymentService", time: "13:08:35" },
          { name: "Deployment successful", meta: "api-core v1.24.3", time: "13:08:12" },
        ],
        extras: [
          { icon: FaChartLine, label: "Metrics" },
          { icon: FaFileAlt, label: "Logs" },
          { icon: FaBell, label: "Alerts" },
          { icon: FaShieldAlt, label: "Health" },
        ],
      },
    ],
    stats: [
      { icon: FaShieldAlt, value: "99.98%", label: "Uptime" },
      { icon: FaTachometerAlt, value: "182 ms", label: "Avg latency" },
      { icon: FaChartLine, value: "1.2k", label: "RPM" },
    ],
    tools: ["Node.js", ".NET Core", "REST APIs", "GraphQL"],
    status: "Request -> Routing -> Validation -> Services -> Data -> Response -> Monitoring",
  },
  "Database & Storage": {
    stages: ["Model", "Schema", "Relations", "Queries", "Indexing", "Migrations", "Monitor"],
    domain: "data.northstar.dev",
    brand: "Data Console",
    nav: ["Tables", "Queries", "Metrics"],
    eyebrow: "RELIABLE DATA SYSTEMS",
    heading: ["Model clearly.", "Query quickly."],
    description: "Durable schemas and optimized access patterns for production workloads.",
    action: "Run query",
    tree: ["Domain", "Users", "Orders", "Events"],
    code: ["CREATE TABLE", "FOREIGN KEY", "SELECT ...", "EXPLAIN ANALYZE"],
    tokens: ["normalized", "indexed", "transactional", "backed-up"],
    stats: [["8.4 ms", "Query time"], ["3.2 TB", "Stored data"], ["100%", "Integrity"]],
    audits: ["Indexed", "Migrated", "Backed up"],
    status: "Domain model -> schema -> optimized queries -> monitored storage",
  },
  "Cloud & Delivery": {
    stages: ["Architecture", "Containers", "Pipeline", "Secrets", "Deploy", "Observe", "Scale"],
    domain: "ops.northstar.dev",
    brand: "Delivery Cloud",
    nav: ["Builds", "Services", "Metrics"],
    eyebrow: "REPEATABLE CLOUD DELIVERY",
    heading: ["Ship confidently.", "Scale on demand."],
    description: "Automated infrastructure, safe releases, and production observability.",
    action: "View deployment",
    tree: ["Commit", "Build", "Deploy", "Runtime"],
    code: ["docker build", "npm test", "deploy --prod", "health: passing"],
    tokens: ["AWS", "Cloudflare", "GitHub Actions", "Docker"],
    stats: [["3m 18s", "Deploy time"], ["99.98%", "Availability"], ["6", "Regions"]],
    audits: ["Healthy", "Observable", "Scalable"],
    status: "Architecture -> pipeline -> deployment -> observable runtime",
  },
  "Quality & AI Workflow": {
    stages: ["Test Plan", "Unit Tests", "E2E Flows", "CI Gates", "Audits", "AI Review", "Release"],
    domain: "quality.northstar.dev",
    brand: "Quality Lab",
    nav: ["Suites", "Runs", "Reports"],
    eyebrow: "AUTOMATED QUALITY SIGNALS",
    heading: ["Catch issues early.", "Release with proof."],
    description: "Human judgment reinforced by automation, browser QA, and AI review.",
    action: "Open report",
    tree: ["Feature", "Unit", "Browser", "Release"],
    code: ["expect(...)", "page.goto(...) ", "npm run test", "all checks pass"],
    tokens: ["Playwright", "Cypress", "Jest", "Lighthouse"],
    stats: [["248", "Tests passed"], ["92%", "Coverage"], ["0", "Regressions"]],
    audits: ["Passing", "Reviewed", "Ready"],
    status: "Test plan -> automation -> quality gates -> verified release",
  },
  "WordPress & SEO": {
    stages: ["Content Map", "Components", "Theme", "CMS Fields", "Responsive", "SEO", "Publish"],
    domain: "content.northstar.dev",
    brand: "Publishing Studio",
    nav: ["Pages", "Patterns", "Insights"],
    eyebrow: "SCALABLE CONTENT SYSTEMS",
    heading: ["Publish consistently.", "Grow visibility."],
    description: "Reusable page systems paired with technical SEO and performance checks.",
    action: "Preview page",
    tree: ["Template", "Header", "Sections", "Fields"],
    code: ["the_title()", "get_field()", "<Pattern />", "schema.org"],
    tokens: ["WordPress", "WooCommerce", "Core Web Vitals", "structured data"],
    stats: [["50+", "Sites powered"], ["96", "Performance"], ["+25%", "Visibility"]],
    audits: ["Fast", "Search-ready", "Published"],
    status: "Content model -> reusable theme -> SEO checks -> publishing",
  },
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Turns an array of values into an SVG polyline `points` string for the
// Monitoring dashboard's mini charts — no chart library needed for a sparkline.
const toSparklinePoints = (values, width = 200, height = 60) => {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
};

const SkillCard = ({
  category,
  index,
  visible,
  onSelect,
  cardRef,
  onHover,
}) => {
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
        onClick={(event) => onSelect(category, event, index)}
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

        <span className="highlight-skill-card__action">
          {category.showcase ? "Run capability process ->" : "View projects and details ->"}
        </span>
      </button>
    </article>
  );
};

const PROCESS_DURATION_MS = 6800;
const processStageStarts = [0, 0.14, 0.28, 0.42, 0.56, 0.72, 0.84];
const processStageSeekPoints = [0.075, 0.2, 0.34, 0.48, 0.63, 0.78, 0.94];
const scrubbedAnimationNames = new Set([
  "frontend-process-grid",
  "frontend-process-viewport",
  "frontend-process-tree",
  "frontend-process-code",
  "frontend-process-tokens",
  "frontend-process-devices",
  "frontend-process-drawer",
  "frontend-process-cursor",
  "frontend-process-pulse",
  "backend-flow-request",
  "backend-flow-routing",
  "backend-flow-validation",
  "backend-flow-logic",
  "backend-flow-data",
  "backend-flow-response",
  "backend-flow-monitoring",
  "frontend-process-audits",
]);
const getProcessStage = (progress) => processStageStarts.reduce(
  (currentStage, stageStart, index) =>
    progress >= stageStart ? index : currentStage,
  0
);

// Maps each timeline stage to the flow node it should highlight while scrubbing.
// Each node below is a true slide: opacity 0 by default, driven by a
// scrubbed CSS animation (same technique as .frontend-process__tree /
// __code-stream / __tokens) so only one is visible at a time as the
// timeline is scrubbed — see backend-flow-* keyframes and their windows.
// Mirrors .frontend-process__viewport's structure and typography exactly
// (browser-bar, then an eyebrow/heading/description hero with a 3-card
// stat grid) — only the per-slide copy changes, via config.slides.
// Request/Routing/Business Logic/Data Layer/Response — a single icon-badge
// panel holding either a code block or a connected item stack.
const SimpleSlide = ({ slide }) => {
  const SlideIcon = slide.icon;
  return (
    <div className={`backend-flow__panel${slide.active ? " is-active" : ""}`}>
      <div className="backend-flow__panel-header">
        <span className="backend-flow__badge"><SlideIcon /></span>
        <strong>
          {slide.title}
          {slide.active && <em> (Active)</em>}
        </strong>
      </div>

      {slide.type === "code" ? (
        <pre className="backend-flow__code">{slide.lines.map((line) => `${line}\n`)}</pre>
      ) : (
        <div className="backend-flow__items">
          {slide.items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div key={item.name} className="backend-flow__item">
                <span className="backend-flow__item-icon"><ItemIcon /></span>
                <span>
                  <b>{item.name}</b>
                  <small>{item.caption}</small>
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Validation — payload in, a highlighted validation-rules panel, results out.
const ValidationSlide = ({ slide }) => {
  const LeftIcon = slide.left.icon;
  const CenterIcon = slide.icon;
  const RightIcon = slide.right.icon;

  return (
    <div className="backend-flow__triple-wrap">
      <div className="backend-flow__triple">
        <div className="backend-flow__triple-col">
          <div className="backend-flow__mini-header"><LeftIcon /> {slide.left.title}</div>
          <pre className="backend-flow__code backend-flow__code--compact">
            {slide.left.lines.map((line) => `${line}\n`)}
          </pre>
        </div>

        <div className="backend-flow__triple-arrow">
          <span className="backend-flow__arrow-label">{slide.arrowInLabel}</span>
          <span className="backend-flow__arrow-line" aria-hidden="true" />
        </div>

        <div className={`backend-flow__triple-col backend-flow__triple-col--center${slide.active ? " is-active" : ""}`}>
          <div className="backend-flow__mini-header">
            <CenterIcon /> {slide.title}
            {slide.active && <em> (Active)</em>}
          </div>
          <div className="backend-flow__items">
            {slide.items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="backend-flow__item">
                  <span className="backend-flow__item-icon"><ItemIcon /></span>
                  <span>
                    <b>{item.name}</b>
                    <small>{item.caption}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="backend-flow__triple-arrow">
          <span className="backend-flow__arrow-label">{slide.arrowOutLabel}</span>
          <span className="backend-flow__arrow-line" aria-hidden="true" />
        </div>

        <div className="backend-flow__triple-col">
          <div className="backend-flow__mini-header"><RightIcon /> {slide.right.title}</div>
          <div className="backend-flow__results">
            {slide.right.results.map((result) => (
              <div key={result.label} className={`backend-flow__result${result.ok ? "" : " is-fail"}`}>
                {result.ok ? <FaCheckCircle /> : <FaExclamationTriangle />}
                <span>{result.label}</span>
                <b>{result.value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>

      {slide.badge && (
        <div className="backend-flow__badge-pill">
          <FaCheckCircle /> {slide.badge}
        </div>
      )}
    </div>
  );
};

// Monitoring — a compact operations dashboard: stat row, two live charts, an
// incident feed, service-health grid, and a recent-activity feed.
const MonitoringSlide = ({ slide }) => (
  <div className="backend-flow__dashboard">
    <div className="backend-flow__dash-stats">
      {slide.dashStats.map(({ icon: StatIcon, label, value, sub }) => (
        <div key={label} className="backend-flow__dash-stat">
          <span className="backend-flow__dash-stat-icon"><StatIcon /></span>
          <div>
            <small>{label}</small>
            <b>{value}</b>
            <span>{sub}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="backend-flow__dash-row">
      {slide.charts.map((chart) => (
        <div key={chart.title} className="backend-flow__dash-panel">
          <div className="backend-flow__dash-panel-header">
            {chart.title}
            <i className="backend-flow__live-dot">• LIVE</i>
          </div>
          <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="backend-flow__sparkline">
            {chart.series
              ? chart.series.map((s) => (
                  <polyline key={s.color} points={toSparklinePoints(s.points)} stroke={s.color} fill="none" />
                ))
              : <polyline points={toSparklinePoints(chart.points)} stroke={chart.color} fill="none" />}
          </svg>
          {chart.legend && (
            <div className="backend-flow__dash-legend">
              {chart.legend.map((l) => (
                <span key={l.label}>
                  <i style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="backend-flow__dash-panel backend-flow__dash-panel--list">
        <div className="backend-flow__dash-panel-header">
          {slide.incidents.title}
          <i className="backend-flow__live-dot">• LIVE</i>
        </div>
        <div className="backend-flow__dash-list">
          {slide.incidents.items.map(({ icon: ItemIcon, text, sub, ok }) => (
            <div key={text} className="backend-flow__dash-list-row">
              <ItemIcon className={ok ? "is-ok" : undefined} />
              <span>
                <b>{text}</b>
                <small>{sub}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="backend-flow__dash-row backend-flow__dash-row--bottom">
      <div className="backend-flow__dash-panel">
        <div className="backend-flow__dash-panel-header">
          Service Health
          <i className="backend-flow__live-dot">• LIVE</i>
        </div>
        <div className="backend-flow__service-grid">
          {slide.services.map(({ icon: SvcIcon, name, ms }) => (
            <div key={name} className="backend-flow__service">
              <SvcIcon />
              <b>{name}</b>
              <span className="backend-flow__service-status"><i /> Healthy</span>
              <small>{ms}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="backend-flow__dash-panel">
        <div className="backend-flow__dash-panel-header">
          Recent Activity
          <i className="backend-flow__live-dot">• LIVE</i>
        </div>
        <div className="backend-flow__dash-list">
          {slide.activity.map(({ name, meta, time, ok }) => (
            <div key={name} className="backend-flow__dash-list-row backend-flow__dash-list-row--activity">
              <span>
                <b>{name}</b>
                <small className={ok ? "is-ok" : undefined}>{meta}</small>
              </span>
              <small>{time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="backend-flow__dash-extras">
      {slide.extras.map(({ icon: ExtraIcon, label }) => (
        <span key={label}>
          <ExtraIcon /> {label}
        </span>
      ))}
    </div>
  </div>
);

const BackendFlowWorkspace = ({ config }) => {
  return (
    <div className="backend-flow" aria-hidden="true">
      <div className="backend-flow__main">
        <div className="backend-flow__viewport">
          <div className="backend-flow__browser-bar">
            <span /><span /><span />
            <i>{config.domain}</i>
            {config.live && <b className="backend-flow__live">• LIVE</b>}
          </div>

          <div className="backend-flow__stage">
            {config.slides.map((slide) => (
              <div key={slide.key} className={`backend-flow__slide backend-flow__slide--${slide.key}`}>
                {slide.type === "triple" && <ValidationSlide slide={slide} />}
                {slide.type === "dashboard" && <MonitoringSlide slide={slide} />}
                {(slide.type === "code" || slide.type === "items") && <SimpleSlide slide={slide} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="backend-flow__sidebar">
        <div className="backend-flow__stats">
          {config.stats.map(({ icon: StatIcon, value, label }) => (
            <span key={label}>
              <StatIcon />
              <span className="backend-flow__stat-text">
                <b>{value}</b>
                <small>{label}</small>
              </span>
            </span>
          ))}
        </div>

        <div className="backend-flow__pills">
          {config.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </aside>
    </div>
  );
};

const CapabilityProcessShowcase = ({ category, onClose }) => {
  const config = processShowcases[category.title];
  const Icon = category.icon;
  const processStages = config.stages;
  const processRef = useRef(null);
  const animationFrameRef = useRef(null);
  const animationsRef = useRef([]);
  const progressRef = useRef(processStageSeekPoints[0]);
  const lastFrameRef = useRef(0);
  const autoplayResumeAtRef = useRef(0);
  const overlayRef = useRef(null);
  const [progress, setProgress] = useState(processStageSeekPoints[0]);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyProgress = (nextProgress) => {
      const clampedProgress = clamp(nextProgress, 0, 1);
      progressRef.current = clampedProgress;
      const nextStage = getProcessStage(clampedProgress);

      animationsRef.current.forEach((animation) => {
        const duration = animation.effect?.getComputedTiming().duration;
        if (typeof duration === "number" && Number.isFinite(duration)) {
          animation.currentTime = duration * clampedProgress;
        }
      });

      setProgress(clampedProgress);
      setActiveStage(nextStage);
    };

    const prepareAnimations = () => {
      animationsRef.current = processRef.current
        ?.getAnimations({ subtree: true })
        .filter((animation) => scrubbedAnimationNames.has(animation.animationName)) ?? [];
      animationsRef.current.forEach((animation) => animation.pause());
      applyProgress(progressRef.current);
    };

    const updateProgress = (timestamp) => {
      if (!lastFrameRef.current) lastFrameRef.current = timestamp;
      const elapsed = Math.min(timestamp - lastFrameRef.current, 48);
      lastFrameRef.current = timestamp;

      if (
        !prefersReducedMotion.matches &&
        timestamp >= autoplayResumeAtRef.current &&
        progressRef.current < 1
      ) {
        applyProgress(progressRef.current + elapsed / PROCESS_DURATION_MS);
      }

      animationFrameRef.current = window.requestAnimationFrame(updateProgress);
    };

    const prepareFrame = window.requestAnimationFrame(() => {
      prepareAnimations();
      animationFrameRef.current = window.requestAnimationFrame(updateProgress);
    });

    return () => {
      window.cancelAnimationFrame(prepareFrame);
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const setDemoProgress = (nextProgress, pauseAutoplayFor = 700) => {
    const clampedProgress = clamp(nextProgress, 0, 1);
    progressRef.current = clampedProgress;
    autoplayResumeAtRef.current = performance.now() + pauseAutoplayFor;

    animationsRef.current.forEach((animation) => {
      const duration = animation.effect?.getComputedTiming().duration;
      if (typeof duration === "number" && Number.isFinite(duration)) {
        animation.currentTime = duration * clampedProgress;
      }
    });

    setProgress(clampedProgress);
    setActiveStage(getProcessStage(clampedProgress));
  };

  const seekToStage = (stageIndex) => {
    setDemoProgress(processStageSeekPoints[stageIndex], 1000);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const deltaMultiplier = event.deltaMode === 1
      ? 18
      : event.deltaMode === 2
        ? window.innerHeight
        : 1;
    const normalizedDelta = event.deltaY * deltaMultiplier;
    setDemoProgress(progressRef.current + normalizedDelta / 2400, 650);
  };

  // React's onWheel prop is attached as a passive listener, so preventDefault()
  // inside it silently fails (console warning, page scroll not actually
  // blocked). Keep a ref to the latest handler and bind it natively with
  // {passive:false} instead — attached once, not re-bound on every re-render
  // (this component re-renders on every autoplay tick).
  const handleWheelRef = useRef(null);
  handleWheelRef.current = handleWheel;

  useEffect(() => {
    const overlayEl = overlayRef.current;
    if (!overlayEl) return undefined;

    const wheelListener = (event) => handleWheelRef.current?.(event);
    overlayEl.addEventListener("wheel", wheelListener, { passive: false });
    return () => overlayEl.removeEventListener("wheel", wheelListener);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="frontend-process-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${category.title} process animation`}
      data-lenis-prevent
    >
      <div
        ref={processRef}
        className="frontend-process"
        style={{
          "--process-from": category.colors[0],
          "--process-to": category.colors[1],
        }}
      >
    <div className="frontend-process__topline">
      <div className="frontend-process__identity">
        <span className="frontend-process__react"><Icon /></span>
        <span>
          <small>Selected capability</small>
          <strong>{category.title}</strong>
        </span>
      </div>
      <div className="frontend-process__actions">
        <button
          type="button"
          onClick={onClose}
          data-frontend-process-close
          aria-label="Return to cards"
        >
          <span className="frontend-process__close-label">Return to cards</span>
          <span className="frontend-process__close-label--compact" aria-hidden="true">Close</span>
        </button>
      </div>
    </div>

    <div className="frontend-process__timeline" aria-label={`${category.title} process steps`}>
      <span
        className="frontend-process__timeline-fill"
        style={{ "--timeline-progress": progress }}
      />
      {processStages.map((stage, index) => (
        <button
          type="button"
          key={stage}
          className={`frontend-process__stage-label${index === activeStage ? " is-active" : ""}${index < activeStage ? " is-complete" : ""}`}
          onClick={() => seekToStage(index)}
          aria-current={index === activeStage ? "step" : undefined}
          aria-label={`Go to and pause at step ${index + 1}: ${stage}`}
        >
          <i aria-hidden="true">{index + 1}</i><span>{stage}</span>
        </button>
      ))}
    </div>

    <div className="frontend-process__workspace">
      {config.layout === "flow" ? (
        <BackendFlowWorkspace config={config} />
      ) : (
        <>
          <div className="frontend-process__grid" aria-hidden="true" />

          <div className="frontend-process__tree" aria-hidden="true">
            <span className="tree-node tree-node--app">{config.tree[0]}</span>
            <span className="tree-node tree-node--nav">{config.tree[1]}</span>
            <span className="tree-node tree-node--hero">{config.tree[2]}</span>
            <span className="tree-node tree-node--cards">{config.tree[3]}</span>
            <svg viewBox="0 0 220 170" preserveAspectRatio="none">
              <path d="M110 20 V52 M110 52 H35 V88 M110 52 V88 M110 52 H185 V88" />
            </svg>
          </div>

          <div className="frontend-process__code-stream" aria-hidden="true">
            {config.code.map((snippet) => <code key={snippet}>{snippet}</code>)}
          </div>

          <div className="frontend-process__tokens" aria-hidden="true">
            {config.tokens.map((token) => <code key={token}>{token}</code>)}
          </div>

          <div className="frontend-process__viewport" aria-hidden="true">
            <div className="frontend-process__browser-bar">
              <span /><span /><span />
              <i>{config.domain}</i>
            </div>
            <div className="frontend-process__nav">
              <strong>{config.brand}</strong>
              {config.nav.map((item) => <span key={item}>{item}</span>)}
              <button type="button" tabIndex={-1}>{config.action}</button>
              <i className="frontend-process__menu">|||</i>
            </div>
            <div className="frontend-process__hero">
              <small>{config.eyebrow}</small>
              <strong>{config.heading[0]}<br /><em>{config.heading[1]}</em></strong>
              <p>{config.description}</p>
              <button type="button" tabIndex={-1}>{config.action}</button>
            </div>
            <div className="frontend-process__cards">
              {config.stats.map(([value, label]) => (
                <span key={label}><i /><b>{value}</b><small>{label}</small></span>
              ))}
            </div>
            <div className="frontend-process__mobile-drawer">
              {config.nav.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="frontend-process__cursor">↖</div>
            <div className="frontend-process__pulse" />
            <div className="frontend-process__device-labels" aria-hidden="true">
              <span>Desktop</span><span>Tablet</span><span>Mobile</span>
            </div>
            <div className="frontend-process__audits" aria-hidden="true">
              {config.audits.map((audit) => <span key={audit}><FaCheckCircle /> {audit}</span>)}
            </div>
          </div>
        </>
      )}

      <p className="frontend-process__status" aria-live="polite">
        <strong>{`Step ${activeStage + 1} of ${processStages.length}: ${processStages[activeStage]}`}</strong>
        <span>
          {config.status.split(" -> ").map((word, index, arr) => (
            <span key={word} className={index === activeStage ? "is-current" : undefined}>
              {word}
              {index < arr.length - 1 ? " -> " : ""}
            </span>
          ))}
        </span>
      </p>
      <p className="frontend-process__scrub-hint" aria-hidden="true">Scroll to scrub</p>
    </div>
    </div>
  </div>
  );
};

const TechnicalHighlights = ({ onSelectSkill }) => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const hoveredIndexRef = useRef(null);
  const rackDragRef = useRef(null);
  const rackAngleRef = useRef(-Math.PI / 2);
  const rackMomentumRef = useRef(0);
  const suppressCardClickRef = useRef(false);
  const demoActiveRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [frontendDemoActive, setFrontendDemoActive] = useState(false);
  const [activeProcessCategory, setActiveProcessCategory] = useState(null);

  useEffect(() => {
    demoActiveRef.current = frontendDemoActive;
  }, [frontendDemoActive]);

  useEffect(() => {
    if (!frontendDemoActive) return undefined;
    const scrollY = window.scrollY;
    const previouslyFocused = document.activeElement;
    const root = document.getElementById("root");
    const rootWasInert = root?.hasAttribute("inert") ?? false;
    const bodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    const htmlStyles = {
      overflow: document.documentElement.style.overflow,
      overscrollBehavior: document.documentElement.style.overscrollBehavior,
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setFrontendDemoActive(false);
    };

    root?.setAttribute("inert", "");
    document.documentElement.classList.add("frontend-process-is-open");
    document.body.classList.add("frontend-process-is-open");
    Object.assign(document.body.style, {
      position: "fixed",
      top: `-${scrollY}px`,
      left: "0",
      right: "0",
      width: "100%",
      overflow: "hidden",
    });
    Object.assign(document.documentElement.style, {
      overflow: "hidden",
      overscrollBehavior: "none",
    });
    window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: true } }));
    window.addEventListener("keydown", handleKeyDown);
    const focusFrame = window.requestAnimationFrame(() => {
      document.querySelector("[data-frontend-process-close]")?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      window.dispatchEvent(new CustomEvent("portfolio:scroll-lock", { detail: { locked: false } }));
      document.documentElement.classList.remove("frontend-process-is-open");
      document.body.classList.remove("frontend-process-is-open");
      Object.assign(document.body.style, bodyStyles);
      Object.assign(document.documentElement.style, htmlStyles);
      if (!rootWasInert) root?.removeAttribute("inert");
      window.scrollTo(0, scrollY);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [frontendDemoActive]);

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

      if (!isMobile && isInView && !demoActiveRef.current) {
        pointer.x += (pointerTargetRef.current.x - pointer.x) * 0.055;
        pointer.y += (pointerTargetRef.current.y - pointer.y) * 0.055;

        if (!reducedMotion.matches && !rackDragRef.current) {
          const hoverDrag = hoveredIndexRef.current === null ? 1 : 0.12;
          rackAngleRef.current +=
            ((0.00025 + scrollBoost) *
            (1 + Math.max(0, pointer.y) * 0.55) *
            hoverDrag + rackMomentumRef.current) * deltaTime;

          rackMomentumRef.current *= Math.pow(0.88, deltaTime / 16.67);
          if (Math.abs(rackMomentumRef.current) < 0.00001) {
            rackMomentumRef.current = 0;
          }
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
          const theta = rackAngleRef.current + (index * Math.PI * 2) / categories.length;
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

  const handleRackDragStart = (event) => {
    if (
      event.button !== 0 ||
      frontendDemoActive ||
      window.matchMedia("(max-width: 700px)").matches
    ) return;

    rackDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      lastTime: performance.now(),
      moved: false,
      captured: false,
      velocity: 0,
    };
    rackMomentumRef.current = 0;
  };

  const handleRackDragMove = (event) => {
    const drag = rackDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const totalDeltaX = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(totalDeltaX) < 5) return;

    if (!drag.captured) {
      event.currentTarget.setPointerCapture?.(event.pointerId);
      event.currentTarget.classList.add("is-grabbing");
      drag.captured = true;
    }
    drag.moved = true;
    event.preventDefault();
    const now = performance.now();
    const frameDeltaX = event.clientX - drag.lastX;
    const elapsed = Math.max(now - drag.lastTime, 1);
    const angleDelta = frameDeltaX * 0.008;
    rackAngleRef.current += angleDelta;
    drag.velocity = clamp(angleDelta / elapsed, -0.012, 0.012);
    drag.lastX = event.clientX;
    drag.lastTime = now;
  };

  const handleRackDragEnd = (event) => {
    const drag = rackDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.classList.remove("is-grabbing");
    if (drag.moved) {
      rackMomentumRef.current = drag.velocity;
      hoveredIndexRef.current = null;
      suppressCardClickRef.current = true;
      window.setTimeout(() => {
        suppressCardClickRef.current = false;
      }, 80);
    }
    rackDragRef.current = null;
  };

  const handlePointerMove = (event) => {
    if (rackDragRef.current) {
      handleRackDragMove(event);
      return;
    }
    if (frontendDemoActive) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerTargetRef.current = {
      x: clamp((event.clientX - bounds.left) / bounds.width - 0.5, -0.5, 0.5),
      y: clamp((event.clientY - bounds.top) / bounds.height - 0.5, -0.5, 0.5),
    };

    hoveredIndexRef.current = getNearestCardIndex(event.clientX, event.clientY);
  };

  const handlePointerLeave = () => {
    if (rackDragRef.current) return;
    pointerTargetRef.current = { x: 0, y: 0 };
    hoveredIndexRef.current = null;
  };

  const handleCardFocus = (index) => {
    hoveredIndexRef.current = index;
  };

  const handleSelectCategory = (category) => {
    if (processShowcases[category.title]) {
      hoveredIndexRef.current = categories.indexOf(category);
      setActiveProcessCategory(category);
      setFrontendDemoActive(true);
      return;
    }

    const Icon = category.icon;
    onSelectSkill({
      ...category,
      icon: <Icon />,
    });
  };

  const handleCardSelect = (category, event) => {
    if (suppressCardClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    handleSelectCategory(category);
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
        className={`technical-highlights-orbit ${frontendDemoActive ? "is-frontend-demo" : ""}`}
        onPointerDown={handleRackDragStart}
        onPointerUp={handleRackDragEnd}
        onPointerCancel={handleRackDragEnd}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="technical-highlights-orbit__halo" aria-hidden="true" />
        <div className="technical-highlights-orbit__cards">
          {categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              visible={visible}
              onSelect={handleCardSelect}
              onHover={handleCardFocus}
              cardRef={(node) => {
                cardRefs.current[index] = node;
              }}
            />
          ))}
        </div>
        <p className="technical-highlights-orbit__drag-hint" aria-hidden="true">
          Drag left or right to spin
        </p>
        {frontendDemoActive && activeProcessCategory && typeof document !== "undefined" && createPortal(
          <CapabilityProcessShowcase
            category={activeProcessCategory}
            onClose={() => setFrontendDemoActive(false)}
          />,
          document.body
        )}
      </div>
    </section>
  );
};

export default TechnicalHighlights;
