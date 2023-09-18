import React, { useState } from "react";
import MatrixExample from "../mobile/mobilematrix5";
import Mobilesubmatrix1 from "../mobile/mobilesubmatrix1";
import Mobilesubmatrix2 from "../mobile/mobilesubmatrix2";
import Mobilesubmatrix3 from "../mobile/mobilesubmatrix3";
import Mobilesubmatrix4 from "../mobile/mobilesubmatrix4";
import "../../det.css";

const mobileexample = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  const togglePopup = (popup) => {
    setIsPopupOpen(!isPopupOpen);
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h2>Ejemplo</h2>
      <p>
        Primero, definimos una matriz de dimensión 4x4 como se muestra a
        continuación:
      </p>

      <button onClick={() => togglePopup("matrix4x4")} className="pop-button">
        Mostrar matriz 4x4
      </button>
      {isPopupOpen && selectedPopup === "matrix4x4" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <MatrixExample />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Posterior a ello, generamos las submatrices siguiendo la expresión
        anterior: <br />
        Para la primera submatriz, tomamos la primera posición es decir el valor
        "1", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>

      <button onClick={() => togglePopup("M11")} className="pop-button">
        Mostrar submatriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "M11" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <Mobilesubmatrix1 />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Para la segunda submatriz, tomamos la primera posición es decir el valor
        "2", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>

      <button onClick={() => togglePopup("M12")} className="pop-button">
        Mostrar submatriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "M12" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <Mobilesubmatrix2 />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Para la tercera submatriz, tomamos la primera posición es decir el valor
        "3", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>

      <button onClick={() => togglePopup("M13")} className="pop-button">
        Mostrar submatriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "M13" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <Mobilesubmatrix3 />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Para la cuarta submatriz, tomamos la primera posición es decir el valor
        "4", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>

      <button onClick={() => togglePopup("M14")} className="pop-button">
        Mostrar submatriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "M14" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <Mobilesubmatrix4 />
            </div>
          </div>
        </>
      )}

      <br />
      <p>
        Una vez hecho esa expansión por separado podemos definirlo como sigue:
      </p>
      <br />
      <p>
        Como se puede observar, el calculo de determinantes aún no se puede
        realizar, por lo que a cada matriz de 3x3 se le tiene que realizar su
        respectiva expansión de laplace.
      </p>
      <p>Para la primera matriz de 3x3, se tiene lo siguiente:</p>

      <br />
      <p>Para la segunda</p>

      <br />
      <p>Para la tercera</p>

      <br />
      <p>Para la cuarta</p>

      <br />
      <p>
        Ahora podemos realizar el calculo del determinante para cada uno de los
        determinantes, siguiendo el calculo de un determinante 2x2, como se
        muestra a continuación:
      </p>
    </div>
  );
};

export default mobileexample;
