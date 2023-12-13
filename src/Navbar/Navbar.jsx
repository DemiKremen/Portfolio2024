import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import Logo from '../Assets/Logo.png';
import '../Navbar/Navbar.css';
import LogoMobile from '../Assets/logomobile.png';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactoElement = document.getElementById('contacto');
    if (contactoElement) {
      window.scrollTo({
        top: contactoElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='fondonavbar'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={LogoMobile}
              className="logo-img d-block d-lg-none"
              alt="Logo"
            />
            <img
              src={Logo}
              className="logo-img d-none d-lg-block"
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
                <a
                  className="nav-link color-texto"
                  onClick={scrollToContact}
                  style={{ cursor: 'pointer' }}
                >
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
