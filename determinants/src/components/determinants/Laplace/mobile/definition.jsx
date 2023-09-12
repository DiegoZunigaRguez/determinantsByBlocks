import React from "react";
import Theory from "../Theory";
import Matrix3x3 from "../matrix3x3";
import Steps from "../Steps";
import LaplaceExpression from "../LaplaceExpression";
import LaplaceExpansion from "../LaplaceExpansion";
import '../../det.css';

const definition = () => {
  return (
    <div>
      <h2>Regla de Laplace</h2>
      <Theory />
      <Matrix3x3 />
      <Steps />
      <LaplaceExpression />
      <p className="after-formula">
        La fórmula para el teorema de Laplace de una matriz A del n×n se muestra
        en la siguiente expresión:
      </p>
      <LaplaceExpansion />
      <br />
    </div>
  );
};

export default definition;
