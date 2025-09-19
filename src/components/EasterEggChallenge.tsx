import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

export default function EasterEggChallenge() {
  const [userGuess, setUserGuess] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(1);
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
      setConfettiOpacity(1);
      console.log('¡Confetti activado! 🎉');
      
      // Iniciar fade out después de 6 segundos
      setTimeout(() => {
        setConfettiOpacity(0);
        console.log('Confetti fade out iniciado');
      }, 6000);
      
      // Desactivar confetti completamente después de 8 segundos
      setTimeout(() => {
        setShowConfetti(false);
        setConfettiOpacity(1); // Reset para la próxima vez
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
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Columna izquierda - Instrucciones */}
                <div className="text-left">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-graphite dark:text-brand-light mb-4">
                    ¿Eres un Easter Egg Expert?
                  </h2>
                  
                  <p className="text-brand-graphite/70 dark:text-brand-light/70 text-sm sm:text-base leading-relaxed mb-4">
                    He escondido varias <strong>barras de chocolate 🍫</strong> estratégicamente en mi portfolio. 
                    Si logras encontrarlas todas, ¡eres ultra detallista! Cuenta cuántas viste y recibe 
                    un diploma por tu expertise en ser observador.
                  </p>
                  
                  {/* Tip al final con estilo naranja */}
                  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-3">
                    <p className="text-brand-graphite/80 dark:text-brand-light/80 text-xs font-medium">
                      <strong>Tip:</strong> Cambia entre modo claro y oscuro usando el botón de tema en la navbar. 
                      Algunos chocolates son más fáciles de encontrar en un modo que en el otro. 
                      ¡Usa esta ventaja para tu búsqueda!
                    </p>
                  </div>
                </div>

                {/* Columna derecha - Contador */}
                <div className="flex flex-col items-center justify-center">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">🍫</div>
                    <p className="text-sm text-brand-graphite/70 dark:text-brand-light/70">
                      ¿Cuántos chocolates encontraste?
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-brand-sand/10 dark:bg-white/5 rounded-xl p-3 border border-standard mb-4">
                    <motion.button
                      onClick={() => {
                        const currentValue = parseInt(userGuess || '0');
                        setUserGuess(Math.max(0, currentValue - 1).toString());
                      }}
                      className="w-8 h-8 rounded-full bg-brand-graphite/10 dark:bg-brand-light/10 hover:bg-brand-graphite/20 dark:hover:bg-brand-light/20 transition-colors flex items-center justify-center text-lg font-bold text-brand-graphite dark:text-brand-light touch-manipulation"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={parseInt(userGuess || '0') <= 0}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                    
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={userGuess || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 20)) {
                          setUserGuess(value);
                        }
                      }}
                      className="w-14 h-8 text-center text-lg font-bold text-brand-graphite dark:text-brand-light bg-transparent border border-brand-accent/30 rounded focus:border-brand-accent focus:outline-none"
                      placeholder="0"
                      maxLength={2}
                    />
                    
                    <motion.button
                      onClick={() => {
                        const currentValue = parseInt(userGuess || '0');
                        setUserGuess(Math.min(20, currentValue + 1).toString());
                      }}
                      className="w-8 h-8 rounded-full bg-brand-graphite/10 dark:bg-brand-light/10 hover:bg-brand-graphite/20 dark:hover:bg-brand-light/20 transition-colors flex items-center justify-center text-lg font-bold text-brand-graphite dark:text-brand-light touch-manipulation"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={parseInt(userGuess || '0') >= 20}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                  
                  <motion.button
                    onClick={handleSubmitGuess}
                    className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 text-sm sm:text-base font-semibold bg-brand-accent text-white rounded-xl hover:bg-brand-accent/90 transition-colors touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verificar Respuesta
                  </motion.button>
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
                    className="text-4xl sm:text-5xl md:text-6xl mb-6"
                  >
                    🍫
                  </motion.div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-4">
                    ¡Felicitaciones!
                  </h3>
                  <h4 className="font-heading text-2xl md:text-3xl font-semibold text-brand-graphite dark:text-brand-light mb-6">
                    Eres un Easter Egg Expert
                  </h4>
                  <p className="text-brand-graphite/70 dark:text-brand-light/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
                    Eres una persona observadora y orientada al detalle.<br />
                    ¡Gracias por participar!
                  </p>
                  {/* TODO: Descomentar cuando el diploma esté diseñado */}
                  {/* <motion.button
                    onClick={generateCertificate}
                    className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 text-sm sm:text-base font-semibold bg-brand-accent text-white rounded-xl hover:bg-brand-accent/90 transition-colors touch-manipulation"
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
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-red-500 mb-4">
                    ¡Intenta de nuevo!
                  </h3>
                  <p className="text-brand-graphite/70 dark:text-brand-light/70 text-base leading-relaxed mb-6 max-w-md mx-auto">
                    El número no es correcto. ¡Activa tus super habilidades! 
                    Los chocolates están ahí esperándote, solo necesitas ser más observador.
                  </p>
                  <motion.button
                    onClick={() => {
                      setShowResult(false);
                      setUserGuess('');
                    }}
                    className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 text-sm sm:text-base font-semibold bg-red-500 text-white rounded-xl hover:bg-red-500/90 transition-colors touch-manipulation"
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
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50"
          animate={{ opacity: confettiOpacity }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.div>
      )}
    </>
  );
}
