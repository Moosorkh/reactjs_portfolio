import { Link } from "react-router-dom";

const links = [
  { label: "About Me", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-[var(--line)]">
    <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Link to="/" className="mono text-sm">
          mehdi<span className="text-[var(--accent)]">.</span>azar
        </Link>
        <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
          Full-stack engineer building reliable web products from interface to
          infrastructure.
        </p>
      </div>
      <div>
        <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
          Navigation
        </p>
        <div className="grid gap-2 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-[var(--text)]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
          Elsewhere
        </p>
        <div className="grid gap-2 text-sm text-[var(--muted)]">
          <a href="mailto:Moosorkh@gmail.com">Email</a>
          <a href="https://github.com/Moosorkh" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/irdmousa/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </div>
    <div className="mono mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-[var(--line)] px-5 py-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] sm:px-8">
      <span>© {new Date().getFullYear()} Mehdi Azar</span>
      <span>Los Angeles, California</span>
    </div>
  </footer>
);

export default Footer;
