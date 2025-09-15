import React, { createContext, useContext, useEffect, useMemo } from "react";

type ThemeValue = {
  theme: "dark";
  toggle: () => void; // noop
};

const ThemeContext = createContext<ThemeValue>({
  theme: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Fuerza dark mode + clases de aurora global
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.add("dark");
    body.classList.remove("aurora-page");
    body.classList.add("aurora-page-dark");
  }, []);

  const value = useMemo(
    () => ({
      theme: "dark" as const,
      toggle: () => {}, // deshabilitado
    }),
    []
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
