function ProjectCard({ proyecto }) {
  return (
    <article className="card">
      <span className="estado">{proyecto.estado}</span>
      <h3>{proyecto.nombre}</h3>
      <p className="tagline">{proyecto.tagline}</p>
      <p className="descripcion">{proyecto.descripcion}</p>
      <div className="tags">
        {proyecto.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="repo-links">
        {proyecto.repos.map((repo) => (
          <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer">
            {repo.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
