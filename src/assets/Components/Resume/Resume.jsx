const experience = [
  {
    role: "Full-Stack Developer — Host Guest Platform",
    company: "Professional Project",
    period: "2025 — Present",
    summary: "Building a Laravel homestay platform with booking workflows, payments, real-time messaging, maps, and AI-assisted identity verification.",
  },
  {
    role: "Full-Stack Developer",
    company: "TTP",
    period: "2024 — 2025",
    summary: "Delivered responsive map search, authentication improvements, reservation interfaces, and backend features with React, C#, and PostgreSQL.",
  },
  {
    role: "Full-Stack Developer / DevOps",
    company: "Megasys Inc",
    period: "2020 — 2024",
    summary: "Built financial application features with React and .NET, improved UI testing with Playwright, and supported delivery across the stack.",
  },
  {
    role: "Web Developer / SEO Specialist",
    company: "AdIQ",
    period: "2016 — 2019",
    summary: "Created SEO-focused websites and automation tools while leading production improvements for the web team.",
  },
  {
    role: "IT Specialist",
    company: "Various Companies",
    period: "2007 — 2014",
    summary: "Supported software, hardware, networks, and day-to-day technical operations.",
  },
];

const capabilities = [
  ["Frontend", "React, TypeScript, JavaScript, Tailwind CSS, Material UI"],
  ["Backend", "Laravel, PHP, Node.js, NestJS, C#, ASP.NET"],
  ["Data", "PostgreSQL, MySQL, SQL Server, Prisma, Entity Framework"],
  ["Delivery", "AWS, Docker, GitHub, Railway, Playwright, Cypress"],
];

const Resume = () => (
  <main className="page-shell">
    <div className="noise" />
    <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-24 pt-28 sm:px-8">
      <header className="grid gap-8 border-b border-[var(--line)] pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
        <div>
          <p className="mono mb-6 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">03 / Resume</p>
          <h1 className="editor-hero max-w-[9ch]">Experience, applied.</h1>
        </div>
        <p className="text-lg leading-8 text-[var(--muted)]">
          Full-stack engineering experience across product development,
          financial software, DevOps, e-commerce, and technical operations.
        </p>
      </header>

      <section className="section grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mono mb-6 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">Capabilities</p>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {capabilities.map(([title, detail]) => (
              <div key={title} className="py-5">
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{detail}</p>
              </div>
            ))}
          </div>
          <a href="mailto:Moosorkh@gmail.com" className="mono mt-8 inline-block border-b border-[var(--accent)] pb-1 text-[11px] uppercase tracking-[0.14em]">
            Request full résumé
          </a>
        </div>

        <div>
          <p className="mono mb-6 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">Work history</p>
          <div className="border-t border-[var(--line)]">
            {experience.map((job, index) => (
              <article key={`${job.company}-${job.period}`} className="grid gap-4 border-b border-[var(--line)] py-7 sm:grid-cols-[48px_1fr_auto]">
                <span className="mono text-[10px] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="display text-xl font-semibold">{job.role}</h2>
                  <p className="mono mt-2 text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]">{job.company}</p>
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">{job.summary}</p>
                </div>
                <span className="mono whitespace-nowrap text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">{job.period}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default Resume;
