import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

// Tipado de links
export type NavLink = { id: string; label: string };

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  links: NavLink[];
};

const splashVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.28 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" as any },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)" as any,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

export default function MobileMenu({
  isOpen,
  onClose,
  onNavigate,
  links,
}: MobileMenuProps) {
  const socials = {
    linkedin: profile?.links?.linkedin || "#",
    behance: profile?.links?.behance || "#",
    github: profile?.links?.github || "#",
    mail: "mailto:santiagoo.rugeeb@gmail.com",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80]"
          variants={splashVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {/* Backdrop con blur (no tapa tus partículas) */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" onClick={onClose} />

          {/* Splash naranja + brillos */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute -top-24 -right-16 w-[520px] h-[520px] rounded-full bg-[#EB5E28] blur-[70px] opacity-30"
              animate={{ scale: [1, 1.08, 1], opacity: [0.26, 0.32, 0.26] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 -left-24 w-[360px] h-[360px] rounded-full bg-white/8 blur-[70px]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Panel de contenido */}
          <motion.div
            className="relative mx-auto w-[min(720px,92vw)] mt-6 rounded-3xl border border-white/10 bg-black/60 p-5"
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del menú */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-black tracking-[.22em] text-brand-light/80">
                MENÚ
              </span>

              <button
                aria-label="Cerrar menú"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-light hover:bg-white/10 transition"
              >
                ✕
              </button>
            </div>

            {/* Links numerados con stagger */}
            <motion.ul
              className="mx-auto w-[min(720px,92vw)] mt-6 px-1 space-y-5"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 },
                },
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {links.map((l, idx) => (
                <motion.li
                  key={l.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(5px)" as any },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" as any },
                  }}
                >
                  <button
                    onClick={() => onNavigate(l.id)}
                    className="flex items-baseline gap-3 group"
                  >
                    <span className="text-sm font-mono text-brand-light/50 group-hover:text-[#EB5E28] transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[28px] leading-[1.15] font-light tracking-wide text-brand-light group-hover:text-[#EB5E28] transition-colors">
                      {l.label}
                    </span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            {/* Socials + CTA */}
            <div className="mx-auto w-[min(720px,92vw)] px-1 mt-8 flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                {socials.linkedin && (
                  <a className="pill-btn" href={socials.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
                {socials.behance && (
                  <a className="pill-btn" href={socials.behance} target="_blank" rel="noreferrer">
                    Behance
                  </a>
                )}
                {socials.github && (
                  <a className="pill-btn" href={socials.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>

              <div>
                <a className="pill-cta" href={socials.mail}>
                  <span className="mr-2">✉️</span> Escríbeme
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
