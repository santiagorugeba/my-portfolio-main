import React from 'react';
import CaseCard from './CaseCard';

interface CaseCardData {
  icon: string;
  title: string;
  description: string;
}

interface CaseCardsProps {
  cards: CaseCardData[];
  title?: string;
  subtitle?: string;
}

export default function CaseCards({ cards, title, subtitle }: CaseCardsProps) {
  return (
    <section className="mb-12">
      {/* Título y subtítulo opcionales */}
      {(title || subtitle) && (
        <div className="mb-10">
          {title && (
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-light mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-brand-light/70 text-lg max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Grid de cards con mejor espaciado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <CaseCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
