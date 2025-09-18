import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

export default function EasterEggChallenge() {
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmitGuess = () => {
    const currentValue = parseInt(userGuess || '0');
    const correctAnswer = currentValue === 15;
    
    setIsCorrectAnswer(correctAnswer);
    setShowResult(true);
    
    if (correctAnswer) {
      // Activar confetti inmediatamente
      setShowConfetti(true);
      console.log('¡Confetti activado! 🎉');
      
      // Desactivar confetti después de 8 segundos para que sea más visible
      setTimeout(() => {
        setShowConfetti(false);
        console.log('Confetti desactivado');
      }, 8000);
    } else {
      // Animación de vibración para respuesta incorrecta
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  // TODO: Implementar generación de diploma cuando esté diseñado
  // const generateCertificate = () => {
  //   // Crear un PDF simple con el certificado
  //   const certificateData = {
  //     title: "Diploma de Easter Egg Expert",
  //     recipient: "Usuario Anónimo",
  //     date: new Date().toLocaleDateString('es-ES'),
  //     achievement: "Encontró los 15 easter eggs de chocolate en el portfolio de Santiago Ruge",
  //     description: "Por demostrar habilidades excepcionales de observación y atención al detalle"
  //   };
  //   
  //   // Simular descarga de PDF
  //   const element = document.createElement('a');
  //   const file = new Blob([`
  //     DIPLOMA DE EASTER EGG EXPERT
  //     
  //     Se otorga este diploma a:
  //     ${certificateData.recipient}
  //     
  //     Por haber encontrado exitosamente los 15 easter eggs de chocolate
  //     escondidos en el portfolio de Santiago Ruge, demostrando:
  //     
  //     ✓ Habilidades excepcionales de observación
  //     ✓ Atención al detalle
  //     ✓ Persistencia y dedicación
  //     ✓ Espíritu explorador
  //     
  //     Fecha: ${certificateData.date}
  //     
  //     ¡Felicitaciones por tu expertise en ser observador!
  //   `], { type: 'text/plain' });
  //   
  //   element.href = URL.createObjectURL(file);
  //   element.download = `Diploma_EasterEgg_Expert_${new Date().toISOString().split('T')[0]}.txt`;
  //   document.body.appendChild(element);
  //   element.click();
  //   document.body.removeChild(element);
  // };

  return (
    <>
      <section id="easter-egg" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-28">
        <motion.div
          className={`relative h-auto perspective-1000 transition-all duration-300 ${
            isShaking ? 'animate-pulse' : ''
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          animate={isShaking ? {
            x: [-10, 10, -10, 10, -5, 5, 0],
            transition: { duration: 0.6, ease: "easeInOut" }
          } : {}}
        >
          <motion.div
            className="relative w-full h-full transform-style-preserve-3d"
            animate={{ 
              rotateY: showResult ? 180 : 0 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut" 
            }}
          >
            {/* Cara frontal - Formulario */}
            <motion.div
              className="glass-light dark:glass-dark rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 backface-hidden"
              style={{ transform: 'rotateY(0deg)' }}
            >
              <div className="text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-graphite dark:text-brand-light mb-4 sm:mb-6 md:mb-8">
                  ¿Eres un Easter Egg Expert?
                </h2>
                <p className="text-brand-graphite/70 dark:text-brand-light/70 text-base sm:text-lg md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10">
                  He escondido varias <strong>barras de chocolate 🍫</strong> estratégicamente en mi portfolio. 
                  Si logras encontrarlas todas, ¡eres ultra detallista! Cuenta cuántas viste y recibe 
                  un diploma por tu expertise en ser observador.
                </p>
                
                {/* Selector de Chocolates - Centrado */}
                <div className="flex flex-col items-center">
                  <div className="text-center mb-6 sm:mb-8 md:mb-10">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-3 sm:mb-4 md:mb-5">🍫</div>
                    <p className="text-base sm:text-lg md:text-lg lg:text-xl text-brand-graphite/70 dark:text-brand-light/70">
                      ¿Cuántos chocolates encontraste?
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 bg-brand-sand/10 dark:bg-white/5 rounded-2xl p-4 sm:p-5 border border-standard mb-6 sm:mb-8 w-full max-w-sm sm:max-w-md">
                    <motion.button
                      onClick={() => {
                        const currentValue = parseInt(userGuess || '0');
                        setUserGuess(Math.max(0, currentValue - 1).toString());
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-graphite/10 dark:bg-brand-light/10 hover:bg-brand-graphite/20 dark:hover:bg-brand-light/20 transition-colors flex items-center justify-center text-lg sm:text-xl font-bold text-brand-graphite dark:text-brand-light touch-manipulation"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={parseInt(userGuess || '0') <= 0}
                    >
                      −
                    </motion.button>
                    
                    <div className="text-center flex-1 min-w-[60px] sm:min-w-[80px]">
                      <div className="text-2xl sm:text-3xl font-bold text-brand-graphite dark:text-brand-light mb-1">
                        {userGuess || '0'}
                      </div>
                      <div className="text-xs sm:text-sm text-brand-graphite/60 dark:text-brand-light/60">
                        chocolates
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => {
                        const currentValue = parseInt(userGuess || '0');
                        setUserGuess(Math.min(20, currentValue + 1).toString());
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-graphite/10 dark:bg-brand-light/10 hover:bg-brand-graphite/20 dark:hover:bg-brand-light/20 transition-colors flex items-center justify-center text-lg sm:text-xl font-bold text-brand-graphite dark:text-brand-light touch-manipulation"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={parseInt(userGuess || '0') >= 20}
                    >
                      +
                    </motion.button>
                  </div>
                  
                  <motion.button
                    onClick={handleSubmitGuess}
                    className="w-full max-w-sm sm:max-w-md px-6 sm:px-8 py-3 sm:py-4 bg-brand-accent text-white rounded-xl font-semibold hover:bg-brand-accent/90 transition-colors shadow-lg text-sm sm:text-base touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verificar Respuesta
                  </motion.button>
                </div>
                
                {/* Tip sobre Light/Dark Mode */}
                <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 mt-6 sm:mt-8">
                  <p className="text-brand-graphite/80 dark:text-brand-light/80 text-sm sm:text-base md:text-lg font-medium">
                    <strong>Tip:</strong> Cambia entre modo claro y oscuro usando el botón de tema en la navbar. 
                    Algunos chocolates son más fáciles de encontrar en un modo que en el otro. 
                    ¡Usa esta ventaja para tu búsqueda!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cara trasera - Resultados */}
            <motion.div
              className={`absolute inset-0 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 backface-hidden flex items-center justify-center ${
                isCorrectAnswer ? 'glass-light dark:glass-dark' : 'glass-light dark:glass-dark'
              }`}
              style={{ 
                transform: 'rotateY(180deg)',
                background: isCorrectAnswer 
                  ? 'rgba(255, 107, 53, 0.1), rgba(255, 255, 255, 0.1)'
                  : undefined,
                border: isCorrectAnswer ? '1px solid rgba(255, 107, 53, 0.2)' : undefined,
                boxShadow: isCorrectAnswer 
                  ? '0 8px 32px rgba(255, 107, 53, 0.1)'
                  : undefined
              }}
            >
              {isCorrectAnswer ? (
                // Éxito
                <div className="text-center px-4 md:px-6 lg:px-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mb-4 sm:mb-6 md:mb-8"
                  >
                    🎉
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-3 sm:mb-4 md:mb-6">
                    Felicitaciones
                  </h3>
                  <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-brand-graphite dark:text-brand-light mb-4 sm:mb-6 md:mb-8">
                    Eres un Easter Egg Expert
                  </h4>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-brand-graphite/70 dark:text-brand-light/70 mb-6 sm:mb-8 md:mb-10 max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                    Has demostrado una atención al detalle excepcional al encontrar todos los chocolates escondidos en mi portfolio. 
                    Tu nivel de observación y persistencia es impresionante. 
                    Eres oficialmente un experto en encontrar Easter Eggs.
                  </p>
                  {/* TODO: Descomentar cuando el diploma esté diseñado */}
                  {/* <motion.button
                    onClick={generateCertificate}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-brand-accent to-orange-500 text-white rounded-xl font-semibold hover:from-brand-accent/90 hover:to-orange-500/90 transition-all duration-300 shadow-lg text-sm sm:text-base md:text-lg lg:text-xl touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    🏆 Conseguir mi Diploma
                  </motion.button> */}
                </div>
              ) : (
                // Error
                <div className="text-center px-4 md:px-6 lg:px-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mb-4 sm:mb-6 md:mb-8"
                  >
                    😅
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-red-500 mb-3 sm:mb-4 md:mb-6">
                    ¡Intenta de nuevo!
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-brand-graphite dark:text-brand-light mb-6 sm:mb-8 md:mb-10 max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                    El número no es correcto. ¡Activa tus super habilidades! 
                    Los chocolates están ahí esperándote, solo necesitas ser más observador.
                  </p>
                  <motion.button
                    onClick={() => {
                      setShowResult(false);
                      setUserGuess('');
                    }}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-500/90 hover:to-red-600/90 transition-all duration-300 shadow-lg text-sm sm:text-base md:text-lg lg:text-xl touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Intentar de nuevo
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            colors={['#FF6B35', '#F7931E', '#FF8C42', '#FFA726', '#FFB74D', '#FFCC80', '#FFD54F', '#FFE0B2']}
            recycle={true}
            numberOfPieces={500}
            gravity={0.1}
            initialVelocityY={-30}
            initialVelocityX={10}
            wind={0.05}
            friction={0.98}
            run={showConfetti}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999
            }}
          />
        </div>
      )}
    </>
  );
}
