import { perfil } from '../../data/portfolio';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Hecho con 💕 por {perfil.nombre} ·
        <a href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>·
        <a href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>·
        <a href={`mailto:${perfil.email}`}>Email</a>
      </p>
    </footer>
  );
}

export default Footer;
