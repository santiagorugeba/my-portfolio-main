import { useTheme } from "@/theme/ThemeContext";

/**
 * @component ContactSection
 * @description Un componente de sección que muestra información de contacto y un formulario.
 * Adapta su estilo según el tema actual (claro/oscuro) proporcionado por ThemeContext.
 */
export default function ContactSection() {
  // --- 1. Lógica del Tema ---
  // Se utiliza el hook personalizado 'useTheme' para acceder al valor del tema actual.
  const { theme } = useTheme();

  // --- 2. Estilos Dependientes del Tema ---
  // El objeto 't' (themeStyles) contiene todas las variables de estilo que cambian
  // entre el modo oscuro y claro. Esto centraliza la gestión de los estilos dinámicos.
  const t =
    theme === "dark"
      ? {
          // Estilos para el modo oscuro
          leftBg: "rgba(21,21,21,.75)",
          rightBg: "rgba(21,21,21,.65)",
          border: "rgba(255,252,242,.08)",
          ink: "#FFFCF2",
          sub: "rgba(255,252,242,.78)",
          inputBg: "rgba(255,255,255,.06)",
          inputBorder: "rgba(255,252,242,.14)",
          inputInk: "#FFFCF2",
          btnBg: "#EB5E28",
          btnInk: "#FFFCF2",
          shadowLeft: "0 20px 70px rgba(0,0,0,.45)",
          shadowRight: "0 20px 70px rgba(0,0,0,.45)",
          btnShadow: "0 10px 40px rgba(235,94,40,.35)",
        }
      : {
          // Estilos para el modo claro
          leftBg: "rgba(255,252,242,.88)",
          rightBg: "rgba(255,252,242,.92)",
          border: "rgba(37,36,34,.12)",
          ink: "#252422",
          sub: "rgba(37,36,34,.78)",
          inputBg: "rgba(37,36,34,.04)",
          inputBorder: "rgba(37,36,34,.15)",
          inputInk: "#252422",
          btnBg: "#EB5E28",
          btnInk: "#FFFCF2",
          shadowLeft: "0 20px 70px rgba(37,36,34,.10)",
          shadowRight: "0 20px 70px rgba(37,36,34,.10)",
          btnShadow: "0 10px 40px rgba(235,94,40,.20)",
        };

  // --- 3. Definición de Objetos de Estilo ---
  // Para mantener el JSX más limpio, los estilos de los elementos se definen en objetos separados.
  
  // Estilos para el panel izquierdo (información de contacto).
  const leftPanelStyles = {
    background: t.leftBg,
    border: `1px solid ${t.border}`,
    boxShadow: t.shadowLeft,
    borderRadius: 18,
    padding: 24,
    color: t.ink,
  };

  // Estilos para el panel derecho (formulario).
  const rightPanelStyles = {
    background: t.rightBg,
    border: `1px solid ${t.border}`,
    boxShadow: t.shadowRight,
    borderRadius: 18,
    padding: 20,
    color: t.ink,
  };

  // Estilos base para los campos de entrada (input y textarea).
  const baseInputStyles = {
    background: t.inputBg,
    border: `1px solid ${t.inputBorder}`,
    color: t.inputInk,
    outline: "none",
    borderRadius: 10,
    padding: "10px 12px",
  };
  
  // Estilo para el botón de envío.
  const buttonStyles = {
    background: t.btnBg,
    color: t.btnInk,
    border: "none",
    padding: "10px 16px",
    borderRadius: 12,
    fontWeight: 800,
    boxShadow: t.btnShadow,
    cursor: "pointer",
  };

  // --- 4. Renderizado del Componente ---
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Columna Izquierda: Información y Título */}
        <div style={leftPanelStyles}>
          <p style={{ letterSpacing: ".18em", fontSize: 12, fontWeight: 700, opacity: 0.8, margin: 0 }}>
            COLABORACIÓN
          </p>
          <h2 style={{ marginTop: 12, marginBottom: 12, fontSize: 38, lineHeight: 1.15, fontWeight: 900 }}>
            Cuéntame sobre tu <span style={{ color: "#EB5E28" }}>sueño</span>, tu proyecto o una oportunidad laboral.
          </h2>
          <p style={{ color: t.sub, marginTop: 6 }}>
            Diseño de producto end-to-end: research, UX, UI, prototipos y systems.
          </p>
        </div>

        {/* Columna Derecha: Formulario de Contacto */}
        <form
          className="grid gap-4"
          onSubmit={(e) => e.preventDefault()} // Previene el comportamiento por defecto del formulario.
          style={rightPanelStyles}
        >
          {/* Fila de Nombre y Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <label htmlFor="name" className="grid gap-1">
              <span style={{ fontSize: 12, opacity: 0.75 }}>Nombre*</span>
              <input id="name" required type="text" placeholder="Nombre*" style={baseInputStyles} />
            </label>
            <label htmlFor="email" className="grid gap-1">
              <span style={{ fontSize: 12, opacity: 0.75 }}>Email*</span>
              <input id="email" required type="email" placeholder="Email*" style={baseInputStyles} />
            </label>
          </div>

          {/* Fila de Empresa y Cargo */}
          <div className="grid md:grid-cols-2 gap-4">
            <label htmlFor="company" className="grid gap-1">
              <span style={{ fontSize: 12, opacity: 0.75 }}>Empresa</span>
              <input id="company" type="text" placeholder="Empresa" style={baseInputStyles} />
            </label>
            <label htmlFor="role" className="grid gap-1">
              <span style={{ fontSize: 12, opacity: 0.75 }}>Cargo</span>
              <input id="role" type="text" placeholder="Cargo" style={baseInputStyles} />
            </label>
          </div>

          {/* Campo de Mensaje */}
          <label htmlFor="message" className="grid gap-1">
            <span style={{ fontSize: 12, opacity: 0.75 }}>Cuéntame sobre tu proyecto…</span>
            <textarea
              id="message"
              rows={6}
              placeholder="Cuéntame sobre tu proyecto…"
              style={{ ...baseInputStyles, resize: "vertical" }} // Combina estilos base con específicos.
            />
          </label>

          {/* Botón de Envío */}
          <div>
            <button type="submit" style={buttonStyles}>
              Enviar
            </button>
          </div>
        </form>
        
      </div>
    </section>
  );
}