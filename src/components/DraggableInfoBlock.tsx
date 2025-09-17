import React, { useRef, useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import InfoBlock from './InfoBlock';

interface InfoBlockData {
  title: string;
  content: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'accent';
}

interface DraggableInfoBlockProps {
  block: InfoBlockData;
  index: number;
  onPositionChange: (index: number, position: { x: number; y: number }) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function DraggableInfoBlock({ 
  block, 
  index, 
  onPositionChange, 
  containerRef 
}: DraggableInfoBlockProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const newX = position.x + info.offset.x;
    const newY = position.y + info.offset.y;
    setPosition({ x: newX, y: newY });
    onPositionChange(index, { x: newX, y: newY });
  };

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing z-10"
      style={{ x: position.x, y: position.y }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={containerRef}
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
    >
      <div className="w-full max-w-sm">
        <InfoBlock
          title={block.title}
          content={block.content}
          size={block.size}
          variant={block.variant}
          index={index}
        />
      </div>
    </motion.div>
  );
}
