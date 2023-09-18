import React from "react";
import "../det.css";
import Matrix from "../../../assets/matrix3x3.png";
import Expansion from "../../../assets/expansion.png";
import Expresion from "../../../assets/expresion.png";
import Steps from "./Steps";
import Theory from "./Theory";
import VideoPlayer from "./VideoPlayer";
import LaplaceExample from "./Example/LaplaceExample";

const Laplace = () => {
  return (
    <div className="Laplace">
      <h2>Regla de Laplace</h2>
      <Theory/>
      <img srcSet={Matrix} alt="" className="formula__imagen__easy" />
      <Steps/>
      <img srcSet={Expansion} alt="" className="formula__imagen" />
      <p className="after-formula">
        La fórmula para el teorema de Laplace de una matriz A del n×n se muestra
        en la siguiente expresión:
      </p>
      <img srcSet={Expresion} alt="" className="formula__imagen" />
      <br />
      <h2>Ejemplo</h2>
      <LaplaceExample/>
      <h2>Recursos de consulta</h2>
      <VideoPlayer/>
    </div>
  );
};

export default Laplace;
