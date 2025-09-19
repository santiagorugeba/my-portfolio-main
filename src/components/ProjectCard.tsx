import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Item = {
  slug: string;
  title: string;
  subtitle?: string;
  cover?: string;       // ruta a imagen
  tags?: string[];
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  isWIP?: boolean;      // Flag para identificar cards WIP
};

export default function ProjectCard({ item, index }: { item: Item; index: number }) {
  const {
    title,
    subtitle,
    cover,
    tags = [],
    bullets = [],
    ctaLabel = "Ver caso",
    ctaHref = `/case/${item.slug}`,
    isWIP = false,
  } = item;

  return (
    <motion.article
      className={`
        min-w-0 relative
        glass-light dark:glass-dark rounded-3xl overflow-hidden
        hover:shadow-[0_28px_90px_rgba(0,0,0,.25)]
        transition-all duration-300
        ${isWIP ? 'border-2 border-brand-accent/30 hover:border-brand-accent/50' : ''}
      `}
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
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      {/* Indicador WIP o Easter Egg ocasional en proyectos */}
      {isWIP ? (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-brand-accent/20 dark:bg-brand-accent/30 backdrop-blur-sm rounded-full px-3 py-1 border border-brand-accent/40">
            <span className="text-xs font-semibold text-brand-accent">WIP</span>
          </div>
        </div>
      ) : (index === 0 || index === 2) && (
        <div className="absolute top-4 right-4 z-10">
          <img
            src="/chocolate-1-svgrepo-com.svg"
            alt="🍫"
            className={`${index === 0 ? 'w-4 h-4' : 'w-3 h-3'} cursor-pointer hover:scale-110 transition-transform duration-200`}
            style={{
              filter: 'brightness(0.5) saturate(0.7)',
              opacity: 0.2
            }}
            onClick={() => {
              console.log(`Chocolate encontrado en proyecto ${index}!`);
            }}
          />
        </div>
      )}

      {/* Imagen: altura controlada y sin forzar ancho */}
      {cover ? (
        <div className="w-full h-40 sm:h-44 md:h-48 xl:h-44 overflow-hidden relative">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Easter Egg en la imagen ocasionalmente */}
          {index === 1 && (
            <div className="absolute bottom-2 left-2 z-10">
              <img
                src="/chocolate-1-svgrepo-com.svg"
                alt="🍫"
                className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform duration-200"
                style={{
                  filter: 'brightness(0.3) saturate(0.4)',
                  opacity: 0.15
                }}
                onClick={() => {
                  console.log(`Chocolate oculto encontrado en imagen del proyecto ${index}!`);
                }}
              />
            </div>
          )}
        </div>
      ) : null}

      <div className="p-5 md:p-6">
        <h3 className="text-xl font-extrabold text-brand-graphite dark:text-brand-light mb-1 break-words">
          {title}
        </h3>

        {subtitle ? (
          <p className="text-brand-graphite/70 dark:text-brand-light/70 text-sm mb-3">{subtitle}</p>
        ) : null}

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((t, i) => (
              <span key={i} className="badge">{t}</span>
            ))}
          </div>
        ) : null}

        {bullets.length > 0 ? (
          <ul className="space-y-2 mb-5 text-brand-graphite/80 dark:text-brand-light/80 text-sm">
            {bullets.slice(0, 3).map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent/80" />
                <span className="break-words">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-2">
          {isWIP ? (
            <a 
              href={ctaHref} 
              className="btn-accent inline-flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              {ctaLabel}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path 
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M13 8H7M17 12H7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <Link to={ctaHref} className="btn-accent inline-flex items-center gap-2">
              {ctaLabel}
              <img 
                src="/pen-tool.svg" 
                alt="Ver caso de estudio" 
                className="w-4 h-4" 
                style={{ 
                  filter: 'brightness(0.8) contrast(1.3) saturate(1.1)',
                  minWidth: '16px',
                  minHeight: '16px'
                }}
              />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
