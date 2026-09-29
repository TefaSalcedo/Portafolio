import { perfil } from '../../data/portfolio';

function PerfilCard() {
  return (
    <div className="perfil-card">
      <div className="perfil-avatar">
        <img src="/perfil.jpg" alt={`Foto de ${perfil.nombre}`} />
      </div>
      <div className="perfil-info">
        <h2>{perfil.nombre}</h2>
        <p className="meta">
          {perfil.titulo} · {perfil.ubicacion}
        </p>
        <div className="botones">
          <a className="btn btn-secundario" href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-secundario" href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-secundario" href={`mailto:${perfil.email}`}>{perfil.email}</a>
        </div>
      </div>
    </div>
  );
}

export default PerfilCard;
