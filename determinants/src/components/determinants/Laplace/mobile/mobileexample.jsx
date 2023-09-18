import React, { useState } from "react";
import "../../det.css";
import Matrix from "../../../../assets/A4.png";
import M11 from "../../../../assets/M11.png";
import M12 from "../../../../assets/M12.png";
import M13 from "../../../../assets/M13.png";
import M14 from "../../../../assets/M14.png";
import Expansion from "../../../../assets/MExpansion.png";
import M111 from "../../../../assets/M111.png";
import M112 from "../../../../assets/M112.png";
import M113 from "../../../../assets/M113.png";
import M121 from "../../../../assets/M121.png";
import M122 from "../../../../assets/M122.png";
import M123 from "../../../../assets/M123.png";
import M131 from "../../../../assets/M131.png";
import M132 from "../../../../assets/M132.png";
import M133 from "../../../../assets/M133.png";
import M141 from "../../../../assets/M141.png";
import M142 from "../../../../assets/M142.png";
import M143 from "../../../../assets/M143.png";
import Expansion2 from "../../../../assets/MExpansion2.png";
import M22 from "../../../../assets/Matrix2x2.png";
import Resultado from "../../../../assets/Resultado.png";

const Mobileexample = () => {
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
            <img srcSet={Matrix} alt="" className="formula__imagen__easy" />
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
            <img srcSet={M11} alt="" className="formula__imagen" />
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
            <img srcSet={M12} alt="" className="formula__imagen" />
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
            <img srcSet={M13} alt="" className="formula__imagen" />
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
            <img srcSet={M14} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}

      <br />
      <p>
        Una vez hecho esa expansión por separado podemos definirlo como sigue:
      </p>
      <button onClick={() => togglePopup("Mmobile")} className="pop-button">
        Mostrar expansión de matriz
      </button>
      {isPopupOpen && selectedPopup === "Mmobile" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img srcSet={Expansion} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>
        Como se puede observar, el calculo de determinantes aún no se puede
        realizar, por lo que a cada matriz de 3x3 se le tiene que realizar su
        respectiva expansión de laplace.
      </p>
      <p>Para la primera matriz de 3x3, se tiene lo siguiente:</p>
      <button onClick={() => togglePopup("M111")} className="pop-button">
        Mostrar submatriz 2x2
      </button>
      {isPopupOpen && selectedPopup === "M111" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img srcSet={M111} alt="" className="formula__imagen" />
              <img srcSet={M112} alt="" className="formula__imagen" />
              <img srcSet={M113} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>Para la segunda</p>
      <button onClick={() => togglePopup("M121")} className="pop-button">
        Mostrar submatriz 2x2
      </button>
      {isPopupOpen && selectedPopup === "M121" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img srcSet={M121} alt="" className="formula__imagen" />
              <img srcSet={M122} alt="" className="formula__imagen" />
              <img srcSet={M123} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>Para la tercera</p>
      <button onClick={() => togglePopup("M131")} className="pop-button">
        Mostrar submatriz 2x2
      </button>
      {isPopupOpen && selectedPopup === "M131" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img srcSet={M131} alt="" className="formula__imagen" />
              <img srcSet={M132} alt="" className="formula__imagen" />
              <img srcSet={M133} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>Para la cuarta</p>
      <button onClick={() => togglePopup("M141")} className="pop-button">
        Mostrar submatriz 2x2
      </button>
      {isPopupOpen && selectedPopup === "M141" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img srcSet={M141} alt="" className="formula__imagen" />
              <img srcSet={M142} alt="" className="formula__imagen" />
              <img srcSet={M143} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>Una vez hecha esta ultima expansión tenemos lo siguiente:</p>
      <button onClick={() => togglePopup("MExpansion2")} className="pop-button">
        Mostrar expansión de matriz
      </button>
      {isPopupOpen && selectedPopup === "MExpansion2" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img srcSet={Expansion} alt="" className="formula__imagen" />
              <p>
                Haciendo la expansión de los determinantes de 3x3, resulta lo
                siguiente
              </p>
              <img srcSet={Expansion2} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      
      <p>
        <br />
        Ahora podemos realizar el calculo del determinante para cada uno de los
        determinantes, siguiendo el calculo de un determinante 2x2, como se
        muestra a continuación:
      </p>
      <button onClick={() => togglePopup("M2x2")} className="pop-button">
        Mostrar matriz 2x2
      </button>
      {isPopupOpen && selectedPopup === "M2x2" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img srcSet={M22} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <p>
        <br />
        Finalmente el resultado del determinante es el siguiente:
      </p>
      <button onClick={() => togglePopup("Result")} className="pop-button">
        Mostrar resultado
      </button>
      {isPopupOpen && selectedPopup === "Result" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img srcSet={Resultado} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Mobileexample;
