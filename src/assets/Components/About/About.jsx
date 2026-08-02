import { Link } from "react-router-dom";
import avatar from "../../7358602-removebg-preview.png";

const stats = [
  { label: "experience", value: "8+ years" },
  { label: "shipped", value: "15+ projects" },
  { label: "focus", value: "web platforms" },
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

        <section id="about" className="section">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="editor-title">About Me</h2>
            <span className="mono text-[12px] tracking-[0.14em] text-[var(--muted)]">
              01 / PROFILE
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
              <p className="max-w-3xl text-[16.5px] leading-[1.75] text-[var(--muted)]">
                I care less about novelty for its own sake and more about
                reliable systems, sharp UX, and delivery that survives real
                production use.
              </p>
              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  to="/portfolio"
                  className="surface inline-flex items-center px-5 py-3 mono text-[12px] uppercase tracking-[0.14em] text-[var(--text)] transition-colors hover:border-[var(--accent)]"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center border-b border-[var(--accent)] pb-1 mono text-[12px] uppercase tracking-[0.14em] text-[var(--text)]"
                >
                  Read Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section pb-24">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="editor-title">Next</h2>
            <span className="mono text-[12px] tracking-[0.14em] text-[var(--muted)]">
              02 / ROUTES
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              to="/portfolio"
              className="surface block p-6 transition-colors hover:border-[var(--accent)]"
            >
              <div className="mono mb-3 text-[11px] tracking-[0.14em] text-[var(--accent)]">
                Portfolio
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--muted)]">
                Featured projects, shipped work, and technical case studies.
              </p>
            </Link>
            <Link
              to="/resume"
              className="surface block p-6 transition-colors hover:border-[var(--accent)]"
            >
              <div className="mono mb-3 text-[11px] tracking-[0.14em] text-[var(--accent)]">
                Resume
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--muted)]">
                Experience, stack depth, and work history in one place.
              </p>
            </Link>
            <Link
              to="/contact"
              className="surface block p-6 transition-colors hover:border-[var(--accent)]"
            >
              <div className="mono mb-3 text-[11px] tracking-[0.14em] text-[var(--accent)]">
                Contact
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--muted)]">
                Reach out directly for roles, consulting, or collaboration.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
