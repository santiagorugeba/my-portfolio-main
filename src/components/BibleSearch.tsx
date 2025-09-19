import { useState } from 'react';
import { motion } from 'framer-motion';
import { fetchSpecificVerse, BIBLE_TRANSLATIONS } from '@/hooks/useBibleAPI';

export default function BibleSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTranslation, setSelectedTranslation] = useState('bible');
  const [verse, setVerse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchSpecificVerse(searchTerm);
      if (result) {
        setVerse(result);
      } else {
        setError('No se encontró el versículo. Intenta con una referencia como "John 3:16" o "Psalm 23:1"');
      }
    } catch (err) {
      setError('Error al buscar el versículo. Verifica la referencia e inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
        
        {/* Header */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-graphite dark:text-brand-light mb-6 text-center">
          🔍 Buscar Versículo
        </h2>
        
        {/* Search Form */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ej: Juan 3:16, Salmos 23:1, Mateo 5:3-12"
              className="w-full px-4 py-3 bg-white dark:bg-brand-coal border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />
          </div>
          
          <select
            value={selectedTranslation}
            onChange={(e) => setSelectedTranslation(e.target.value)}
            className="px-4 py-3 bg-white dark:bg-brand-coal border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          >
            {BIBLE_TRANSLATIONS.map((trans: { id: string; name: string }) => (
              <option key={trans.id} value={trans.id}>
                {trans.name}
              </option>
            ))}
          </select>
          
          <button
            onClick={handleSearch}
            disabled={loading || !searchTerm.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6"
          >
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </motion.div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-brand-graphite/70 dark:text-brand-light/70">
              Buscando versículo...
            </p>
          </div>
        )}

        {/* Verse Result */}
        {verse && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-brand-coal/50 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
          >
            <blockquote className="text-lg md:text-xl leading-relaxed text-brand-graphite dark:text-brand-light mb-4 italic">
              "{verse.text}"
            </blockquote>
            
            <cite className="text-blue-600 dark:text-blue-400 font-semibold">
              — {verse.reference}
            </cite>
            
            <p className="text-sm text-brand-graphite/70 dark:text-brand-light/70 mt-2">
              {verse.translation_name}
            </p>
          </motion.div>
        )}

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-brand-graphite/70 dark:text-brand-light/70">
            💡 <strong>Tip:</strong> Usa referencias como "Juan 3:16", "Salmos 23:1", "Mateo 5:3-12"
          </p>
        </div>
      </div>
    </motion.section>
  );
}
