import { stack } from '../data/portfolio';

function Stack() {
  return (
    <div className="page">
      <h1 className="page-title">🧰 Stack tecnológico</h1>
      <p className="page-subtitle">
        Las tecnologías con las que trabajo — y las que estoy aprendiendo activamente.
      </p>
      <div className="grid">
        {stack.map((grupo) => (
          <div key={grupo.grupo} className="stack-grupo">
            <h3>{grupo.grupo}</h3>
            <div className="tags">
              {grupo.items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
