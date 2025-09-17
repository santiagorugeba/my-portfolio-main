import React, { useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';

interface InteractiveBadgeProps {
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  onPositionChange?: (position: { x: number; y: number }) => void;
}

export default function InteractiveBadge({ 
  children, 
  initialPosition = { x: 0, y: 0 },
  onPositionChange 
}: InteractiveBadgeProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: any) => {
    const newPosition = {
      x: position.x + info.offset.x,
      y: position.y + info.offset.y
    };
    
    setPosition(newPosition);
    setIsDragging(false);
    
    if (onPositionChange) {
      onPositionChange(newPosition);
    }
  };

  return (
    <div ref={constraintsRef} className="absolute inset-0 pointer-events-none">
      <motion.div
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
        drag
        dragControls={dragControls}
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={constraintsRef}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        animate={{
          x: position.x,
          y: position.y,
          scale: isDragging ? 1.1 : 1,
          rotate: isDragging ? Math.random() * 10 - 5 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        <div className={`
          inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
          bg-brand-sand/30 border border-brand-graphite/30 text-brand-graphite/90
          dark:bg-brand-light/10 dark:border-brand-light/20 dark:text-brand-light/80
          backdrop-blur-sm
          hover:bg-brand-sand/40 hover:border-brand-graphite/40
          dark:hover:bg-brand-light/15 dark:hover:border-brand-light/30
          transition-colors duration-200
          ${isDragging ? 'shadow-lg shadow-brand-accent/20' : ''}
        `}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
