import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CaseCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function CaseCard({ icon, title, description, index }: CaseCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Permite animación múltiples veces
    margin: "-100px 0px -100px 0px" // Trigger cuando está cerca del viewport
  });

  return (
    <motion.div
      ref={ref}
      className="glass-light dark:glass-dark rounded-2xl p-6 md:p-8 hover:shadow-lg hover:shadow-brand-graphite/10 dark:hover:shadow-white/10 h-full flex flex-col transition-all duration-300"
      initial={{ 
        opacity: 0, 
        y: 30, 
        scale: 0.9,
        rotate: index % 2 === 0 ? -3 : 3,
        filter: "blur(4px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotate: 0,
        filter: "blur(0px)"
      } : { 
        opacity: 0, 
        y: 30, 
        scale: 0.9,
        rotate: index % 2 === 0 ? -3 : 3,
        filter: "blur(4px)"
      }}
      transition={{ 
        delay: index * 0.08, 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.03,
        rotate: index % 2 === 0 ? 1 : -1,
        y: -5,
        transition: { duration: 0.2, type: "spring", stiffness: 400, damping: 25 }
      }}
    >
      {/* Icono */}
      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/15 border border-brand-accent/20 dark:border-brand-accent/30 mb-4 md:mb-6">
        <img 
          src={icon} 
          alt={`Icono de ${title}`}
          className="w-7 h-7 md:w-8 md:h-8 case-card-icon"
          style={{ 
            minWidth: '28px',
            minHeight: '28px'
          }}
          loading="lazy"
        />
      </div>

      {/* Título */}
      <h3 className="font-heading text-lg md:text-xl font-semibold text-brand-graphite dark:text-brand-light mb-3 md:mb-4">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-brand-graphite/80 dark:text-brand-light/70 text-base md:text-lg leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
}
