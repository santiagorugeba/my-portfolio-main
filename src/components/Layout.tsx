import { Outlet } from 'react-router-dom';
import RouteTransition from './RouteTransition';
import ParticlesBG from './ParticlesBG';
import { TransitionProvider, useTransition } from '@/contexts/TransitionContext';

/**
 * Layout wrapper que contiene elementos globales como transiciones y fondos
 * que deben estar presentes en todas las rutas
 */
function LayoutContent() {
  const { showContent } = useTransition();
  
  return (
    <>
      <RouteTransition />
      <ParticlesBG />
      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
        <Outlet />
      </div>
    </>
  );
}

export default function Layout() {
  return (
    <TransitionProvider>
      <LayoutContent />
    </TransitionProvider>
  );
}
