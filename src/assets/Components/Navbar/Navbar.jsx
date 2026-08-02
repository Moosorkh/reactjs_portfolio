import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(10,9,8,0.76)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="mono text-[13px] tracking-[0.02em] text-[var(--text)]"
        >
          mehdi<span className="text-[var(--accent)]">.</span>azar
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Moosorkh"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[var(--line)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/irdmousa/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[var(--line)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
