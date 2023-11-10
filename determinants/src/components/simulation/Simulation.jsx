import React, { useState, useEffect, useRef } from "react";
import "./simulation.css";
import Swal from "sweetalert2";
//Se agrega el modulo para la matriz de 4x4
import Matrix4 from "./TTAlgorithm/Matrix4";
//Se agrega el modulo para el determinante de 5x5
import Matrix5 from "./TTAlgorithm/Matrix5";
//Se agrega el modulo para el determinante de 6x6
import Matrix6 from "./TTAlgorithm/Matrix6";
//Se agrega el modulo para la calculadora movil
import MobileCalculator from "./TTAlgorithm/mobileCalculator";
//Se agrega el modulo de la explicación
import Explication from "./TTAlgorithm/Explication";
//Se agrega el modulo para laplace 4x4
import Laplace4x4 from "./Laplace/Laplace4x4";
//Se agrega el modulo para laplace 5x5
import Laplace5x5 from "./Laplace/Laplace5x5";
//Se agrega el modulo para la explicación de Laplace
import ExplicationLaplace from "./Laplace/ExplicationLaplace";

function Simulation() {
  const [matrixSize, setMatrixSize] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [simulationInProgress, setSimulationInProgress] = useState(false);
  const [startSimulation, setStartSimulation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const isSimulationRunning = useRef(false);
  const [productMatrices, setProductMatrices] = useState([]);
  const [submatrices, setSubmatrices] = useState([]);
  const [method, setMethod] = useState(0);

  const handleMethodChange = (event) => {
    const selectedMethod = parseInt(event.target.value, 10);
    setMethod(selectedMethod);
  };

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
      if (method === 1) {
        for (let step = currentStep; step < 21; step++) {
          if (!isSimulationRunning.current) {
            // Si la simulación se detiene, salir del bucle
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setCurrentStep(step + 1); // Actualizar el paso actual
        }
      } else {
        for (let step = currentStep; step < 41; step++) {
          if (!isSimulationRunning.current) {
            // Si la simulación se detiene, salir del bucle
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setCurrentStep(step + 1); // Actualizar el paso actual
        }
      }
    } else if (matrixSize === 5) {
      if(method===1){
        for (let step = currentStep; step < 33; step++) {
          if (!isSimulationRunning.current) {
            // Si la simulación se detiene, salir del bucle
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setCurrentStep(step + 1); // Actualizar el paso actual
        }
      }else{
        for (let step = currentStep; step < 150; step++) {
          if (!isSimulationRunning.current) {
            // Si la simulación se detiene, salir del bucle
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setCurrentStep(step + 1); // Actualizar el paso actual
        }
      }
      
    } else {
      for (let step = currentStep; step < 56; step++) {
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
              {matrixSize === 4 ? (
                method === 1 ? (
                  currentStep < 21 ? (
                    !startSimulation ? null : simulationInProgress ? null : (
                      <button className="button" onClick={handleNextStep}>
                        Siguiente Paso
                      </button>
                    )
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 4 ? (
                method === 2 ? (
                  currentStep < 41 ? (
                    !startSimulation ? null : simulationInProgress ? null : (
                      <button className="button" onClick={handleNextStep}>
                        Siguiente Paso
                      </button>
                    )
                  ) : null
                ) : null
              ) : null}
             {matrixSize === 5 ? (
                method === 1 ? (
                  currentStep < 33 ? (
                    !startSimulation ? null : simulationInProgress ? null : (
                      <button className="button" onClick={handleNextStep}>
                        Siguiente Paso
                      </button>
                    )
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 5 ? (
                method === 2 ? (
                  currentStep < 250 ? (
                    !startSimulation ? null : simulationInProgress ? null : (
                      <button className="button" onClick={handleNextStep}>
                        Siguiente Paso
                      </button>
                    )
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 6 ? (
                currentStep < 56 ? (
                  !startSimulation ? null : simulationInProgress ? null : (
                    <button className="button" onClick={handleNextStep}>
                      Siguiente Paso
                    </button>
                  )
                ) : null
              ) : null}
              {matrixSize === 4 ? (
                currentStep ===
                0 ? null : !startSimulation ? null : simulationInProgress ? null : (
                  <button className="button" onClick={handleSimulationPrevious}>
                    Paso Anterior
                  </button>
                )
              ) : null}
              {matrixSize === 5 ? (
                currentStep ===
                0 ? null : !startSimulation ? null : simulationInProgress ? null : (
                  <button className="button" onClick={handleSimulationPrevious}>
                    Paso Anterior
                  </button>
                )
              ) : null}
              {matrixSize === 6 ? (
                currentStep ===
                0 ? null : !startSimulation ? null : simulationInProgress ? null : (
                  <button className="button" onClick={handleSimulationPrevious}>
                    Paso Anterior
                  </button>
                )
              ) : null}
              {simulationInProgress ? (
                <button className="button" onClick={handleStopSimulationClick}>
                  Detener Simulacion
                </button>
              ) : null}
            </div>
            <div className="button-wrapper">
              {matrixSize === 4 ? (
                method === 1 ? (
                  currentStep < 21 ? (
                    !startSimulation ? null : simulationInProgress ? null : (
                      <button
                        className="button"
                        onClick={handleRunSimulationClick}
                      >
                        Correr Simulación
                      </button>
                    )
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 4 ? (
                method === 2 ? (
                  currentStep < 41 ? (
                    !startSimulation ? null : simulationInProgress ? null : (
                      <button
                        className="button"
                        onClick={handleRunSimulationClick}
                      >
                        Correr Simulación
                      </button>
                    )
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 5 ? (
                currentStep < 33 ? (
                  !startSimulation ? null : simulationInProgress ? null : (
                    <button
                      className="button"
                      onClick={handleRunSimulationClick}
                    >
                      Correr Simulación
                    </button>
                  )
                ) : null
              ) : null}
              {matrixSize === 6 ? (
                currentStep < 56 ? (
                  !startSimulation ? null : simulationInProgress ? null : (
                    <button
                      className="button"
                      onClick={handleRunSimulationClick}
                    >
                      Correr Simulación
                    </button>
                  )
                ) : null
              ) : null}
              {matrixSize === 4 ? (
                method === 1 ? (
                  currentStep === 21 ? (
                    <button
                      className="button"
                      onClick={handleSimulationRestart}
                    >
                      Nueva Simulación
                    </button>
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 4 ? (
                method === 2 ? (
                  currentStep === 41 ? (
                    <button
                      className="button"
                      onClick={handleSimulationRestart}
                    >
                      Nueva Simulación
                    </button>
                  ) : null
                ) : null
              ) : null}
              {matrixSize === 5 ? (
                currentStep === 33 ? (
                  <button className="button" onClick={handleSimulationRestart}>
                    Nueva Simulación
                  </button>
                ) : null
              ) : null}
              {matrixSize === 6 ? (
                currentStep === 56 ? (
                  <button className="button" onClick={handleSimulationRestart}>
                    Nueva Simulación
                  </button>
                ) : null
              ) : null}
            </div>
          </div>
        </>
      );
    }
  };

  const renderButtonsCalculator = () => {
    if (matrixSize === 0) {
      return null;
    }
    if (startSimulation) {
      return (
        <>
          <br />
          <button className="button" onClick={handleSimulationRestart}>
            Nuevo Calculo
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="button" onClick={handleRandomFill}>
            Rellenar Aleatoriamente
          </button>
          <button className="button" onClick={handleSimulationStart}>
            Calcular
          </button>
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
          case 5:
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
          case 6:
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
          case 7:
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
          case 8:
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
          case 9:
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
          case 10:
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
          case 11:
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
          case 12:
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
          case 13:
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
          case 14:
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
          case 15:
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

    const Explication_Step = (step) => {
      return <Explication parametro1={matrixSize} parametro2={step} />;
    };

    return (
      <div className="">
        <div className="explication">
          {Explication_Step(currentStep)}
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

  const renderLaplace = () => {
    const renderDeterminant = (step) => {
      if (matrixSize === 4) {
        return (
          <>
            <Laplace4x4 parametro1={matrix} parametro2={step} />
          </>
        );
      } else {
        return(
          <>
            <Laplace5x5 parametro1={matrix} parametro2={step} />
          </>
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
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  case 2:
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
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
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
                    return "highlight";
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
          case 2:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
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
                    return "highlight";
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
          case 3:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__laplace";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
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
                    return "highlight";
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
                    return "highlight";
                  case 3:
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
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__laplace";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
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
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight";
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
                    return "highlight";
                  default:
                    return "";
                }
              default:
                return false;
            }
          default:
            break;
        }
      } else if (matrixSize === 5) {
        switch (step) {
          case 1:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
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
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down"
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down"
                  default:
                    return "";
                }
                case 4:
                  switch (columnIndex) {
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
                    case 4:
                      return "highlight__down"
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
                  case 1:
                    return "highlight__laplace";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
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
                  case 1:
                    return "highlight";
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
                    case 1:
                      return "highlight";
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
          case 3:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__laplace";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  case 4:
                    return "highlight__down";
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
                    return "highlight";
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
                  case 2:
                    return "highlight";
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
                    case 2:
                      return "highlight";
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
          case 4:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__laplace";
                  case 4:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight";
                  case 4:
                    return "highlight__down";
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
                    return "highlight";
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
                  case 3:
                    return "highlight";
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
                    case 3:
                      return "highlight";
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
                    case 0:
                      return "highlight";
                    case 1:
                      return "highlight";
                    case 2:
                      return "highlight";
                    case 3:
                      return "highlight";
                    case 4:
                      return "highlight__laplace"
                    default:
                      return "";
                  }
                case 1:
                  switch (columnIndex) {
                    case 0:
                      return "highlight__down";
                    case 1:
                      return "highlight__down";
                    case 2:
                      return "highlight__down";
                    case 3:
                      return "highlight__down";
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
                    case 3:
                      return "highlight__down";
                    case 4:
                      return "highlight";
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
                    case 4:
                      return "highlight";
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
                      case 4:
                        return "highlight";
                      default:
                        return "";
                    }
                default:
                  return false;
              }
          default:
            break;
        }
      }
    };

    const Explication_Step = (step) => {
      return <ExplicationLaplace parametro1={matrixSize} parametro2={step} />;
    };

    return (
      <div className="">
        <div className="explication">
          {Explication_Step(currentStep)}
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
                        : shouldHighlightCell(
                            rowIndex,
                            columnIndex,
                            currentStep
                          ) === "highlight__laplace"
                        ? "highlight__laplace"
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

        {renderDeterminant(currentStep)}
      </div>
    );
  };

  const renderProduct = () => {
    const Result = () => {
      return (
        <div>
          <MobileCalculator parametro1={matrix} parametro2={matrixSize} />
        </div>
      );
    };

    return (
      <div className="mobile__after">
        <div className="determinant">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="matrix-row">
              {row.map((cell) => (
                <input type="text" value={cell} readOnly />
              ))}
            </div>
          ))}
        </div>
        {Result()}
        {renderButtonsCalculator()}
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
              presentó anteriormente. Por favor, selecciona el método, la dimensión de la
              matriz y completa los datos. La matriz debe ser de dimensión 4x4 o
              superior.
            </p>
            <select
              className="simulation__options"
              value={method}
              onChange={handleMethodChange}
            >
              <option value={0} defaultChecked>
                Selecciona
              </option>
              <option value={1}>Algoritmo TT</option>
              <option value={2}>Expansion de Laplace</option>
            </select>
            {method === 1 && (
              <>
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
                {matrixSize !== 0 && (
                  <>
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
                                updatedMatrix[rowIndex][columnIndex] =
                                  e.target.value;
                                setMatrix(updatedMatrix);
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    <br />
                    {renderButtons()}
                  </>
                )}
              </>
            )}
            {method === 2 ? (
              matrixSize > 5 ? (
                setMatrixSize(0)
              ) : (
                <>
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
                  </select>
                  <br />
                  <br />
                  {matrixSize !== 0 && (
                    <>
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
                                  updatedMatrix[rowIndex][columnIndex] =
                                    e.target.value;
                                  setMatrix(updatedMatrix);
                                }}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                      <br />
                      {renderButtons()}
                    </>
                  )}
                </>
              )
            ) : null}
          </div>
        )}
        {method === 1
          ? startSimulation && (
              <div>
                <div className="product-container">{renderProductMatrix()}</div>
              </div>
            )
          : startSimulation && (
              <div>
                <div className="product-container">{renderLaplace()}</div>
              </div>
            )}
      </div>
      <div className="mobile">
        {!startSimulation && (
          <div>
            <h1 className="simulation__title">Simulación</h1>
            <p className="simulation__text">
              Aquí tienes una calculadora de determinantes, tienes la opción de
              elegir desde un determinante de 4x4 hasta un determinante de 7x7,
              en este caso únicamente se visualizará el resultado del
              determinante, si quieres ver el proceso del calculo, puedes
              consultar desde una tablet o computadora.
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
              <option value={7}>Matriz 7x7</option>
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
            {renderButtonsCalculator()}
          </div>
        )}
        {startSimulation && (
          <div>
            <div className="product-container">{renderProduct()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Simulation;
