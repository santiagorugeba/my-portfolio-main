import React, { useMemo, useState } from 'react';

// Coordenadas (en %) refinadas para el SVG public/maps/world-detailed.svg
const countries = [
  { key: 'usa', name: 'Estados Unidos', x: 25.4, y: 33.0, description: 'Estrategia de producto y UI.' },
  { key: 'mexico', name: 'México', x: 23.2, y: 44.2, description: 'Diseño UX para fintech.' },
  { key: 'venezuela', name: 'Venezuela', x: 30.4, y: 50.8, description: 'Prototipado avanzado y motion.' },
  { key: 'colombia', name: 'Colombia', x: 29.2, y: 54.7, description: 'Design systems y handoff.' },
  { key: 'chile', name: 'Chile', x: 29.7, y: 78.6, description: 'Dashboards y UX research.' },
];

function Pin({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
      <span className={`absolute inline-flex h-full w-full rounded-full ${active ? 'animate-ping bg-brand-accent/30' : 'bg-brand-accent/15'}`} />
      <span className={`relative inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full ${active ? 'bg-brand-accent' : 'bg-brand-accent'} ring-2 ring-white/70 dark:ring-black/40`} />
    </span>
  );
}

export default function GlobalReach(): JSX.Element {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = useMemo(() => countries.find(c => c.key === selectedKey) || null, [selectedKey]);

  return (
    <div className="mt-12 rounded-3xl border border-black/5 dark:border-white/10 p-6">
      <h3 className="text-xl font-semibold mb-4 text-brand-graphite dark:text-brand-light">
        Países en los que he trabajado
      </h3>

      <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
        <div className="relative w-full overflow-hidden rounded-2xl bg-white/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
          <img src="/maps/world-detailed.svg" alt="Mapa mundial" className="w-full h-auto select-none" draggable={false} />

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

        <aside className="rounded-2xl p-5 bg-white/40 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
          <p className="text-xs uppercase tracking-widest text-brand-graphite/70 dark:text-brand-light/60 mb-2">País</p>
          <h4 className="text-2xl font-bold text-brand-graphite dark:text-brand-light mb-2">{selected ? selected.name : '—'}</h4>
          <p className="text-brand-graphite/80 dark:text-brand-light/70 min-h-[3rem]">{selected ? selected.description : 'Haz clic en un pin para ver detalles.'}</p>

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
    </div>
  );
}
