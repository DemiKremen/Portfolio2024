import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa'; // Importa FaBars de react-icons/fa
import Logo from '../Assets/Logo.png'; // Ajusta la ruta según la estructura de tu proyecto
import '../Navbar/Navbar.css';
import LogoMobile from '../Assets/logomobile.png';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fondonavbar'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={LogoMobile} 
              className="logo-img d-block d-lg-none" // Se muestra solo en dispositivos pequeños
              alt="Logo"
            />
            <img
              src={Logo}
              className="logo-img d-none d-lg-block" // Se muestra solo en dispositivos grandes
              alt="Logo Mobile"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link color-texto_uno" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-texto" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
