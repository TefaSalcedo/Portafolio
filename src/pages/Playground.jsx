import { proyectosAprendizaje } from '../data/portfolio';

function Playground() {
  const experimentos = proyectosAprendizaje.slice(0, 6);

  return (
    <div className="page">
      <h1 className="page-title">🧪 Playground</h1>
      <p className="page-subtitle">
        Mi espacio para probar cosas locas: retos, mini-apps y experimentos 💡🎨
      </p>
      <ul className="lista-aprendizaje">
        {experimentos.map((repo) => (
          <li key={repo.nombre}>
            <a href={repo.url} target="_blank" rel="noreferrer">
              <span className="repo-nombre">{repo.nombre}</span>
              <br />
              <span className="repo-desc">{repo.descripcion} · {repo.tech}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playground;
