import { useParams, Link } from "react-router-dom";
import { cases } from "@/data/cases";

// Ajusta este tipo si tienes más campos por proyecto
type CaseItem = {
  slug: string;
  title: string;
  subtitle?: string;
  cover?: string;
  tags?: string[];
  bullets?: string[];
  images?: string[];     // si manejas galería
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
  }>;
};

export default function Case() {
  const { slug } = useParams<{ slug: string }>();

  // Busca el proyecto por slug
  const item = (cases as CaseItem[]).find((c) => c.slug === slug);

  // Si no existe, muestra una página de “no encontrado”
  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-extrabold text-brand-light mb-4">
          Caso no encontrado
        </h1>
        <p className="text-brand-light/80 mb-6">
          No existe un proyecto con el identificador <span className="font-mono">{slug}</span>.
        </p>
        <Link to="/" className="btn-accent">Volver al inicio</Link>
      </div>
    );
  }

  // Valores por defecto para evitar "Cannot read properties of undefined (reading 'map')"
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const bullets = Array.isArray(item.bullets) ? item.bullets : [];
  const images = Array.isArray(item.images) ? item.images : [];
  const sections = Array.isArray(item.sections) ? item.sections : [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      {/* Cabecera */}
      <header className="mb-8">
        <Link to="/" className="text-brand-accent hover:opacity-90">← Volver</Link>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-light">
          {item.title}
        </h1>
        {item.subtitle && (
          <p className="mt-2 text-brand-light/80">{item.subtitle}</p>
        )}

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="badge bg-white/10 border-white/10 text-brand-light">
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Imagen de portada (si existe) */}
      {item.cover && (
        <div className="rounded-2xl overflow-hidden glass mb-8">
          <img
            src={item.cover}
            alt={item.title}
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* Bullets / highlights (si existen) */}
      {bullets.length > 0 && (
        <ul className="mb-10 space-y-2 text-brand-light/90">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 size-1.5 rounded-full bg-brand-accent shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Secciones ricas (opcional) */}
      {sections.length > 0 && (
        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={i} className="glass rounded-2xl p-5 md:p-6">
              {s.heading && (
                <h2 className="text-xl md:text-2xl font-bold text-brand-light mb-2">
                  {s.heading}
                </h2>
              )}
              {s.text && (
                <p className="text-brand-light/80">{s.text}</p>
              )}
              {s.image && (
                <div className="mt-4 rounded-xl overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.heading || item.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      )}

      {/* Galería simple (opcional) */}
      {images.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden glass">
              <img
                src={src}
                alt={`${item.title} ${i + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
