import React, { useState } from "react";
import "./simulation.css";
import Swal from "sweetalert2";

function Simulation() {
  const [matrixSize, setMatrixSize] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [simulationInProgress, setSimulationInProgress] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [productMatrices, setProductMatrices] = useState([]);
  const [submatrices, setSubmatrices] = useState([]);

  const handleMatrixSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setMatrixSize(newSize);
    const newMatrix = Array.from({ length: newSize }, () =>
      Array(newSize).fill("")
    );
    setMatrix(newMatrix);
    setProductMatrices([]);
    setSubmatrices([]);
    setCurrentStep(0);
  };

  const handleRandomFill = () => {
    const randomMatrix = matrix.map((row) =>
      row.map(() => Math.floor(Math.random() * 10))
    );
    setMatrix(randomMatrix);
  };

  const areAllValuesValid = () => {
    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        const cellValue = matrix[i][j];
        if (cellValue === "" || isNaN(cellValue)) {
          return false;
        }
      }
    }
    return true;
  };

  const generateSubmatrices = () => {
    const submatrices = [];
    for (let i = 0; i < matrixSize - 1; i++) {
      for (let j = 0; j < matrixSize - 1; j++) {
        const submatrix = [
          [matrix[i][j], matrix[i][j + 1]],
          [matrix[i + 1][j], matrix[i + 1][j + 1]],
        ];
        submatrices.push(submatrix);
      }
    }
    return submatrices;
  };

  const calculateDeterminant = (matrix) => {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  };

  const handleSimulationStart = () => {
    if (matrixSize === 0) {
      Swal.fire("Error", "Selecciona una dimensión de matriz válida.", "error");
    } else if (!areAllValuesValid()) {
      Swal.fire(
        "Error",
        "La matriz no es válida. Se deben tener todos los elementos como números enteros.",
        "error"
      );
    } else {
      setSimulationInProgress(true);
      const submatrices = generateSubmatrices();
      const productDeterminants = submatrices.map((submatrix) =>
        calculateDeterminant(submatrix)
      );
      setProductMatrices(productDeterminants);
      setSubmatrices(submatrices);
      setCurrentStep(0);
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderButtons = () => {
    if (matrixSize === 0) {
      return null;
    }

    if (simulationInProgress) {
      return (
        <>
          <div className="button-container">
            {currentStep < productMatrices.length - 1 && (
              <button className="button" onClick={handleNextStep}>
                Siguiente Paso
              </button>
            )}
            <button className="button" onClick={handleSimulationStart}>
              Correr Simulación
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <button className="button" onClick={handleRandomFill}>
          Rellenar Aleatoriamente
        </button>
        <button className="button" onClick={handleSimulationStart}>
          Iniciar Simulación
        </button>
      </>
    );
  };

  const renderProductMatrix = () => {
    if (submatrices.length === 0 || currentStep >= submatrices.length) {
      return null;
    }

    const renderProductDeterminant = (step) => {
      if (matrixSize === 4) {
        switch (step) {
          case 0:
            return (
              <div className="">
                <h3>Primer producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 1:
            return (
              <div className="">
                <h3>Segundo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 2:
            return (
              <div className="">
                <h3>Tercer producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 3:
            return (
              <div className="">
                <h3>Cuarto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 4:
            return (
              <div className="">
                <h3>Quinto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 5:
            return (
              <div className="">
                <h3>Sexto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      } else if (matrixSize === 5) {
        switch (step) {
          case 0:
            return (
              <div className="">
                <h3>Primer producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 1:
            return (
              <div className="">
                <h3>Segundo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 2:
            return (
              <div className="">
                <h3>Tercer producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 3:
            return (
              <div className="">
                <h3>Cuarto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 4:
            return (
              <div className="">
                <h3>Quinto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 5:
            return (
              <div className="">
                <h3>Sexto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 6:
            return (
              <div className="">
                <h3>Septimo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 7:
            return (
              <div className="">
                <h3>Octavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 8:
            return (
              <div className="">
                <h3>Noveno producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 9:
            return (
              <div className="">
                <h3>Decimo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(3, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      } else {
        switch (step) {
          case 0:
            return (
              <div className="">
                <h3>Primer producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 1:
            return (
              <div className="">
                <h3>Segundo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 2:
            return (
              <div className="">
                <h3>Tercer producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 3:
            return (
              <div className="">
                <h3>Cuarto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 4:
            return (
              <div className="">
                <h3>Quinto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 5:
            return (
              <div className="">
                <h3>Sexto producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 6:
            return (
              <div className="">
                <h3>Septimo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 7:
            return (
              <div className="">
                <h3>Octavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 8:
            return (
              <div className="">
                <h3>Noveno producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 1).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(2, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 9:
            return (
              <div className="">
                <h3>Decimo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 10:
            return (
              <div className="">
                <h3>Onceavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 11:
            return (
              <div className="">
                <h3>Doceavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(3, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 12:
            return (
              <div className="">
                <h3>Treceavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(3, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 13:
            return (
              <div className="">
                <h3>Catorceavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(3, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(5, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                      {row.slice(4, 5).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          case 14:
            return (
              <div className="">
                <h3>Quinceavo producto de determinantes</h3>
                <div className="determinant">
                  {matrix.slice(0, 2).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(4, 6).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="determinant">
                  {matrix.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(0, 4).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      }
    };

    const shouldHighlightCell = (rowIndex, columnIndex, step) => {
      // Define aquí la lógica para determinar si la celda debe resaltarse según el paso actual (step)
      // Por ejemplo, puedes resaltar la diagonal en el paso 0 y otras celdas en pasos posteriores.
      // Asegúrate de ajustar esta lógica según tus necesidades.
      if (matrixSize === 4) {
        switch (step) {
          case 0:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 1:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 2:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 3:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 4:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 5:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          default:
            return false; // Por defecto, no se resalta ninguna celda
        }
      } else if (matrixSize === 5) {
        switch (step) {
          case 0:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 1:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 2:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 3:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 4:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 5:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 6:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 7:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 8:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 9:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          default:
            return false; // Por defecto, no se resalta ninguna celda
        }
      } else {
        switch (step) {
          case 0:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
                case 5:
                  switch (columnIndex) {
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight";
                    case 4:
                      return "highlight";
                    case 5:
                      return "highlight";
                    default:
                      return "";
                  }
              default:
                return false;
            }
          case 1:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 2:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 3:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 4:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 5:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 6:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 7:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 8:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5: 
                    return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 9:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 10:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            } 
          case 11:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 2:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                    case 4:
                      return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                    case 4:
                      return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 3:
                    return "highlight";
                    case 4:
                      return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 12:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 5:
                      return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 13:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 3:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 4:
                      return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 4:
                      return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 4:
                      return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 14:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 4:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 3:
                      return "highlight";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 3:
                      return "highlight";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                    case 3:
                      return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          default:
            return false; // Por defecto, no se resalta ninguna celda
        }
      }
    };

    return (
      <div className="">
        <div className="determinant__after">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="matrix-row">
              {row.map((cell, columnIndex) => (
                <div
                  className={`matrix-cell ${
                    shouldHighlightCell(rowIndex, columnIndex, currentStep)
                      ? "highlight" // Aplica la clase de resaltado si se cumple la condición
                      : ""
                  }`}
                  key={columnIndex}
                >
                  <input type="text" value={cell} readOnly />
                </div>
              ))}
            </div>
          ))}
        </div>

        {renderProductDeterminant(currentStep)}
      </div>
    );
    //return renderProductDeterminant(currentStep);
  };

  const autoRunSimulation = () => {
    // Esta función ejecutará automáticamente la simulación paso a paso
    const intervalId = setInterval(() => {
      if (currentStep < productMatrices.length - 1) {
        handleNextStep();
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // Cambia el intervalo según tus necesidades (1000 ms = 1 segundo)
  };

  return (
    <div className="simulation__container" id="simulation">
      <div className="desktop">
        {!simulationInProgress && (
          <div>
            <h1 className="simulation__title">Simulación</h1>
            <p className="simulation__text">
              Aquí tienes la simulación haciendo uso del algoritmo que se te
              presentó anteriormente. Por favor, selecciona la dimensión de la
              matriz y completa los datos. La matriz debe ser de dimensión 4x4 o
              superior.
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
                      type="text"
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
          </div>
        )}
        <div className="product-container">{renderProductMatrix()}</div>
        {renderButtons()}
      </div>
      <div className="mobile">
        <h1 className="simulation__title">Simulación</h1>
        <p className="simulation__text">
          ¡Lo sentimos! La visualización de la simulación en dispositivos
          móviles no está disponible en este momento. Te recomendamos usar una
          computadora para interactuar con esta simulación.
        </p>
      </div>
    </div>
  );
}

export default Simulation;
