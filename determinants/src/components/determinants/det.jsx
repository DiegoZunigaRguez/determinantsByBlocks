import React, { useState } from "react";
import "./det.css"; // Asegúrate de que el nombre del archivo CSS sea "Det.css" o el que desees

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
          <h2>Regla de Laplace</h2>
          <p>
            El teorema de Laplace es un algoritmo que nos proporciona el camino
            para encontrar el determinante de una matriz. El teorema de Laplace
            también es llamada expansión por menores y expansión por los
            cofactores. El teorema de Laplace se nombra después en honor al
            matemático francés Peter Simon Laplace (1749-1827). Pierre-Simon,
            marqués de Laplace ; Beaumont-en-Auge, Francia, 1749 - París, 1827.
            Matemático francés. Hijo de un granjero, inició sus estudios
            primarios en la escuela local, pero gracias a la intervención de
            D'Alembert, quien había quedado profundamente impresionado por un
            escrito del joven sobre los principios de la mecánica, pudo
            trasladarse a la capital, donde consiguió una plaza en la École
            Militaire. Continuador de la mecánica newtoniana, hizo un gran
            aporte para el posterior descubrimiento de lo que hoy se conoce como
            transformada de Laplace, así también descubrió la muy conocida y
            famosa ecuación de Laplace; en el área de la estadística sentó las
            bases de la teoría i=analítica de la probabilidad; y como astrónomo
            planteó la teoría nebular sobre la formación del sistema solar.
            Compartió la doctrina filosófica del determinismo científico. A
            continuación, se presenta un ejemplo teórico de la regla de Laplace:
          </p>
        </div>
      </div>
      <div className={`dev__card ${selectedCard === 2 ? "active" : ""}`}>
        <div className="dev__card-content">
          <h2>Regla de Sarrus</h2>
          <p>
            La regla de Sarrus es un método que permite calcular rápidamente el
            determinante de una matriz cuadrada con tamaño de 3×3 únicamente. En
            otras palabras, la regla de Sarrus consiste en dibujar dos conjuntos
            de dos triángulos opuestos mediante los elementos de la matriz. El
            primer conjunto serán 2 triángulos que cruzarán la diagonal
            principal y el segundo conjunto serán 2 triángulos que cruzarán la
            diagonal secundaria.
          </p>
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
