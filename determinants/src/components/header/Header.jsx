import React from 'react';
import './header.css';

const header = () => {
  return (
    <header className="header">
        <nav className="nav container">
           <a href="#about" className="nav__logo">EscoMate</a> 
           <div className="nav__menu show-menu">
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
                    <a href="#simulation" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>Simulación
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase nav__icon"></i>Desarrolladores
                    </a>
                </li>
            </ul>
           </div>
        </nav>
    </header>
  )
}

export default header