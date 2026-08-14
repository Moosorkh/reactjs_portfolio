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
  FaPause,
  FaPalette,
  FaPlay,
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
    layout: "frontend-flow",
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
        type: "detail",
        lines: ["POST /api/orders", "Authorization: Bearer ••••", "{ items: 3, userId: 2841 }"],
      },
      {
        key: "routing",
        icon: FaSitemap,
        title: "Routing & Controller",
        type: "detail",
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
        type: "detail",
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
        type: "detail",
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
        type: "detail",
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
    layout: "database-process",
    stages: ["Architecture", "PostgreSQL", "MySQL", "MongoDB", "Entity Framework & Eloquent", "Performance", "Monitor & Improve"],
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
    layout: "cloud-process",
    stages: ["Architecture & DevOps", "AWS Services", "Docker Containers", "GitHub Actions", "Cloudflare & GitLab", "Delivery Pipeline", "Monitor & Improve"],
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
    layout: "quality-process",
    stages: ["Workflow Setup", "AI Planning", "Claude Code & Codex", "Playwright & Cypress", "Jest & Browser QA", "CI Quality Gates", "Monitor & Improve"],
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
    layout: "seo-process",
    stages: ["Setup", "Technical SEO", "On-page SEO", "Content & Schema", "Performance", "Link Building", "Monitor & Improve"],
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
    slides: [
      {
        key: "setup",
        title: "Setup",
        score: 90,
        status: "Ready",
        checklist: [
          ["WordPress installation", "Done"],
          ["SEO plugin", "Done"],
          ["Analytics + GA4", "Done"],
          ["Search Console", "Done"],
          ["Sitemap + robots", "Done"],
          ["Permalink structure", "Done"],
        ],
      },
      {
        key: "technical",
        title: "Technical SEO",
        score: 92,
        status: "Excellent",
        checks: [
          ["Crawlability", "No blocks found"],
          ["Indexability", "All key pages indexed"],
          ["HTTPS", "Secure"],
          ["Core Web Vitals", "Good"],
          ["Sitemap", "Accurate"],
          ["Robots.txt", "Optimized"],
        ],
        crawl: [
          ["Crawled pages", "1,248"],
          ["Indexed pages", "1,102"],
          ["Blocked", "12"],
          ["Redirects", "34"],
          ["Errors", "0"],
        ],
      },
      {
        key: "onpage",
        title: "On-page SEO",
        score: 88,
        status: "Very Good",
        elements: [
          ["Title tags", "40", "2", "Good"],
          ["Meta descriptions", "38", "4", "Good"],
          ["Heading structure", "41", "1", "Good"],
          ["Image ALT text", "36", "6", "Needs work"],
          ["Internal linking", "31", "8", "Needs work"],
          ["URL structure", "42", "0", "Good"],
        ],
        issues: [
          "4 pages missing meta description",
          "6 images missing ALT text",
          "2 pages have multiple H1 tags",
        ],
      },
      {
        key: "content",
        title: "Content & Schema",
        score: 85,
        status: "Good",
        contentStats: [
          ["Published posts", "64"],
          ["Updated posts", "12"],
          ["Thin pages", "3"],
        ],
        topContent: [
          ["/blog/wordpress-seo-guide", "3.2k"],
          ["/blog/technical-seo-checklist", "2.1k"],
          ["/blog/content-optimization", "1.8k"],
        ],
        schema: [
          ["Article", "Valid"],
          ["FAQ", "Valid"],
          ["Breadcrumb", "Valid"],
          ["Organization", "Valid"],
        ],
      },
      {
        key: "performance",
        title: "Performance",
        score: 92,
        status: "Optimized",
        kpis: [
          ["PageSpeed", "92"],
          ["Core Web Vitals", "Good"],
          ["Load time", "1.2s"],
          ["Page size", "1.1 MB"],
          ["Requests", "32"],
        ],
        vitals: [
          ["LCP", "1.9s", "Good"],
          ["FID", "12ms", "Good"],
          ["CLS", "0.03", "Good"],
        ],
        trend: [84, 88, 85, 83, 82, 80, 79, 81, 77, 76, 75, 74],
      },
      {
        key: "links",
        title: "Link Building",
        score: 86,
        status: "Growing",
        linkStats: [
          ["Total backlinks", "1.8k"],
          ["Referring domains", "278"],
          ["Domain authority", "38"],
          ["Spam score", "2%"],
        ],
        backlinksTrend: [40, 48, 54, 58, 56, 62, 61, 69, 74, 79, 82, 88],
        tasks: [
          ["Guest posting", "Done"],
          ["Resource page outreach", "Done"],
          ["Broken link building", "In progress"],
          ["Internal linking", "Done"],
          ["Competitor analysis", "Done"],
        ],
      },
      {
        key: "monitor",
        title: "Monitor & Improve",
        score: 90,
        status: "Excellent",
        summary: [
          ["Organic traffic", "12.6K"],
          ["Organic keywords", "1.2K"],
          ["Impressions", "168K"],
          ["CTR", "3.6%"],
        ],
        healthTrend: [66, 72, 75, 81, 84, 89, 87, 92, 89, 93, 95, 97],
        alerts: [
          "New keyword opportunity: wordpress schema",
          "Organic traffic increased by 18%",
          "2 pages not indexed",
          "Core Web Vitals issue on mobile",
        ],
        actions: [
          ["Optimize pages missing meta description", "High"],
          ["Add alt text to 6 images", "High"],
          ["Improve internal linking on key pages", "Medium"],
          ["Build more backlinks to top posts", "Low"],
        ],
      },
    ],
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

const BackendDataRows = ({ rows }) => (
  <div className="backend-detail__rows">
    {rows.map((row) => <div key={row[0]}>{row.map((cell, index) => <span key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}
  </div>
);

const BackendDetailPanel = ({ title, children, className = "" }) => (
  <section className={`backend-detail__panel${className ? ` ${className}` : ""}`}>
    <h5>{title}</h5>
    {children}
  </section>
);

const BackendProcessList = ({ items }) => (
  <div className="backend-detail__process-list">
    {items.map(([title, caption]) => <span key={title}><FaCheckCircle /><b>{title}</b><small>{caption}</small></span>)}
  </div>
);

const BackendStats = ({ stats }) => (
  <div className="backend-detail__stats">
    {stats.map(([label, value, detail]) => <span key={label}><small>{label}</small><b>{value}</b>{detail && <em>{detail}</em>}</span>)}
  </div>
);

const BackendDetailSlide = ({ slide, tools }) => {
  const content = {
    request: (
      <>
        <BackendDetailPanel title="HTTP Request" className="backend-detail__panel--code"><pre>{`POST /api/orders HTTP/1.1\nHost: api.core.dev\nContent-Type: application/json\nAuthorization: Bearer eyJhbGciOi...\n\n{\n  "productId": "PROD-88321",\n  "quantity": 2,\n  "customerId": "CUST-7712"\n}`}</pre></BackendDetailPanel>
        <BackendDetailPanel title="Request Metadata"><BackendDataRows rows={[["Method", "POST"], ["Endpoint", "/api/orders"], ["IP address", "203.0.113.42"], ["User agent", "Mozilla/5.0…"], ["Request ID", "req_01JX82…"]]} /></BackendDetailPanel>
        <BackendDetailPanel title="Request Stats"><BackendStats stats={[["Requests / min", "1.2k"], ["Avg. size", "1.45 KB"], ["Rate limit", "98K", "remaining"], ["Status", "Accepted", "✓"]]} /></BackendDetailPanel>
      </>
    ),
    routing: (
      <>
        <BackendDetailPanel title="Routing Flow"><div className="backend-detail__route-flow"><span><b>Incoming Request</b><small>POST /api/orders</small></span><i>↓</i><span><b>API Gateway</b><small>Kong / ALB / Nginx</small></span><i>↓</i><span><b>Route Match</b><small>POST /api/orders</small></span><i>→</i><span className="is-active"><b>OrdersController</b><small>createOrder()</small></span></div></BackendDetailPanel>
        <BackendDetailPanel title="Route Details"><BackendDataRows rows={[["Matched route", "POST /api/orders"], ["Controller", "OrdersController"], ["Handler", "createOrder"], ["Middleware", "Auth, RateLimit, Logging"], ["Version", "v1"]]} /></BackendDetailPanel>
        <BackendDetailPanel title="Routing Stats"><BackendStats stats={[["Route hits (1h)", "892"], ["Success rate", "99.71%"], ["Avg. routing time", "3.21 ms"], ["Cache hit rate", "87%"]]} /></BackendDetailPanel>
      </>
    ),
    logic: (
      <>
        <BackendDetailPanel title="Business Process"><BackendProcessList items={[["Create Order", "Persist order entity"], ["Check Inventory", "Verify product availability"], ["Calculate Totals", "Apply pricing & taxes"], ["Apply Discounts", "Check promotions"], ["Prepare Order", "Set initial status"]]} /></BackendDetailPanel>
        <BackendDetailPanel title="Order Summary"><BackendDataRows rows={[["Order ID", "ORD-88321"], ["Product ID", "PROD-88321"], ["Quantity", "2"], ["Unit price", "$64.99"], ["Discount", "$0.00"], ["Tax (8.25%)", "$10.72"], ["Total", "$129.99"]]} /></BackendDetailPanel>
        <BackendDetailPanel title="Business Stats"><BackendStats stats={[["Execution time", "45.67 ms"], ["Success rate", "99.81%"], ["Orders created (1h)", "156"], ["Avg. order value", "$128.45"]]} /></BackendDetailPanel>
      </>
    ),
    data: (
      <>
        <BackendDetailPanel title="Data Operations"><BackendProcessList items={[["Begin Transaction", "Open database transaction"], ["Insert Order", "orders table"], ["Insert Order Items", "order_items table"], ["Update Inventory", "products table"], ["Commit Transaction", "Persist all changes"]]} /></BackendDetailPanel>
        <BackendDetailPanel title="Database Info"><div className="backend-detail__database-info"><span><FaDatabase /><small>Primary database</small><b>PostgreSQL</b><em>orders-db-primary</em></span><span><FaDatabase /><small>Cache</small><b>Redis Cluster</b><em>orders-cache</em></span><span><FaSitemap /><small>Connection pool</small><b>Active 12 / 50</b></span><span><FaTachometerAlt /><small>Query time (avg)</small><b>18.34 ms</b></span></div></BackendDetailPanel>
        <BackendDetailPanel title="Data Stats"><BackendStats stats={[["Query time (avg)", "18.34 ms"], ["Queries / request", "5"], ["Cache hit rate", "92.6%"], ["DB CPU", "23%", "healthy"]]} /></BackendDetailPanel>
      </>
    ),
    response: (
      <>
        <BackendDetailPanel title="Response Payload" className="backend-detail__panel--code"><pre>{`HTTP 200 OK\n\n{\n  "status": "success",\n  "orderId": "ORD-88321",\n  "total": 129.99,\n  "createdAt": "2025-05-16T12:45:30Z",\n  "estimatedDelivery": "2025-05-20"\n}`}</pre></BackendDetailPanel>
        <BackendDetailPanel title="Response Info"><BackendDataRows rows={[["Status code", "200 OK"], ["Content type", "application/json"], ["Response time", "182 ms"], ["Response size", "512 B"]]} /></BackendDetailPanel>
        <BackendDetailPanel title="Response Stats"><BackendStats stats={[["Responses (1h)", "1.2k"], ["Success rate", "99.98%"], ["Avg. response time", "182 ms"], ["P95 response time", "320 ms"]]} /></BackendDetailPanel>
      </>
    ),
  }[slide.key];

  return (
    <div className={`backend-detail backend-detail--${slide.key}`}>
      <header><span><i>{slide.key === "request" ? 1 : slide.key === "routing" ? 2 : slide.key === "logic" ? 4 : slide.key === "data" ? 5 : 6}</i><b>{slide.title}</b></span><small>{slide.key === "request" ? "Client sends an HTTP request to the API" : slide.key === "routing" ? "Request is routed to the appropriate endpoint" : slide.key === "logic" ? "Execute core business rules and operations" : slide.key === "data" ? "Persist data and read from database / cache" : "Return response to the client"}</small></header>
      <div className="backend-detail__grid">{content}</div>
      <div className="backend-detail__tools">{tools.map(tool => <span key={tool}>{tool}</span>)}</div>
    </div>
  );
};

const getFrontendStageDetails = (config, activeStage) => {
  const details = [
    {
      label: "Wireframe",
      headline: "Layout Blueprint",
      points: [
        "Define section hierarchy and scanning rhythm",
        "Lock placement for hero, feature grid, and CTA",
        "Establish initial spacing and content flow",
      ],
    },
    {
      label: "Components",
      headline: "Component Assembly",
      points: [
        "Compose reusable card, nav, and hero primitives",
        "Standardize variants before page composition",
        "Keep sections modular for faster iteration",
      ],
    },
    {
      label: "JSX / TSX",
      headline: "Typed Composition",
      points: [
        "Build section structure with predictable props",
        "Separate display layers from data plumbing",
        "Use clear component boundaries for maintainability",
      ],
    },
    {
      label: "Styling",
      headline: "Token-Driven Styling",
      points: [
        "Apply spacing, radius, and elevation tokens",
        "Blend gradients and glows with readable contrast",
        "Align typography scale across cards and headers",
      ],
    },
    {
      label: "Responsive",
      headline: "Cross-Device Pass",
      points: [
        "Tune card density for desktop, tablet, and mobile",
        "Preserve hierarchy while reducing visual noise",
        "Ensure touch-friendly sizing and readable spacing",
      ],
    },
    {
      label: "Interaction",
      headline: "Interaction Polish",
      points: [
        "Refine hover and active states for key actions",
        "Smooth menu / drawer transitions for mobile",
        "Strengthen affordance cues with subtle motion",
      ],
    },
    {
      label: "Live UI",
      headline: "Production Snapshot",
      points: [
        "Validate with performance and accessibility checks",
        "Confirm reliability and responsive behavior",
        "Ship a coherent, production-ready interface",
      ],
    },
  ];

  const stage = details[activeStage] ?? details[0];
  return {
    ...stage,
    chips: config.tokens,
    metrics: config.stats,
  };
};

const FrontendFlowWorkspace = ({ config, activeStage }) => {
  const details = getFrontendStageDetails(config, activeStage);

  const stageVisuals = [
    <div className="frontend-flow__wireframe" key="wireframe">
      <span className="is-nav" />
      <span className="is-copy" />
      <span className="is-action" />
      <div><span /><span /><span /></div>
    </div>,
    <div className="frontend-flow__components" key="components">
      {config.code.map((component, index) => (
        <span key={component}><FaReact /><b>{component}</b><small>{index === 0 ? "Navigation" : index === 1 ? "Page section" : index === 2 ? "Reusable grid" : "Action primitive"}</small></span>
      ))}
    </div>,
    <div className="frontend-flow__code" key="code">
      <div><i>1</i><code>type HeroProps = {'{'}</code></div>
      <div><i>2</i><code>  title: string;</code></div>
      <div><i>3</i><code>  action: () =&gt; void;</code></div>
      <div><i>4</i><code>{'}'};</code></div>
      <div><i>5</i><code>&nbsp;</code></div>
      <div><i>6</i><code>export function Hero(props: HeroProps) {'{'}</code></div>
      <div><i>7</i><code>  return &lt;section className=&quot;hero&quot;&gt;</code></div>
      <div><i>8</i><code>    &lt;h1&gt;{'{'}props.title{'}'}&lt;/h1&gt;</code></div>
      <div><i>9</i><code>  &lt;/section&gt;;</code></div>
      <div><i>10</i><code>{'}'}</code></div>
    </div>,
    <div className="frontend-flow__styling" key="styling">
      <div className="frontend-flow__swatches">{["#2563eb", "#38bdf8", "#22d3ee", "#0f172a"].map((color) => <span key={color} style={{ "--swatch": color }}><i />{color}</span>)}</div>
      <div className="frontend-flow__token-row"><b>Spacing</b>{["8", "16", "24", "32"].map((item) => <span key={item}>{item}</span>)}</div>
      <div className="frontend-flow__token-row"><b>Radius</b>{["SM", "MD", "LG", "XL"].map((item) => <span key={item}>{item}</span>)}</div>
      <div className="frontend-flow__shadow-row"><span /><span /><span /></div>
    </div>,
    <div className="frontend-flow__devices" key="responsive">
      {["Desktop", "Tablet", "Mobile"].map((device) => <span className={`is-${device.toLowerCase()}`} key={device}><b>{device}</b><i /><i /><div><i /><i /><i /></div></span>)}
    </div>,
    <div className="frontend-flow__interaction" key="interaction">
      <span><small>Hover</small><button type="button" tabIndex={-1}>Get started</button></span>
      <span><small>Click</small><button className="is-clicked" type="button" tabIndex={-1}>Get started<i /></button></span>
      <span className="is-menu"><small>Menu open</small><b>☰</b><div>{config.nav.map((item) => <i key={item}>{item}</i>)}</div></span>
    </div>,
    <div className="frontend-flow__live-ui" key="live">
      <nav><b>{config.brand}</b><span>{config.nav.join("   ")}</span><button type="button" tabIndex={-1}>{config.action}</button></nav>
      <main><small>{config.eyebrow}</small><h3>{config.heading[0]}<em>{config.heading[1]}</em></h3><p>{config.description}</p><button type="button" tabIndex={-1}>{config.action}</button></main>
      <div>{config.stats.map(([value, label]) => <span key={label}><b>{value}</b><small>{label}</small></span>)}</div>
    </div>,
  ];

  return (
    <div className="frontend-flow" aria-hidden="true">
      <div className="frontend-flow__viewport">
        <div className="frontend-flow__browser-bar">
          <span /><span /><span />
          <i>{config.domain}</i>
          <b>• PREVIEW</b>
        </div>
        <div key={activeStage} className="frontend-flow__stage capability-stage-transition">
          <header className="frontend-flow__stage-header">
            <span><small>{`Step ${activeStage + 1} of ${config.stages.length}`}</small><h4>{details.headline}</h4></span>
            <em>{details.label}</em>
          </header>
          <div className="frontend-flow__content">
            <section className="frontend-flow__visual">{stageVisuals[activeStage]}</section>
            <aside className="frontend-flow__brief">
              <span className="frontend-flow__brief-icon"><FaCode /></span>
              <small>Current focus</small>
              <h5>{details.headline}</h5>
              <ul>{details.points.map((point) => <li key={point}><FaCheckCircle />{point}</li>)}</ul>
              <div className="frontend-flow__chips">{details.chips.map((chip) => <code key={chip}>{chip}</code>)}</div>
              <div className="frontend-flow__metrics">{details.metrics.map(([value, label]) => <span key={label}><b>{value}</b><small>{label}</small></span>)}</div>
            </aside>
          </div>
          <p className="frontend-flow__step-note">{`Step ${activeStage + 1} of ${config.stages.length} · ${details.label}`}</p>
        </div>
      </div>
    </div>
  );
};

const BackendFlowWorkspace = ({ config, activeStage, totalStages }) => {
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
                {slide.type === "detail" && <BackendDetailSlide slide={slide} tools={config.tools} />}
                {(slide.type === "code" || slide.type === "items") && <SimpleSlide slide={slide} />}
              </div>
            ))}
          </div>

          <p className="backend-flow__step-note">
            {`Step ${activeStage + 1} of ${totalStages} · ${config.stages[activeStage]}`}
          </p>
        </div>
      </div>
    </div>
  );
};

