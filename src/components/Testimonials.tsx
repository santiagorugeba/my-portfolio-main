import React, { useMemo, useRef, useState } from "react";
import { testimonials as DATA, Testimonial } from "@/data/testimonials";
import { motion } from "framer-motion";

function StarRow({ count = 5 }: { count?: number }) {
  const n = Math.max(0, Math.min(5, count ?? 0));
  return (
    <div className="mt-4 flex gap-1 text-brand-accent">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} aria-hidden>★</span>
      ))}
    </div>
  );
}

type XY = { x: number; t: number };
type Dir = "next" | "prev";

export default function Testimonials() {
  const items = useMemo(() => DATA.filter(Boolean), []);
  const TOTAL = items.length;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Dir>("next");

  const prevIndex = (i = index) => (i - 1 + TOTAL) % TOTAL;
  const nextIndex = (i = index) => (i + 1) % TOTAL;

  const goPrev = () => {
    setDir("prev");
    setIndex((i) => prevIndex(i));
  };
  const goNext = () => {
    setDir("next");
    setIndex((i) => nextIndex(i));
  };
  const goTo = (i: number) => {
    const norm = ((i % TOTAL) + TOTAL) % TOTAL;
    setDir(norm > index ? "next" : "prev");
    setIndex(norm);
  };

  /** ------ drag ------ */
  const dragRef = useRef<XY | null>(null);

  const onDown = (x: number) => {
    dragRef.current = { x, t: Date.now() };
    document.body.classList.add("dragging");
  };
  const onMove = (_x: number) => {
    // dejamos limpio: no movemos la card en vivo para mantener el “flip” cool
  };
  const endDrag = (x?: number) => {
    const start = dragRef.current;
    dragRef.current = null;
    document.body.classList.remove("dragging");
    if (!start || x == null) return;

    const dx = x - start.x;
    const dt = Date.now() - start.t;
    const fast = dt < 300;

    const THRESHOLD = fast ? 50 : 90;
    if (dx > THRESHOLD) goPrev();
    else if (dx < -THRESHOLD) goNext();
  };

  const handleMouseDown = (e: React.MouseEvent) => onDown(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => onMove(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => endDrag(e.clientX);
  const handleMouseLeave = (e: React.MouseEvent) => endDrag(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) =>
    onDown(e.changedTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    onMove(e.changedTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) =>
    endDrag(e.changedTouches[0].clientX);

  /** ------ UI ------ */
  const current = items[index];
  const left = items[prevIndex()];
  const right = items[nextIndex()];

  const activeAnim =
    dir === "next" ? "sr-active-next" : "sr-active-prev";
  const ghostLeftAnim =
    dir === "next" ? "sr-ghost-left-out" : "sr-ghost-left-in";
  const ghostRightAnim =
    dir === "next" ? "sr-ghost-right-in" : "sr-ghost-right-out";

  const Card = ({ t }: { t: Testimonial }) => (
        <motion.div
          className="
            w-full max-w-[980px]
            glass-light dark:glass-dark
            shadow-[0_30px_120px_rgba(0,0,0,.55)]
            px-5 sm:px-7 md:px-10 py-6 sm:py-7 md:py-10
            text-brand-graphite dark:text-brand-light
            mx-2
          "
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          viewport={{ 
            once: false, 
            amount: 0.3 
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
      <div className="flex items-center gap-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-graphite/20 dark:ring-white/10"
        />
        <div className="min-w-0">
          <div className="font-semibold text-lg">{t.name}</div>
          <div className="text-sm text-brand-graphite/70 dark:text-white/70">
            {t.role}
            {t.company ? ` | ${t.company}` : ""}
          </div>
        </div>
      </div>

      <p className="mt-6 text-base md:text-lg leading-relaxed text-brand-graphite/90 dark:text-white/90">
        {t.quote}
      </p>

      <StarRow count={t.stars ?? 5} />
    </motion.div>
  );

  const Ghost = ({
    side,
  }: {
    side: "left" | "right";
  }) => (
    <div
      aria-hidden
      className={`
        pointer-events-none absolute inset-0 grid place-items-center
        ${side === "left" ? "origin-[70%_60%]" : "origin-[30%_60%]"}
      `}
    >
      <div className="
        w-full max-w-[980px]
        rounded-3xl border border-white/10
        bg-black/30 backdrop-blur-md
        shadow-[0_40px_140px_rgba(0,0,0,.65)]
        ring-1 ring-white/5
        px-5 sm:px-7 md:px-10 py-6 sm:py-7 md:py-10
        mx-2
      ">
        <div className="opacity-[.35] blur-[1px]">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-white/10" />
            <div className="h-4 w-40 rounded bg-white/10" />
          </div>
          <div className="mt-6 space-y-2">
            <div className="h-3 w-4/5 rounded bg-white/10" />
            <div className="h-3 w-3/5 rounded bg-white/10" />
            <div className="h-3 w-2/5 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-28 select-none px-4 sm:px-6"
    >
      {/* Animaciones locales */}
      <style>{`
        /* Active in (derecha) */
        @keyframes srActiveNext {
          0%   { transform: translateY(30px) scale(.96) rotate(-3deg); opacity: 0; filter: blur(2px); }
          60%  { transform: translateY(-6px) scale(1.02) rotate(0deg);  opacity: 1; filter: blur(0); }
          100% { transform: translateY(0) scale(1); }
        }
        .sr-active-next { animation: srActiveNext .60s cubic-bezier(.18,.88,.22,1) both; }

        /* Active in (izquierda) */
        @keyframes srActivePrev {
          0%   { transform: translateY(30px) scale(.96) rotate(3deg); opacity: 0; filter: blur(2px); }
          60%  { transform: translateY(-6px) scale(1.02) rotate(0deg); opacity: 1; filter: blur(0); }
          100% { transform: translateY(0) scale(1); }
        }
        .sr-active-prev { animation: srActivePrev .60s cubic-bezier(.18,.88,.22,1) both; }

        /* Ghosts core (posición base) */
        .sr-ghost { transform: scale(.92) rotate(0deg); opacity: .45; }
        .sr-ghost-left  { transform: translateX(-8%) rotate(-6deg) scale(.92); }
        .sr-ghost-right { transform: translateX( 8%) rotate( 6deg) scale(.92); }

        /* Flujo cuando voy NEXT: el de la izquierda se aleja, el de la derecha entra */
        @keyframes srGhostLeftOut {
          0% { transform: translateX(-8%) rotate(-6deg) scale(.92); opacity:.45; filter: blur(0); }
          100% { transform: translateX(-20%) rotate(-10deg) scale(.88); opacity:.15; filter: blur(2px); }
        }
        .sr-ghost-left-out { animation: srGhostLeftOut .60s ease both; }

        @keyframes srGhostRightIn {
          0% { transform: translateX(18%) rotate(9deg) scale(.86); opacity:.10; filter: blur(2px); }
          100% { transform: translateX(8%) rotate(6deg) scale(.92); opacity:.45; filter: blur(0); }
        }
        .sr-ghost-right-in { animation: srGhostRightIn .60s ease both; }

        /* Flujo cuando voy PREV: el de la derecha se aleja, el de la izquierda entra */
        @keyframes srGhostRightOut {
          0% { transform: translateX(8%) rotate(6deg) scale(.92); opacity:.45; filter: blur(0); }
          100% { transform: translateX(20%) rotate(10deg) scale(.88); opacity:.15; filter: blur(2px); }
        }
        .sr-ghost-right-out { animation: srGhostRightOut .60s ease both; }

        @keyframes srGhostLeftIn {
          0% { transform: translateX(-18%) rotate(-9deg) scale(.86); opacity:.10; filter: blur(2px); }
          100% { transform: translateX(-8%) rotate(-6deg) scale(.92); opacity:.45; filter: blur(0); }
        }
        .sr-ghost-left-in { animation: srGhostLeftIn .60s ease both; }
      `}</style>

      {/* Título + flechas mobile */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-brand-graphite dark:text-brand-light">
          Stories of Success
        </h2>
        <div className="mt-2 flex justify-end gap-2 md:hidden pr-2">
          <button
            aria-label="Anterior"
            onClick={goPrev}
            className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={goNext}
            className="h-9 w-9 grid place-items-center rounded-xl bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
          >
            ›
          </button>
        </div>
      </div>

      {/* Escenario */}
      <div
        className="relative mt-4 md:mt-12 px-1 sm:px-2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Flechas desktop */}
        <div className="hidden md:flex absolute right-6 md:right-12 -top-12 gap-3 z-20">
          <button
            aria-label="Anterior"
            onClick={goPrev}
            className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={goNext}
            className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
          >
            ›
          </button>
        </div>

        {/* Pista */}
        <div className="relative h-[300px] md:h-[360px] overflow-visible">
          {/* ghosts */}
          <div className={`absolute inset-0 grid place-items-center z-0 sr-ghost sr-ghost-left ${ghostLeftAnim}`} aria-hidden>
            <Ghost side="left" />
          </div>
          <div className={`absolute inset-0 grid place-items-center z-0 sr-ghost sr-ghost-right ${ghostRightAnim}`} aria-hidden>
            <Ghost side="right" />
          </div>

          {/* activa */}
          <div key={index} className={`absolute inset-0 grid place-items-center z-10 ${activeAnim}`}>
            <Card t={current} />
          </div>
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active
                    ? "bg-brand-accent shadow-[0_0_0_4px_rgba(235,94,40,.15)]"
                    : "bg-white/25 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
