import { Link } from 'react-router-dom';
import { perfil, proyectosDestacados } from '../data/portfolio';
import ProjectGrid from '../components/projects/ProjectGrid';

function Home() {
  const destacados = proyectosDestacados.slice(0, 3);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-avatar" aria-hidden="true">🐱</div>
        <h1>Hola, soy {perfil.nombre} 💕</h1>
        <p className="rol">{perfil.titulo}</p>
        <p className="resumen">{perfil.resumen}</p>
        <div className="botones">
          <Link className="btn btn-primario" to="/proyectos">Ver mis proyectos</Link>
          <Link className="btn btn-secundario" to="/contacto">Contáctame</Link>
        </div>
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
