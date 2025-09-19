import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

// Coordenadas (en %) refinadas para el SVG public/maps/world-detailed.svg
const countries = [
  { 
    key: 'usa', 
    name: 'Estados Unidos', 
    x: 25.4, 
    y: 33.0, 
    description: 'Optimización de plataformas con IA para gestión de reportes, sistemas de gamificación para fidelización masiva, aplicaciones de apuestas deportivas mobile/web, y gestor superadmin para cultura general americana con +500 usuarios mensuales.' 
  },
  { 
    key: 'mexico', 
    name: 'México', 
    x: 23.2, 
    y: 44.2, 
    description: 'Optimización de flujos operativos para empresas energéticas líderes, mejorando eficiencia y experiencia del usuario en procesos críticos del sector.' 
  },
  { 
    key: 'venezuela', 
    name: 'Venezuela', 
    x: 30.4, 
    y: 50.8, 
    description: 'Creación e implementación de SaaS para recursos humanos, gestionando pruebas psicométricas y generación automática de informes de resultados para el mercado LATAM.' 
  },
  { 
    key: 'colombia', 
    name: 'Colombia', 
    x: 29.2, 
    y: 54.7, 
    description: '+8 proyectos de consultoría estratégica para empresas de renombre en sectores de derecho, alimentos y seguros, transformando procesos digitales y experiencias de usuario.' 
  },
  { 
    key: 'chile', 
    name: 'Chile', 
    x: 29.7, 
    y: 78.6, 
    description: 'Implementación de nuevos flujos digitales para empresa energética líder del país, optimizando procesos internos y mejorando la productividad operacional.' 
  },
];

function Pin({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 cursor-pointer group">
      {/* Efecto de pulsación constante para invitar al clic */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent/40 animate-ping" />
      {/* Efecto de pulso más sutil */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent/20 animate-pulse" />
      {/* Pin principal con hover effect */}
      <span className={`relative inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-200 ${
        active 
          ? 'bg-brand-accent scale-125 ring-4 ring-brand-accent/30' 
          : 'bg-brand-accent ring-2 ring-white/70 dark:ring-black/40 group-hover:scale-110 group-hover:ring-brand-accent/50'
      }`} />
    </span>
  );
}

export default function GlobalReach(): JSX.Element {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = useMemo(() => countries.find(c => c.key === selectedKey) || null, [selectedKey]);

  return (
    <div className="mt-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-6">
        Países donde mis diseños han generado impacto
      </h2>
      
      <motion.div 
        className="glass-light dark:glass-dark rounded-3xl p-6"
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

      <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
            <div className="relative w-full overflow-hidden rounded-2xl glass-light dark:glass-dark">
          <img 
            src="/maps/world-detailed.svg" 
            alt="Mapa mundial interactivo mostrando países donde mis diseños han generado impacto" 
            className="w-full h-auto select-none" 
            draggable={false}
            style={{ 
              filter: 'brightness(0.95) contrast(1.05)',
              minHeight: '200px'
            }}
            loading="lazy"
          />

          {countries.map((c) => (
            <button
              key={c.key}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              aria-label={c.name}
              title={c.name}
              onClick={() => setSelectedKey(c.key)}
            >
              <Pin active={selectedKey === c.key} />
            </button>
          ))}
        </div>

            <aside className="rounded-2xl p-5 glass-light dark:glass-dark">
          <p className="text-xs uppercase tracking-widest text-brand-graphite/70 dark:text-brand-light/60 mb-2">País</p>
          <h4 className="text-2xl font-bold text-brand-graphite dark:text-brand-light mb-2">{selected ? selected.name : '—'}</h4>
          <p className="text-brand-graphite/80 dark:text-brand-light/70 min-h-[3rem]">{selected ? selected.description : 'Explora los proyectos y resultados que he logrado en cada país.'}</p>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setSelectedKey(null)}
              className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-sm text-brand-accent hover:bg-brand-accent/15 transition disabled:opacity-50"
              disabled={!selected}
            >
              Limpiar selección
            </button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {countries.map((c) => (
              <li key={c.key}>
                <button
                  type="button"
                  onClick={() => setSelectedKey(c.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border transition ${selectedKey === c.key ? 'border-brand-accent bg-brand-accent/10 text-brand-accent' : 'border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/10 text-brand-graphite dark:text-brand-light'}`}
                >
                  <span className="h-2 w-2 rounded-full bg-brand-accent" />
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      </motion.div>
    </div>
  );
}
