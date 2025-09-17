import React from "react";

type Item = {
  slug: string;
  title: string;
  subtitle?: string;
  cover?: string;       // ruta a imagen
  tags?: string[];
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ProjectCard({ item }: { item: Item }) {
  const {
    title,
    subtitle,
    cover,
    tags = [],
    bullets = [],
    ctaLabel = "Ver caso",
    ctaHref = `/case/${item.slug}`,
  } = item;

  return (
    <article
      className="
        min-w-0
        glass rounded-3xl overflow-hidden
        border border-brand-graphite/20 dark:border-white/10
        bg-brand-sand/30 dark:bg-white/5
        hover:shadow-[0_28px_90px_rgba(0,0,0,.25)]
        transition
      "
    >
      {/* Imagen: altura controlada y sin forzar ancho */}
      {cover ? (
        <div className="w-full h-40 sm:h-44 md:h-48 xl:h-44 overflow-hidden">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
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
          <a href={ctaHref} className="btn-accent inline-flex items-center gap-2">
            {ctaLabel}
            <img src="/pen-tool.svg" alt="" className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
