import { projects } from "./data/projects";

const Portfolio = () => (
  <main className="page-shell">
    <div className="noise" />
    <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-24 pt-28 sm:px-8">
      <header className="border-b border-[var(--line)] pb-12">
        <p className="mono mb-6 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
          02 / Selected work
        </p>
        <h1 className="editor-hero max-w-[9ch]">Built to ship.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Product work spanning booking platforms, commerce, mapping, financial
          tools, and full-stack APIs.
        </p>
      </header>

      <section className="section">
        <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.id} className="group bg-[var(--bg)]">
              <div className="aspect-[16/10] overflow-hidden bg-[var(--surface)]">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mono mb-5 flex justify-between text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.badge || "Project"}</span>
                </div>
                <h2 className="display text-2xl font-semibold sm:text-3xl">{project.title}</h2>
                <p className="mt-4 line-clamp-4 text-[15px] leading-7 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mono mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                  {project.tags.slice(0, 6).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="mono mt-8 flex gap-5 text-[11px] uppercase tracking-[0.14em]">
                  {project.links.liveDemo && (
                    <a className="accent-underline" href={project.links.liveDemo} target="_blank" rel="noreferrer">
                      Live site ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a className="text-[var(--muted)] hover:text-[var(--text)]" href={project.links.github} target="_blank" rel="noreferrer">
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default Portfolio;
