import React from 'react';
import { motion } from 'framer-motion';

interface CaseCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function CaseCard({ icon, title, description, index }: CaseCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Icono */}
      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-brand-accent/10 border border-brand-accent/20 mb-4 md:mb-6">
        <img 
          src={icon} 
          alt={title}
          className="w-7 h-7 md:w-8 md:h-8"
        />
      </div>

      {/* Título */}
      <h3 className="font-heading text-lg md:text-xl font-semibold text-brand-light mb-3 md:mb-4">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-brand-light/70 text-sm md:text-base leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
}
