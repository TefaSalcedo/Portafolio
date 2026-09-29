import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const SELECTORES =
  '.card, .exp-card, .stack-grupo, .perfil-card, .contacto-card, ' +
  '.cert-lista li, .lista-aprendizaje li, .section-title';

// Revela el contenido de cada página al hacer scroll (GSAP + ScrollTrigger).
export function useRevealAnimations() {
  const { pathname } = useLocation();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-title',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', clearProps: 'transform' }
      );
      gsap.fromTo(
        '.page-subtitle',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.12, ease: 'power3.out', clearProps: 'transform' }
      );

      const elementos = gsap.utils.toArray(SELECTORES);
      if (!elementos.length) return;

      gsap.set(elementos, { opacity: 0, y: 28 });
      ScrollTrigger.batch(elementos, {
        start: 'top 92%',
        once: true,
        onEnter: (lote) =>
          gsap.to(lote, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            overwrite: true,
            // Sin clearProps el transform inline anularía el hover CSS.
            clearProps: 'transform,opacity',
          }),
      });
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [pathname, reduced]);
}
