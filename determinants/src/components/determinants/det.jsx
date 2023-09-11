import React, { useState } from "react";
import "./det.css"; 
import Laplace from "./Laplace/Laplace";
import Sarrus from "./Sarrus/Sarrus";
import Triangular from "./Triangular/Triangular";

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
          <Triangular/>
        </div>
      </div>
    </div>
  );
}

export default Det;
