// src/components/About.tsx
import { about } from '@/data/about';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import GlobalReach from '@/components/GlobalReach';

export default function About() {
  return (
    <section id='about' className='max-w-6xl mx-auto px-6 py-16 scroll-mt-28'>
      {/* Bloque principal con tu storytelling */}
      <motion.div
        className='glass rounded-3xl p-8'
        variants={fadeUp(0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className='text-3xl font-extrabold mb-4 text-brand-graphite dark:text-brand-light'>
          About me
        </h2>

        <motion.div className='grid md:grid-cols-[2fr_1fr] gap-6' variants={stagger(0.08)}>
          <motion.div className='space-y-4' variants={fadeUp(0.05)}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className='text-brand-graphite/90 dark:text-brand-light/80 leading-7'>
                {p}
              </p>
            ))}
            <ul className='grid gap-2 list-disc list-inside text-brand-graphite/90 dark:text-brand-light/80'>
              {about.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Nuevo: mapa interactivo + estadísticas */}
      <GlobalReach />
    </section>
  );
}
