import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeValue = {
  theme: "light" | "dark";
  toggle: () => void;
};

const ThemeContext = createContext<ThemeValue>({
  theme: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Verificar el tema inicial del sistema o localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Siempre iniciar en modo oscuro por defecto, a menos que el usuario haya guardado 'light'
    const shouldBeDark = savedTheme !== 'light';
    setTheme(shouldBeDark ? 'dark' : 'light');
    
    // Aplicar tema inicial
    const html = document.documentElement;
    const body = document.body;
    
    if (shouldBeDark) {
      html.classList.add('dark');
      body.classList.remove('aurora-page');
      body.classList.add('aurora-page-dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('aurora-page-dark');
      body.classList.add('aurora-page');
    }
  }, []);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    const html = document.documentElement;
    const body = document.body;
    
    if (newTheme === 'dark') {
      html.classList.add('dark');
      body.classList.remove('aurora-page');
      body.classList.add('aurora-page-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('aurora-page-dark');
      body.classList.add('aurora-page');
      localStorage.setItem('theme', 'light');
    }
  };

  const value = useMemo(
    () => ({
      theme,
      toggle,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
