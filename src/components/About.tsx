<<<<<<< HEAD
// Importaciones de librerías y datos.
// - `about`: Importa los datos de la sección "Acerca de mí" desde tu archivo local.
// - `motion`: Componente de Framer Motion para manejar animaciones.
// - `fadeUp` y `stagger`: Funciones personalizadas para definir el comportamiento de las animaciones.
=======
// Importaciones:
// 1. `about`: Los datos de la sección "Acerca de mí" desde el archivo de datos.
// 2. `motion`: Un componente de la librería Framer Motion para animar elementos.
// 3. `fadeUp` y `stagger`: Funciones personalizadas que definen las animaciones.
>>>>>>> e6b964f6feb6152810b1d926bf64667cd2d6f591
import { about } from '@/data/about';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

<<<<<<< HEAD
// Componente principal de React para la sección "Acerca de mí".
export default function About() {
  return (
    // <section>: Elemento semántico para la sección. El `id` permite navegar a ella.
    // Clases de Tailwind CSS:
    // - `max-w-6xl mx-auto`: Centra el contenido y establece un ancho máximo.
    // - `px-6 py-16`: Añade espaciado horizontal y vertical.
    // - `scroll-mt-28`: Desplaza la página 28 unidades por debajo del ancla al navegar.
    <section id='about' className='max-w-6xl mx-auto px-6 py-16 scroll-mt-28'>
      {/* Contenedor principal animado con Framer Motion.
        - `variants={fadeUp(0)}`: Aplica una animación de aparición (fadeUp) sin retraso inicial.
        - `initial='hidden'`: Define el estado inicial (oculto) antes de que la animación comience.
        - `whileInView='show'`: Activa la animación cuando el componente entra en el viewport.
        - `viewport={{once:true, amount:.25}}`: La animación se ejecuta solo una vez cuando
          el 25% del componente es visible en pantalla.
=======
// Componente `About`:
// Este componente de React se encarga de renderizar la sección "Acerca de mí"
// de la página.
export default function About() {
  return (
    // La sección principal con un `id` para la navegación.
    // Utiliza clases de Tailwind CSS para el diseño responsivo y el espaciado.
    <section id='about' className='max-w-6xl mx-auto px-6 py-16 scroll-mt-28'>
      {/* `motion.div`: Un contenedor principal animado.
        - `variants={fadeUp(0)}`: Aplica una animación de aparición con un pequeño retraso.
        - `initial='hidden'`: Estado inicial de la animación (oculto).
        - `whileInView='show'`: Se activa la animación cuando el elemento está en la vista.
        - `viewport={{once:true,amount:.25}}`: Configuración de la visibilidad. La animación
          se ejecuta solo una vez cuando el 25% del elemento es visible.
>>>>>>> e6b964f6feb6152810b1d926bf64667cd2d6f591
      */}
      <motion.div
        className='glass rounded-3xl p-8'
        variants={fadeUp(0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
<<<<<<< HEAD
        {/* Título de la sección. */}
=======
        {/* Título de la sección "About me". */}
>>>>>>> e6b964f6feb6152810b1d926bf64667cd2d6f591
        <h2 className='text-3xl font-extrabold mb-4 text-brand-graphite dark:text-brand-light'>
          About me
        </h2>

<<<<<<< HEAD
        {/* Contenedor de la cuadrícula principal con animación escalonada (stagger).
          - `variants={stagger(.08)}`: Sus elementos hijos se animarán uno tras otro, con un
            retraso de 0.08 segundos entre cada uno.
        */}
        <motion.div className='grid md:grid-cols-[2fr_1fr] gap-6' variants={stagger(0.08)}>
          {/* Columna izquierda con párrafos y lista. */}
          <motion.div className='space-y-4' variants={fadeUp(0.05)}>
            {/* Mapea y renderiza cada párrafo desde el objeto `about`. */}
            {about.paragraphs.map((p, i) => (
              <p key={i} className='text-brand-graphite/90 dark:text-brand-light/80 leading-7'>
                {p}
              </p>
            ))}
            {/* Mapea y renderiza cada elemento de la lista de habilidades. */}
            <ul className='grid gap-2 list-disc list-inside text-brand-graphite/90 dark:text-brand-light/80'>
              {about.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>

          {/* Columna derecha (`<aside>`) con notas adicionales. */}
          <motion.aside className='grid gap-3' variants={stagger(0.06)}>
            {/* Primera nota con animación. */}
=======
        {/* `motion.div`: Un contenedor para la cuadrícula de contenido principal.
          - `variants={stagger(.08)}`: Aplica un efecto de escalonamiento a sus
            elementos hijos, creando una animación en cascada.
        */}
        <motion.div className='grid md:grid-cols-[2fr_1fr] gap-6' variants={stagger(0.08)}>
          {/*
            Primer bloque de contenido: párrafos y lista.
            - `variants={fadeUp(.05)}`: Aplica una animación de aparición a todo este bloque.
          */}
          <motion.div className='space-y-4' variants={fadeUp(0.05)}>
            {/* Mapeo de los párrafos del objeto `about`. */}
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className='text-brand-graphite/90 dark:text-brand-light/80 leading-7'
              >
                {p}
              </p>
            ))}
        
            {/* Mapeo de los bullets (habilidades) del objeto `about`. */}
            
          </motion.div>

          {/* Segundo bloque de contenido: el aside con notas adicionales.
            - `variants={stagger(.06)}`: Aplica un escalonamiento para las notas.
          */}
          <motion.aside className='grid gap-3' variants={stagger(0.06)}>
            {/* Nota 1, con animación de aparición. */}
>>>>>>> e6b964f6feb6152810b1d926bf64667cd2d6f591
            <motion.div
              variants={fadeUp(0.1)}
              className='rounded-2xl p-4 bg-brand-sand/30 dark:bg-white/5'
            >
              <p className='text-sm text-brand-graphite/80 dark:text-brand-light/70'>
                Años diseñando para startups, enfocándome en velocidad con calidad y métricas claras.
              </p>
            </motion.div>
<<<<<<< HEAD
            {/* Segunda nota con animación. */}
=======

            {/* Nota 2, con animación de aparición. */}
>>>>>>> e6b964f6feb6152810b1d926bf64667cd2d6f591
            <motion.div
              variants={fadeUp(0.15)}
              className='rounded-2xl p-4 bg-brand-sand/30 dark:bg-white/5'
            >
              <p className='text-sm text-brand-graphite/80 dark:text-brand-light/70'>
                Disponible para proyectos, contratos o roles full-time remotos.
              </p>
            </motion.div>
          </motion.aside>
        </motion.div>
      </motion.div>
    </section>
  );
}