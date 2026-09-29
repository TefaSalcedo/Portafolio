import PerfilCard from '../components/cv/PerfilCard';
import { perfil, experiencia, experienciaPrevia, educacion, idiomas, intereses } from '../data/portfolio';

function SobreMi() {
  return (
    <div className="page">
      <h1 className="page-title">👩‍💻 Sobre mí</h1>
      <p className="page-subtitle">Ingeniería, software y proyectos hechos con intención.</p>

      <section className="section">
        <PerfilCard />
      </section>

      <section className="section">
        <h2 className="section-title">💭 Quién soy</h2>
        <div className="card">
          {perfil.sobreMi.map((parrafo) => (
            <p key={parrafo.slice(0, 30)} className="descripcion">{parrafo}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">🧭 Cómo trabajo</h2>
        <div className="card">
          <ul>
            {perfil.comoTrabajo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">💼 Experiencia</h2>
        <div className="timeline">
          {experiencia.map((exp) => (
            <div key={exp.empresa} className="exp-card">
              <p className="exp-cargo">{exp.cargo}</p>
              <p className="exp-meta">
                {exp.empresa} · {exp.periodo} · {exp.ubicacion}
              </p>
              <ul>
                {exp.puntos.map((punto) => (
                  <li key={punto.slice(0, 40)}>{punto}</li>
                ))}
              </ul>
              <div className="tags">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">🕰 Experiencia previa</h2>
        <div className="card">
          <ul>
            {experienciaPrevia.map((exp) => (
              <li key={exp.empresa}>
                <strong>{exp.cargo}</strong> — {exp.empresa} ({exp.periodo})
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">🎓 Educación</h2>
        <div className="card">
          {educacion.map((edu) => (
            <p key={edu.institucion}>
              <strong>{edu.titulo}</strong> — {edu.institucion} · {edu.periodo} · {edu.ubicacion}
            </p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">🌍 Idiomas</h2>
        <div className="tags">
          {idiomas.map((i) => (
            <span key={i.idioma} className="tag">{i.idioma}: {i.nivel}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">🌷 También me gusta</h2>
        <div className="tags">
          {intereses.map((i) => (
            <span key={i} className="tag">{i}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SobreMi;
