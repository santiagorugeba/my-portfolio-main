import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface InfoBlockProps {
  title: string;
  content: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'accent';
  index: number;
}

export default function InfoBlock({ title, content, size, variant, index }: InfoBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Permite animación múltiples veces
    margin: "-80px 0px -80px 0px" // Trigger cuando está cerca del viewport
  });

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1',
    large: 'col-span-1 row-span-1'
  };

  const variantClasses = {
    primary: 'glass-light dark:glass-dark',
    secondary: 'bg-brand-accent/10 border-brand-accent/20',
    accent: 'bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 border-brand-accent/30'
  };

  const titleSizes = {
    small: 'text-lg sm:text-xl md:text-xl',
    medium: 'text-lg sm:text-xl md:text-xl',
    large: 'text-lg sm:text-xl md:text-xl'
  };

  return (
    <motion.div
      ref={ref}
      className={`
        rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300
        hover:shadow-lg hover:shadow-white/10 h-full flex flex-col
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
      initial={{ 
        opacity: 0, 
        y: 25, 
        scale: 0.9,
        rotate: index % 2 === 0 ? -2 : 2,
        filter: "blur(3px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotate: 0,
        filter: "blur(0px)"
      } : { 
        opacity: 0, 
        y: 25, 
        scale: 0.9,
        rotate: index % 2 === 0 ? -2 : 2,
        filter: "blur(3px)"
      }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 110,
        damping: 18
      }}
      whileHover={{ 
        scale: 1.02,
        rotate: index % 2 === 0 ? 0.5 : -0.5,
        y: -3,
        transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 25 }
      }}
    >
      {/* Título */}
      <h3 className={`
        font-heading font-bold text-brand-graphite dark:text-brand-light mb-3
        ${titleSizes[size]}
      `}>
        {title}
      </h3>

      {/* Contenido */}
      <div className="text-brand-graphite/80 dark:text-brand-light/80 text-sm sm:text-base md:text-lg leading-relaxed flex-grow">
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

    </motion.div>
  );
}
