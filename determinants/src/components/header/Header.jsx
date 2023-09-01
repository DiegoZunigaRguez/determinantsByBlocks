import React, { useState } from 'react';
import "./header.css";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="back">
        <div className="menu contenedor">
          <a href="#home" className="logo">EscoMate</a>
          <input type="checkbox" id="menu" checked={menuOpen} onChange={toggleMenu} />
          <label for="menu">
            <img src={require("../../assets/menu.png")} className="menu-icon" alt="" srcset="" />
          </label>
          <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul>
              <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
              <li><a href="#about" onClick={closeMenu}>Acerca del proyecto</a></li>
              <li><a href="#determinants" onClick={closeMenu}>Determinantes</a></li>
              <li><a href="#simulation" onClick={closeMenu}>Simulación</a></li>
              <li><a href="#developers" onClick={closeMenu}>Desarrolladores</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
