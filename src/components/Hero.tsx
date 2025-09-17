import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Componente para el efecto de typing
function TypewriterText({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, delay + (currentIndex * speed));

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-6 bg-brand-accent ml-1 typing-cursor" />
      )}
    </span>
  );
}

// Componente para badges que aparecen uno por uno con movimiento armónico secuencial
function AnimatedBadge({ children, delay = 0, index = 0, totalBadges = 7 }: { children: React.ReactNode; delay?: number; index?: number; totalBadges?: number }) {
  // Cada badge se mueve con un delay secuencial para crear la onda
  const waveDelay = index * 0.3; // 0.3 segundos entre cada badge
  const totalWaveDuration = totalBadges * 0.3; // Duración total de la onda
  
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -12, 0] // Movimiento más pronunciado para la onda
      }}
      transition={{ 
        delay, 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        // Animación de onda secuencial
        y: {
          delay: waveDelay,
          duration: 0.6, // Duración del movimiento individual
          repeat: Infinity,
          repeatDelay: totalWaveDuration - 0.6, // Espera hasta que termine la onda completa
          ease: "easeInOut"
        }
      }}
      className="px-3 py-1 rounded-full text-sm
                 text-brand-graphite dark:text-brand-light
                 glass-light dark:glass-dark
                 hover:shadow-md transition-shadow"
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const skills = [
    "Figma",
    "Product Design", 
    "Web & App Design",
    "User Interviews",
    "Usability Testing",
    "Design Systems",
    "Agile / Scrum"
  ];

  return (
    <header className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2 md:pt-8 md:pb-4">
        {/* Badge ubicación - aparece primero con pulso naranja */}
        <motion.div 
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="px-3 py-1 rounded-lg text-sm text-brand-graphite dark:text-brand-light glass-light dark:glass-dark relative"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(235, 94, 40, 0.7)",
                "0 0 0 8px rgba(235, 94, 40, 0)",
                "0 0 0 0 rgba(235, 94, 40, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            {/* Punto naranja pulsante a la izquierda */}
            <motion.span
              className="inline-block w-2 h-2 bg-brand-accent rounded-full mr-2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span>Disponible · Bogotá, Colombia</span>
          </motion.span>
        </motion.div>

        {/* Título con efecto typing */}
        <motion.h1 
          className="text-center font-extrabold leading-tight tracking-tight
                     text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px]
                     text-brand-graphite dark:text-brand-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <TypewriterText 
            text="Santiago Ruge Ballesteros" 
            delay={150} 
            speed={20}
          />
        </motion.h1>

        {/* Subtítulo directo */}
        <motion.p 
          className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl
                     text-brand-graphite/90 dark:text-brand-light/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Product Designer con experiencia internacional diseñando plataformas digitales que generan impacto real en negocio y usuarios.
        </motion.p>

        {/* Chips de skills que aparecen uno por uno */}
        <motion.div 
          className="mt-6 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.0 }}
        >
          {skills.map((skill, index) => (
            <AnimatedBadge key={skill} delay={1.2 + (index * 0.08)} index={index} totalBadges={skills.length}>
              {skill}
            </AnimatedBadge>
          ))}
        </motion.div>
      </div>
      
    </header>
  );
}
