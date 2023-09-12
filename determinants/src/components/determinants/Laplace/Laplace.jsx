import React from "react";
import "../det.css";
import Mobilematrix from "./mobile/mobilematrix";
import LaplaceExpression from "./LaplaceExpression";
import LaplaceExpansion from "./LaplaceExpansion";
import Steps from "./Steps";
import Theory from "./Theory";
import VideoPlayer from "./VideoPlayer";
import LaplaceExample from "./Example/LaplaceExample";

const Laplace = () => {
  return (
    <div className="Laplace">
      <h2>Regla de Laplace</h2>
      <Theory/>
      <Mobilematrix/>
      <Steps/>
      <LaplaceExpression/>
      <p className="after-formula">
        La fórmula para el teorema de Laplace de una matriz A del n×n se muestra
        en la siguiente expresión:
      </p>
      <LaplaceExpansion/>
      <br />
      <h2>Ejemplo</h2>
      <LaplaceExample/>
      <h2>Recursos de consulta</h2>
      <VideoPlayer/>
    </div>
  );
};

export default Laplace;
