import React, { useState, useEffect, useRef } from "react";
import "./simulation.css";
import Swal from "sweetalert2";
//Se agrega el modulo para la matriz de 4x4
import Matrix4 from "./Matrix4";
//Se agrega el modulo para el determinante de 5x5
import Matrix5 from "./Matrix5";
//Se agrega el modulo para el determinante de 6x6
import Matrix6 from "./Matrix6";
import Combinatoria from "../../assets/Productos.png";
import Expression from "../../assets/TTExp.png";
import Sarrus from "../../assets/Sarrus.png";
//Se declaran las imagenes para la explicación de las matrices 4x4
import firstSum4x4 from "../../assets/firstSum4x4.png";
import secondSum4x4 from "../../assets/secondSum4x4.png";
import thirdSum4x4 from "../../assets/thirdSum4x4.png";
import fourthSum4x4 from "../../assets/fourthSum4x4.png";
import fifthSum4x4 from "../../assets/fifthSum4x4.png";
import sixthSum4x4 from "../../assets/sixthSum4x4.png";
import Det2x2 from "../../assets/defDet2x2.png";
//Se declaran las imagenes para la explicación de las matrices 5x5
import Productos5x5 from "../../assets/productos5x5.png";
import firstSum5x5 from "../../assets/firstSum5x5.png";
import secondSum5x5 from "../../assets/secondSum5x5.png";
import thirdSum5x5 from "../../assets/thirdSum5x5.png";
import fourthSum5x5 from "../../assets/fourthSum5x5.png";
import fifthSum5x5 from "../../assets/fifthSum5x5.png";
import sixthSum5x5 from "../../assets/sixthSum5x5.png";
import seventhSum5x5 from "../../assets/seventhSum5x5.png";
import eightSum5x5 from "../../assets/eighthSum5x5.png";
import ninthSum5x5 from "../../assets/ninthSum5x5.png";
import tenthSum5x5 from "../../assets/tenthSum5x5.png";

