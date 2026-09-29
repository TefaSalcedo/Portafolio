import { perfil } from '../data/portfolio';

function Contacto() {
  return (
    <div className="page">
      <h1 className="page-title">📬 Contáctame</h1>
      <p className="page-subtitle">
        Estoy buscando oportunidades como desarrolladora Full Stack, backend o frontend — remotas, híbridas o presenciales.
      </p>
      <div className="contacto-card">
        <p className="contacto-item">
          <span aria-hidden="true">💌</span>
          <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
        </p>
        <p className="contacto-item">
          <span aria-hidden="true">💼</span>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/estefaniasalcedocamacho</a>
        </p>
        <p className="contacto-item">
          <span aria-hidden="true">🐱</span>
          <a href={perfil.github} target="_blank" rel="noreferrer">github.com/TefaSalcedo</a>
        </p>
        <p className="contacto-item">
          <span aria-hidden="true">📍</span>
          {perfil.ubicacion}
        </p>
      </div>
    </div>
  );
}

export default Contacto;
