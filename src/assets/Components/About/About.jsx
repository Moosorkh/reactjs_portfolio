import { Link } from "react-router-dom";
import avatar from "../../7358602-removebg-preview.png";
import WeatherDashboardImage from "../../weatherdashboard.png";
import MapListToggleImage from "../../MapListToggleImage.png";
import invoiceTrackerImage from "../../invoiceTracker.png";
import sweetCreations from "../../sweetCreations.png";

const featuredProjects = [
  {
    id: "host-guest",
    title: "Host Guest - Homestay Booking Platform",
    blurb:
      "Laravel booking platform with AI identity verification, payments, and real-time messaging.",
    image: "https://test.hostguest.net/assets/images/outdoors.jpg",
    tags: ["Laravel", "PHP", "AWS", "Firebase"],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    blurb:
      "Weather experience with history, forecasts, and a responsive dark UI.",
    image: WeatherDashboardImage,
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
  },
  {
    id: "map-search",
    title: "Mobile-responsive Map Search",
    blurb:
      "Map and list toggle with filtering and mobile-first interactions.",
    image: MapListToggleImage,
    tags: ["React", "Leaflet", "JavaScript"],
  },
  {
    id: "invoice-tracker",
    title: "Invoice Tracker",
    blurb:
      "PERN stack invoice CRUD app with auth, PDF export, and deployment.",
    image: invoiceTrackerImage,
    tags: ["React", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    id: "sweet-creations",
    title: "Mary's Sweet Creations",
    blurb:
      "Elegant pastry portfolio with swipeable carousel and polished media flow.",
    image: sweetCreations,
    tags: ["React", "MUI", "Responsive Design"],
  },
];

const stats = [
  { label: "experience", value: "8+ years" },
  { label: "shipped", value: "15+ projects" },
  { label: "focus", value: "web platforms" },
];

const stackColumns = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Laravel / PHP", "C# / ASP.NET", "REST APIs"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "Infra",
    items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Railway"],
  },
];

const experience = [
  {
    year: "2025 - now",
    title: "Full-Stack Developer · Host Guest",
    description:
      "Built the booking platform end to end with AI verification, payments, and messaging.",
  },
  {
    year: "2024 - 2025",
    title: "Full-Stack Developer · TTP",
    description:
      "Shipped map search, authentication, and interactive reservation workflows.",
  },
  {
    year: "2020 - 2024",
    title: "Full-Stack Developer / DevOps · Megasys",
    description:
      "Worked on financial apps in C#/.NET and introduced testing workflows and delivery improvements.",
  },
  {
    year: "2016 - 2019",
    title: "Web Developer / SEO · AdIQ",
    description:
      "Built SEO-focused websites and automation tooling, improving search performance and output.",
  },
];

