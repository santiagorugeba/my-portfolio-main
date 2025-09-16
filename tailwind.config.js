/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'body': ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'heading': ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#FFFCF2',
          sand: '#CCC5B9',
          graphite: '#403D39',
          coal: '#252422',
          accent: '#EB5E28'
        }
      },
      boxShadow: {
        glow: '0 8px 30px rgba(235,94,40,0.25)'
      }
    }
  },
  plugins: []
}
