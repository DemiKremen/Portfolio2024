import React from 'react';
import './mobile.css';
import fotoportadamobile from '../Assets/fotoportadamobile.png';
import fotohola from '../Assets/fotohola.png';
import { IoIosDownload } from 'react-icons/io';
import Menu from './Menu';
import diadi from '../Assets/diadi.png';
import mystic from '../Assets/mystic.png';
import web from '../Assets/web.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowDown } from 'react-icons/fa';
import { FaBehance, FaLinkedin, FaInstagram } from 'react-icons/fa';

const cvLink = "https://drive.google.com/file/d/114FJUvtfdoCwAiYeNy2PnGC281WPXWZ4/view?usp=sharing";

const handleDownloadClick = () => {
  // Abre el enlace en una nueva ventana o pestaña
  window.open(cvLink, "_blank");
};

const Mobile = () => {
  return (
    <div className='fondogeneral'>
      {/* Primera Card */}
      <div className="card text-bg-dark">
        <img src={fotoportadamobile} className="card-img" alt="Foto de portada" />
        <div className="card-img-overlay">
          <h1 className="card-title">SOY <br /> DEMIAN <br /> KREMENCHUZKY</h1>
          <h3 className="card-text">LICENCIADO EN DISEÑO <br /> DESARROLLADOR WEB JR</h3>
        </div>
      </div>

      {/* Segunda Card */}
      <div className="full-width-card" id="mobile-card">
        <div className="right-content">
          <img src={fotohola} className="left-image" alt="Foto de hola" />
          <div className="circle violeta"></div>
          <div className="circle blanco"></div>
          <h2 className='mobile-center'>¡Hola!</h2>
          <h6 className='mobile-center'>Soy Demian Kremenchuzky, diseñador integral especializado en Web, UX/UI, programación y diseño gráfico.<br /><br />Descarga mi CV para conocer mi experiencia y descubre cómo puedo potenciar tu próximo proyecto. ¡Gracias por tu interés!</h6>
          <button className="boton-cv" onClick={handleDownloadClick}>
            Descargar CV <IoIosDownload />
          </button>
        </div>
      </div>

      {/* Tercera Card*/}
      <div className="card fondo-habilidades">
        <h2 className="fondotodo hablidades">HABILIDADES</h2>
        <h3 className="img-overlay hablidades">MIS CONOCIMIENTOS DE SOFTWARE</h3>
        <Menu />
      </div>

      {/* Cuarta Card*/}
      <div className="card fondo-portafolio">
        <h2 className="fondotodo portafolio">PORTAFOLIO</h2>
        <h3 className="img-overlay portafolio"> MIS ÚLTIMOS TRABAJOS. <a href="https://www.behance.net/demiankremenc1" target="_blank" rel="noopener noreferrer" className="enlace-behance">VER MÁS <FaCircleArrowRight className='flecha-juli' /></a></h3>
        <div className="image-container">
          <img src={diadi} alt="Proyecto Diadi"/>
          <img src={mystic} alt="Proyecto Mystic"/>
          <img src={web} alt="Proyecto Web" />
        </div>
      </div>


{/* Quinta Card (Timeline) */}
<div className="timeline-container">
  <div className="card fondo-timeline">
    <h2 className="fondotodo timeline">EXPERIENCIA</h2>
  </div>

  {/* Timeline Items */}
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-year">2018-2020</div>
      <div className="timeline-content">
        <h3 className="experience-title">Lodiser S.A.</h3>
        <p className="experience-description">Diseñador Jr</p>
      </div>
      <FaArrowDown className="timeline-arrow" />
    </div>

    <div className="timeline-item">
      <div className="timeline-year">2021</div>
      <div className="timeline-content">
        <h3 className="experience-title">Liferando</h3>
        <p className="experience-description">Delivery en Koln</p>
      </div>
      <FaArrowDown className="timeline-arrow" />
    </div>

    <div className="timeline-item">
      <div className="timeline-year">2022</div>
      <div className="timeline-content">
        <h3 className="experience-title">Social Media</h3>
        <p className="experience-description">Diseñador Freelance</p>
      </div>
      <FaArrowDown className="timeline-arrow" />
    </div>

    <div className="timeline-item">
      <div className="timeline-year">2023-NOW</div>
      <div className="timeline-content">
        <h3 className="experience-title titulo-timeline">Tropipay</h3>
        <p className="experience-description parrafo-timeline">Diseñador Digital</p>
      </div>
    </div>
  </div>
</div>


      {/* Sexta Card*/}
      <div className="sexta-card">
      <div className="right-content-fin">
        <div className="circle violeta"></div>
        <div className="circle negro"></div>
        <h2 className="negrot">Contacto</h2>
        <h6 className="negrot">demiankremenchuzky@gmail.com <br /> Tel: (+54) 11 3917-0198</h6>
        <div className="social-icons">
          <a href="https://www.behance.net/demiankremenc1" target="_blank" rel="noopener noreferrer">
            <FaBehance className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/demian-kremenchuzky-23a97b1b0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.instagram.com/demikremen/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="overlay"></div>
      <div className="left-form">
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>



    </div>
  );
};

export default Mobile;
