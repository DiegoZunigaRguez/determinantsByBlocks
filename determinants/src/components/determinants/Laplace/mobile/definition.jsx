import React, { useState } from "react";
import Theory from "../Theory";
import MobileMatrix from "./mobilematrix";
import Steps from "../Steps";
import LaplaceExpression from "../LaplaceExpression";
import LaplaceExpansion from "../LaplaceExpansion";
import "../../det.css";

const Definition = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h2>Regla de Laplace</h2>
      <Theory />
      <button onClick={togglePopup} className="pop-button">Mostrar matriz 3x3</button>
      {isPopupOpen && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>
              X
            </button>
            <MobileMatrix />
          </div>
        </>
      )}
      <br />
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

export default Definition;
