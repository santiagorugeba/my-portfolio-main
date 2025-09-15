import { about } from '@/data/about'; import { motion } from 'framer-motion'; import { fadeUp, stagger } from '@/lib/motion'
export default function About(){ return (<section id='about' className='max-w-6xl mx-auto px-6 py-16 scroll-mt-28'>
  <motion.div className='glass rounded-3xl p-8' variants={fadeUp(0)} initial='hidden' whileInView='show' viewport={{once:true,amount:.25}}>
    <h2 className='text-3xl font-extrabold mb-4 text-brand-graphite dark:text-brand-light'>About me</h2>
    <motion.div className='grid md:grid-cols-[2fr_1fr] gap-6' variants={stagger(.08)}>
      <motion.div className='space-y-4' variants={fadeUp(.05)}>{about.paragraphs.map((p,i)=>(<p key={i} className='text-brand-graphite/90 dark:text-brand-light/80 leading-7'>{p}</p>))}
        <ul className='grid gap-2 list-disc list-inside text-brand-graphite/90 dark:text-brand-light/80'>{about.bullets.map((b,i)=>(<li key={i}>{b}</li>))}</ul>
      </motion.div>
      <motion.aside className='grid gap-3' variants={stagger(.06)}>
        <motion.div variants={fadeUp(.1)} className='rounded-2xl p-4 bg-brand-sand/30 dark:bg-white/5'><p className='text-sm text-brand-graphite/80 dark:text-brand-light/70'>Años diseñando para startups, enfocándome en velocidad con calidad y métricas claras.</p></motion.div>
        <motion.div variants={fadeUp(.15)} className='rounded-2xl p-4 bg-brand-sand/30 dark:bg-white/5'><p className='text-sm text-brand-graphite/80 dark:text-brand-light/70'>Disponible para proyectos, contratos o roles full-time remotos.</p></motion.div>
      </motion.aside>
    </motion.div>
  </motion.div>
</section>) }