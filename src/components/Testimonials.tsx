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
        rounded-2xl p-6
        hover:border-brand-accent/50 dark:hover:border-brand-accent/50
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

      {/* Quote icon with animation */}
      <motion.div 
        className="
          absolute top-4 right-4
          text-brand-accent/20 dark:text-brand-accent/30
          text-2xl
          transition-all duration-300
        "
        whileHover={{ 
          scale: 1.2,
          rotate: 5,
          color: "var(--brand-accent)"
        }}
      >
        "
      </motion.div>

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
          text-sm leading-relaxed
          mb-6 flex-1
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
                h-10 w-10 rounded-full object-cover
                ring-2 ring-brand-graphite/10 dark:ring-white/10
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
              font-semibold text-sm
              text-brand-graphite dark:text-brand-light
              group-hover:text-brand-accent
              transition-colors duration-300
            ">
              {testimonial.name}
            </div>
            <div className="
              text-xs text-brand-graphite/60 dark:text-white/60
              group-hover:text-brand-graphite/80 dark:group-hover:text-white/80
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

  // Obtener las 3 cards a mostrar
  const getVisibleCards = () => {
    const total = items.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    
    return [
      { testimonial: items[prev], index: prev, position: 'left' },
      { testimonial: items[currentIndex], index: currentIndex, position: 'center' },
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
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite dark:text-brand-light mb-4">
          Lo que dicen sobre mi trabajo
        </h2>
        <p className="text-brand-graphite/70 dark:text-white/70 text-lg max-w-2xl mx-auto">
          Testimonios reales de clientes y colegas que han trabajado conmigo
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto">
        {/* Navigation arrows */}
        <div className="flex justify-end gap-3 mb-8">
          <motion.button
            onClick={goToPrev}
            className="
              h-12 w-12
              glass-light dark:glass-dark
              rounded-xl
              flex items-center justify-center
              text-brand-graphite dark:text-brand-light
              hover:border-brand-accent/30
              hover:text-brand-accent
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Testimonio anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="
              h-12 w-12
              glass-light dark:glass-dark
              rounded-xl
              flex items-center justify-center
              text-brand-graphite dark:text-brand-light
              hover:border-brand-accent/30
              hover:text-brand-accent
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Siguiente testimonio"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile: Single Card with Drag */}
        <div className="md:hidden">
          {/* Drag indicator */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 text-brand-graphite/60 dark:text-white/60 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <span>Desliza para navegar</span>
            </div>
          </div>
          
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

        {/* Desktop: Three Cards Grid */}
        <motion.div 
          className="
            hidden md:grid md:grid-cols-3
            gap-6 md:gap-8
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
                ${position === 'center' ? 'md:scale-105 md:z-10' : 'md:scale-95'}
                transition-all duration-500 ease-out
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: position === 'left' ? 0 : position === 'center' ? 0.1 : 0.2,
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
                  : "bg-brand-graphite/20 dark:bg-white/20 hover:bg-brand-graphite/40 dark:hover:bg-white/40"
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
