import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveBadge from './InteractiveBadge';

interface Badge {
  id: string;
  label: string;
  initialPosition: { x: number; y: number };
}

interface InteractiveBadgesProps {
  badges: Badge[];
}

export default function InteractiveBadges({ badges }: InteractiveBadgesProps) {
  const [badgePositions, setBadgePositions] = useState<Record<string, { x: number; y: number }>>(
    badges.reduce((acc, badge) => {
      acc[badge.id] = badge.initialPosition;
      return acc;
    }, {} as Record<string, { x: number; y: number }>)
  );

  const [resetKey, setResetKey] = useState(0);

  const handlePositionChange = (badgeId: string, position: { x: number; y: number }) => {
    setBadgePositions(prev => ({
      ...prev,
      [badgeId]: position
    }));
  };

  const handleReset = () => {
    // Resetear posiciones a las iniciales
    setBadgePositions(
      badges.reduce((acc, badge) => {
        acc[badge.id] = badge.initialPosition;
        return acc;
      }, {} as Record<string, { x: number; y: number }>)
    );
    
    // Forzar re-render de los badges
    setResetKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-20 mb-8">
      {/* Botón de Reset */}
      <motion.button
        onClick={handleReset}
        className="absolute -top-8 right-0 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-accent/10 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Reset
      </motion.button>

      {badges.map((badge) => (
        <InteractiveBadge
          key={`${badge.id}-${resetKey}`} // Forzar re-render al reset
          initialPosition={badgePositions[badge.id]}
          onPositionChange={(position) => handlePositionChange(badge.id, position)}
        >
          {badge.label}
        </InteractiveBadge>
      ))}
    </div>
  );
}
