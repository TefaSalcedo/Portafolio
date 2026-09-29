import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { perfil, proyectosDestacados } from '../data/portfolio';
import ProjectGrid from '../components/projects/ProjectGrid';
import VideoHero from '../components/video/VideoHero';
import { usePrefersReducedMotion } from '../animaciones/usePrefersReducedMotion';

function Home() {
  const destacados = proyectosDestacados.slice(0, 3);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    // Si el splash aún está visible, esperamos a que termine para entrar.
    const delay = sessionStorage.getItem('splash-visto') ? 0 : 1.55;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' }, delay })
        .from('.hero-avatar', {
          scale: 0,
          rotation: -20,
          duration: 0.7,
          ease: 'back.out(1.8)',
        })
        .from('.hero h1', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero .rol', { y: 20, opacity: 0, duration: 0.5 }, '-=0.35')
        .from('.hero .resumen', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from(
          '.hero .botones .btn',
          { y: 14, opacity: 0, stagger: 0.1, duration: 0.4 },
          '-=0.25'
        );
    });

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar" aria-hidden="true">🐱</div>
        </div>
        <h1>Hola, soy {perfil.nombre} 💕</h1>
        <p className="rol">{perfil.titulo}</p>
        <p className="resumen">{perfil.resumen}</p>
        <div className="botones">
          <Link className="btn btn-primario" to="/proyectos">Ver mis proyectos</Link>
          <Link className="btn btn-secundario" to="/contacto">Contáctame</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">🎬 De ingeniería a código</h2>
        <VideoHero
          src="/video/ingeniera-a-dev.mp4"
          poster="/video/ingeniera-a-dev-poster.jpg"
          titulo="Mi transición de ingeniera civil a desarrolladora"
        />
      </section>

      <section className="section">
        <h2 className="section-title">✨ En lo que estoy trabajando</h2>
        <ProjectGrid proyectos={destacados} />
      </section>

      <section className="section">
        <h2 className="section-title">🌱 Un poco de mí</h2>
        <div className="card">
          <p className="descripcion">
            Curiosa, analítica y creativa. Me gusta entender cómo funcionan las cosas por dentro,
            aprender conectando conceptos y construir productos digitales que la gente pueda usar de verdad.
            Mi perfil combina ingeniería civil, desarrollo de software y emprendimiento.
          </p>
          <div className="repo-links">
            <Link to="/cv">Conóceme mejor →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
