import React from "react";
import "./simulation.css";
import { crearMatrices } from "../../assets/scriptFuerzaBruta";

const Simulation = () => {
  return (
    <div id="maestro">
      <div>
        <h1>Multiplicacion de matrices por bloques de 2x2 y 3x3</h1>
        <h2>Inserte el numero de filas y columnas para las matrices</h2>
      </div>
      <div id="divInput">
        <input
          id="input"
          type="number"
          min="2"
          max="7"
          placeholder="min: 4 max: 8"
        ></input>
      </div>
      <div id="divBoton">
        <button id="boton" onClick={crearMatrices}></button>
      </div>
      <div id="divTabla">
        <div id="matrisA">
          <React.Fragment>
            <tbody></tbody>
          </React.Fragment>
        </div>
        <div id="matrisB">
          <React.Fragment>
            <tbody></tbody>
          </React.Fragment>
        </div>
      </div>
      <div id="divBoton2">
        <React.Fragment>
          <tbody></tbody>
        </React.Fragment>
      </div>
      <div id="divCosas">
        <div id="responde">
          <div id="pseudocodigo">
            <React.Fragment>
              <tbody></tbody>
            </React.Fragment>
          </div>
          <div id="operaciones">
            <React.Fragment>
              <tbody></tbody>
            </React.Fragment>
          </div>
        </div>
        <div id="matrisR">
          <React.Fragment>
            <tbody></tbody>
          </React.Fragment>
        </div>
      </div>
      <div id="divBoton3">
        <React.Fragment>
          <tbody></tbody>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Simulation;
