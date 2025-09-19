/**
 * Script para verificar versículos NTV y crear base de datos local
 * Este script nos ayudará a buscar cada versículo en Google y verificar que sea NTV
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer las referencias bíblicas
const bibleReferencesPath = path.join(__dirname, '../src/data/bibleReferences.ts');
const bibleReferencesContent = fs.readFileSync(bibleReferencesPath, 'utf8');

// Extraer las referencias usando regex
const referenceMatches = bibleReferencesContent.match(/{ reference: "([^"]+)", category: "([^"]+)", day: (\d+) }/g);
const references = [];

if (referenceMatches) {
  referenceMatches.forEach(match => {
    const [, reference, category, day] = match.match(/{ reference: "([^"]+)", category: "([^"]+)", day: (\d+) }/);
    references.push({
      reference: reference.trim(),
      category: category.trim(),
      day: parseInt(day.trim())
    });
  });
}

console.log(`📖 Encontradas ${references.length} referencias bíblicas`);

// Crear estructura para la base de datos local
const localBibleDatabase = {};

// Función para generar URLs de búsqueda en Google
function generateSearchUrls(reference) {
  const searchTerms = [
    `"${reference}" "Nueva Traducción Viviente"`,
    `"${reference}" NTV`,
    `"${reference}" "Nueva Traducción Viviente" biblia`
  ];
  
  return searchTerms.map(term => 
    `https://www.google.com/search?q=${encodeURIComponent(term)}`
  );
}

// Función para formatear la referencia para búsqueda
function formatReferenceForSearch(reference) {
  // Convertir formato estándar a formato de búsqueda
  return reference
    .replace(/^(\d+)\s+/, '$1 ') // Asegurar espacio después del número
    .replace(/:/g, ': ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Generar archivo con instrucciones para verificación manual
const verificationInstructions = `# Verificación Manual de Versículos NTV

## Instrucciones:
1. Para cada versículo, busca en Google usando las URLs proporcionadas
2. Verifica que el texto sea de la Nueva Traducción Viviente (NTV)
3. Copia el texto exacto del versículo
4. Agrega el texto al archivo \`src/data/localBibleDatabase.ts\`

## Versículos a verificar:
`;

let instructionContent = verificationInstructions;

references.forEach((ref, index) => {
  const searchUrls = generateSearchUrls(ref.reference);
  
  instructionContent += `
### ${index + 1}. ${ref.reference} (Día ${ref.day} - ${ref.category})

**Referencia:** ${ref.reference}
**Categoría:** ${ref.category}
**Día:** ${ref.day}

**URLs de búsqueda:**
${searchUrls.map((url, i) => `${i + 1}. ${url}`).join('\n')}

**Texto NTV encontrado:**
[Pegar aquí el texto del versículo en NTV]

---
`;
});

// Escribir archivo de instrucciones
const instructionsPath = path.join(__dirname, '../VERIFICATION_INSTRUCTIONS.md');
fs.writeFileSync(instructionsPath, instructionContent, 'utf8');

console.log(`✅ Archivo de instrucciones creado: ${instructionsPath}`);
console.log(`📝 Total de versículos a verificar: ${references.length}`);

// Crear template para la base de datos local
const databaseTemplate = `/**
 * Base de datos local de versículos NTV
 * Todos los versículos han sido verificados manualmente
 */

export interface LocalBibleVerse {
  reference: string;
  text: string;
  category: string;
  day: number;
  verified: boolean;
}

export const LOCAL_BIBLE_DATABASE: { [key: string]: LocalBibleVerse } = {
  // Los versículos se agregarán aquí después de la verificación manual
};

// Función para obtener un versículo por referencia
export function getLocalVerse(reference: string): LocalBibleVerse | null {
  return LOCAL_BIBLE_DATABASE[reference] || null;
}

// Función para obtener versículo aleatorio
export function getRandomLocalVerse(): LocalBibleVerse | null {
  const verses = Object.values(LOCAL_BIBLE_DATABASE);
  if (verses.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
}

// Función para obtener versículo por día
export function getLocalVerseByDay(day: number): LocalBibleVerse | null {
  const verses = Object.values(LOCAL_BIBLE_DATABASE);
  return verses.find(verse => verse.day === day) || null;
}
`;

// Escribir template de base de datos
const databasePath = path.join(__dirname, '../src/data/localBibleDatabase.ts');
fs.writeFileSync(databasePath, databaseTemplate, 'utf8');

console.log(`✅ Template de base de datos creado: ${databasePath}`);
console.log(`\n🎯 Próximos pasos:`);
console.log(`1. Abrir: ${instructionsPath}`);
console.log(`2. Verificar cada versículo manualmente`);
console.log(`3. Agregar textos verificados a: ${databasePath}`);
console.log(`4. Actualizar el hook para usar la base de datos local`);

// Mostrar algunas referencias de ejemplo
console.log(`\n📋 Primeras 5 referencias:`);
references.slice(0, 5).forEach((ref, index) => {
  console.log(`${index + 1}. ${ref.reference} (${ref.category})`);
});
