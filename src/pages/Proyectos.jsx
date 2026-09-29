import ProjectGrid from '../components/projects/ProjectGrid';
import { proyectosDestacados, proyectosAprendizaje } from '../data/portfolio';

function Proyectos() {
  return (
    <div className="page">
      <h1 className="page-title">🎬 Proyectos</h1>
      <p className="page-subtitle">
        Productos que estoy construyendo — y los repos donde practico cada día.
      </p>

      <section className="section">
        <h2 className="section-title">⭐ Destacados</h2>
        <ProjectGrid proyectos={proyectosDestacados} />
      </section>

      <section className="section">
        <h2 className="section-title">🌱 Aprendizaje y experimentos</h2>
        <p className="page-subtitle">
          Repositorios más pequeños donde practico fundamentos, retos y nuevas herramientas.
        </p>
        <ul className="lista-aprendizaje">
          {proyectosAprendizaje.map((repo) => (
            <li key={repo.nombre}>
              <a href={repo.url} target="_blank" rel="noreferrer">
                <span className="repo-nombre">{repo.nombre}</span>
                <br />
                <span className="repo-desc">{repo.descripcion} · {repo.tech}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Proyectos;
