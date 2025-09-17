import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InfoBlock from './InfoBlock';

interface InfoBlockData {
  title: string;
  content: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'accent';
}

interface DraggableInfoBlocksProps {
  blocks: InfoBlockData[];
  title?: string;
  subtitle?: string;
}

export default function DraggableInfoBlocks({ blocks, title, subtitle }: DraggableInfoBlocksProps) {
  const [blockOrder, setBlockOrder] = useState<number[]>(blocks.map((_, index) => index));
  const [resetKey, setResetKey] = useState(0);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newOrder = Array.from(blockOrder);
    const [reorderedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, reorderedItem);

    setBlockOrder(newOrder);
  };

  const handleReset = () => {
    setBlockOrder(blocks.map((_, index) => index));
    setResetKey(prev => prev + 1);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
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
        Reset Bloques
      </motion.button>

      {/* Grid con bloques reordenables */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {blockOrder.map((originalIndex, displayIndex) => (
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
            <InfoBlock
              title={blocks[originalIndex].title}
              content={blocks[originalIndex].content}
              size={blocks[originalIndex].size}
              variant={blocks[originalIndex].variant}
              index={displayIndex}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
