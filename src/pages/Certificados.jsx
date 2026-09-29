import { certificados } from '../data/portfolio';

function Certificados() {
  return (
    <div className="page">
      <h1 className="page-title">📜 Certificados</h1>
      <p className="page-subtitle">
        Mi formación principal es autodidacta: cursos, proyectos y mucha práctica.
      </p>
      <ul className="cert-lista">
        {certificados.map((cert) => (
          <li key={cert.nombre}>
            <p className="cert-nombre">{cert.nombre}</p>
            <p className="cert-meta">{cert.emisor} · {cert.fecha}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificados;
