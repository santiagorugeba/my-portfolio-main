import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu, { NavLink } from "@/components/MobileMenu";
import { profile } from "@/data/profile";

const LINKS: NavLink[] = [
  { id: "home",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "projects",   label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contact",    label: "Contacto" },
];

// easing bonito
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// scroll suave con offset por header fijo
function smoothScrollToId(id: string, duration = 900, headerSelector = "#siteHeader") {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector(headerSelector) as HTMLElement | null;
  const headerH = header?.offsetHeight ?? 72;

  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + window.scrollY - (headerH + 12);
  const diff = targetY - startY;

  let start: number | null = null;
  function step(ts: number) {
    if (start === null) start = ts;
    const elapsed = ts - start;
    const pct = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(pct);
    window.scrollTo(0, startY + diff * eased);
    if (elapsed < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Navbar() {
  const MAIL = "mailto:santiagoo.rugeeb@gmail.com";
  const LINKEDIN = profile?.links?.linkedin || "#";
  const [open, setOpen] = React.useState(false);

  const handleNavigate = (id: string) => {
    setOpen(false);
    setTimeout(() => smoothScrollToId(id, 900, "#siteHeader"), 10);
  };

  return (
    <>
      <header
        id="siteHeader"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,92vw)]"
      >
        <nav className="glass rounded-2xl px-5 md:px-6 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-wide text-brand-light">
            Santiago Ruge
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-brand-light/80">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollToId(l.id, 900, "#siteHeader");
                  }}
                  className="hover:text-brand-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Puedes ocultar el toggle si no lo necesitas */}
            <ThemeToggle />
            <a href={MAIL} className="icon-btn" aria-label="Email" title="Email">✉️</a>
            <a href={LINKEDIN} className="icon-btn" aria-label="LinkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank">in</a>

            {/* Botón hamburguesa (solo mobile) */}
            <button
              className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-brand-light hover:bg-white/10 transition relative overflow-hidden"
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
            >
              <span className="hamb-line top-2.5" />
              <span className="hamb-line top-4.5" />
              <span className="hamb-line top-6.5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        links={LINKS}
        onNavigate={handleNavigate}
      />
    </>
  );
}
