import React from "react";
import "../det.css";
import SarrusExpresion from "../../../assets/Sarrus.png";
import VideoPlayer from "./VideoPlayer";

const Sarrus = () => {
  return (
    <div>
      <h2>Regla de Sarrus</h2>
      <p>
        La regla de Sarrus es un método que permite calcular rápidamente el
        determinante de una matriz cuadrada con tamaño de 3×3 únicamente. En
        otras palabras, la regla de Sarrus consiste en dibujar dos conjuntos de
        dos triángulos opuestos mediante los elementos de la matriz. El primer
        conjunto serán 2 triángulos que cruzarán la diagonal principal y el
        segundo conjunto serán 2 triángulos que cruzarán la diagonal secundaria.
      </p>
      <img src={SarrusExpresion} alt="" className="formula__imagen"/>
      <h2>Ejemplo</h2>
      <h2>Recursos de consulta</h2>
      <VideoPlayer/>
    </div>
  );
};

export default Sarrus;
