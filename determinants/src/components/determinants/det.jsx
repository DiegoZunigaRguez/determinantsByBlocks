import React from "react";
import "./det.css";
import Laplace from "./Laplace";

const det = () => {
  return (
    <section className="section det" id="determinants">
      <h2 className="section__title det__title">Determinantes</h2>
      <div className="message__det">
        <p>
          Te mostraremos información acerca de los métodos más comúnes para el
          cálculo de determinantes con algunos ejemplos para que los tengas en
          consideración.
        </p>
      </div>
      <div className="buttons">
        <button onclick="window.location.href='#Laplace'">Regla de Laplace</button>
        <button onclick="window.location.href='#seccion2'">Regla de Sarrus</button>
        <button onclick="window.location.href='#seccion3'">Matriz Triangular</button>
      </div>
      <Laplace />
    </section>
  );
};

export default det;
