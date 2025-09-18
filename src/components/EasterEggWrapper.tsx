import React from 'react';
import { EasterEggSystem, useEasterEgg } from './EasterEgg';

// Wrapper para componentes que necesitan el contexto de easter egg
export const withEasterEgg = <P extends object>(
  Component: React.ComponentType<P & { onEasterEggFound?: (id: string) => void }>
) => {
  return (props: P) => {
    try {
      const { onEasterEggFound } = useEasterEgg();
      return <Component {...props} onEasterEggFound={onEasterEggFound} />;
    } catch {
      // Si no está en el contexto, renderizar sin la función
      return <Component {...props} />;
    }
  };
};

// Componente principal que envuelve toda la app
export const EasterEggProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <EasterEggSystem />
    </>
  );
};

