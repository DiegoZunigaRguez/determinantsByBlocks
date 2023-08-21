import React from 'react';
import './footer.css'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">EscoMate</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Acerca del Proyecto
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Determinantes
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Simulación
            </a>
          </li>
        </ul>
        <span className="footer__copy">Página desarrollada con React JS</span>
      </div>
    </footer>
  )
}

export default footer