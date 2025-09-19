# Configuración de API.Bible

## ¿Cómo obtener una API key gratuita?

1. Ve a [https://scripture.api.bible/](https://scripture.api.bible/)
2. Haz clic en "Get started" o "Sign up"
3. Regístrate con tu email
4. Obtén tu API key gratuita

## Límites gratuitos:
- **5,000 consultas por día**
- **500 versículos consecutivos por consulta**
- **Uso no comercial**

## Configuración:

1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega tu API key:
```
VITE_API_BIBLE_KEY=tu_api_key_aqui
```

## ¿Por qué API.Bible?

- ✅ **API oficial** - No requiere web scraping
- ✅ **NTV en español** - Confirmado en su catálogo
- ✅ **2,500+ versiones** - En 1,600+ idiomas
- ✅ **Documentación completa** - Para desarrolladores
- ✅ **Límites generosos** - 5,000 consultas/día gratis
- ✅ **Sin conflictos** - Solo una API, sin CORS issues

## Sistema Simplificado:

- **API.Bible** como fuente principal
- **Fallback local** con 65+ versículos NTV como respaldo
- **Sin YouVersion ni Bible Gateway** - eliminados para evitar conflictos
- **Siempre funciona** - no más errores de CORS
