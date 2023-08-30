import React from "react";

const message = () => {
  return (
    <div className="message__content">
      <div className="left-column">
        <h1 className="message__title">¡Agradecemos tu visita! </h1>
      </div>
      <div className="right-column">
        <p className="message__mes">
          En esta página podrás conocer acerca de los determinantes, un tema muy
          importante en tu asignatura de Álgebra Lineal o Álgebra Superior, por
          ello es que tenemos un simulador interactivo que explicará los pasos
          para calcular dichos determinantes que dejan en tus clases.
          <br /> <br />
          En esta página podrás conocer más acerca del algoritmo en el apartado
          “Acerca del proyecto”
        </p>
      </div>
    </div>
  );
};

export default message;
