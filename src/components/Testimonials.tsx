import React, { useMemo, useState } from "react";
import { testimonials as DATA, Testimonial } from "@/data/testimonials";
import { motion } from "framer-motion";

function StarRow({ count = 5 }: { count?: number }) {
  const n = Math.max(0, Math.min(5, count ?? 0));
  return (
    <div className="flex gap-1 text-brand-accent">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} aria-hidden>★</span>
      ))}
    </div>
  );
}

// Componente de card individual
function TestimonialCard({ testimonial, index }: { 
  testimonial: Testimonial; 
  index: number;
}) {
  return (
    <motion.div
      className="
        group relative
        glass-light dark:glass-dark
        rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:shadow-brand-accent/20 dark:hover:shadow-brand-accent/30
        hover:-translate-y-2 hover:scale-[1.02]
        cursor-pointer
        overflow-hidden
        h-full
      "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-accent/5
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 ease-out
      " />
      
      {/* Animated border glow */}
      <div className="
        absolute inset-0
        rounded-2xl
        bg-gradient-to-r from-brand-accent/20 via-brand-accent/10 to-brand-accent/20
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 ease-out
        blur-sm
        -z-10
      " />


      {/* Easter Egg en testimonials */}
      {index === 0 && (
        <div className="absolute top-4 left-4 z-10">
          <img
            src="/chocolate-1-svgrepo-com.svg"
            alt="🍫"
            className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{
              filter: 'brightness(0.5) saturate(0.7)',
              opacity: 0.25
            }}
            onClick={() => {
              console.log('Chocolate encontrado en Testimonial!');
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Stars with hover animation */}
        <motion.div 
          className="mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <StarRow count={testimonial.stars ?? 5} />
        </motion.div>

        {/* Quote */}
        <blockquote className="
          text-brand-graphite dark:text-brand-light
          text-sm sm:text-base md:text-lg leading-relaxed
          mb-4 sm:mb-5 md:mb-6 flex-1
          group-hover:text-brand-graphite/90 dark:group-hover:text-brand-light/90
          transition-colors duration-300
        ">
          "{testimonial.quote}"
        </blockquote>

        {/* Author info */}
        <div className="flex items-center gap-3">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="
                h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover
                ring-2 ring-brand-graphite/10 dark:ring-brand-light/10
                group-hover:ring-brand-accent/30
                transition-all duration-300
              "
            />
            {/* Pulse effect on hover */}
            <div className="
              absolute inset-0
              rounded-full
              ring-2 ring-brand-accent/0
              group-hover:ring-brand-accent/40
              transition-all duration-500 ease-out
              animate-pulse
            " />
          </motion.div>
          <div className="min-w-0 flex-1">
            <div className="
              font-semibold text-xs sm:text-sm md:text-base
              text-brand-graphite dark:text-brand-light
              group-hover:text-brand-accent
              transition-colors duration-300
            ">
              {testimonial.name}
            </div>
            <div className="
              text-xs sm:text-sm text-brand-graphite/60 dark:text-brand-light/60
              group-hover:text-brand-graphite/80 dark:group-hover:text-brand-light/80
              transition-colors duration-300
            ">
              {testimonial.role}
              {testimonial.company ? ` • ${testimonial.company}` : ""}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const items = useMemo(() => DATA.filter(Boolean), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Obtener las 2 cards a mostrar
  const getVisibleCards = () => {
    const total = items.length;
    const next = (currentIndex + 1) % total;
    
    return [
      { testimonial: items[currentIndex], index: currentIndex, position: 'left' },
      { testimonial: items[next], index: next, position: 'right' }
    ];
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-28 px-4 sm:px-6"
    >
      {/* Header */}
      <motion.div 
        className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-4">
          Lo que dicen sobre mi trabajo
        </h2>
        <p className="text-brand-graphite/70 dark:text-brand-light/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Testimonios reales de clientes y colegas que han trabajado conmigo
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto">
        {/* Navigation arrows */}
        <div className="flex justify-center sm:justify-end gap-3 mb-6 sm:mb-8">
          <motion.button
            onClick={goToPrev}
            className="
              h-10 w-10 sm:h-12 sm:w-12
              border border-standard bg-brand-sand/10 dark:bg-white/5 backdrop-blur-md
              rounded-xl
              flex items-center justify-center
              text-brand-graphite dark:text-brand-light
              hover:text-brand-accent
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
              touch-manipulation
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Testimonio anterior"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="
              h-10 w-10 sm:h-12 sm:w-12
              border border-standard bg-brand-sand/10 dark:bg-white/5 backdrop-blur-md
              rounded-xl
              flex items-center justify-center
              text-brand-graphite dark:text-brand-light
              hover:text-brand-accent
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
              touch-manipulation
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Siguiente testimonio"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile: Single Card with Drag */}
        <div className="sm:hidden">
          
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.x > 100) {
                goToPrev();
              } else if (info.offset.x < -100) {
                goToNext();
              }
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <TestimonialCard testimonial={items[currentIndex]} index={currentIndex} />
          </motion.div>
        </div>

        {/* Tablet: Single Card with Horizontal Navigation */}
        <div className="hidden sm:block lg:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-2xl mx-auto"
          >
            <TestimonialCard testimonial={items[currentIndex]} index={currentIndex} />
          </motion.div>
        </div>

        {/* Desktop: Two Cards Grid */}
        <motion.div 
          className="
            hidden lg:grid lg:grid-cols-2
            gap-6 lg:gap-8
            auto-rows-fr
          "
          key={currentIndex} // Force re-render for fade effect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {getVisibleCards().map(({ testimonial, index, position }) => (
            <motion.div
              key={`${testimonial.name}-${index}-${currentIndex}`}
              className={`
                ${position === 'left' ? 'lg:scale-105 lg:z-10' : 'lg:scale-95'}
                transition-all duration-500 ease-out
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: position === 'left' ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-3 w-3 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? "bg-brand-accent shadow-lg shadow-brand-accent/25" 
                  : "bg-brand-graphite/20 dark:bg-brand-light/20 hover:bg-brand-graphite/40 dark:hover:bg-brand-light/40"
                }
              `}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
