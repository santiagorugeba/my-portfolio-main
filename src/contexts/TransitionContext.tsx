import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TransitionContextType {
  showContent: boolean;
  setShowContent: (show: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [showContent, setShowContent] = useState(true);

  return (
    <TransitionContext.Provider value={{ showContent, setShowContent }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}
