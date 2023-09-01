import React, { useState } from "react";
import "./simulation.css";

function Simulation() {
  const [matrixSize, setMatrixSize] = useState(0);
  const [matrix, setMatrix] = useState([]);

  // Función para cambiar el tamaño de la matriz
  const handleMatrixSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setMatrixSize(newSize);
    // Generar una matriz vacía del nuevo tamaño
    const newMatrix = Array.from({ length: newSize }, () =>
      Array(newSize).fill("")
    );
    setMatrix(newMatrix);
  };

  // Función para rellenar la matriz de forma aleatoria
  const handleRandomFill = () => {
    const randomMatrix = matrix.map((row) =>
      row.map(() => Math.floor(Math.random() * 10))
    );
    setMatrix(randomMatrix);
  };

  return (
    <div className="simulation__container" id="simulation">
      <h1 className="simulation__title">Generador de Determinantes</h1>
      <p className="simulation__text">
        Aquí tienes la simulación haciendo uso del algoritmo que se te presentó
        anteriormente, lo único que necesitas para visualizar es colocar la
        dimensión de la matriz y los datos, únicamente se puede utilizar una
        matriz entre dimensión 4x4 y 6x6.
      </p>
      <select
        className="simulation__options"
        value={matrixSize}
        onChange={handleMatrixSizeChange}
      >
        <option value={0} defaultChecked>
          Selecciona
        </option>
        <option value={4}>Matriz 4x4</option>
        <option value={5}>Matriz 5x5</option>
        <option value={6}>Matriz 6x6</option>
      </select>
      <br />
      <div className="determinant">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((cell, columnIndex) => (
              <input
                key={columnIndex}
                type="number"
                value={cell}
                onChange={(e) => {
                  const updatedMatrix = [...matrix];
                  updatedMatrix[rowIndex][columnIndex] = e.target.value;
                  setMatrix(updatedMatrix);
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <br />
      <button className="button" onClick={handleRandomFill}>Rellenar Aleatoriamente</button>
      <button className="button">Iniciar simulacion</button>
    </div>
  );
}

export default Simulation;