const SeoScoreRing = ({ score }) => (
  <div className="seo-process__score-ring" style={{ "--seo-score": score }}>
    <div>
      <b>{score}</b>
      <small>/100</small>
    </div>
  </div>
);

const SeoDataRows = ({ rows, className = "" }) => (
  <div className={`seo-process__data-rows${className ? ` ${className}` : ""}`}>
    {rows.map((row) => (
      <div key={row[0]}>
        {row.map((cell, index) => <span key={`${row[0]}-${index}`}>{cell}</span>)}
      </div>
    ))}
  </div>
);

const SeoPanel = ({ title, children, className = "" }) => (
  <section className={`seo-process__panel${className ? ` ${className}` : ""}`}>
    <h5>{title}</h5>
    {children}
  </section>
);

const SeoMetricTiles = ({ metrics }) => (
  <div className="seo-process__metric-tiles">
    {metrics.map(([label, value, change]) => (
      <span key={label}><small>{label}</small><b>{value}</b>{change && <em>{change}</em>}</span>
    ))}
  </div>
);

const SeoTrend = ({ points, label }) => (
  <div className="seo-process__trend">
    <svg viewBox="0 0 220 72" preserveAspectRatio="none" className="seo-process__sparkline">
      <polyline points={toSparklinePoints(points, 220, 72)} />
    </svg>
    {label && <small>{label}</small>}
  </div>
);

