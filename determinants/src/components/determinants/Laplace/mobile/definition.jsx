import React, { useState } from "react";
import Theory from "../Theory";
import MobileMatrix from "./mobilematrix";
import Steps from "../Steps";
import Mobileexpansion from "./mobileexpansion";
import Mobileexpresion from "./mobileexpresion";
import "../../det.css";

const Definition = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  const togglePopup = (popup) => {
    setIsPopupOpen(!isPopupOpen);
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h2>Regla de Laplace</h2>
      <Theory />

      <button onClick={() => togglePopup("matrix")} className="pop-button">
        Mostrar matriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "matrix" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <MobileMatrix />
          </div>
        </>
      )}

      <br />

      <Steps />

      <button onClick={() => togglePopup("expansion")} className="pop-button">
        Mostrar Expansión
      </button>
      {isPopupOpen && selectedPopup === "expansion" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <Mobileexpansion />
          </div>
        </>
      )}

      <br />

      <p className="after-formula">
        La fórmula para el teorema de Laplace de una matriz A del n×n se muestra
        en la siguiente expresión:
      </p>

      <button onClick={() => togglePopup("expresion")} className="pop-button">
        Mostrar Expresión
      </button>
      {isPopupOpen && selectedPopup === "expresion" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <Mobileexpresion />
          </div>
        </>
      )}

      <br />
    </div>
  );
};

export default Definition;
