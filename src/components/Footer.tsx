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
    icon: <img 
      src="/behance-icon.svg" 
      alt="Behance" 
      className="w-6 h-6" 
      style={{ 
        filter: 'brightness(0.8) contrast(1.3) saturate(1.1)',
        minWidth: '24px',
        minHeight: '24px'
      }}
      loading="lazy"
    />
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