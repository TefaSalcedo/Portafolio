import { NavLink, Link } from 'react-router-dom';
import LogoGato from './LogoGato';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/cv', label: 'Sobre mí' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/stack', label: 'Stack' },
  { to: '/certificados', label: 'Certificados' },
  { to: '/playground', label: 'Playground' },
  { to: '/contacto', label: 'Contacto' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <LogoGato />
          Tefa Salcedo
        </Link>
        <ul className="navbar-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'activo' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
