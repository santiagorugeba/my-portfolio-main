import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CaseCard from './CaseCard';

interface CaseCardData {
  icon: string;
  title: string;
  description: string;
}

interface DraggableCaseCardsProps {
  cards: CaseCardData[];
  title?: string;
  subtitle?: string;
}

export default function DraggableCaseCards({ cards, title, subtitle }: DraggableCaseCardsProps) {
  const [cardOrder, setCardOrder] = useState<number[]>(cards.map((_, index) => index));
  const [resetKey, setResetKey] = useState(0);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newOrder = Array.from(cardOrder);
    const [reorderedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, reorderedItem);

    setCardOrder(newOrder);
  };

  const handleReset = () => {
    setCardOrder(cards.map((_, index) => index));
    setResetKey(prev => prev + 1);
  };

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

      {/* Botón de Reset */}
      <motion.button
        onClick={handleReset}
        className="mb-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-accent/10 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          animate={{ rotate: resetKey * 360 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          🔄
        </motion.span>
        Reset Cards
      </motion.button>

      {/* Grid con cards reordenables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardOrder.map((originalIndex, displayIndex) => (
          <motion.div
            key={`${originalIndex}-${resetKey}`}
            layout
            drag
            dragMomentum={false}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            whileHover={{ 
              scale: 1.05,
              rotate: displayIndex % 2 === 0 ? 1 : -1,
              transition: { duration: 0.3 }
            }}
            whileDrag={{ 
              scale: 1.1,
              rotate: Math.random() * 10 - 5,
              zIndex: 1000
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <CaseCard
              icon={cards[originalIndex].icon}
              title={cards[originalIndex].title}
              description={cards[originalIndex].description}
              index={displayIndex}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
