import React from 'react';
import InfoBlock from './InfoBlock';

interface InfoBlockData {
  title: string;
  content: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'accent';
}

interface InfoBlocksProps {
  blocks: InfoBlockData[];
  title?: string;
  subtitle?: string;
}

export default function InfoBlocks({ blocks, title, subtitle }: InfoBlocksProps) {
  return (
    <section className="mb-12">
      {/* Título y subtítulo opcionales */}
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-light mb-3">
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

      {/* Grid de bloques informativos con layout dinámico */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {blocks.map((block, index) => (
          <InfoBlock
            key={index}
            title={block.title}
            content={block.content}
            size={block.size}
            variant={block.variant}
            index={index}
          />
        ))}
        
        {/* Bloque invisible para completar la grid si el último bloque está solo */}
        {blocks.length > 0 && blocks.length % 2 === 1 && (
          <div className="col-span-1 md:col-span-1 lg:col-span-1 opacity-0 pointer-events-none">
            {/* Bloque invisible para completar la grid */}
          </div>
        )}
      </div>
    </section>
  );
}
