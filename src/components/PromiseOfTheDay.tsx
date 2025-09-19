import { motion } from 'framer-motion';
import { useBibleAPI } from '@/hooks/useBibleAPI';

export default function PromiseOfTheDay() {
  const { verse, loading, error, fetchVerse } = useBibleAPI('ntv');

  const handleNewPromise = () => {
    fetchVerse('ntv');
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
    <motion.div 
      className="mt-6 glass-light dark:glass-dark rounded-3xl p-8"
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
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-graphite dark:text-brand-light">
            Promesas de Dios para ti
          </h2>
        </div>

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
              — {verse.reference} ({verse.translation_name})
            </cite>
          </motion.div>
        ) : null}

        {/* Botón para nueva promesa - abajo y centrado */}
        <div className="mt-8 text-center">
          <button
            onClick={handleNewPromise}
            className="px-6 py-3 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-colors text-sm font-medium"
          >
            Dame otra promesa
          </button>
        </div>

    </motion.div>
  );
}
