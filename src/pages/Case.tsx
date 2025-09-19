import React from "react";
import { useParams, Link } from "react-router-dom";
import { cases } from "@/data/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBadges from "@/components/InteractiveBadges";
import CaseCards from "@/components/CaseCards";
import InfoBlocks from "@/components/InfoBlocks";

// Ajusta este tipo si tienes más campos por proyecto
type CaseItem = {
  slug: string;
  title: string;
  subtitle?: string;
  cover?: string;
  figmaUrl?: string;
  tags?: string[];
  bullets?: string[];
  cards?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  infoBlocks?: Array<{
    title: string;
    content: string;
    size: 'small' | 'medium' | 'large';
    variant: 'primary' | 'secondary' | 'accent';
  }>;
  images?: string[];     // si manejas galería
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
  }>;
};

export default function Case() {
  const { slug } = useParams<{ slug: string }>();
  const [showPrototype, setShowPrototype] = React.useState(false);

  // Busca el proyecto por slug
  const item = (cases as CaseItem[]).find((c) => c.slug === slug);

  // Scroll to top cuando se carga la página
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Si no existe, muestra una página de "no encontrado"
  if (!item) {
    return (
      <>
        <Navbar />
        <main className="pt-28">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-extrabold text-brand-graphite dark:text-brand-light mb-4">
              Caso no encontrado
            </h1>
            <p className="text-brand-graphite/80 dark:text-brand-light/80 mb-6">
              No existe un proyecto con el identificador <span className="font-mono">{slug}</span>.
            </p>
            <Link to="/" className="btn-accent">Volver al inicio</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Valores por defecto para evitar "Cannot read properties of undefined (reading 'map')"
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const bullets = Array.isArray(item.bullets) ? item.bullets : [];
  const cards = Array.isArray(item.cards) ? item.cards : [];
  const infoBlocks = Array.isArray(item.infoBlocks) ? item.infoBlocks : [];
  const images = Array.isArray(item.images) ? item.images : [];
  const sections = Array.isArray(item.sections) ? item.sections : [];

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      {/* Cabecera */}
      <header className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-sand/10 dark:bg-white/5 border border-brand-graphite/20 dark:border-white/10 text-brand-graphite dark:text-brand-light hover:bg-brand-sand/20 dark:hover:bg-white/10 hover:border-brand-graphite/30 dark:hover:border-white/20 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </Link>
        <h1 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light">
          {item.title}
        </h1>
        {(item as any).client && (
          <p className="mt-2 text-brand-accent font-medium">{(item as any).client}</p>
        )}

                {tags.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs text-brand-graphite/60 dark:text-brand-light/60 mb-2">
                      Arrastra los badges para jugar con ellos
                    </p>
            <InteractiveBadges 
              badges={tags.map((tag, i) => ({
                id: `tag-${i}`,
                label: tag,
                initialPosition: { x: 0, y: 0 } // Se calcula automáticamente dentro del componente
              }))}
            />
          </div>
        )}
      </header>


      {/* Bullets / highlights (si existen) */}

      {/* Cards de información (opcional) */}
      {cards.length > 0 && (
        <CaseCards 
          cards={cards}
          title="Metodología y proceso"
          subtitle="Un enfoque estructurado para resolver problemas complejos de UX"
        />
      )}

      {/* Área de Diseño - Prototipo */}
      {item.figmaUrl && (
        <section className="mb-12">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-4">
              Área de diseño
            </h2>
            <p className="text-brand-graphite/70 dark:text-brand-light/70 text-lg max-w-4xl">
              Explora el prototipo interactivo y descubre cómo se materializaron las ideas en una experiencia de usuario excepcional
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden glass border-2 border-brand-accent/20 shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={item.figmaUrl}
                className="w-full h-full border-0"
                allowFullScreen
                title={`Prototipo de ${item.title}`}
              />
            </div>
          </div>
        </section>
      )}

      {/* Bloques informativos (opcional) */}
      {infoBlocks.length > 0 && (
        <InfoBlocks 
          blocks={infoBlocks}
          title="Hallazgos y resultados"
          subtitle="Métricas, impactos y lecciones aprendidas del proyecto"
        />
      )}

      {/* Secciones ricas (opcional) */}
      {sections.length > 0 && (
        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={i} className="glass rounded-2xl p-5 md:p-6">
              {s.heading && (
                <h2 className="text-xl md:text-2xl font-bold text-brand-graphite dark:text-brand-light mb-2">
                  {s.heading}
                </h2>
              )}
              {s.text && (
                <div className="text-brand-graphite/80 dark:text-brand-light/80">
                  {s.text.split('\n').map((line, lineIndex) => {
                    // Si la línea empieza con "•", renderizarla como bullet
                    if (line.trim().startsWith('•')) {
                      return (
                        <div key={lineIndex} className="flex gap-2 mb-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                          <span>{line.trim().substring(1).trim()}</span>
                        </div>
                      );
                    }
                    // Si la línea está vacía, renderizar un espacio
                    if (line.trim() === '') {
                      return <div key={lineIndex} className="mb-2" />;
                    }
                    // Línea normal
                    return (
                      <p key={lineIndex} className="mb-2">
                        {line}
                      </p>
                    );
                  })}
                </div>
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
      </main>
      <Footer />
    </>
  );
}
