import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

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
  
  // `useState` maneja el estado de visibilidad de la animación de transición.
  const [show, setShow] = useState(false);

  // --- 2. Lógica de Efectos (useEffect) ---
  
  // `useEffect` se ejecuta cada vez que `location.pathname` cambia (es decir,
  // cuando la ruta de la página cambia).
  useEffect(() => {
    // Al iniciar una nueva navegación, establecemos 'show' en `true` para
    // que la animación de entrada de la cortina se dispare.
    setShow(true);

    // Creamos un `setTimeout` para ocultar la animación después de 650ms.
    // Esto coincide con la duración de la animación para que desaparezca
    // justo cuando el nuevo contenido está listo.
    const t = setTimeout(() => setShow(false), 650);

    // La función de retorno de `useEffect` limpia el temporizador.
    // Esto evita fugas de memoria y asegura que el temporizador se reinicie
    // correctamente si la navegación ocurre antes de que el anterior termine.
    return () => clearTimeout(t);
  }, [location.pathname]); // El efecto se vuelve a ejecutar solo si la ruta cambia.

  // --- 3. Renderizado del Componente ---
  return (
    // `AnimatePresence` permite a `framer-motion` animar los componentes
    // que se eliminan del árbol DOM.
    <AnimatePresence>
      {/* El componente <motion.div> solo se renderiza si 'show' es `true`.
        Cuando 'show' se vuelve `false`, `AnimatePresence` detecta que ha sido
        eliminado y ejecuta la animación de salida (`exit`). 
      */}
      {show && (
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
          transition={{ duration: 0.65, ease: [0.85, 0, 0.15, 1] }}
          
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