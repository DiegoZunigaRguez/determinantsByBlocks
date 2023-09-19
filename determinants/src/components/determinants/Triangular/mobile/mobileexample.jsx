import React, { useState } from "react";
import "../../det.css";
import Matrix from "../../../../assets/TriangularMatrix.png";
import Change from "../../../../assets/Cambio_signo.png";
import FColumn from "../../../../assets/PrimeraColumna.png";
import SColumn from "../../../../assets/Segundacolumna.png";
import TColumn from "../../../../assets/TerceraColumna.png";
import Diagonal from "../../../../assets/mobilediagonal.png";

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
        Para este ejemplo definimos el determinante de dimension 4x4 como sigue:
      </p>

      <button
        onClick={() => togglePopup("TriangularMatrix")}
        className="pop-button"
      >
        Mostrar determinante 4x4
      </button>
      {isPopupOpen && selectedPopup === "TriangularMatrix" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={Matrix} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Para poder utilizar este método, debemos de encontrar la triangular
        superior o inferior, para este ejemplo buscaremos la triangular
        superior, para ello al tener un cero en la tercera fila y tercera
        columna, intercambiamos la primera por la tercera fila, como sabemos, el
        determinante cambia de signo si se intercambian dos filas o columnas
        cualesquiera de una matriz.
      </p>

      <button onClick={() => togglePopup("Change")} className="pop-button">
        Mostrar cambio de signo
      </button>
      {isPopupOpen && selectedPopup === "Change" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={Change} alt="" className="formula__imagen__result" />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Multiplicamos la primera fila por −1/2 y la sumamos a la segunda fila,
        de la misma manera multiplicamos la primera fila por −1/2 y la sumamos a
        la tercera fila, de la misma manera multiplicamos la primera fila por
        −1/2 y la sumamos a la cuarta fila.
      </p>

      <button onClick={() => togglePopup("FColumn")} className="pop-button">
        Mostrar columna 1 eliminada
      </button>
      {isPopupOpen && selectedPopup === "FColumn" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={FColumn} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}
      <br />

      <p>
        Multiplicamos la segunda fila por −38 y la sumamos a la tercera fila, de
        la misma manera multiplicamos la primera fila por −9/18 y la sumamos a
        la tercera fila.
      </p>

      <button onClick={() => togglePopup("SColumn")} className="pop-button">
        Mostrar columna 2 eliminada
      </button>
      {isPopupOpen && selectedPopup === "SColumn" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={SColumn} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}
      <br />

      <p>
        Multiplicamos la tercera fila por −16/57 y la sumamos a la cuarta fila.
      </p>

      <button onClick={() => togglePopup("TColumn")} className="pop-button">
        Mostrar columna 3 eliminada
      </button>
      {isPopupOpen && selectedPopup === "TColumn" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={TColumn} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}
      <br />

      <p>
        De esta manera encontramos un determinante diagonal, multiplicando se obtiene:
      </p>

      <button onClick={() => togglePopup("Diagonal")} className="pop-button">
        Mostrar Resultado
      </button>
      {isPopupOpen && selectedPopup === "Diagonal" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={Diagonal} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default mobileexample;
