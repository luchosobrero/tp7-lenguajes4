import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/proyectoBlob">proyectoBlob</NavLink></li>
        <li><NavLink to="/acerca">Acerca de nosotros</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </nav>
  );
}