const SeoProcessWorkspace = ({ config, activeStage }) => {
  const slide = config.slides?.[activeStage] ?? config.slides?.[0];
  if (!slide) return null;

  return (
    <div className="seo-process" aria-hidden="true">
      <div className="seo-process__viewport">
        <div className="seo-process__browser-bar">
          <span /><span /><span />
          <i>{config.domain}</i>
          <b>• LIVE</b>
        </div>

        <div key={slide.key} className={`seo-process__stage seo-process__stage--${slide.key} capability-stage-transition`}>
          {slide.key === "setup" && (
            <div className="seo-dashboard seo-dashboard--setup">
              <SeoPanel title="Site setup"><div className="seo-process__check-list">{["WordPress installed", "Theme optimized", "Essential plugins", "HTTPS enabled", "Permalinks"].map((item) => <span key={item}><FaCheckCircle /><b>{item}</b><small>Configured</small></span>)}</div></SeoPanel>
              <SeoPanel title="Site information"><SeoDataRows rows={[["Site title", "Northstar Blog"], ["Tagline", "Modern tutorials for developers"], ["URL", "https://northstar.dev"], ["Language", "English (US)"], ["Timezone", "UTC+0"]]} /></SeoPanel>
              <SeoPanel title="Plugins active (6)"><SeoDataRows rows={[["Yoast SEO", "Active"], ["Rank Math", "Active"], ["WP Rocket", "Active"], ["Smush", "Active"], ["Redirection", "Active"], ["Site Kit", "Active"]]} /></SeoPanel>
              <SeoPanel title="Quick actions" className="seo-process__panel--full"><div className="seo-process__actions-grid">{["Run SEO setup wizard", "Import demo content", "Submit to Search Console", "View site"].map((item) => <span key={item}>{item}</span>)}</div></SeoPanel>
            </div>
          )}

          {slide.key === "technical" && (
            <div className="seo-dashboard seo-dashboard--technical">
              <SeoPanel title="Crawl overview"><div className="seo-process__donut"><b>312</b><small>Pages</small></div><SeoDataRows rows={[["Valid", "289"], ["Warnings", "17"], ["Errors", "6"]]} /></SeoPanel>
              <SeoPanel title="Technical health score" className="seo-process__panel--score"><SeoScoreRing score={92} /><p>Excellent</p><em>↑ 12 pts in last crawl</em></SeoPanel>
              <SeoPanel title="Technical checks"><SeoDataRows rows={[["Crawlability", "Good"], ["HTTPS / SSL", "Good"], ["Mobile friendly", "Good"], ["Core Web Vitals", "Good"], ["Indexability", "Good"], ["XML sitemap", "Good"], ["Robots.txt", "Good"], ["Canonical tags", "Good"]]} /></SeoPanel>
              <SeoPanel title="Indexability"><SeoMetricTiles metrics={[["Indexed pages", "1,248", "↑ 39"], ["Non-indexed", "23", "↓ 3"]]} /></SeoPanel>
              <SeoPanel title="Sitemaps" className="seo-process__panel--wide"><SeoDataRows rows={[["XML sitemap", "/sitemap.xml", "Success"], ["Image sitemap", "/image-sitemap.xml", "Success"], ["Post sitemap", "/post-sitemap.xml", "Success"]]} /></SeoPanel>
            </div>
          )}

          {slide.key === "onpage" && (
            <div className="seo-dashboard seo-dashboard--onpage">
              <div className="seo-dashboard__rail"><SeoPanel title="On-page score" className="seo-process__panel--score"><SeoScoreRing score={88} /><p>Very good</p><em>↑ 8 pts in 30 days</em></SeoPanel><SeoPanel title="Pages optimized"><SeoDataRows rows={[["Optimized", "156"], ["Needs improvement", "24"], ["Not optimized", "8"]]} /></SeoPanel></div>
              <SeoPanel title="On-page analysis" className="seo-process__panel--wide"><SeoDataRows className="is-table" rows={[["Page", "Title", "Meta", "Headers", "Keywords", "Score"], ["/", "✓", "✓", "✓", "✓", "95"], ["/blog/wordpress-seo-guide", "✓", "✓", "✓", "✓", "92"], ["/blog/technical-seo", "✓", "✓", "✓", "✓", "89"], ["/blog/speed-optimization", "✓", "△", "✓", "△", "72"], ["/blog/free-plugins", "△", "△", "△", "△", "68"], ["/about", "✓", "✓", "✓", "✓", "90"]]} /></SeoPanel>
              <SeoPanel title="Top keywords" className="seo-process__panel--keywords"><div className="seo-process__keyword-list">{["wordpress seo", "wordpress seo guide", "technical seo wordpress", "speed optimization wordpress", "wordpress seo plugin"].map((item) => <span key={item}>{item}</span>)}</div></SeoPanel>
            </div>
          )}

          {slide.key === "content" && (
            <div className="seo-dashboard seo-dashboard--content">
              <SeoPanel title="Content overview"><SeoDataRows rows={[["Total posts", "128", "↑ 8"], ["Total pages", "24", "↑ 2"], ["Total words", "86.4K", "↑ 4.2K"], ["Avg. words / post", "1,260", "↑ 110"]]} /></SeoPanel>
              <SeoPanel title="Schema markup" className="seo-process__panel--score"><SeoScoreRing score={76} /><em>↑ 10 pts in 30 days</em></SeoPanel>
              <SeoPanel title="Schema types detected"><SeoDataRows rows={[["Article", "68"], ["Breadcrumb", "128"], ["Organization", "1"], ["BlogPosting", "68"], ["WebSite", "1"], ["FAQPage", "12"], ["HowTo", "6"]]} /></SeoPanel>
              <SeoPanel title="Recent content" className="seo-process__panel--full"><SeoDataRows className="is-table" rows={[["Title", "Type", "Schema", "Status", "Score"], ["Ultimate WordPress SEO Guide", "Post", "Article, FAQ", "Published", "92"], ["Technical SEO for WordPress", "Post", "Article, HowTo", "Published", "89"], ["Best SEO Plugins Compared", "Post", "Article", "Published", "84"], ["Speed Optimization Checklist", "Post", "Article, HowTo", "Published", "82"]]} /></SeoPanel>
            </div>
          )}

          {slide.key === "performance" && (
            <div className="seo-dashboard seo-dashboard--performance">
              <SeoPanel title="Core Web Vitals" className="seo-process__panel--wide"><SeoMetricTiles metrics={[["LCP", "1.2s", "Good · ↓ 0.3s"], ["FID", "18ms", "Good · ↓ 6ms"], ["CLS", "0.04", "Good · ↓ 0.01"]]} /></SeoPanel>
              <SeoPanel title="Performance score" className="seo-process__panel--score seo-process__panel--performance-score"><SeoScoreRing score={94} /><p>Excellent</p><em>↑ 9 pts in 30 days</em></SeoPanel>
              <SeoPanel title="Page speed insights"><div className="seo-process__device-tabs"><span>Mobile</span><span>Desktop</span></div><div className="seo-process__donut is-small"><b>92</b></div><SeoDataRows rows={[["Performance", "92"], ["Accessibility", "96"], ["Best practices", "100"], ["SEO", "100"]]} /></SeoPanel>
              <SeoPanel title="Optimization summary"><div className="seo-process__check-list">{["Page caching", "Image optimization", "Minify CSS/JS", "Lazy load", "CDN", "GZIP compression"].map((item) => <span key={item}><FaCheckCircle /><b>{item}</b><small>Enabled</small></span>)}</div></SeoPanel>
            </div>
          )}

          {slide.key === "links" && (
            <div className="seo-dashboard seo-dashboard--links">
              <SeoPanel title="Backlink overview"><SeoMetricTiles metrics={[["Total backlinks", "1.8K", "↑ 190"], ["Referring domains", "320", "↑ 18"], ["Domain authority", "38", "↑ 3%"]]} /></SeoPanel>
              <SeoPanel title="Top referring domains"><SeoDataRows rows={[["developer.com", "DA 92", "156"], ["webdesign.com", "DA 84", "128"], ["tutorial.com", "DA 82", "112"], ["themesite.com", "DA 79", "98"], ["medium.com", "DA 91", "86"]]} /></SeoPanel>
              <SeoPanel title="Backlinks over time"><SeoTrend points={[24, 32, 40, 48, 45, 54, 61, 60, 68, 66, 78, 86, 84, 96, 102]} label="Backlinks" /></SeoPanel>
              <SeoPanel title="Link building tasks"><SeoDataRows rows={[["Guest post outreach", "In progress"], ["Broken link building", "In progress"], ["Resource page outreach", "Pending"], ["Competitor analysis", "Done"]]} /></SeoPanel>
            </div>
          )}

          {slide.key === "monitor" && (
            <div className="seo-dashboard seo-dashboard--monitor">
              <SeoPanel title="Overview (last 30 days)"><div className="seo-process__overview-lines">{[["Total clicks", "12.6K", "↑ 14.4%"], ["Total impressions", "168K", "↑ 8.7%"], ["Average CTR", "3.6%", "↑ 0.6%"], ["Average position", "18.2", "↓ 0.4"]].map((row, index) => <span key={row[0]}><small>{row[0]}</small><b>{row[1]}</b><em>{row[2]}</em><SeoTrend points={[4, 7, 5, 8, 3, 7, 4, 8].map(value => value + index)} /></span>)}</div></SeoPanel>
              <SeoPanel title="Alerts"><div className="seo-process__alert-list">{[["Pages with no meta description", "2 pages"], ["Orphaned content detected", "3 pages"], ["Decrease in impressions", "2 pages"], ["Slow Core Web Vitals", "1 issue"]].map(row => <span key={row[0]}><FaExclamationTriangle /><b>{row[0]}</b><small>{row[1]}</small></span>)}</div><button type="button" tabIndex={-1}>View all alerts</button></SeoPanel>
              <SeoPanel title="Recommendations"><div className="seo-process__recommendations">{["Update 2 pages with missing meta descriptions", "Improve internal linking for 3 orphaned pages", "Optimize underperforming keywords", "Monitor Core Web Vitals improvements"].map(item => <span key={item}><FaCheckCircle />{item}</span>)}</div><button type="button" tabIndex={-1}>View all recommendations</button></SeoPanel>
              <SeoPanel title="Next check" className="seo-process__panel--next"><FaChartLine /><small>Next scan in</small><b>24h 00m</b><button type="button" tabIndex={-1}>Run scan now</button></SeoPanel>
            </div>
          )}

          <p className="seo-process__step-note">{`Step ${activeStage + 1} of ${config.stages.length} · ${slide.title}`}</p>
        </div>
      </div>
    </div>
  );
};

