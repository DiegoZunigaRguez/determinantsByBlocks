import React, { useState } from "react";
import "./det.css"; 
import Laplace from "./Laplace";
import Sarrus from "./Sarrus";

function Det() {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleCard = (cardNumber) => {
    setSelectedCard(cardNumber === selectedCard ? null : cardNumber);
  };

  return (
    <div className="dev__container" id="determinants">
      <h1>Determinantes</h1>
      <p className="dev__text">
        Te mostraremos información acerca de los métodos más comúnes para el
        cálculo de determinantes con algunos ejemplos para que los tengas en
        consideración.
      </p>
      <div className="dev__button-container">
        <button className="dev__button" onClick={() => toggleCard(1)}>
          Regla de Laplace
        </button>
        <button className="dev__button" onClick={() => toggleCard(2)}>
          Regla de Sarrus
        </button>
        <button className="dev__button" onClick={() => toggleCard(3)}>
          Matriz Triangular
        </button>
      </div>
      <div className={`dev__card ${selectedCard === 1 ? "active" : ""}`}>
        <div className="dev__card-content">
          <Laplace/>
        </div>
      </div>
      <div className={`dev__card ${selectedCard === 2 ? "active" : ""}`}>
        <div className="dev__card-content">
          <Sarrus/>
        </div>
      </div>
      <div className={`dev__card ${selectedCard === 3 ? "active" : ""}`}>
        <div className="dev__card-content">
          <h2>Matriz Triangular</h2>
          <p>
            Se tiene el siguiente teorema Sea A=(a_ij )una matriz de nxn
            triangular superior o inferior.Entonces det⁡〖A=a_11 a_22 a_33…a_nn
            〗 Esto es,el dterminante de una matriz triangular es igual al
            producto de sus compenetes en la diagonal priuncipal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Det;
