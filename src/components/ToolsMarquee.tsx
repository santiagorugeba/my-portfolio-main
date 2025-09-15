// src/components/ToolsMarquee.tsx
import React from "react";

const tools = [
  "figma",
  "notion",
  "clickup",
  "jira",
  "miro",
  "mural",
  "gemini-ai",
  "chatgpt",
  "midjourney",
];

/**
 * Carrusel infinito con fade lateral.
 * - Sin scrollbar (overflow-hidden)
 * - Pausa al hover (animation-play-state: paused)
 * - Respeta prefers-reduced-motion
 * - Respeta tema claro/oscuro (usa colores de tu paleta Tailwind)
 */
export default function ToolsMarquee() {
  // Duplicamos el contenido para un loop perfecto
  const loop = [...tools, ...tools];

  return (
    <section aria-label="Herramientas" className="select-none py-16">
      {/* Título (contenido centrado en contenedor, no full-bleed) */}
      <div className="mx-auto mb-6 flex max-w-6xl items-center justify-between px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-graphite dark:text-brand-light">
          Toolbox
        </h2>
      </div>

      {/* Pista full-bleed con fade lateral y sin barras */}
      <div className="relative w-full overflow-hidden">
        {/* Fades laterales (superpuestos) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-light to-transparent dark:from-brand-coal"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-light to-transparent dark:from-brand-coal"
        />

        {/* Pista animada (usamos padding horizontal para que respire) */}
        <div className="marquee relative mx-auto w-full px-6">
          <div className="marquee-track flex items-center gap-12 py-8">
            {loop.map((t, i) => (
              <div key={`${t}-${i}`} className="shrink-0">
                
                <div
                  className="
                    grid h-14 w-14 place-items-center rounded-2xl
                    bg-black/30 dark:bg-black/40 ring-1 ring-white/10
                    shadow-[0_10px_40px_rgba(0,0,0,.25)]
                    md:h-16 md:w-16
                  "
                >
                  <img
                    src={`/logos/${t}.svg`}
                    alt={t}
                    className="max-h-8 object-contain md:max-h-9"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estilos del carrusel (infinito + accesible) */}
        <style>{`
          /* Velocidad global del carrusel (ajústala si quieres) */
          .marquee-track{
            animation: tm-scroll 35s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover{
            animation-play-state: paused;
          }
          @keyframes tm-scroll{
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }

          /* Reduce motion: desactivamos animación si el usuario lo prefiere */
          @media (prefers-reduced-motion: reduce){
            .marquee-track{ animation: none; transform: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
