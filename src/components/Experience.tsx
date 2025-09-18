import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: 'SpiderHat (Remoto)',
    role: 'UX/UI Consultant',
    period: 'Ago 2025 — Presente',
    bullets: [
      'SaaS de evaluaciones psicométricas para LATAM.',
      'Dashboards para admins, empresas y participantes.',
      'Mailing HTML y notificaciones.'
    ]
  },
  {
    company: 'Bti Lab — Bogotá',
    role: 'UX/UI Designer',
    period: 'Jun 2023 — Ago 2025',
    bullets: [
      'Interfaces en 12 proyectos (apuestas, gamificación).',
      'Reportes con IA para decisiones rápidas.',
      '+45% adquisición YoY.'
    ]
  },
  {
    company: 'Creante Lab — Bogotá',
    role: 'Multimedia Engineering Intern (UI/UX)',
    period: 'Jun 2022 — Dic 2022',
    bullets: [
      'Guías de estilo y prototipos VR/desktop/mobile.',
      'Landing pages en WordPress.'
    ]
  }
];

export default function Experience() {
  return (
    <section id='experience' className='max-w-6xl mx-auto px-6 py-20 scroll-mt-28 relative'>
      {/* Easter Eggs en Experience */}
      <div className="absolute top-8 right-8 z-10">
        <img
          src="/chocolate-1-svgrepo-com.svg"
          alt="🍫"
          className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            filter: 'brightness(0.5) saturate(0.7)',
            opacity: 0.25
          }}
          onClick={() => {
            console.log('Chocolate encontrado en Experience!');
          }}
        />
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <img
          src="/chocolate-1-svgrepo-com.svg"
          alt="🍫"
          className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            filter: 'brightness(0.3) saturate(0.5)',
            opacity: 0.15
          }}
          onClick={() => {
            console.log('Chocolate oculto encontrado en Experience!');
          }}
        />
      </div>
      <h2 className='text-3xl font-extrabold mb-8 text-brand-graphite dark:text-brand-light'>
        Experiencia
      </h2>
      
      <motion.div 
        className='grid gap-6' 
        variants={stagger(0.08)} 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: true, amount: 0.2 }}
      >
        {jobs.map((j: Job, idx: number) => (
          <motion.div 
            key={idx} 
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
            className='glass-light dark:glass-dark rounded-3xl p-6 md:p-8'
          >
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-xl font-bold text-brand-graphite dark:text-brand-light'>
                  {j.role}
                </h3>
                <p className='text-brand-graphite/70 dark:text-brand-light/70'>
                  {j.company}
                </p>
              </div>
              <span className='text-brand-graphite/60 dark:text-brand-light/60 text-sm'>
                {j.period}
              </span>
            </div>
            
            <ul className='mt-4 grid gap-2 text-brand-graphite/90 dark:text-brand-light/80 list-disc list-inside'>
              {j.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}