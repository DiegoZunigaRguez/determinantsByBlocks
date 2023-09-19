import React, { useState } from "react";
import "../../det.css";
import SarrusExpresion from "../../../../assets/Sarrus.png";
import SarrusExpression2 from "../../../../assets/Sarrus2.png";

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
      <h2>Regla de Sarrus</h2>
      <p>
        La regla de Sarrus es un método que permite calcular rápidamente el
        determinante de una matriz cuadrada con tamaño de 3×3 únicamente. En
        otras palabras, la regla de Sarrus consiste en dibujar dos conjuntos de
        dos triángulos opuestos mediante los elementos de la matriz. El primer
        conjunto serán 2 triángulos que cruzarán la diagonal principal y el
        segundo conjunto serán 2 triángulos que cruzarán la diagonal secundaria.
      </p>
      <button onClick={() => togglePopup("sarrus")} className="pop-button">
        Mostrar matriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "sarrus" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={SarrusExpresion} alt="" className="formula__imagen"/>
            <img src={SarrusExpression2} alt="" className="formula__imagen"/>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Definition;
