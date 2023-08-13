import React from "react";
import "./simulation.css";

const Simulation = () => {
  return (
    <section className="section simulation" id="simulation">
      <div className="message__simulation">
        <p>
          Aquí tienes la simulación haciendo uso del algoritmo que se te
          presentó anteriormente, lo único que necesitas para visualizar es
          colocar la dimensión de la matriz y los datos, únicamente se puede
          utilizar una matriz entre dimensión 4x4 y 6x6
        </p>
      </div>
    </section>
  );
};

export default Simulation;