const QualityPanel = ({ title, children, className = "" }) => (
  <section className={`quality-process__panel${className ? ` ${className}` : ""}`}>
    {title && <h5>{title}</h5>}
    {children}
  </section>
);

const QualityRows = ({ rows, className = "" }) => (
  <div className={`quality-process__rows${className ? ` ${className}` : ""}`}>
    {rows.map((row) => <div key={row[0]}>{row.map((cell, index) => <span key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}
  </div>
);

const QualitySidebar = ({ items, active = 0 }) => (
  <aside className="quality-process__sidebar">
    {items.map(([title, detail, status], index) => (
      <span key={title} className={index === active ? "is-active" : ""}>
        <i>{index + 1}</i><b>{title}</b><small>{detail}</small>{status && <em>{status}</em>}
      </span>
    ))}
  </aside>
);

const QualityRing = ({ value, label }) => (
  <div className="quality-process__ring" style={{ "--quality-score": value }}><span><b>{value}{label === "%" ? "%" : ""}</b><small>{label === "%" ? "Covered" : "/100"}</small></span></div>
);

const QualitySpark = ({ points, green = false }) => (
  <svg className={`quality-process__spark${green ? " is-green" : ""}`} viewBox="0 0 240 80" preserveAspectRatio="none"><polyline points={toSparklinePoints(points, 240, 80)} /></svg>
);

const QualityProcessWorkspace = ({ config, activeStage }) => {
  const sidebars = [
    [["Repo Connection", "GitHub · synchronized app", "CONNECTED"], ["Environment Checks", "All systems operational", "HEALTHY"], ["Task Intake", "13 tasks · 3 epics", "AUTO SYNC"], ["Coding Standards", "ESLint · Prettier · TS strict", "ENFORCED"], ["Test Strategy", "Unit · integration · E2E", "ACTIVE"], ["Branch Naming", "feat/qa-workflow-ui", "STANDARD"], ["Toolchain Readiness", "Docker · Node 20 · Vite", "READY"]],
    [["Task Decomposition", "7 tasks · 53 subtasks"], ["Acceptance Criteria", "Clear · measurable · testable"], ["Architecture Notes", "Design · patterns · data flow"], ["File Impact Map", "10 files · 6 new · 4 modified"], ["Prompt / Context Assembly", "Repo · docs · examples · rules"], ["Implementation Checklist", "28 items · 0 complete"]],
    [["AI Code Generation", "Live suggestions"], ["Component Creation", "New UI components"], ["Service / API Creation", "Endpoints & services"], ["Refactor Assistance", "Improve & simplify"], ["Code Review (AI)", "Lint · security · practices"], ["Implementation Progress", "64% complete"]],
    [["User Flows", "13 flows defined"], ["Browser Runs", "5 browsers · 120 tests"], ["Selectors", "Stable · resilient · smart"], ["Scenario Matrix", "Critical paths coverage"], ["Run Summary", "96% pass rate"]],
    [["Unit Tests", "1,248 tests"], ["Integration Tests", "312 tests"], ["Coverage", "87% overall"], ["Visual QA", "48 screenshots"], ["Flaky Tests", "2 quarantined"], ["Issue List", "3 open issues"]],
    [["Checkout", "12s"], ["Install", "45s"], ["Lint (ESLint)", "32s"], ["Type Check", "28s"], ["Unit & Integration Tests", "2m 16s"], ["Coverage Check", "18s"], ["Build", "1m 02s"], ["Security Scan", "30s"], ["Preview Deploy", "1m 10s"]],
    [["Deployment Health", "Live system health"], ["Defect Trends", "30 days"], ["Incidents & Feedback", "3 open · 13 total"], ["Test Stability", "98.1% stable"], ["Release Confidence", "High · 94/100"], ["Recommendations", "AI-powered insights"], ["Next Improvements", "Planned actions"]],
  ];

  const setup = <><QualitySidebar items={sidebars[0]} /><div className="quality-process__main quality-process__main--setup"><QualityPanel title="Workflow Overview" className="quality-process__panel--wide"><div className="quality-process__workflow">{["Plan", "Code", "Test", "Quality Gate", "Deploy", "Monitor"].map((item, index) => <span key={item}><i>{index + 1}</i><b>{item}</b></span>)}</div></QualityPanel><QualityPanel title="Active Work Context"><QualityRows rows={[["Feature", "AI-powered Quality Dashboard"], ["Owner", "@mehdi-azar"], ["Priority", "High"], ["Target branch", "feat/qa-workflow-ui"], ["ETA", "3d 4h"], ["Last sync", "Just now"]]} /></QualityPanel><QualityPanel title="Recent Activity"><div className="quality-process__checks">{["Repository synced", "Environment validated", "Dependencies checked", "Branch created"].map((item, index) => <span key={item}><FaCheckCircle />{item}<small>{index + 1}m ago</small></span>)}</div></QualityPanel></div></>;

  const planning = <><QualitySidebar items={sidebars[1]} /><div className="quality-process__main quality-process__main--planning"><QualityPanel title="Task Decomposition"><QualityRows rows={[["1. Quality Dashboard UI", "6h"], ["2. API Quality Metrics", "6h"], ["3. Data Aggregation Service", "4h"], ["4. Test Automation", "10h"], ["5. CI Quality Gates", "6h"], ["6. Monitoring & Alerts", "6h"], ["7. Documentation", "4h"]]} /></QualityPanel><QualityPanel title="Acceptance Criteria (Sample)"><div className="quality-process__checks">{["Display quality KPIs in real-time", "Filter by service, branch, time range", "Drill-down to test & build details", "Export reports as CSV / PDF", "Role-based access control", "Responsive & accessible"].map(item => <span key={item}><i />{item}</span>)}</div></QualityPanel><QualityPanel title="File Impact Map"><div className="quality-process__impact"><QualityRing value={78} label="%" /><QualityRows rows={[["New", "6 (21%)"], ["Modified", "12 (43%)"], ["Deleted", "2 (7%)"], ["Unchanged", "8 (29%)"]]} /></div></QualityPanel><QualityPanel title="Implementation Checklist"><b className="quality-process__progress-label">0% <small>0 / 28</small></b><div className="quality-process__progress"><i style={{ width: "0%" }} /></div><div className="quality-process__checks is-muted">{["Setup dashboard shell", "Implement API client", "Create metric widgets", "Connect data streams", "Add filters & search"].map(item => <span key={item}><i />{item}</span>)}</div></QualityPanel></div></>;

  const code = <><QualitySidebar items={sidebars[2]} /><div className="quality-process__main quality-process__main--code"><QualityPanel className="quality-process__code-panel"><div className="quality-process__tabs"><b>DIFF VIEW</b><span>FILE VIEW</span><span>CHAT</span></div><small>src/components/QualityDashboard.tsx</small><pre>{`@@ -22,7 +22,9 @@ export const QualityDashboard = () => {\n-  <StatCard title="Tests" value={totals} />\n+  <StatCard title="Coverage" value={coverageTrend} />\n+  <StatCard title="Tests" value={totals} trend={testTrend} />\n+  <StatCard title="Builds" value={builds} trend={buildTrend} />\n}`}</pre><div className="quality-process__suggestion"><b>AI Suggestion</b><p>Added trend indicators and a new Builds metric for better visibility.</p><span><button type="button">Apply</button><button type="button">Reject</button><button type="button">Open in Editor</button></span></div></QualityPanel><div className="quality-process__code-stats"><QualityPanel title="Implementation Progress"><QualityRing value={64} label="%" /></QualityPanel><QualityPanel title="Files Changed"><b>12</b><QualityRows rows={[["Added", "18"], ["Modified", "6"], ["Deleted", "2"]]} /></QualityPanel><QualityPanel title="AI Sessions"><b>8</b><small>This session</small></QualityPanel></div></div></>;

  const browsers = [["Chromium", "96%"], ["Firefox", "94%"], ["WebKit", "97%"], ["Edge", "95%"], ["Mobile Safari", "92%"]];
  const e2e = <><QualitySidebar items={sidebars[3]} /><div className="quality-process__main quality-process__main--tests"><div className="quality-process__browser-cards">{browsers.map(([name, score]) => <span key={name}><i>{name.slice(0, 1)}</i><b>{name}</b><small>120 tests</small><strong>{score}</strong><em>Passed</em></span>)}</div><QualityPanel title="User Flow Overview"><QualityRows rows={[["Login & Auth", "12 / 12", "100%"], ["Create Project", "15 / 15", "100%"], ["Quality Dashboard", "22 / 24", "92%"], ["Filters & Drilldown", "18 / 20", "90%"], ["Export Reports", "10 / 10", "100%"]]} /></QualityPanel><QualityPanel title="Recent Runs"><div className="quality-process__checks">{[["#241 · feat/qa-workflow-ui", "2m ago"], ["#240 · main", "12m ago"], ["#239 · feat/qa-workflow-ui", "25m ago"], ["#238 · main", "40m ago"]].map(([item, time]) => <span key={item}><FaCheckCircle />{item}<small>{time}</small></span>)}</div><button type="button">View All Runs</button></QualityPanel></div></>;

  const qa = <><QualitySidebar items={sidebars[4]} /><div className="quality-process__main quality-process__main--qa"><div className="quality-process__stat-strip">{[["Tests Run", "1,560"], ["Passed", "1,492"], ["Failed", "18"], ["Skipped", "50"], ["Pass Rate", "95.6%"]].map(([label, value]) => <span key={label}><small>{label}</small><b>{value}</b></span>)}</div><QualityPanel title="Coverage Overview"><div className="quality-process__impact"><QualityRing value={87} label="%" /><QualityRows rows={[["Statements", "87%"], ["Branches", "84%"], ["Functions", "89%"], ["Lines", "88%"]]} /></div></QualityPanel><QualityPanel title="Recent Failures"><QualityRows className="is-table" rows={[["should render metrics", "QualityCard.test.tsx", "AssertionError", "12m"], ["api returns 200", "metrics.spec.ts", "TimeoutError", "18m"], ["export csv works", "export.spec.ts", "TypeError", "24m"]]} /></QualityPanel><QualityPanel title="Browser QA (Visual Regression)" className="quality-process__panel--wide"><div className="quality-process__thumbnails">{["Baseline", "Chromium", "Firefox", "WebKit", "Edge", "Diff View"].map((item, index) => <span className={index === 5 ? "is-diff" : ""} key={item}><i /><small>{item}</small></span>)}</div></QualityPanel></div></>;

  const gates = <><QualitySidebar items={sidebars[5]} /><div className="quality-process__main quality-process__main--gates"><QualityPanel className="quality-process__gate-summary"><FaShieldAlt /><div><h4>All quality gates passed!</h4><p>Ready for deployment.</p></div></QualityPanel><div className="quality-process__stat-strip">{[["Coverage", "87%"], ["Tests Passed", "1,492"], ["Security", "0"], ["Bundle Size", "512 KB"]].map(([label, value]) => <span key={label}><small>{label}</small><b>{value}</b><em>{label === "Security" ? "High vulnerabilities" : "Requirement passed"}</em></span>)}</div><QualityPanel title="Artifacts"><QualityRows rows={[["Preview URL", "https://pr-241.preview.app", "Open"], ["Build Artifacts", "build-241.zip", "Download"], ["Test Report", "report-241.html", "Open"]]} /></QualityPanel></div></>;

  const monitor = <><QualitySidebar items={sidebars[6]} /><div className="quality-process__main quality-process__main--monitor"><QualityPanel title="System Health"><span className="quality-process__health"><FaCheckCircle /> All Systems Operational <em>99.98% uptime</em></span><QualitySpark green points={[20, 30, 24, 36, 26, 50, 29, 38, 31, 56, 34, 48, 35, 60, 40]} /></QualityPanel><QualityPanel title="Defect Trend (30 Days)"><div className="quality-process__dual-chart"><QualitySpark points={[70, 55, 63, 48, 58, 41, 50, 34, 38, 23, 29, 19, 25]} /><QualitySpark green points={[64, 48, 52, 39, 42, 31, 35, 25, 31, 38, 55, 32, 42]} /></div></QualityPanel><QualityPanel title="Release Confidence Score"><QualityRing value={94} label="score" /><b className="quality-process__confidence">High Confidence</b></QualityPanel><QualityPanel title="Top Recommendations (AI)"><QualityRows rows={[["Increase E2E coverage for filters", "High"], ["Add contract tests for metrics API", "Medium"], ["Reduce flaky tests", "Medium"]]} /><button type="button">View All Recommendations</button></QualityPanel><QualityPanel title="Incidents & Feedback"><QualityRows className="is-table" rows={[["INC-241", "Bug", "Metrics not updating", "Investigating"], ["INC-237", "Bug", "Export CSV fails", "Open"], ["FB-128", "Feedback", "Add dark mode", "Open"]]} /></QualityPanel><QualityPanel title="Test Stability"><div className="quality-process__stability"><b>98.1%</b><small>Stable</small><span><b>2</b><small>Flaky Tests</small></span><span><b>2</b><small>Quarantined</small></span></div></QualityPanel><QualityPanel title="Next Improvements"><QualityRows rows={[["Increase E2E filter coverage", "@qa-bot", "2d"], ["Add performance budgets", "@dev-bot", "3d"], ["Improve error logging", "@dev-bot", "5d"]]} /></QualityPanel></div></>;

  const stages = [setup, planning, code, e2e, qa, gates, monitor];
  return <div className="quality-process" aria-hidden="true"><div className="quality-process__viewport"><header className="quality-process__stage-head"><span><i>{activeStage + 1}</i><b>{config.stages[activeStage]}</b></span><em>● {activeStage === 2 || activeStage === 6 ? "AUTO PLAY" : "LIVE"}</em></header><div key={activeStage} className={`quality-process__dashboard quality-process__dashboard--${activeStage + 1} capability-stage-transition`}>{stages[activeStage]}</div><p>{`Step ${activeStage + 1} of ${config.stages.length} · ${config.stages[activeStage]}`}</p></div></div>;
};

const DatabasePanel = ({ title, children, className = "" }) => (
  <section className={`database-process__panel${className ? ` ${className}` : ""}`}>
    {title && <h5>{title}</h5>}{children}
  </section>
);

const DatabaseRows = ({ rows, className = "" }) => (
  <div className={`database-process__rows${className ? ` ${className}` : ""}`}>
    {rows.map(row => <div key={row[0]}>{row.map((cell, index) => <span key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}
  </div>
);

const DatabaseSpark = ({ points, tone = "purple" }) => (
  <svg className={`database-process__spark is-${tone}`} viewBox="0 0 240 72" preserveAspectRatio="none"><polyline points={toSparklinePoints(points, 240, 72)} /></svg>
);

const DatabaseStats = ({ items }) => (
  <div className="database-process__stats">{items.map(([label, value, change]) => <span key={label}><small>{label}</small><b>{value}</b><em>{change}</em></span>)}</div>
);

const DatabaseEngineSlide = ({ engine }) => {
  const data = {
    PostgreSQL: { description: "Powerful, open-source relational database.", stats: [["Databases", "12", "+2"], ["Total Size", "1.8 TB", "+8%"], ["Connections", "256", "+5%"], ["Uptime", "99.98%", "+0.01%"]], rows: [["app_production", "612 GB", "84", "310", "Healthy"], ["analytics", "512 GB", "62", "186", "Healthy"], ["auth_service", "240 GB", "32", "98", "Healthy"], ["reporting", "198 GB", "28", "75", "Healthy"], ["logging", "140 GB", "18", "45", "Healthy"]], cards: [["Replication", "3 Primary / 6 Replica", "Streaming replication"], ["Backups", "Daily at 02:00 AM", "7 day retention"], ["Maintenance", "Auto Vacuum", "Enabled"], ["Extensions", "12 Enabled", "PostGIS, pg_stat_statements"]] },
    MySQL: { description: "Reliable and high-performing relational database.", stats: [["Databases", "8", "+1"], ["Total Size", "956 GB", "+6%"], ["Connections", "198", "+3%"], ["Uptime", "99.97%", "+0.01%"]], rows: [["ecommerce", "412 GB", "72", "248", "Healthy"], ["identity", "196 GB", "36", "102", "Healthy"], ["inventory", "156 GB", "28", "86", "Healthy"], ["notifications", "112 GB", "20", "64", "Healthy"], ["payments", "78 GB", "16", "41", "Healthy"]], cards: [["Replication", "1 Primary / 3 Replica", "Semi-sync enabled"], ["Backups", "Daily at 03:00 AM", "14 day retention"], ["Maintenance", "Optimize Tables", "Scheduled"], ["Engine", "InnoDB", "Default engine"]] },
    MongoDB: { description: "Flexible NoSQL document database.", stats: [["Clusters", "3", "+1"], ["Total Data", "1.2 TB", "+11%"], ["Collections", "48", "+3"], ["Uptime", "99.95%", "+0.01%"]], rows: [["user_profiles", "12", "430 GB", "320", "Healthy"], ["activity_logs", "8", "290 GB", "210", "Healthy"], ["catalog", "14", "210 GB", "180", "Healthy"], ["audit_logs", "6", "160 GB", "90", "Healthy"], ["settings", "8", "110 GB", "70", "Healthy"]], cards: [["Replica Sets", "3 Shards / 9 Nodes", "High availability"], ["Backups", "Continuous (PITR)", "14 day retention"], ["Indexes", "102 Total", "Optimized"], ["Storage Engine", "WiredTiger", "Compression enabled"]] },
  }[engine];
  return <div className="database-process__engine"><header><span><i>{engine === "PostgreSQL" ? 2 : engine === "MySQL" ? 3 : 4}</i><b>{engine}</b></span><small>{data.description}</small></header><DatabaseStats items={data.stats} /><div className="database-process__engine-grid"><DatabasePanel title="Top Databases"><DatabaseRows className="is-table" rows={data.rows} /><button type="button">View all databases</button></DatabasePanel><DatabasePanel title="Performance (P95)"><small>Query Time (ms)</small><DatabaseSpark points={[38,31,45,42,55,48,60,54,69,63,78,65,73,82,74]} /><small>TPS / Operations</small><DatabaseSpark points={[20,29,25,31,28,38,36,44,42,51,47,60,55,64]} tone="violet" /></DatabasePanel></div><div className="database-process__info-cards">{data.cards.map(([title, value, detail]) => <span key={title}><small>{title}</small><b>{value}</b><em>{detail}</em></span>)}</div></div>;
};

const DatabaseProcessWorkspace = ({ config, activeStage }) => {
  const architecture = <div className="database-process__architecture"><DatabasePanel title="Data Architecture Overview"><div className="database-process__layers"><div><b>Application Layer</b>{["Web / Mobile", "Services", "APIs"].map(x => <span key={x}>{x}</span>)}</div><i>→</i><div className="is-primary"><b>Data Layer</b>{["Relational DB", "NoSQL DB", "Cache"].map(x => <span key={x}>{x}</span>)}</div><i>→</i><div><b>Storage Layer</b>{["Object Storage", "Backups", "Data Lake"].map(x => <span key={x}>{x}</span>)}</div></div><div className="database-process__principles">{[["Scalable", "Horizontal scaling"], ["Reliable", "High availability"], ["Secure", "Encryption & IAM"], ["Optimized", "Performance tuned"]].map(([a,b]) => <span key={a}><FaDatabase /><b>{a}</b><small>{b}</small></span>)}</div></DatabasePanel><DatabasePanel title="Key Metrics (Overview)"><div className="database-process__metric-trends">{[["Total Databases", "24", [20,21,20,24,22,25,23,26]], ["Total Storage", "4.2 TB", [18,22,20,24,21,27,25,31]], ["Avg Query Time (P95)", "182 ms", [30,24,32,27,35,29,34,28]], ["Availability", "99.98%", [20,21,20,22,21,23,22,29]]].map(([label,value,points],index) => <span key={label}><small>{label}</small><b>{value}</b><em>{index === 2 ? "↓ 18%" : "↑ healthy"}</em><DatabaseSpark points={points} tone={index === 2 ? "cyan" : "purple"} /></span>)}</div></DatabasePanel></div>;

  const orm = <div className="database-process__orm"><header><span><i>5</i><b>Entity Framework & Eloquent</b></span><small>ORMs for productive and maintainable data access.</small></header><div className="database-process__orm-grid"><DatabasePanel title="Entity Framework (EF Core)"><DatabaseRows rows={[["DbContexts", "16"], ["Entities", "86"], ["Migrations", "42"], ["Relationships", "126"], ["Avg Query Time (P95)", "128 ms"]]} /></DatabasePanel><DatabasePanel title="Top Slow Queries (P95)"><DatabaseRows rows={[["GetOrdersWithItems", "512 ms"], ["GetUserActivity", "386 ms"], ["SearchProducts", "246 ms"], ["GetDashboardStats", "190 ms"], ["GetNotifications", "165 ms"]]} /><button type="button">View all slow queries</button></DatabasePanel><DatabasePanel title="Eloquent (Laravel)"><DatabaseRows rows={[["Models", "32"], ["Relationships", "74"], ["Scopes", "18"], ["Accessors", "26"], ["Avg Query Time (P95)", "110 ms"]]} /></DatabasePanel></div><DatabasePanel title="Best Practices"><div className="database-process__best-practices">{[["Eager Loading", "Reduce N+1"], ["Query Caching", "Improve performance"], ["Index Hints", "Optimize queries"], ["Soft Deletes", "Data safety"], ["Connection Pooling", "Efficient usage"]].map(([a,b]) => <span key={a}><FaCheckCircle /><b>{a}</b><small>{b}</small></span>)}</div></DatabasePanel></div>;

  const performance = <div className="database-process__performance"><header><span><i>6</i><b>Performance</b></span><small>Optimize queries, indexes and database performance.</small></header><DatabaseStats items={[["Avg Query Time (P95)", "182 ms", "↓ 18%"], ["Throughput (QPS)", "1.6K", "↑ 12%"], ["Cache Hit Rate", "92.6%", "↑ 6.8%"], ["Slow Queries", "24", "↓ 42%"]]} /><DatabasePanel title="Top Slow Queries"><DatabaseRows className="is-table" rows={[["GetOrdersWithItems", "1,248", "512", "High"], ["GetUserActivity", "958", "360", "High"], ["SearchProducts", "642", "249", "Medium"], ["GetDashboardStats", "592", "190", "Medium"], ["GetNotifications", "431", "165", "Low"]]} /><button type="button">View all slow queries</button></DatabasePanel><DatabasePanel title="Index Usage"><div className="database-process__donut"><b>68%</b><small>Used</small></div><DatabaseRows rows={[["Used", "68%"], ["Unused", "18%"], ["Low Usage", "14%"]]} /></DatabasePanel><DatabasePanel title="Optimization Actions" className="database-process__panel--wide"><DatabaseRows rows={[["Add missing indexes", "5 pending"], ["Update table statistics", "Completed"], ["Remove unused indexes", "2 pending"], ["Rebuild table caches", "In progress"]]} /></DatabasePanel></div>;

  const monitor = <div className="database-process__monitor"><DatabasePanel title="System Health"><div className="database-process__health-list">{[["Database Uptime", "99.98%"], ["Replication Lag", "12ms"], ["Cache Success Rate", "92.6%"], ["Connection Usage", "65%"], ["Disk Usage", "68%"], ["Stability", "Healthy"]].map(([a,b]) => <span key={a}><small>{a}</small><b>{b}</b><i /></span>)}</div></DatabasePanel><DatabasePanel title="Performance Trend (P95)"><DatabaseSpark points={[60,68,62,75,70,82,79,85,72,83,88,80,86,78]} /><DatabaseSpark points={[42,50,45,55,49,60,54,62,58,66,61,70,63]} tone="pink" /><DatabaseSpark points={[22,28,25,34,29,38,31,41,35,44,38,47,40]} tone="blue" /></DatabasePanel><div className="database-process__monitor-stack"><DatabasePanel title="Resource Usage"><div className="database-process__mini-rings">{[["CPU",23], ["Memory",45], ["Disk I/O",28], ["Connections",65]].map(([a,b]) => <span key={a} style={{"--db-value":b}}><i><b>{b}%</b></i><small>{a}</small></span>)}</div></DatabasePanel><DatabasePanel title="Storage Growth"><div className="database-process__bars">{[20,28,34,42,48,55,61,69,76,84,91].map((v,i) => <i key={i} style={{height:`${v}%`}} />)}</div><b>4.2 TB <em>↑ 12%</em></b></DatabasePanel></div><DatabasePanel title="Recent Alerts"><DatabaseRows rows={[["High latency detected (P95 > 500ms)", "10:42 AM"], ["Replication lag high on analytics-replica", "09:58 AM"], ["Slow query: GetOrdersWithItems", "09:15 AM"], ["Backup completed successfully", "Yesterday"], ["Disk usage above 80%", "Yesterday"]]} /><button type="button">View all alerts</button></DatabasePanel><DatabasePanel title="Recommended Actions"><DatabaseRows rows={[["Add index on orders.created_at", "High"], ["Optimize GetOrdersWithItems query", "High"], ["Archive old audit_logs", "Medium"], ["Increase connection pool size", "Medium"], ["Enable compressed backups", "Low"]]} /><button type="button">View all actions</button></DatabasePanel><div className="database-process__integrations">{["Prometheus", "Grafana", "Datadog", "New Relic", "Sentry", "PagerDuty"].map(x => <span key={x}>{x}</span>)}</div></div>;

  const stages = [architecture, <DatabaseEngineSlide engine="PostgreSQL" key="pg" />, <DatabaseEngineSlide engine="MySQL" key="mysql" />, <DatabaseEngineSlide engine="MongoDB" key="mongo" />, orm, performance, monitor];
  return <div className="database-process" aria-hidden="true"><div className="database-process__viewport"><div key={activeStage} className={`database-process__stage database-process__stage--${activeStage + 1} capability-stage-transition`}>{stages[activeStage]}</div><footer><span>{`Step ${activeStage + 1} of ${config.stages.length} · ${config.stages[activeStage]}`}</span><em>{activeStage === 6 ? "● LIVE" : "SCROLL TO SCRUB"}</em></footer></div></div>;
};

const CloudPanel = ({ title, children, className = "" }) => <section className={`cloud-process__panel${className ? ` ${className}` : ""}`}>{title && <h5>{title}</h5>}{children}</section>;
const CloudRows = ({ rows, className = "" }) => <div className={`cloud-process__rows${className ? ` ${className}` : ""}`}>{rows.map(row => <div key={row[0]}>{row.map((cell,index) => <span key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}</div>;
const CloudStats = ({ items }) => <div className="cloud-process__stats">{items.map(([label,value,change]) => <span key={label}><small>{label}</small><b>{value}</b>{change && <em>{change}</em>}</span>)}</div>;
const CloudSpark = ({ points, tone = "blue" }) => <svg className={`cloud-process__spark is-${tone}`} viewBox="0 0 240 72" preserveAspectRatio="none"><polyline points={toSparklinePoints(points,240,72)} /></svg>;
const CloudStageHeader = ({ number, title, subtitle }) => <header className="cloud-process__heading"><span><i>{number}</i><b>{title}</b></span>{subtitle && <small>{subtitle}</small>}</header>;

const CloudProcessWorkspace = ({ config, activeStage }) => {
  const architecture = <div className="cloud-process__architecture"><div className="cloud-process__intro"><CloudStageHeader number="1" title="Architecture & DevOps" subtitle="High-level cloud architecture built for scale, security and velocity." /><CloudPanel title="Core Principles"><div className="cloud-process__principles">{[["Scalable","Auto scale to meet demand"],["Reliable","High availability & resilience"],["Secure","Defense in depth & IAM"],["Automated","CI/CD & infrastructure as Code"]].map(([a,b]) => <span key={a}><FaShieldAlt /><b>{a}</b><small>{b}</small></span>)}</div></CloudPanel></div><div className="cloud-process__layers">{[["Edge & Network",["Route 53","CloudFront","WAF","Shield"]],["Application / Services Layer",["Web App","API Gateway","Lambda","Background Jobs"]],["Infrastructure Layer",["EC2","ECS","RDS","ElastiCache","S3"]],["Observability & Security",["CloudWatch","CloudTrail","GuardDuty","IAM"]]].map(([label,items]) => <CloudPanel title={label} key={label}><div>{items.map(item => <span key={item}>{item}</span>)}</div></CloudPanel>)}</div><CloudPanel title="Deployment Flow"><div className="cloud-process__vertical-flow">{["Code Commit","Build & Test","Security Scan","Deploy to Staging","Approve & Release","Deploy to Prod","Monitor & Iterate"].map(item => <span key={item}><FaCheckCircle />{item}</span>)}</div></CloudPanel></div>;

  const aws = <div className="cloud-process__aws"><CloudStageHeader number="2" title="AWS Services" subtitle="Core AWS services powering our applications." /><CloudStats items={[["Cost (MTD)","$2,842","▼ 4.4% vs last month"],["Health","98.7%","▲ 1.9 pts"],["Availability","99.95%","30d rolling"],["Requests","12.4M","▲ 16% vs last month"]]} /><CloudPanel title="Service Overview"><div className="cloud-process__services">{[["EC2 Instances","12","Running","92%"],["S3 Buckets","54","Healthy","100%"],["RDS Databases","6","Healthy","91%"],["CloudFront Dist.","38","Healthy","98%"],["Lambda Functions","18","Healthy","93%"],["Route 53 Zones","45","Healthy","100%"]].map(row => <span key={row[0]}><i>{row[0].slice(0,2)}</i><b>{row[0]}</b><strong>{row[1]}</strong><em>{row[2]}</em><small>{row[3]}</small></span>)}</div></CloudPanel><div className="cloud-process__aws-side"><CloudPanel title="Resource Utilization"><div className="cloud-process__multi-chart"><CloudSpark points={[70,60,55,52,48,45,40,47,52,58,61,54,48,55]} tone="orange"/><CloudSpark points={[34,48,55,63,72,61,49,58,69,74,65,62,68,76]}/><CloudSpark points={[25,28,22,19,18,20,27,30,26,33,25,24,31,29]} tone="green"/></div></CloudPanel><CloudPanel title="Recent Events"><CloudRows rows={[["RDS backup completed","2m ago","Success"],["Auto Scaling group scaled out","7m ago","Success"],["WAF rule updated","18m ago","Success"],["Lambda error rate spiked","1h ago","Warning"]]} /></CloudPanel></div></div>;

  const docker = <div className="cloud-process__docker"><div className="cloud-process__intro"><CloudStageHeader number="3" title="Docker Containers" subtitle="Containerized services for consistency and portability." /><CloudPanel title="Container Ecosystem"><div className="cloud-process__container-flow">{[["Source Code","Version Control"],["Dockerfile","Build Definition"],["Docker Images","Versioned & Scanned"],["Container Registry","ECR / Docker Hub"]].map(([a,b],i) => <span key={a} className={i===3?"is-active":""}><FaDocker /><b>{a}</b><small>{b}</small></span>)}</div></CloudPanel></div><div className="cloud-process__docker-main"><CloudPanel title="Running Containers"><CloudRows className="is-table" rows={[["Service","Image","Status","Replicas","CPU","Memory"],["web-app","web-app:1.2.3","● Running","3/3","42%","512MiB"],["api-service","api:1.2.3","● Running","4/4","48%","768MiB"],["worker","worker:1.2.3","● Running","2/2","31%","256MiB"],["scheduler","scheduler:1.2.3","● Running","1/1","18%","128MiB"],["nginx","nginx:1.25","● Running","2/2","22%","128MiB"]]} /></CloudPanel><CloudPanel title="Environment Consistency"><div className="cloud-process__consistency">{[["Build Once","Immutable Images"],["Run Anywhere","Consistent Environments"],["Scale Effortlessly","Orchestrated Deployments"]].map(([a,b]) => <span key={a}><FaDocker /><b>{a}</b><small>{b}</small></span>)}</div></CloudPanel></div></div>;

  const actions = <div className="cloud-process__actions"><div className="cloud-process__intro"><CloudStageHeader number="4" title="GitHub Actions" subtitle="Automate CI workflows and ship with confidence." /><CloudPanel title="Workflow Overview"><CloudRows rows={[["Total Workflows","28"],["Runs This Month","412"],["Success Rate","94.2%"],["Avg. Duration","8m 42s"]]} /></CloudPanel></div><div className="cloud-process__actions-main"><CloudPanel title="CI Pipeline"><div className="cloud-process__horizontal-flow">{[["Lint","1m 12s"],["Test","2m 46s"],["Build","3m 10s"],["Scan","1m 30s"],["Deploy","2m 05s"]].map(([a,b]) => <span key={a}><b>{a}</b><small><FaCheckCircle />{b}</small></span>)}</div></CloudPanel><CloudPanel title="Recent Workflow Runs"><CloudRows className="is-table" rows={[["Workflow","Branch","Commit","Status","Duration","Time"],["Main Pipeline","main","a1b2c3d","● Success","8m 42s","5m ago"],["Pull Request","feature/auth","d4e5f6g","● Success","7m 28s","25m ago"],["Frontend","main","c7d8e9f","● Success","6m 55s","1h ago"],["Security Scan","develop","e1f2a3b","× Failed","2m 10s","2h ago"]]} /></CloudPanel></div></div>;

  const edge = <div className="cloud-process__edge"><div className="cloud-process__intro"><CloudStageHeader number="5" title="Cloudflare & GitLab" subtitle="Edge delivery, security and source-to-deploy integration." /><CloudPanel title="Cloudflare Edge"><CloudRows rows={[["CDN","Global caching","Healthy","99.2%"],["DNS","Anycast DNS","Healthy","99.9%"],["WAF","Threat protection","Healthy","99.6%"],["Caching","Page & asset cache","Healthy","98.7%"],["Analytics","Real-time insights","Healthy","97.8%"]]} /></CloudPanel></div><CloudPanel title="Traffic Overview (24h)" className="cloud-process__traffic"><CloudStats items={[["Requests","8.7M","↑ 22%"],["Bandwidth","312 GB","↑ 18%"],["Cache Hit Ratio","86%","↑ 6%"]]} /><div className="cloud-process__map"><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><b>Global edge traffic</b></div></CloudPanel><CloudPanel title="GitLab"><CloudRows rows={[["Repositories","17"],["Branches","63"],["Merge Requests","28"],["Pipelines (MTD)","214"],["Success Rate","92.5%"]]} /></CloudPanel><CloudPanel title="Integration Flow" className="cloud-process__panel--wide"><div className="cloud-process__horizontal-flow">{["GitLab Commit","GitLab CI Pipeline","Build & Test","Container Image","Deploy via Cloudflare / AWS"].map(item => <span key={item}><FaCheckCircle /><b>{item}</b></span>)}</div></CloudPanel></div>;

  const delivery = <div className="cloud-process__delivery"><CloudStageHeader number="6" title="Delivery Pipeline" /><CloudPanel><div className="cloud-process__release-flow">{[["Commit","Code pushed"],["Build","Compile & Package"],["Test","Automated Tests"],["Staging","Pre-Production"],["Production","Live Environment"]].map(([a,b],i) => <span key={a} className={i===4?"is-prod":""}><i>{i+1}</i><b>{a}</b><small>{b}</small></span>)}</div></CloudPanel><CloudPanel title="Pipeline Status"><CloudRows className="is-table" rows={[["Branch","Commit","Status","Duration","Time"],["main","a1b2c3d","● Success","8m 42s","5m ago"],["develop","d4e5f6g","● Success","7m 26s","15m ago"],["feature/auth","e7f8a9b","◌ In Progress","5m 30s","2m ago"]]} /></CloudPanel><CloudPanel title="Quality Gates"><CloudRows rows={[["All tests passing","Passed"],["Security scan clean","Passed"],["Performance budget","Passed"],["Manual approval","Approved"]]} /></CloudPanel><CloudPanel title="Deployment Metrics (MTD)"><CloudStats items={[["Deployments","128","↑ 15%"],["Lead Time","2h 18m","↓ 12%"],["Change Fail Rate","2.1%","↓ 0.4%"],["MTTR","28m","↓ 20%"]]} /></CloudPanel><CloudPanel title="Release Confidence"><div className="cloud-process__gauge"><b>96%</b><small>High Confidence</small></div></CloudPanel></div>;

  const monitor = <div className="cloud-process__monitor"><CloudStageHeader number="7" title="Monitor & Improve" subtitle="Continuously observe, learn, and optimize for reliability and performance." /><div className="cloud-process__monitor-grid"><CloudPanel title="System Health"><div className="cloud-process__uptime"><b>99.3%</b><small>Overall Uptime</small></div><CloudRows rows={[["Web App","99.9%"],["API","99.7%"],["Database","99.5%"],["Workers","99.2%"],["Edge (CDN)","99.9%"]]} /></CloudPanel><CloudPanel title="Performance (24h)">{[["Latency (P95)","142 ms","blue"],["Throughput","1.24K req/s","blue"],["Error Rate","0.21%","orange"]].map(([a,b,c],i) => <span className="cloud-process__perf" key={a}><small>{a}</small><b>{b}</b><CloudSpark points={[22,28+i*2,24,35,29,38,31,42,36,45,39]} tone={c}/></span>)}</CloudPanel><CloudPanel title="Incidents & Alerts"><CloudRows rows={[["High error rate on /api/login","Resolved","12m ago"],["DB CPU utilization high","Investigating","28m ago"],["Lambda timeout errors","Investigating","1h ago"],["WAF blocked malicious traffic","Investigating","2h ago"],["Deployment completed","Informational","3h ago"]]} /></CloudPanel><CloudPanel title="Logs Insights"><div className="cloud-process__log-bars">{[["ValidationError",32],["TimeoutError",24],["DatabaseError",18],["RateLimitExceeded",12],["Other",14]].map(([a,b]) => <span key={a}><small>{a}</small><b>{b}%</b><i style={{width:`${b*2.6}%`}} /></span>)}</div></CloudPanel><CloudPanel title="Recommendations"><CloudRows rows={[["Enable RDS read replicas","High"],["Optimize CloudFront TTL","Medium"],["Right-size EC2 instances","Low"]]} /></CloudPanel><CloudPanel title="Integrations"><CloudRows rows={[["CloudWatch","Connected"],["Datadog","Connected"],["Sentry","Connected"],["PagerDuty","Connected"]]} /></CloudPanel></div></div>;

  const stages=[architecture,aws,docker,actions,edge,delivery,monitor];
  return <div className="cloud-process" aria-hidden="true"><div className="cloud-process__viewport"><div key={activeStage} className={`cloud-process__stage cloud-process__stage--${activeStage+1} capability-stage-transition`}>{stages[activeStage]}</div><footer><span>{`Step ${activeStage+1} of ${config.stages.length} · ${config.stages[activeStage]}`}</span><em>SCROLL TO SCRUB</em></footer></div></div>;
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
  const autoplayPausedRef = useRef(false);
  const overlayRef = useRef(null);
  const [progress, setProgress] = useState(processStageSeekPoints[0]);
  const [activeStage, setActiveStage] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const frontendStageDetails = category.title === "Frontend Development"
    ? getFrontendStageDetails(config, activeStage)
    : null;

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
        !autoplayPausedRef.current &&
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

  const toggleAutoplay = () => {
    const nextPaused = !autoplayPausedRef.current;
    autoplayPausedRef.current = nextPaused;
    lastFrameRef.current = performance.now();
    setAutoplayPaused(nextPaused);
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
        className={`frontend-process${config.layout === "seo-process" ? " frontend-process--seo" : ""}${config.layout === "quality-process" ? " frontend-process--quality" : ""}${config.layout === "database-process" ? " frontend-process--database" : ""}${config.layout === "cloud-process" ? " frontend-process--cloud" : ""}${config.layout === "flow" ? " frontend-process--flow" : ""}${config.layout === "frontend-flow" ? " frontend-process--frontend-flow" : ""}`}
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
          className="frontend-process__autoplay-toggle"
          onClick={toggleAutoplay}
          aria-label={autoplayPaused ? "Resume slide autoplay" : "Pause slide autoplay"}
          aria-pressed={autoplayPaused}
          title={autoplayPaused ? "Resume autoplay" : "Pause autoplay"}
        >
          {autoplayPaused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}
        </button>
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
      {config.layout === "frontend-flow" ? (
        <FrontendFlowWorkspace config={config} activeStage={activeStage} />
      ) : config.layout === "flow" ? (
        <BackendFlowWorkspace config={config} activeStage={activeStage} totalStages={processStages.length} />
      ) : config.layout === "seo-process" ? (
        <SeoProcessWorkspace config={config} activeStage={activeStage} />
      ) : config.layout === "quality-process" ? (
        <QualityProcessWorkspace config={config} activeStage={activeStage} />
      ) : config.layout === "database-process" ? (
        <DatabaseProcessWorkspace config={config} activeStage={activeStage} />
      ) : config.layout === "cloud-process" ? (
        <CloudProcessWorkspace config={config} activeStage={activeStage} />
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

            {frontendStageDetails && (
              <div className="frontend-process__stage-overlay" aria-hidden="true">
                <header>
                  <small>{`Step ${activeStage + 1} · ${frontendStageDetails.label}`}</small>
                  <strong>{frontendStageDetails.headline}</strong>
                </header>
                <ul>
                  {frontendStageDetails.points.map((point) => (
                    <li key={point}><FaCheckCircle /> {point}</li>
                  ))}
                </ul>
                <div className="frontend-process__stage-chips">
                  {frontendStageDetails.chips.map((chip) => <code key={chip}>{chip}</code>)}
                </div>
                <div className="frontend-process__stage-metrics">
                  {frontendStageDetails.metrics.map(([value, label]) => (
                    <span key={label}><b>{value}</b><small>{label}</small></span>
                  ))}
                </div>
              </div>
            )}

            <p className="frontend-process__step-note" aria-hidden="true">
              {`Step ${activeStage + 1} of ${processStages.length} · ${processStages[activeStage]}`}
            </p>
          </div>
        </>
      )}
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
