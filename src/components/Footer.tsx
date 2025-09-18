import { useTheme } from "@/theme/ThemeContext";

// --- 1. Datos del Componente ---
// Centralizar los datos (como enlaces) en arreglos hace que el componente sea más fácil de mantener.
// Si necesitas añadir o cambiar un enlace, solo modificas esta sección.

const navigationLinks = [
  { href: "#", label: "Inicio" },
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

const socialLinks = [
  { 
    href: "https://www.linkedin.com/in/santiagoruge/", 
    label: "LinkedIn", 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9 3H4.1C3.5 3 3 3.5 3 4.1V19.9C3 20.5 3.5 21 4.1 21H19.9C20.5 21 21 20.5 21 19.9V4.1C21 3.5 20.5 3 19.9 3ZM8.4 18.2H5.7V9.7H8.4V18.2ZM7 8.5C6.2 8.5 5.5 7.8 5.5 7C5.5 6.2 6.2 5.5 7 5.5C7.8 5.5 8.5 6.2 8.5 7C8.5 7.8 7.8 8.5 7 8.5ZM18.2 18.2H15.5V14.1C15.5 13.1 15.2 12.4 14.3 12.4C13.5 12.4 13 13 13 14V18.2H10.3V9.7H13V11.1H13.1C13.6 10.2 14.5 9.4 15.8 9.4C17.9 9.4 18.2 10.8 18.2 12.8V18.2Z" fill="currentColor"/></svg> 
  },
  { 
    href: "https://www.behance.net/santiagorugeba2", 
    label: "Behance", 
    icon: <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.5577 11.9517C20.4439 11.9517 22.1424 12.1159 23.6908 12.4525C25.2428 12.7761 26.5538 13.3277 27.6665 14.0765C28.7661 14.8277 29.6141 15.8281 30.2413 17.0754C30.8413 18.3108 31.1413 19.8616 31.1413 21.6983C31.1413 23.6861 30.6937 25.3338 29.7901 26.6613C28.8783 27.9853 27.5543 29.0613 25.7779 29.9129C28.2015 30.6122 29.9897 31.8369 31.1897 33.5756C32.3886 35.3272 32.965 37.426 32.965 39.8981C32.965 41.8977 32.5764 43.6091 31.8181 45.0596C31.0433 46.523 29.9933 47.7088 28.7071 48.623C27.4078 49.5466 25.9078 50.2222 24.2318 50.6593C22.5676 51.0939 20.8562 51.3219 19.0868 51.3219H0V11.9553L18.5601 11.9565L18.5578 11.9517H18.5577ZM41.7619 15.1277H57.7235V19.016L41.7619 19.0148V15.1265V15.1277ZM45.3088 44.4725C46.4852 45.6194 48.1718 46.1958 50.3734 46.1958C51.9479 46.1958 53.325 45.7942 54.4601 44.9946C55.5951 44.195 56.2849 43.3481 56.5483 42.4717L63.4448 42.4729C62.3322 45.9076 60.6574 48.3478 58.3589 49.8229C56.0947 51.2982 53.3239 52.047 50.1089 52.047C47.8565 52.047 45.8462 51.682 44.0332 50.9698C42.2213 50.2458 40.7095 49.2348 39.4339 47.906C38.1973 46.582 37.2229 45.0076 36.5343 43.1567C35.8587 41.3213 35.5114 39.2815 35.5114 37.0823C35.5114 34.9456 35.8634 32.9578 36.5591 31.12C37.2713 29.268 38.2469 27.6841 39.5461 26.3447C40.8441 25.0065 42.369 23.9447 44.1701 23.1699C45.9584 22.3939 47.9332 22.0053 50.1206 22.0053C52.5313 22.0053 54.6431 22.4695 56.4562 23.4179C58.2562 24.3534 59.7432 25.6172 60.9054 27.1928C62.07 28.7696 62.8932 30.5802 63.4058 32.6035C63.9184 34.6267 64.0933 36.7385 63.9527 38.9543H43.3706C43.3706 41.1902 44.1218 43.3303 45.3064 44.4643L45.3088 44.4725ZM54.2959 29.5018C53.3723 28.4778 51.7837 27.9144 49.8726 27.9144C48.6206 27.9144 47.586 28.1258 46.7616 28.551C45.9501 28.9739 45.2864 29.4983 44.7738 30.1255C44.2741 30.7503 43.9222 31.4259 43.7273 32.1357C43.5277 32.8231 43.4037 33.4597 43.3623 34.0113L56.1125 34.0101C55.9247 32.0117 55.2373 30.5365 54.3007 29.4995L54.296 29.5018H54.2959ZM17.4297 27.8494C18.9652 27.8494 20.2396 27.4844 21.2388 26.7486C22.238 26.0246 22.714 24.8246 22.714 23.1734C22.714 22.2628 22.551 21.4974 22.2262 20.9092C21.8908 20.3222 21.4502 19.858 20.8892 19.5344C20.3376 19.1989 19.7152 18.9698 18.9793 18.8458C18.2671 18.71 17.5159 18.6474 16.7553 18.6474H8.6576V27.8447H17.4321L17.4297 27.8494ZM17.9045 44.6084C18.7573 44.6084 19.5687 44.5327 20.3258 44.3556C21.1006 44.1808 21.7892 43.9197 22.3621 43.5206C22.9373 43.1319 23.4262 42.6217 23.7735 41.9461C24.1255 41.2823 24.2861 40.4343 24.2861 39.3984C24.2861 37.3752 23.7097 35.9236 22.5747 35.0472C21.4396 34.1826 19.9277 33.7598 18.0533 33.7598H8.6552V44.593L17.9045 44.5918V44.6083V44.6084Z" fill="currentColor"/>
    </svg>
  },
];

/**
 * @component Footer
 * @description El pie de página principal de la aplicación. Muestra el logo,
 * enlaces de navegación, redes sociales y el copyright.
 * Adapta su estilo según el tema actual.
 */
export default function Footer() {
  // --- 2. Lógica del Tema ---
  const { theme } = useTheme();

  // Objeto 't' que contiene las variables de estilo que dependen del tema.
  const t =
    theme === "dark"
      ? {
          // Estilos para el modo oscuro
          bg: "#101010",
          ink: "#FFFCF2",
          sub: "rgba(255,252,242,.78)",
          border: "rgba(255,252,242,.1)",
        }
      : {
          // Estilos para el modo claro
          bg: "#FFFCF2",
          ink: "#252422",
          sub: "rgba(37,36,34,.78)",
          border: "rgba(37,36,34,.1)",
        };

  // --- 3. Definición de Objetos de Estilo ---
  // Estilo para los enlaces del footer para evitar la repetición en el JSX.
  const linkStyles = {
    color: t.sub,
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out', // Efecto suave al pasar el mouse.
  };

  // Estilo para la línea divisoria.
  const dividerStyles = {
    border: 'none',
    borderTop: `1px solid ${t.border}`,
    margin: '32px 0',
  };

  // --- 4. Renderizado del Componente ---
  return (
    <footer style={{ background: t.bg, color: t.ink }} className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección Superior: Logo, Navegación y Redes Sociales */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-2xl font-bold">Santiago Ruge</h3>
            <p style={{ color: t.sub, fontSize: 14 }}>
              Diseñador de producto enfocado en la creación de experiencias de usuario memorables.
            </p>
          </div>

          {/* Columna 2: Enlaces de Navegación */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <a key={link.label} href={link.href} style={linkStyles} className="hover:text-orange-500">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3: Enlaces a Redes Sociales */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={`Visita mi perfil de ${social.label}`} // Mejora la accesibilidad
                  style={linkStyles}
                  className="hover:text-orange-500"
                  target="_blank" // Agregué esta propiedad para abrir en una nueva pestaña
                  rel="noopener noreferrer" // Mejora la seguridad al usar target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sección Inferior: Divisor y Copyright */}
        <div>
          <hr style={dividerStyles} />
          <p style={{ color: t.sub, fontSize: 12, textAlign: 'center' }}>
            © 2025. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}