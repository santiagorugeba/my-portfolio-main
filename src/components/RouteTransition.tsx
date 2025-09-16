import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTransition } from '@/contexts/TransitionContext';

/**
 * @component RouteTransition
 * @description Un componente de transición de página que muestra una animación
 * de cortina al cambiar de ruta. Utiliza `framer-motion` para animar la entrada
 * y salida de un div que cubre la pantalla.
 */
export default function RouteTransition() {
  // --- 1. Hooks de React y Estado ---
  
  // `useLocation` de 'react-router-dom' nos permite acceder al objeto de ubicación actual.
  // Su cambio de valor indica que se ha navegado a una nueva ruta.
  const location = useLocation();
  const { setShowContent } = useTransition();
  
  // Estados para controlar la transición
  const [showCurtain, setShowCurtain] = useState(false);

  // --- 2. Lógica de Efectos (useEffect) ---
  
  // `useEffect` se ejecuta cada vez que `location.pathname` cambia (es decir,
  // cuando la ruta de la página cambia).
  useEffect(() => {
    // Paso 1: Ocultar contenido inmediatamente
    setShowContent(false);
    
    // Paso 2: Mostrar cortina inmediatamente
    setShowCurtain(true);

    // Paso 3: Después de que la cortina esté completamente visible, ocultarla
    const hideCurtainTimer = setTimeout(() => {
      setShowCurtain(false);
    }, 400); // Tiempo para que la cortina se muestre completamente

    // Paso 4: Mostrar contenido después de que la cortina se oculte
    const showContentTimer = setTimeout(() => {
      setShowContent(true);
    }, 800); // Tiempo total para que la transición se complete

    // Limpiar timers
    return () => {
      clearTimeout(hideCurtainTimer);
      clearTimeout(showContentTimer);
    };
  }, [location.pathname]); // El efecto se vuelve a ejecutar solo si la ruta cambia.

  // --- 3. Renderizado del Componente ---
  return (
    // `AnimatePresence` permite a `framer-motion` animar los componentes
    // que se eliminan del árbol DOM.
    <AnimatePresence>
      {/* La cortina se muestra cuando showCurtain es true */}
      {showCurtain && (
        <motion.div
          // La `key` es crucial. Si la `key` cambia, `framer-motion`
          // considera que es un componente nuevo y ejecuta las animaciones
          // de `initial` y `animate`, mientras que el componente anterior
          // (con la `key` antigua) ejecuta la animación de `exit`.
          key={location.pathname}
          
          className='fixed inset-0 z-50 pointer-events-none'
          
          // `initial`: Estado inicial de la animación (fuera de la pantalla).
          initial={{ y: '100%' }}
          
          // `animate`: Estado final al entrar.
          animate={{ y: 0 }}
          
          // `exit`: Estado final al salir.
          exit={{ y: '-100%' }}
          
          // `transition`: Propiedades de la animación (duración y easing).
          transition={{ duration: 0.4, ease: [0.85, 0, 0.15, 1] }}
          
          // Estilos en línea para el degradado de color.
          style={{ background: 'linear-gradient(135deg,#EB5E28 0%, #EB5E28 60%, rgba(235,94,40,0.85) 100%)' }}
        >
          {/* Contenido centrado dentro de la cortina de transición. */}
          <div className='absolute inset-0 grid place-items-center'>
            <div className='text-white/90 font-extrabold tracking-widest text-2xl'>
              SR
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}