import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          EscoMate
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>Acerca del proyecto
              </a>
            </li>
            <li className="nav__item">
              <a href="#determinants" className="nav__link">
                <i className="uil uil-user nav__icon"></i>Determinantes
              </a>
            </li>
            <li className="nav__item">
              <a href="#simulation" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Simulación
              </a>
            </li>
            <li className="nav__item">
              <a href="#developers" className="nav__link">
                <i className="uil uil-briefcase nav__icon"></i>Desarrolladores
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
