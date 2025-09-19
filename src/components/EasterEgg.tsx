import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useTheme } from '@/theme/ThemeContext';

// Context para compartir la función de easter egg
interface EasterEggContextType {
  onEasterEggFound: (id: string) => void;
}

const EasterEggContext = createContext<EasterEggContextType | null>(null);

export const useEasterEgg = () => {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error('useEasterEgg must be used within EasterEggProvider');
  }
  return context;
};

interface EasterEggProps {
  id: string;
  position?: { top?: string; bottom?: string; left?: string; right?: string };
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  opacity: number;
  rotation?: number;
  onFound: (id: string) => void;
  className?: string;
  isInline?: boolean;
  variant?: 'default' | 'tool' | 'card' | 'hidden';
}

const EasterEgg: React.FC<EasterEggProps> = ({ 
  id, 
  position, 
  size, 
  opacity, 
  rotation = 0, 
  onFound,
  className = '',
  isInline = false,
  variant = 'default'
}) => {
  const [isFound, setIsFound] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const handleClick = () => {
    if (!isFound) {
      setIsFound(true);
      onFound(id);
    }
  };

  // Diferentes estilos según el tema y variante
  const getChocolateStyle = () => {
    const baseStyle = {
      filter: isFound 
        ? 'grayscale(100%) brightness(0.3)' 
        : isHovered 
          ? 'brightness(1.3) saturate(1.5)' 
          : 'brightness(1) saturate(1)'
    };

    switch (variant) {
      case 'tool':
        // Para el toolbox, que se vea como una herramienta más
        return {
          ...baseStyle,
          filter: isFound 
            ? 'grayscale(100%) brightness(0.4)' 
            : theme === 'dark'
              ? 'brightness(0.8) saturate(0.7) hue-rotate(20deg)'
              : 'brightness(0.6) saturate(0.8) hue-rotate(15deg)'
        };
      case 'card':
        // Para cards, que se camufle con el contenido
        return {
          ...baseStyle,
          filter: isFound 
            ? 'grayscale(100%) brightness(0.3)' 
            : theme === 'dark'
              ? 'brightness(0.7) saturate(0.6)'
              : 'brightness(0.5) saturate(0.7)'
        };
      case 'hidden':
        // Para elementos muy escondidos
        return {
          ...baseStyle,
          filter: isFound 
            ? 'grayscale(100%) brightness(0.2)' 
            : theme === 'dark'
              ? 'brightness(0.4) saturate(0.3)'
              : 'brightness(0.3) saturate(0.4)'
        };
      default:
        return baseStyle;
    }
  };

  const containerClasses = isInline 
    ? `inline-block cursor-pointer select-none ${className}`
    : `fixed z-50 cursor-pointer select-none ${className}`;

  return (
    <motion.div
      className={containerClasses}
      style={isInline ? {} : { ...position }}
      initial={{ scale: 0, rotate: rotation }}
      animate={{ 
        scale: isFound ? 0.7 : 1,
        rotate: rotation,
        opacity: isFound ? 0.2 : opacity
      }}
      whileHover={{ 
        scale: variant === 'hidden' ? 1.1 : 1.3,
        opacity: Math.min(opacity + 0.4, 1),
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/chocolate-1-svgrepo-com.svg"
        alt="🍫"
        className={`${sizeClasses[size]} transition-all duration-300 ${
          isFound ? 'grayscale' : ''
        }`}
        style={getChocolateStyle()}
      />
      
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && !isFound && (
          <motion.div
            className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-graphite dark:bg-brand-light text-brand-light dark:text-brand-graphite px-2 py-1 rounded text-xs whitespace-nowrap z-50 ${
              variant === 'hidden' ? 'opacity-80' : ''
            }`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {variant === 'hidden' ? '🎯 ¡Muy bien!' : '¡Encontrado! 🍫'}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Exportar el componente EasterEgg individual
export { EasterEgg };

// Componente principal del Easter Egg
export const EasterEggSystem: React.FC = () => {
  const [foundEggs, setFoundEggs] = useState<string[]>([]);
  const [showCounter, setShowCounter] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  // Función para manejar cuando se encuentra un easter egg
  const handleEasterEggFound = (id: string) => {
    if (!foundEggs.includes(id)) {
      setFoundEggs(prev => [...prev, id]);
    }
  };

  const handleSubmitGuess = () => {
    setShowResult(true);
    const correctAnswer = foundEggs.length === 15;
    
    if (correctAnswer && userGuess === '15') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const generateCertificate = () => {
    // Crear un PDF simple con el certificado
    const certificateData = {
      title: "Certificado de Detallista Web",
      recipient: "Usuario Anónimo",
      date: new Date().toLocaleDateString('es-ES'),
      achievement: "Encontró los 15 easter eggs de chocolate en el portfolio de Santiago Ruge"
    };
    
    // Aquí podrías integrar una librería como jsPDF para generar el PDF real
    console.log("Generando certificado:", certificateData);
    
    // Por ahora, mostramos un mensaje
    alert("¡Certificado generado! (Funcionalidad de PDF en desarrollo)");
  };

  return (
    <EasterEggContext.Provider value={{ onEasterEggFound: handleEasterEggFound }}>
      {/* Counter Section - aparece después del formulario */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-6">
              🍫 ¿Lograste contar las barras de chocolate?
            </h2>
            <p className="text-brand-graphite/70 dark:text-brand-light/70 text-lg mb-8 max-w-2xl mx-auto">
              Si encontraste todos los easter eggs de chocolate escondidos en mi portfolio, 
              ¡eres muy detallista! Coloca el número que contaste y te daré un certificado.
            </p>
            
            <div className="bg-brand-sand/10 dark:bg-white/5 backdrop-blur-md border border-standard rounded-2xl p-8 max-w-md mx-auto">
              <div className="mb-6">
                <p className="text-sm text-brand-graphite/60 dark:text-brand-light/60 mb-2">
                  Encontrados: {foundEggs.length}/15
                </p>
                <div className="w-full bg-brand-graphite/10 dark:bg-brand-light/10 rounded-full h-2">
                  <div 
                    className="bg-brand-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(foundEggs.length / 15) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mb-6">
                <input
                  type="number"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  placeholder="Tu respuesta..."
                  className="flex-1 px-4 py-3 bg-brand-sand/20 dark:bg-white/10 border border-standard rounded-xl text-brand-graphite dark:text-brand-light placeholder-brand-graphite/50 dark:placeholder-brand-light/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                  min="0"
                  max="20"
                />
                <motion.button
                  onClick={handleSubmitGuess}
                  className="px-6 py-3 bg-brand-accent text-white rounded-xl font-semibold hover:bg-brand-accent/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Verificar
                </motion.button>
              </div>
              
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  {foundEggs.length === 15 && userGuess === '15' ? (
                    <div>
                      <h3 className="text-2xl font-bold text-brand-accent mb-4">
                        🎉 ¡Felicitaciones! Eres un Easter Egg Expert
                      </h3>
                      <p className="text-brand-graphite dark:text-brand-light mb-4">
                        ¡Increíble atención al detalle! Has encontrado todos los easter eggs.
                      </p>
                      <motion.button
                        onClick={generateCertificate}
                        className="px-6 py-3 bg-brand-accent text-white rounded-xl font-semibold hover:bg-brand-accent/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🏆 Generar Certificado
                      </motion.button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold text-brand-graphite dark:text-brand-light mb-2">
                        {foundEggs.length < 15 ? '¡Sigue buscando!' : '¡Casi lo logras!'}
                      </h3>
                      <p className="text-brand-graphite/70 dark:text-brand-light/70">
                        {foundEggs.length < 15 
                          ? 'Explora cada sección con atención. Los easter eggs están escondidos en diferentes lugares.'
                          : 'Tu respuesta no es correcta. ¡Intenta de nuevo!'
                        }
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#FF6B35', '#F7931E', '#FFD23F', '#FF8C42', '#FFA726']}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
    </EasterEggContext.Provider>
  );
};

export default EasterEggSystem;
