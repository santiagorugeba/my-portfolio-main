import React, { useState, useCallback } from 'react';
import { BIBLE_REFERENCES, getPromiseOfTheDay, getRandomPromise, getPromiseByReference } from '../data/bibleReferences';
import { getLocalVerse, getRandomLocalVerse, getLocalVerseByDay, getDatabaseStats } from '../data/localBibleDatabase';

export interface BibleVerse {
  reference: string;
  text: string;
  translation_name: string;
  translation_id: string;
  category: string;
}

export const BIBLE_TRANSLATIONS = [
  { id: 'ntv', name: 'Nueva Traducción Viviente' }
];

// Función de fallback con datos locales
function fetchFromFallback(reference: string): BibleVerse | null {
  const localVerse = getLocalVerse(reference);
  
  if (localVerse) {
    console.log(`✓ ${reference} obtenido desde base de datos local`);
    return {
      reference: localVerse.reference,
      text: localVerse.text,
      translation_name: 'Nueva Traducción Viviente',
      translation_id: 'NTV',
      category: localVerse.category
    };
  }
  
  return null;
}

// Función principal para obtener versículo - Solo base de datos local
async function fetchVerseFromAPI(reference: string): Promise<BibleVerse | null> {
  console.log(`🔍 Buscando versículo local: ${reference}`);
  
  // Buscar en la base de datos local
  const localVerse = getLocalVerse(reference);
  
  if (localVerse) {
    console.log(`✅ ${reference} obtenido desde base de datos local`);
    return {
      reference: localVerse.reference,
      text: localVerse.text,
      translation_name: 'Nueva Traducción Viviente',
      translation_id: 'NTV',
      category: localVerse.category
    };
  }
  
  // Si no se encuentra, usar fallback local
  console.log(`🔄 ${reference} no encontrado en base principal, usando fallback`);
  return fetchFromFallback(reference);
}

export function useBibleAPI(initialTranslation: string = 'ntv') {
  const [verse, setVerse] = useState<BibleVerse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [translation, setTranslation] = useState(initialTranslation);

  const fetchVerse = useCallback(async (translationId: string = translation) => {
    console.log('🔄 fetchVerse called');
    setLoading(true);
    setError(null);
    
    try {
      // Obtener versículo aleatorio de la base de datos local
      const randomLocalVerse = getRandomLocalVerse();
      
      if (randomLocalVerse) {
        const result = {
          reference: randomLocalVerse.reference,
          text: randomLocalVerse.text,
          translation_name: 'Nueva Traducción Viviente',
          translation_id: 'NTV',
          category: randomLocalVerse.category
        };
        
        console.log('✅ Versículo obtenido desde base de datos local:', result);
        setVerse(result);
      } else {
        // Fallback: obtener referencia aleatoria y buscar en fallback
        const randomPromise = getRandomPromise();
        const randomReference = randomPromise.reference;
        console.log('🎯 Referencia seleccionada para fallback:', randomReference);
        
        const result = await fetchVerseFromAPI(randomReference);
        
        if (result) {
          console.log('✅ Versículo obtenido desde fallback:', result);
          setVerse(result);
        } else {
          throw new Error('No se pudo obtener el versículo');
        }
      }
    } catch (err) {
      console.error('❌ Error fetching verse:', err);
      setError('Error al obtener el versículo');
    } finally {
      setLoading(false);
    }
  }, [translation]);

  // Cargar versículo inicial
  React.useEffect(() => {
    fetchVerse(translation);
  }, [fetchVerse, translation]);

  return {
    verse,
    loading,
    error,
    translation,
    setTranslation,
    fetchVerse,
    fetchSpecificVerse
  };
}

// Función independiente para búsqueda específica
export async function fetchSpecificVerse(reference: string): Promise<BibleVerse | null> {
  try {
    const result = await fetchVerseFromAPI(reference);
    
    if (result) {
      const promiseRef = getPromiseByReference(reference);
      result.category = promiseRef?.category || 'Promesa';
      return result;
    } else {
      throw new Error('No se pudo obtener el versículo');
    }
  } catch (err) {
    console.error('❌ Error:', err);
    return null;
  }
}
