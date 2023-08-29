import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="back">
        <div className="menu contenedor">
          <a href="#home" className="logo">EscoMate</a>
          <input type="checkbox" id="menu"></input>
          <label for="menu">
            <img src={require("../../assets/menu.png")} className="menu-icon" alt="" srcset="" />
          </label>
          <nav className="navbar">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca del proyecto</a></li>
              <li><a href="#determinants">Determinantes</a></li>
              <li><a href="#simulation">Simulación</a></li>
              <li><a href="#developers">Desarrolladores</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
