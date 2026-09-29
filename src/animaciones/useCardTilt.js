import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

// Tilt 3D sutil al pasar el mouse sobre las tarjetas.
export function useCardTilt() {
  const { pathname } = useLocation();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const elementos = document.querySelectorAll('.card, .stack-grupo');
    const limpieza = [];

    elementos.forEach((el) => {
      const mover = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) ` +
          `rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
      };
      const salir = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', mover);
      el.addEventListener('mouseleave', salir);
      limpieza.push(() => {
        el.removeEventListener('mousemove', mover);
        el.removeEventListener('mouseleave', salir);
        el.style.transform = '';
      });
    });

    return () => limpieza.forEach((fn) => fn());
  }, [pathname, reduced]);
}
