import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "@/theme/ThemeContext";

export default function ParticlesBG() {
  const { theme } = useTheme();

  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const loaded = useCallback(async (_container?: Container) => {
    // opcional: puedes inspeccionar el container aquí
  }, []);

  const colors =
    theme === "dark"
      ? ["#EB5E28", "#CCC5B9", "#FFFCF2"] // Dark
      : ["#EB5E28", "#403D39", "#252422"]; // Light

  // Fuerza rerender al cambiar tema
  const key = useMemo(() => `particles-${theme}`, [theme]);

  return (
    <Particles
      key={key}
      id="globalParticles"
      init={init}
      loaded={loaded}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        fullScreen: { enable: false }, // lo controlamos con el contenedor fixed
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 90,
            density: { enable: true, area: 900 }
          },
          color: { value: colors },
          opacity: { value: { min: 0.15, max: 0.45 } },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" }
          },
          links: {
            enable: true,
            distance: 110,
            color: theme === "dark" ? "#FFFCF2" : "#403D39",
            opacity: 0.12,
            width: 1
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 2 }
          }
        }
      }}
    />
  );
}