function Simulation() {
  const [matrixSize, setMatrixSize] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [simulationInProgress, setSimulationInProgress] = useState(false);
  const [startSimulation, setStartSimulation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const isSimulationRunning = useRef(false);
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
      row.map(() => Math.floor(Math.random() * 21) - 10)
    );
    setMatrix(randomMatrix);
  };

  const areAllValuesValid = () => {
    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        const cellValue = matrix[i][j];
        if (cellValue === "") {
          return 0;
        } else if (isNaN(cellValue)) {
          return 1;
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

  const handleSimulationRestart = () => {
    setStartSimulation(false); // Detiene la simulación si está en progreso
    setCurrentStep(0); // Restablece el paso actual a 0
    setSimulationInProgress(false);
  };

  const handleSimulationPrevious = () => {
    setCurrentStep(currentStep - 1); // Restablece el paso actual a 0
  };

  const handleSimulationStart = () => {
    if (matrixSize === 0) {
      Swal.fire("Error", "Selecciona una dimensión de matriz válida.", "error");
    } else if (areAllValuesValid() === 0) {
      Swal.fire(
        "Error",
        "La matriz no es válida. Se deben tener todos los datos dentro de la matriz.",
        "error"
      );
    } else if (areAllValuesValid() === 1) {
      Swal.fire(
        "Error",
        "La matriz no es válida. La matriz debe contener solo numeros enteros.",
        "error"
      );
    } else {
      setStartSimulation(true);
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

  const autoRunSimulation = async () => {
    if (matrixSize === 4) {
      for (let step = currentStep; step < 21; step++) {
        if (!isSimulationRunning.current) {
          // Si la simulación se detiene, salir del bucle
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCurrentStep(step + 1); // Actualizar el paso actual
      }
    } else if (matrixSize === 5) {
      for (let step = currentStep; step < 33; step++) {
        if (!isSimulationRunning.current) {
          // Si la simulación se detiene, salir del bucle
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCurrentStep(step + 1); // Actualizar el paso actual
      }
    }
    setSimulationInProgress(false);
    isSimulationRunning.current = false;
  };

  useEffect(() => {
    if (simulationInProgress) {
      isSimulationRunning.current = true;
      autoRunSimulation();
    } else {
      isSimulationRunning.current = false;
    }

    return () => {
      // Detener la simulación cuando el componente se desmonta
      isSimulationRunning.current = false;
    };
  }, [simulationInProgress, currentStep]);
  // Este efecto se ejecutará cuando simulationInProgress cambie

  const handleRunSimulationClick = () => {
    // Cuando haces clic en "Correr Simulación", establece simulationInProgress en true
    setSimulationInProgress(true);
  };

  const handleStopSimulationClick = () => {
    // Cuando haces clic en "Detener Simulación", establece simulationInProgress en false
    setSimulationInProgress(false);
  };

  const renderButtons = () => {
    if (matrixSize === 0) {
      return null;
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

  const renderButtonsSimulation = () => {
    if (startSimulation) {
      return (
        <>
          <div className="button-container">
            <div className="button-wrapper">
              {!startSimulation ? null : simulationInProgress ? null : (
                <button className="button" onClick={handleSimulationPrevious}>
                  Paso Anterior
                </button>
              )}
              {!startSimulation ? null : simulationInProgress ? null : (
                <button className="button" onClick={handleNextStep}>
                  Siguiente Paso
                </button>
              )}
              {simulationInProgress ? (
                <button className="button" onClick={handleStopSimulationClick}>
                  Detener Simulacion
                </button>
              ) : null}
            </div>
            <div className="button-wrapper">
              <button className="button" onClick={handleRunSimulationClick}>
                Correr Simulación
              </button>
              <button className="button" onClick={handleSimulationRestart}>
                Nueva Simulación
              </button>
            </div>
          </div>
        </>
      );
    }
  };

  const renderProductMatrix = () => {
    // Calcula los determinantes para ambas matrices
    const renderProductDeterminant = (step) => {
      if (matrixSize === 4) {
        return (
          <div>
            <Matrix4 parametro1={matrix} parametro2={step} />
          </div>
        );
      } else if (matrixSize === 5) {
        return (
          <div>
            <Matrix5 parametro1={matrix} parametro2={step} />
          </div>
        );
      } else {
        return (
          <div>
            <Matrix6 parametro1={matrix} parametro2={step} />
          </div>
        );
      }
    };

    const shouldHighlightCell = (rowIndex, columnIndex, step) => {
      if (matrixSize === 4) {
        switch (step) {
          case 1:
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
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
          case 1:
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                  case 0:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                  case 1:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 1:
                    return "highlight";
                  case 5:
                    return "highlight";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 5:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 4:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 5:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
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

    const Explication = (step) => {
      if (matrixSize === 4) {
        switch (step) {
          case 0:
            return (
              <div className="explication__step">
                Como primer paso, se deben obtener los productos de
                determinantes, para una matriz de dimension 4x4 se deben
                calcular 6 productos, siguiendo la siguiente formula:
                <br />
                <img src={Combinatoria} alt="" className="formula" />
                <br />
                <p>
                  Ahora, para determinar los signos se hara mediante la siguente
                  expresión:{" "}
                </p>
                <img src={Expression} alt="" className="formula2" />
              </div>
            );
          case 1:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={firstSum4x4} alt="" className="formula2" />
                <p>Ahora tomando el primer termino de la sumatoria.</p>
              </div>
            );
          case 2:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={secondSum4x4} alt="" className="formula2" />
                <p>Ahora tomando el segundo termino de la sumatoria.</p>
              </div>
            );
          case 3:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={thirdSum4x4} alt="" className="formula2" />
                <p>Ahora tomando el tercer termino de la sumatoria.</p>
              </div>
            );
          case 4:
            return (
              <div className="explication__step">
                <p>
                  Para la segunda sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={fourthSum4x4} alt="" className="formula2" />
                <p>Ahora tomando el primer termino de la sumatoria.</p>
              </div>
            );
          case 5:
            return (
              <div className="explication__step">
                <p>
                  Para la segunda sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={fifthSum4x4} alt="" className="formula2" />
                <p>Ahora tomando el segundo termino de la sumatoria.</p>
              </div>
            );
          case 6:
            return (
              <div className="explication__step">
                <p>
                  Finalmente, para el ultimo termino, unicamente se debe
                  sustituir los valores donde n=4, ya que la dimension de la
                  matriz es de 4x4.
                </p>
                <img src={sixthSum4x4} alt="" className="formula2" />
              </div>
            );
          case 7:
            return (
              <div className="explication__step">
                <p>
                  Ahora, se tiene toda la expansion de productos de
                  determinantes 2x2, como se puede observar, se tienen los 6
                  productos, si no recuerdas como se calculo, puedes regresar al
                  inicio de la simulación.
                </p>
                <p>
                  Como siguiente paso, procederemos a calcular el primer
                  producto de determinantes mediante la siguiente definicion:
                </p>
                <img src={Det2x2} alt="" className="formula" />
              </div>
            );
          case 8:
            return (
              <div className="explication__step">
                <p>
                  Procederemos a calcular el segundo producto de determinantes
                  mediante la siguiente definicion:
                </p>
                <br />
                <img src={Det2x2} alt="" className="formula" />
              </div>
            );
          case 9:
            return (
              <div className="explication__step">
                <p>
                  Procederemos a calcular el tercer producto de determinantes
                  mediante la siguiente definicion:
                </p>
                <br />
                <img src={Det2x2} alt="" className="formula" />
              </div>
            );
          case 10:
            return (
              <div className="explication__step">
                <p>
                  Procederemos a calcular el cuarto producto de determinantes
                  mediante la siguiente definicion:
                </p>
                <br />
                <img src={Det2x2} alt="" className="formula" />
              </div>
            );
          case 11:
            return (
              <div className="explication__step">
                <p>
                  Procederemos a calcular el quinto producto de determinantes
                  mediante la siguiente definicion:
                </p>
                <br />
                <img src={Det2x2} alt="" className="formula" />
              </div>
            );
          case 12:
            return (
              <div className="explication__step">
                <p>
                  Procederemos a calcular el sexto producto de determinantes
                  mediante la siguiente definicion:
                </p>
                <br />
                <img src={Det2x2} alt="" className="formula" />
              </div>
            );
          case 13:
            return (
              <div className="explication__step">
                <p>
                  Una vez realizados todos los determinantes, se realizan las
                  multiplicaciones dentro de cada parentesis. En este caso se
                  procede con el primer parentesis.
                </p>
              </div>
            );
          case 14:
            return (
              <div className="explication__step">
                <p>Se procede con el segundo parentesis.</p>
              </div>
            );
          case 15:
            return (
              <div className="explication__step">
                <p>Se procede con el tercer parentesis.</p>
              </div>
            );
          case 16:
            return (
              <div className="explication__step">
                <p>Se procede con el cuarto parentesis.</p>
              </div>
            );
          case 17:
            return (
              <div className="explication__step">
                <p>Se procede con el quinto parentesis.</p>
              </div>
            );
          case 18:
            return (
              <div className="explication__step">
                <p>Se procede con el sexto parentesis y ultimo parentesis.</p>
              </div>
            );
          case 19:
            return (
              <div className="explication__step">
                <p>
                  Una vez hecho esto, se hace la multiplicacion de signos para
                  sumar los resultados.
                </p>
              </div>
            );
          case 20:
            return (
              <div className="explication__step">
                <p>
                  Ahora, sumamos los resultados de los productos para obtener
                  los resultados.
                </p>
              </div>
            );
          case 21:
            return (
              <div className="explication__step">
                <p>
                  Finalmente,puedes ver el resultado del determinante que
                  colocaste, puedes comprobar el resultado en la calculadora de
                  tu preferencia.
                </p>
                <br />
                <p>
                  Si quieres ingresar un nuevo determinante, puedes dar click en
                  el boton "Nueva simulación".
                </p>
              </div>
            );
          default:
            return false;
        }
      } else if (matrixSize === 5) {
        switch (step) {
          case 0:
            return (
              <div className="explication__step">
                Como primer paso, se deben obtener los productos de
                determinantes, para una matriz de dimension 5x5 se deben
                calcular 10 productos, siguiendo la siguiente formula:
                <br />
                <img src={Productos5x5} alt="" className="formula" />
                <br />
                <p>
                  Ahora, para determinar los signos se hara mediante la siguente
                  expresión:{" "}
                </p>
                <img src={Expression} alt="" className="formula2" />
              </div>
            );
          case 1:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={firstSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el primer termino de la sumatoria.</p>
              </div>
            );
          case 2:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={secondSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el segundo termino de la sumatoria.</p>
              </div>
            );
          case 3:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={thirdSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el tercer termino de la sumatoria.</p>
              </div>
            );
          case 4:
            return (
              <div className="explication__step">
                <p>
                  Para la primera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={fourthSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el cuarto termino de la sumatoria.</p>
              </div>
            );
          case 5:
            return (
              <div className="explication__step">
                <p>
                  Para la segunda sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={fifthSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el primer termino de la sumatoria.</p>
              </div>
            );
          case 6:
            return (
              <div className="explication__step">
                <p>
                  Para la segunda sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={sixthSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el segundo termino de la sumatoria.</p>
              </div>
            );
          case 7:
            return (
              <div className="explication__step">
                <p>
                  Para la segunda sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={seventhSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el tercer termino de la sumatoria.</p>
              </div>
            );
          case 8:
            return (
              <div className="explication__step">
                <p>
                  Para la tercera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={eightSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el primer termino de la sumatoria.</p>
              </div>
            );
          case 9:
            return (
              <div className="explication__step">
                <p>
                  Para la tercera sumatoria, se tiene lo siguiente, es decir
                  para determinar los signos de los productos:
                </p>
                <img src={ninthSum5x5} alt="" className="formula2" />
                <p>Ahora tomando el segundo termino de la sumatoria.</p>
              </div>
            );
          case 10:
            return (
              <div className="explication__step">
                <p>
                  Finalmente, para el ultimo termino, unicamente se debe
                  sustituir los valores donde n=5, ya que la dimension de la
                  matriz es de 5x5.
                </p>
                <img src={tenthSum5x5} alt="" className="formula2" />
              </div>
            );
          case 11:
            return (
              <div className="explication__step">
                <p>
                  Ahora, se tiene toda la expansion de productos de
                  determinantes 2x2, como se puede observar, se tienen los 10
                  productos, si no recuerdas como se calculo, puedes regresar al
                  inicio de la simulación.
                </p>
                <br />
                <p>
                  Como se puede observar tenemos productos de determinantes 2x2
                  por determinantes de dimensión 3x3, por lo que para los
                  determinantes 3x3 se hará uso de la regla de Sarrus para
                  obtener el valor.
                </p>
              </div>
            );
          case 12:
            return (
              <div className="explication__step">
                <p>
                  Calculando el primer producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 13:
            return (
              <div className="explication__step">
                <p>
                  Calculando el segundo producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 14:
            return (
              <div className="explication__step">
                <p>
                  Calculando el tercer producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 15:
            return (
              <div className="explication__step">
                <p>
                  Calculando el cuarto producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 16:
            return (
              <div className="explication__step">
                <p>
                  Calculando el quinta producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 17:
            return (
              <div className="explication__step">
                <p>
                  Calculando el sexto producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 18:
            return (
              <div className="explication__step">
                <p>
                  Calculando el septimo producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 19:
            return (
              <div className="explication__step">
                <p>
                  Calculando el octavo producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 20:
            return (
              <div className="explication__step">
                <p>
                  Calculando el noveno producto de determinantes, primero se
                  calcula el determinante 2x2, posterior, usando el metodo de
                  Sarrus se obtiene el determinante de 3x3.
                </p>
                <img src={Det2x2} alt="" className="formula" />
                <img src={Sarrus} alt="" className="formula" />
              </div>
            );
          case 21:
            return (
              <div className="explication__step">
                <p>
                  Una vez realizando estos calculos de determinantes, procedemos
                  a hacer la multiplicacion interna.
                </p>
              </div>
            );
          case 31:
            return (
              <div className="explication__step">
                <p>
                  Ya que se multiplicaron los resultados de los determinantes,
                  procedemos a realizar la multiplicacion de signos, entre los
                  que estan dentro y fuera de los parentesis.
                </p>
              </div>
            );
          case 32:
            return (
              <div className="explication__step">
                <p>
                  Una vez obtenidos los signos, procedemos a sumar los
                  resultados.
                </p>
              </div>
            );
          case 33:
            return (
              <div className="explication__step">
                <p>
                  Finalmente,puedes ver el resultado del determinante que
                  colocaste, puedes comprobar el resultado en la calculadora de
                  tu preferencia.
                </p>
                <br />
                <p>
                  Si quieres ingresar un nuevo determinante, puedes dar click en
                  el boton "Nueva simulación".
                </p>
              </div>
            );
          default:
            return false;
        }
      } else {
      }
    };

    return (
      <div className="">
        <div className="explication">
          {Explication(currentStep)}
          <div className="determinant__after">
            {matrix.map((row, rowIndex) => (
              <div key={rowIndex} className="matrix-row">
                {row.map((cell, columnIndex) => (
                  <div
                    className={`matrix-cell ${
                      shouldHighlightCell(
                        rowIndex,
                        columnIndex,
                        currentStep
                      ) === "highlight"
                        ? "highlight"
                        : shouldHighlightCell(
                            rowIndex,
                            columnIndex,
                            currentStep
                          ) === "highlight__down"
                        ? "highlight__down"
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

          {renderButtonsSimulation()}
        </div>

        {renderProductDeterminant(currentStep)}
      </div>
    );
  };

  return (
    <div className="simulation__container" id="simulation">
      <div className="desktop">
        {!startSimulation && (
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
            <br />
            {renderButtons()}
          </div>
        )}
        {startSimulation && (
          <div>
            <div className="product-container">{renderProductMatrix()}</div>
          </div>
        )}
      </div>
      <div className="mobile">
        {!startSimulation && (
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
            <br />
            {renderButtons()}
          </div>
        )}
        {startSimulation && (
          <div>
            <div className="product-container">{renderProductMatrix()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Simulation;
