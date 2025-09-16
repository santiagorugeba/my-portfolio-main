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
          inputBg: "rgba(37,36,34,.04)",
          inputBorder: "rgba(37,36,34,.16)",
          inputInk: "#252422",
          btnBg: "#EB5E28",
          btnInk: "#FFFCF2",
          shadowLeft: "0 20px 70px rgba(37,36,34,.12)",
          shadowRight: "0 20px 70px rgba(37,36,34,.12)",
        };

  const [sending, setSending] = React.useState(false);
  const [ok, setOk] = React.useState<null | "ok" | "err">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fdNative = new FormData(e.currentTarget);

    const data: FormData = {
      name: (fdNative.get("name") as string) ?? "",
      email: (fdNative.get("email") as string) ?? "",
      company: (fdNative.get("company") as string) ?? "",
      role: (fdNative.get("role") as string) ?? "",
      message: (fdNative.get("message") as string) ?? "",
    };

    if (!data.name || !data.email || !data.message) return;

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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ scrollMarginTop: 96 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: t.leftBg,
            border: `1px solid ${t.border}`,
            boxShadow: t.shadowLeft,
            borderRadius: 18,
            padding: 24,
            color: t.ink,
          }}
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
            style={{
              marginTop: 12,
              marginBottom: 12,
              fontSize: 38,
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Cuéntame sobre tu <span style={{ color: "#EB5E28" }}>sueño</span>,
            tu proyecto o una oportunidad laboral.
          </h2>

          <p style={{ color: t.sub, marginTop: 6 }}>
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
            className="grid gap-4"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: t.rightBg,
              border: `1px solid ${t.border}`,
              boxShadow: t.shadowRight,
              borderRadius: 18,
              padding: 20,
              color: t.ink,
            }}
            aria-labelledby="contact-title"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span style={{ fontSize: 12, opacity: 0.75 }}>Nombre*</span>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Nombre*"
                  autoComplete="name"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                />
              </label>

              <label className="grid gap-1">
                <span style={{ fontSize: 12, opacity: 0.75 }}>Email*</span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email*"
                  autoComplete="email"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span style={{ fontSize: 12, opacity: 0.75 }}>Empresa</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Empresa"
                  autoComplete="organization"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                />
              </label>

              <label className="grid gap-1">
                <span style={{ fontSize: 12, opacity: 0.75 }}>Cargo</span>
                <input
                  name="role"
                  type="text"
                  placeholder="Cargo"
                  autoComplete="organization-title"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputInk,
                    outline: "none",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                />
              </label>
            </div>

            <label className="grid gap-1">
              <span style={{ fontSize: 12, opacity: 0.75 }}>
                Cuéntame sobre tu proyecto…
              </span>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Cuéntame sobre tu proyecto…"
                style={{
                  background: t.inputBg,
                  border: `1px solid ${t.inputBorder}`,
                  color: t.inputInk,
                  outline: "none",
                  borderRadius: 10,
                  padding: "10px 12px",
                  resize: "vertical",
                }}
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                style={{
                  background: t.btnBg,
                  color: t.btnInk,
                  border: "none",
                  padding: "10px 16px",
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

              <span style={{ fontSize: 12, color: t.sub }}>
                * Campos obligatorios
              </span>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
