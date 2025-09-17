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
    // SIEMPRE iniciar en modo oscuro por defecto - ignorar localStorage
    setTheme('dark');
    
    // Aplicar tema inicial
    const html = document.documentElement;
    const body = document.body;
    
    html.classList.add('dark');
    body.classList.remove('aurora-page');
    body.classList.add('aurora-page-dark');
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
