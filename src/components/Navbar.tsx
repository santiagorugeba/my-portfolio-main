import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu, { NavLink } from "@/components/MobileMenu";

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
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    setOpen(false);
    
    // Si estamos en una página de caso, navegar al home primero
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que se cargue la página y luego hacer scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          smoothScrollToId(id, 900, "#siteHeader");
        }
      }, 100);
    } else {
      // Si estamos en el home, hacer scroll directamente
      setTimeout(() => smoothScrollToId(id, 900, "#siteHeader"), 10);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <header
        id="siteHeader"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,92vw)]"
      >
            <nav className="glass-light dark:glass-dark rounded-2xl px-5 md:px-6 py-3 flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="font-semibold tracking-wide text-brand-graphite dark:text-brand-light hover:text-brand-accent transition-colors cursor-pointer"
          >
            Santiago Ruge
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-brand-graphite/80 dark:text-brand-light/80">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleNavigate(l.id)}
                  className="hover:text-brand-accent transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Botón hamburguesa (mobile) */}
            <button
              className="md:hidden ml-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-standard text-brand-graphite dark:text-brand-light hover:bg-brand-graphite/10 dark:hover:bg-white/10 transition relative focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Abrir menú de navegación"
              onClick={() => setOpen(true)}
            >
              <img 
                src="/menu-icon.svg" 
                alt="" 
                className="h-5 w-5 menu-icon"
                style={{ 
                  minWidth: '20px',
                  minHeight: '20px'
                }}
                aria-hidden="true"
              />
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
