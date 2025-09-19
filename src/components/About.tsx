// src/components/About.tsx
import { about } from '@/data/about';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import GlobalReach from '@/components/GlobalReach';
import PromiseOfTheDay from '@/components/PromiseOfTheDay';

export default function About() {
  return (
    <section id='about' className='max-w-6xl mx-auto px-6 py-8 scroll-mt-28 -mt-0'>
      <h2 className='font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-6'>
        About me
      </h2>
      
      {/* Bloque principal con tu storytelling */}
      <motion.div
        className='glass-light dark:glass-dark rounded-3xl p-8 relative'
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1 
        }}
        viewport={{ 
          once: false, 
          amount: 0.3 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {/* Easter Egg en About */}
        <div className="absolute top-6 right-6 z-10">
          <img
            src="/chocolate-1-svgrepo-com.svg"
            alt="🍫"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{
              filter: 'brightness(0.5) saturate(0.7)',
              opacity: 0.3
            }}
            onClick={() => {
              console.log('Chocolate encontrado en About!');
              // Aquí agregaremos la lógica de conteo después
            }}
          />
        </div>

        <motion.div className='space-y-4' variants={stagger(0.08)}>
          {about.paragraphs.map((p, i) => (
            <motion.p key={i} className='text-brand-graphite/90 dark:text-brand-light/80 leading-7' variants={fadeUp(0.05)}>
              {p}
              {/* Easter Egg oculto en el texto */}
              {i === 1 && (
                <img
                  src="/chocolate-1-svgrepo-com.svg"
                  alt="🍫"
                  className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform duration-200 ml-2 inline-block"
                  style={{
                    filter: 'brightness(0.3) saturate(0.4)',
                    opacity: 0.1
                  }}
                  onClick={() => {
                    console.log('Chocolate oculto encontrado en About!');
                  }}
                />
              )}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Promesas de Dios */}
      <PromiseOfTheDay />

      {/* Nuevo: mapa interactivo + estadísticas */}
      <GlobalReach />
    </section>
  );
}
