import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBibleAPI, BIBLE_TRANSLATIONS } from '@/hooks/useBibleAPI';

export default function BibleVerse() {
  const [selectedTranslation, setSelectedTranslation] = useState('bible');
  const { verse, loading, error, fetchVerse } = useBibleAPI(selectedTranslation);

  const handleTranslationChange = (translation: string) => {
    setSelectedTranslation(translation);
    fetchVerse(translation);
  };

  const handleRefresh = () => {
    fetchVerse(selectedTranslation);
  };

  if (loading) {
    return (
      <motion.div 
        className="max-w-4xl mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-brand-light/5 dark:bg-brand-coal/5 rounded-2xl p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-brand-graphite/70 dark:text-brand-light/70">
            Cargando versículo del día...
          </p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        className="max-w-4xl mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 dark:from-brand-accent/20 dark:to-brand-accent/10 rounded-2xl p-8 border border-brand-accent/20">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-graphite dark:text-brand-light mb-4 sm:mb-0">
            📖 Versículo del Día
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Selector de traducción */}
            <select
              value={selectedTranslation}
              onChange={(e) => handleTranslationChange(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-brand-coal border border-brand-accent/30 rounded-lg text-sm focus:outline-none focus:border-brand-accent"
            >
              {BIBLE_TRANSLATIONS.map((trans: { id: string; name: string }) => (
                <option key={trans.id} value={trans.id}>
                  {trans.name}
                </option>
              ))}
            </select>
            
            {/* Botón de refresh */}
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-colors text-sm font-medium"
            >
              🔄 Nuevo
            </button>
          </div>
        </div>

        {/* Versículo */}
        {verse && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <blockquote className="text-lg md:text-xl leading-relaxed text-brand-graphite dark:text-brand-light mb-6 italic">
              "{verse.text}"
            </blockquote>
            
            <cite className="text-brand-accent font-semibold">
              — {verse.reference}
            </cite>
            
            <p className="text-sm text-brand-graphite/70 dark:text-brand-light/70 mt-2">
              {verse.translation_name}
            </p>
          </motion.div>
        )}

        {/* Footer con enlace a YouVersion */}
        <div className="mt-8 pt-6 border-t border-brand-accent/20 text-center">
          <p className="text-sm text-brand-graphite/70 dark:text-brand-light/70 mb-2">
            Versículo proporcionado por
          </p>
          <a
            href="https://www.youversion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent/80 transition-colors font-medium"
          >
            <span>YouVersion</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
