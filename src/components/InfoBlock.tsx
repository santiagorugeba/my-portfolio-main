import React from 'react';
import { motion } from 'framer-motion';

interface InfoBlockProps {
  title: string;
  content: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'accent';
  index: number;
}

export default function InfoBlock({ title, content, size, variant, index }: InfoBlockProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1'
  };

  const variantClasses = {
    primary: 'bg-white/5 border-white/10 hover:bg-white/8',
    secondary: 'bg-brand-accent/10 border-brand-accent/20 hover:bg-brand-accent/15',
    accent: 'bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 border-brand-accent/30 hover:from-brand-accent/25 hover:to-brand-accent/10'
  };

  const titleSizes = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <motion.div
      className={`
        glass rounded-2xl p-6 border transition-all duration-300
        hover:shadow-lg hover:shadow-brand-accent/10
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
      initial={{ opacity: 0, y: 20, scale: 0.95, rotate: index % 2 === 0 ? -2 : 2 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: index % 2 === 0 ? 1 : -1,
        transition: { duration: 0.3 }
      }}
    >
      {/* Título */}
      <h3 className={`
        font-heading font-bold text-brand-light mb-3
        ${titleSizes[size]}
      `}>
        {title}
      </h3>

      {/* Contenido */}
      <div className="text-brand-light/80 text-sm leading-relaxed">
        {content.split('\n').map((line, lineIndex) => {
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

      {/* Decoraciones juguetonas */}
      <div className="absolute top-3 right-3 opacity-30">
        {size === 'small' && (
          <div className="w-6 h-6 rounded-full bg-brand-accent/40 flex items-center justify-center">
            <span className="text-brand-accent text-sm">✨</span>
          </div>
        )}
        {size === 'medium' && (
          <div className="w-7 h-7 rounded-full bg-brand-accent/30 flex items-center justify-center">
            <span className="text-brand-accent text-base">🎯</span>
          </div>
        )}
        {size === 'large' && (
          <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
            <span className="text-brand-accent text-lg">💡</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
