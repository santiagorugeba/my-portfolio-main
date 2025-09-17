// src/components/About.tsx
import { about } from '@/data/about';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import GlobalReach from '@/components/GlobalReach';

export default function About() {
  return (
    <section id='about' className='max-w-6xl mx-auto px-6 py-8 scroll-mt-28 -mt-0'>
      {/* Bloque principal con tu storytelling */}
      <motion.div
        className='glass-light dark:glass-dark rounded-3xl p-8'
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
        <h2 className='text-3xl font-extrabold mb-4 text-brand-graphite dark:text-brand-light'>
          About me
        </h2>

        <motion.div className='space-y-4' variants={stagger(0.08)}>
          {about.paragraphs.map((p, i) => (
            <motion.p key={i} className='text-brand-graphite/90 dark:text-brand-light/80 leading-7' variants={fadeUp(0.05)}>
              {p}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Nuevo: mapa interactivo + estadísticas */}
      <GlobalReach />
    </section>
  );
}