const About = () => {
  return (
    <main id="top" className="page-shell">
      <div className="noise" />
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <header className="border-b border-[var(--line)] pt-28 pb-8">
          <div className="mono mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Available for full-stack work · Los Angeles
          </div>
          <h1 className="editor-hero mb-10 max-w-[12ch]">
            Full-stack engineering,
            <br />
            <span className="text-[var(--accent)]">end to end.</span>
          </h1>
          <div className="grid gap-10 pb-10 lg:grid-cols-[1.5fr_1fr]">
            <p className="max-w-3xl text-[clamp(17px,1.6vw,21px)] leading-[1.6] text-[var(--muted)]">
              I build product-grade web systems with React, TypeScript,
              Laravel, and C#/.NET. The focus is practical: clean data models,
              sharp interfaces, and shipping work that feels deliberate.
            </p>
            <div className="mono grid gap-3 text-[12px]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between border-b border-[var(--line)] pb-3"
                >
                  <span className="text-[var(--muted)]">{stat.label}</span>
                  <span>{stat.value}</span>
                </div>
              ))}
              <div className="flex gap-4 pt-1">
                <a className="accent-underline text-[var(--text)]" href="mailto:Moosorkh@Gmail.com">
                  Email
                </a>
                <a className="text-[var(--muted)]" href="https://github.com/Moosorkh" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a className="text-[var(--muted)]" href="https://www.linkedin.com/in/irdmousa/" target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="overflow-hidden border-b border-[var(--line)] py-4">
          <div className="mono flex w-max animate-[marq_40s_linear_infinite] gap-10 text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Laravel</span>
            <span>C# .NET</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Laravel</span>
          </div>
        </section>

        <section id="work" className="section">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="editor-title">Selected work</h2>
            <span className="mono text-[12px] tracking-[0.14em] text-[var(--muted)]">
              01 / PROJECTS
            </span>
          </div>
          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="grid gap-6 border-b border-[var(--line)] pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
              >
                <div className="overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <div className="mono mb-3 text-[11px] tracking-[0.14em] text-[var(--accent)]">
                    0{index + 1}
                  </div>
                  <h3 className="display mb-4 text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.05]">
                    {project.title}
                  </h3>
                  <p className="mb-5 max-w-xl text-[16px] leading-[1.6] text-[var(--muted)]">
                    {project.blurb}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded-full border border-[var(--line)] px-3 py-1 text-[11px] text-[var(--text)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="editor-title">About</h2>
            <span className="mono text-[12px] tracking-[0.14em] text-[var(--muted)]">
              02 / PROFILE
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
              <img
                src={avatar}
                alt="Mehdi Azar"
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="display text-[clamp(22px,2.8vw,34px)] font-semibold leading-[1.3] tracking-[-0.01em]">
                I care about systems that hold up: clean APIs, honest data
                models, and interfaces that do not fight the user.
              </p>
              <p className="max-w-3xl text-[16.5px] leading-[1.75] text-[var(--muted)]">
                My work spans homestay booking platforms with AI identity
                verification, financial applications in C# and .NET, and
                e-commerce storefronts. I tend to work across the full stack
                and prefer architectures that stay maintainable once the first
                version ships.
              </p>
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="editor-title">Stack</h2>
            <span className="mono text-[12px] tracking-[0.14em] text-[var(--muted)]">
              03 / TOOLBOX
            </span>
          </div>
          <div className="grid border-t border-[var(--line)] lg:grid-cols-4">
            {stackColumns.map((column, index) => (
              <div
                key={column.title}
                className={`border-[var(--line)] py-6 ${
                  index < stackColumns.length - 1 ? "lg:border-r" : ""
                } ${index > 0 ? "border-t lg:border-t-0" : ""} ${
                  index === 0 ? "pr-6" : "px-6"
                } ${index === stackColumns.length - 1 ? "pl-6 pr-0" : ""}`}
              >
                <div className="mono mb-5 text-[11.5px] tracking-[0.14em] text-[var(--accent)]">
                  {column.title.toUpperCase()}
                </div>
                <div className="grid gap-2 text-[15px] text-[var(--muted)]">
                  {column.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="section">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="editor-title">Path</h2>
            <span className="mono text-[12px] tracking-[0.14em] text-[var(--muted)]">
              04 / EXPERIENCE
            </span>
          </div>
          <div>
            {experience.map((job) => (
              <article
                key={job.year}
                className="grid gap-4 border-t border-[var(--line)] py-7 lg:grid-cols-[150px_1fr]"
              >
                <div className="mono text-[12px] text-[var(--accent)]">
                  {job.year}
                </div>
                <div>
                  <h3 className="display mb-1 text-[19px] font-semibold">
                    {job.title}
                  </h3>
                  <p className="max-w-3xl text-[15.5px] leading-[1.65] text-[var(--muted)]">
                    {job.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section pb-24">
          <div className="mono mb-7 text-[12px] tracking-[0.14em] text-[var(--muted)]">
            05 / CONTACT
          </div>
          <h2 className="display mb-8 max-w-[13ch] text-[clamp(42px,8vw,116px)] font-bold leading-[0.94] tracking-[-0.03em]">
            Let&apos;s build something<span className="text-[var(--accent)]">.</span>
          </h2>
          <p className="mb-10 max-w-[30rem] text-[18px] leading-[1.65] text-[var(--muted)]">
            Open to full-stack roles and collaborations. Email is the fastest
            way to reach me.
          </p>
          <a
            href="mailto:Moosorkh@Gmail.com"
            className="display inline-block border-b border-[var(--accent)] pb-2 text-[clamp(24px,3.6vw,50px)] font-bold tracking-[-0.02em]"
          >
            Moosorkh@Gmail.com
          </a>
          <div className="mono mt-12 flex flex-wrap gap-6 text-[12.5px]">
            <a className="text-[var(--muted)]" href="https://github.com/Moosorkh" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="text-[var(--muted)]" href="https://www.linkedin.com/in/irdmousa/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <Link className="text-[var(--muted)]" to="/resume">
              Résumé ↓
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
