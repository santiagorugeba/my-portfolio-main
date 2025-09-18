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
  // Triplicamos el contenido para un loop perfecto y suave
  const loop = [...tools, ...tools, ...tools];

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
        {/* Fades laterales (superpuestos) - más sutiles y graduales */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-brand-light/30 via-brand-light/8 to-transparent dark:from-brand-coal/30 dark:via-brand-coal/8"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-brand-light/30 via-brand-light/8 to-transparent dark:from-brand-coal/30 dark:via-brand-coal/8"
        />

        {/* Pista animada (usamos padding horizontal para que respire) */}
        <div className="marquee relative mx-auto w-full px-6">
          <div className="marquee-track flex items-center gap-12 py-8">
            {loop.map((t, i) => (
              <div key={`${t}-${i}`} className="shrink-0">
                
                <div
                  className="
                    grid h-14 w-14 place-items-center rounded-2xl
                    glass-light dark:glass-dark
                    shadow-[0_10px_40px_rgba(0,0,0,.25)]
                    md:h-16 md:w-16
                  "
                >
                  <img
                    src={`/logos/${t}.svg`}
                    alt={`Logo de ${t}`}
                    className="max-h-8 object-contain md:max-h-9"
                    draggable={false}
                    style={{ 
                      filter: 'brightness(0.8) contrast(1.3) saturate(1.1)',
                      minWidth: '24px',
                      minHeight: '24px'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estilos del carrusel (infinito + accesible) */}
        <style>{`
          /* Velocidad global del carrusel - loop perfecto */
          .marquee-track{
            animation: tm-scroll 45s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover{
            animation-play-state: paused;
          }
          @keyframes tm-scroll{
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
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
