import { motion } from 'framer-motion';
import { useBibleAPI } from '@/hooks/useBibleAPI';
import { useState } from 'react';

export default function PromiseOfTheDay() {
  const { verse, loading, error, fetchVerse } = useBibleAPI('bible');
  const [copied, setCopied] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  console.log('🎯 PromiseOfTheDay render:', { verse, loading, error });

  const handleNewPromise = () => {
    fetchVerse('bible');
    setShowHearts(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setShowHearts(false);
    }, 2000);
  };

  const handleCopyVerse = async () => {
    if (!verse) return;
    
    const textToCopy = `"${verse.text}" — ${verse.reference}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setShowStars(true);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
        setShowStars(false);
      }, 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Salvación': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
      'Perdón': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
      'Protección': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
      'Provisión': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
      'Sanidad': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300',
      'Paz': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300',
      'Fortaleza': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
      'Sabiduría': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
      'Amor': 'bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300',
      'Esperanza': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300',
      'Victoria': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300',
      'Gozo': 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300',
      'Restauración': 'bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
  };

  return (
    <div className="mt-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light mb-6">
        Promesas de Dios para ti
      </h2>
      
      <motion.div 
        className="glass-light dark:glass-dark rounded-3xl p-8"
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

        {/* Promesa */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-brand-graphite/70 dark:text-brand-light/70">Cargando promesa...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => fetchVerse('ntv')}
              className="px-4 py-2 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-colors text-sm"
            >
              Reintentar
            </button>
          </div>
        ) : verse ? (
          <motion.div
            key={verse.reference + verse.translation_id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            {/* Categoría */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(verse.category)}`}>
                {verse.category}
              </span>
            </div>

            {/* Texto de la promesa */}
            <blockquote className="text-lg md:text-xl leading-relaxed text-brand-graphite dark:text-brand-light mb-6 italic">
              "{verse.text}"
            </blockquote>
            
            {/* Referencia */}
            <cite className="text-brand-accent font-semibold">
              — {verse.reference}
            </cite>

          </motion.div>
        ) : null}

        {/* Botones - centrados y del mismo tamaño */}
        <div className="mt-8 text-center">
          <div className="flex gap-4 justify-center items-center">
            {/* Botón de copiar */}
            <motion.button
              onClick={handleCopyVerse}
              className={`relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20 border border-brand-accent/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? 'Promesa guardada' : 'Copiar versículo'}
              
              {/* Efecto de estrellitas */}
              {showStars && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-400 text-lg"
                      initial={{ 
                        opacity: 1, 
                        scale: 0,
                        x: 0, 
                        y: 0 
                      }}
                      animate={{ 
                        opacity: 0, 
                        scale: 1,
                        x: (Math.random() - 0.5) * 80, 
                        y: (Math.random() - 0.5) * 80 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: i * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      ⭐
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.button>

            {/* Botón para nueva promesa */}
            <motion.button
              onClick={handleNewPromise}
              className="relative px-6 py-3 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dame otra promesa
              
              {/* Efecto de corazones */}
              {showHearts && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white text-lg"
                      initial={{ 
                        opacity: 1, 
                        scale: 0,
                        x: 0, 
                        y: 0 
                      }}
                      animate={{ 
                        opacity: 0, 
                        scale: 1,
                        x: (Math.random() - 0.5) * 80, 
                        y: (Math.random() - 0.5) * 80 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: i * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      ❤️
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
