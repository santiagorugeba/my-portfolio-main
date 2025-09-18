// src/components/ContactSection.tsx
import { useTheme } from "@/theme/ThemeContext";
import { motion } from "framer-motion";
import React from "react";

type FormData = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
};

export default function ContactSection() {
  const { theme } = useTheme();

  const t =
    theme === "dark"
      ? {
          leftBg: "rgba(18,18,18,.96)",
          rightBg: "rgba(18,18,18,.96)",
          border: "rgba(255,255,255,.09)",
          ink: "#FFFCF2",
          sub: "rgba(255,252,242,.78)",
          inputBg: "rgba(255,255,255,.06)",
          inputBorder: "rgba(255,252,242,.16)",
          inputInk: "#FFFCF2",
          btnBg: "#EB5E28",
          btnInk: "#FFFCF2",
          shadowLeft: "0 24px 80px rgba(0,0,0,.55)",
          shadowRight: "0 24px 80px rgba(0,0,0,.55)",
        }
      : {
          leftBg: "rgba(255,252,242,.92)",
          rightBg: "rgba(255,252,242,.96)",
          border: "rgba(37,36,34,.14)",
          ink: "#252422",
          sub: "rgba(37,36,34,.80)",
          inputBg: "rgba(255,252,242,.60)",
          inputBorder: "rgba(37,36,34,.15)",
          inputInk: "#252422",
          btnBg: "#EB5E28",
          btnInk: "#FFFCF2",
          shadowLeft: "0 20px 70px rgba(37,36,34,.12)",
          shadowRight: "0 20px 70px rgba(37,36,34,.12)",
        };

  const [sending, setSending] = React.useState(false);
  const [ok, setOk] = React.useState<null | "ok" | "err">(null);
  const [securityError, setSecurityError] = React.useState<string | null>(null);

  // Función de validación de seguridad
  function validateSecurity(content: string): { isValid: boolean; error?: string } {
    const text = content.toLowerCase();
    
    // Patrones peligrosos a detectar
    const dangerousPatterns = [
      // Código HTML/JavaScript
      { pattern: /<script|<\/script|javascript:|onclick|onload|onerror/gi, message: "No se permiten scripts o código JavaScript" },
      // Links y URLs
      { pattern: /https?:\/\/|www\.|\.com|\.org|\.net|\.io|\.co/gi, message: "No se permiten enlaces o URLs" },
      // Código SQL
      { pattern: /select|insert|update|delete|drop|create|alter|union/gi, message: "No se permiten comandos de base de datos" },
      // Código de sistema
      { pattern: /eval\(|exec\(|system\(|shell_exec|passthru/gi, message: "No se permiten comandos de sistema" },
      // Caracteres especiales peligrosos
      { pattern: /[<>{}[\]\\|`~!@#$%^&*()+=]/g, message: "No se permiten caracteres especiales peligrosos" },
      // Palabras clave de programación
      { pattern: /\b(function|class|import|require|include|define|var|let|const)\b/gi, message: "No se permiten palabras clave de programación" }
    ];

    for (const { pattern, message } of dangerousPatterns) {
      if (pattern.test(text)) {
        return { isValid: false, error: message };
      }
    }

    return { isValid: true };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSecurityError(null); // Limpiar errores previos
    
    const fdNative = new FormData(e.currentTarget);

    const data: FormData = {
      name: (fdNative.get("name") as string) ?? "",
      email: (fdNative.get("email") as string) ?? "",
      company: (fdNative.get("company") as string) ?? "",
      role: (fdNative.get("role") as string) ?? "",
      message: (fdNative.get("message") as string) ?? "",
    };

    if (!data.name || !data.email || !data.message) return;

    // Validación de seguridad en todos los campos
    const fieldsToValidate = [
      { content: data.name, field: "nombre" },
      { content: data.email, field: "email" },
      { content: data.company || "", field: "empresa" },
      { content: data.role || "", field: "cargo" },
      { content: data.message, field: "mensaje" }
    ];

    for (const { content, field } of fieldsToValidate) {
      const validation = validateSecurity(content);
      if (!validation.isValid) {
        setSecurityError(`Error de seguridad en el campo ${field}: ${validation.error}`);
        return;
      }
    }

    setSending(true);

    try {
      // Simulación de envío (sin backend). Si luego añades API, reemplaza esta parte.
      await new Promise((res) => setTimeout(res, 900));
      setOk("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setOk("err");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative"
      style={{ scrollMarginTop: 96 }}
    >
      {/* Easter Eggs en Contact */}
      <div className="absolute top-8 right-8 z-10">
        <img
          src="/chocolate-1-svgrepo-com.svg"
          alt="🍫"
          className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            filter: 'brightness(0.5) saturate(0.7)',
            opacity: 0.25
          }}
          onClick={() => {
            console.log('Chocolate encontrado en Contact!');
          }}
        />
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <img
          src="/chocolate-1-svgrepo-com.svg"
          alt="🍫"
          className="w-3 h-3 cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            filter: 'brightness(0.3) saturate(0.5)',
            opacity: 0.15
          }}
          onClick={() => {
            console.log('Chocolate oculto encontrado en Contact!');
          }}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Left copy */}
        <motion.div
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
          className="glass-light dark:glass-dark rounded-3xl p-4 sm:p-6 lg:p-8"
          style={{ color: t.ink }}
        >
          <p
            style={{
              letterSpacing: ".18em",
              fontSize: 12,
              fontWeight: 800,
              opacity: 0.8,
              margin: 0,
            }}
          >
            COLABORACIÓN
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              marginTop: 12,
              marginBottom: 12,
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Cuéntame sobre tu <span style={{ color: "#EB5E28" }}>sueño</span>,
            tu proyecto o una oportunidad laboral.
          </h2>

          <p className="text-sm sm:text-base md:text-lg" style={{ color: t.sub, marginTop: 6 }}>
            Diseño de producto end-to-end: research, UX, UI, prototipos y
            systems.
          </p>

          {ok === "ok" && (
            <div
              style={{
                marginTop: 16,
                background:
                  theme === "dark"
                    ? "rgba(46,204,113,.12)"
                    : "rgba(46,204,113,.18)",
                border:
                  theme === "dark"
                    ? "1px solid rgba(46,204,113,.35)"
                    : "1px solid rgba(46,204,113,.45)",
                color: t.ink,
                padding: "10px 12px",
                borderRadius: 10,
                fontSize: 14,
              }}
            >
              ¡Gracias por escribirme! Ya recibí tu mensaje y te responderé muy
              pronto. Mientras tanto, si quieres, podemos coordinar por
              LinkedIn o email. ¡Hablemos de tu proyecto! ✨
            </div>
          )}

          {ok === "err" && (
            <div
              style={{
                marginTop: 16,
                background:
                  theme === "dark"
                    ? "rgba(231,76,60,.12)"
                    : "rgba(231,76,60,.18)",
                border:
                  theme === "dark"
                    ? "1px solid rgba(231,76,60,.35)"
                    : "1px solid rgba(231,76,60,.45)",
                color: t.ink,
                padding: "10px 12px",
                borderRadius: 10,
                fontSize: 14,
              }}
            >
              Ocurrió un problema al enviar. Intenta de nuevo.
            </div>
          )}
        </motion.div>

        {/* Right form or thank you */}
        {ok === "ok" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: t.rightBg,
              border: `1px solid ${t.border}`,
              boxShadow: t.shadowRight,
              borderRadius: 18,
              padding: 24,
              color: t.ink,
              display: 'grid',
              placeItems: 'center',
              minHeight: 320,
              textAlign: 'center'
            }}
          >
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
                ¡Gracias por comunicarte!
              </h3>
              <p style={{ color: t.sub, maxWidth: 560 }}>
                Tu mensaje se envió correctamente. En breve me pondré en
                contacto para entender mejor tu desafío y ver cómo podemos
                construir una solución juntos.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            className="glass-light dark:glass-dark grid gap-4 sm:gap-5 md:gap-6 rounded-3xl p-4 sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
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
            aria-labelledby="contact-title"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <label className="grid gap-1">
                <span className="text-xs sm:text-sm" style={{ opacity: 0.75 }}>Nombre*</span>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Nombre*"
                  autoComplete="name"
                  className="w-full min-h-[44px] sm:min-h-[48px] md:min-h-[52px] text-sm sm:text-base"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                />
              </label>

              <label className="grid gap-1">
                <span className="text-xs sm:text-sm" style={{ opacity: 0.75 }}>Email*</span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email*"
                  autoComplete="email"
                  className="w-full min-h-[44px] sm:min-h-[48px] md:min-h-[52px] text-sm sm:text-base"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <label className="grid gap-1">
                <span className="text-xs sm:text-sm" style={{ opacity: 0.75 }}>Empresa</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Empresa"
                  autoComplete="organization"
                  className="w-full min-h-[44px] sm:min-h-[48px] md:min-h-[52px] text-sm sm:text-base"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                />
              </label>

              <label className="grid gap-1">
                <span className="text-xs sm:text-sm" style={{ opacity: 0.75 }}>Cargo</span>
                <input
                  name="role"
                  type="text"
                  placeholder="Cargo"
                  autoComplete="organization-title"
                  className="w-full min-h-[44px] sm:min-h-[48px] md:min-h-[52px] text-sm sm:text-base"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                />
              </label>
            </div>

            <label className="grid gap-1">
              <span className="text-xs sm:text-sm" style={{ opacity: 0.75 }}>
                Cuéntame sobre tu proyecto…
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto…"
                className="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] text-sm sm:text-base"
                style={{
                  background: t.inputBg,
                  border: `1px solid ${t.inputBorder}`,
                  color: t.inputInk,
                  outline: "none",
                  borderRadius: 10,
                  padding: "12px 14px",
                  resize: "vertical",
                }}
              />
            </label>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-semibold touch-manipulation"
                style={{
                  background: t.btnBg,
                  color: t.btnInk,
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: 12,
                  fontWeight: 800,
                  boxShadow:
                    theme === "dark"
                      ? "0 10px 40px rgba(235,94,40,.35)"
                      : "0 10px 40px rgba(235,94,40,.20)",
                  opacity: sending ? 0.8 : 1,
                  cursor: sending ? "not-allowed" : "pointer",
                  transform: sending ? "scale(.98)" : "none",
                  transition: "transform .15s ease",
                }}
              >
                {sending ? "Enviando…" : "Enviar"}
              </button>

              {securityError && (
                <div className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-3">
                  <p className="text-red-500 text-sm font-medium">
                    ⚠️ {securityError}
                  </p>
                </div>
              )}
              
              <span className="text-xs sm:text-sm" style={{ color: t.sub }}>
                * Campos obligatorios
              </span>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
