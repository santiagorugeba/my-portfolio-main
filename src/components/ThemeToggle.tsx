import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/theme/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggle}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-standard bg-brand-sand/10 dark:bg-white/5 p-1 transition-colors hover:bg-brand-sand/20 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2 focus:ring-offset-transparent"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{ scale: 1 }}
    >
      {/* Track background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-sand/30 to-brand-graphite/30 dark:from-brand-graphite/20 dark:to-brand-coal/20" />
      
      {/* Toggle circle */}
      <motion.div
        className="relative h-7 w-7 rounded-full bg-gradient-to-br from-brand-light to-brand-sand dark:from-brand-light dark:to-brand-sand shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 0 : 32, // Invertido: dark mode a la izquierda (0), light mode a la derecha (32)
          rotate: isDark ? 0 : 180,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Moon icon (dark mode) - visible cuando está en dark mode */}
        <motion.div
          className="absolute"
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/moon.svg" 
            alt="Modo oscuro" 
            className="h-4 w-4"
            style={{ 
              filter: isDark 
                ? 'brightness(0) saturate(0) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' 
                : 'brightness(0) saturate(0) invert(25%) sepia(8%) saturate(1018%) hue-rotate(314deg) brightness(95%) contrast(86%)',
            }}
          />
        </motion.div>
        
        {/* Sun icon (light mode) - visible cuando está en light mode */}
        <motion.div
          className="absolute"
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/sun.svg" 
            alt="Modo claro" 
            className="h-4 w-4"
            style={{ 
              filter: !isDark 
                ? 'brightness(0) saturate(0) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' 
                : 'brightness(0) saturate(0) invert(25%) sepia(8%) saturate(1018%) hue-rotate(314deg) brightness(95%) contrast(86%)',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
