import React, { useState } from "react";
import "../../det.css";
import SarrusMatrix from "../../../../assets/Sarrus3x3.png";
import SarrusExpansion from "../../../../assets/Sarrus3.png";
import SarrusResult from "../../../../assets/Sarrusresultado.png";

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
        Primero definimos la matriz de dimension 3x3 que utilizaremos la
        siguiente:
      </p>

      <button
        onClick={() => togglePopup("Sarrusmatrix3x3")}
        className="pop-button"
      >
        Mostrar matriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "Sarrusmatrix3x3" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img
                src={SarrusMatrix}
                alt=""
                className="formula__imagen__easy"
              />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Como podemos ver en la definición podemos expander hacia abajo o a la
        derecha el determinante, en este caso, procederemos a hacer la expansión
        hacia abajo, una vez hecha esa expansión podemos proceder a hacer la
        multiplicación como esta en la siguiente imagen:
      </p>

      <button
        onClick={() => togglePopup("SarrusExpansion")}
        className="pop-button"
      >
        Mostrar expansion
      </button>
      {isPopupOpen && selectedPopup === "SarrusExpansion" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
              <img src={SarrusExpansion} alt="" className="Sarrus__image" />
            </div>
          </div>
        </>
      )}

      <br />

      <p>
        Finalmente, realizando las multiplicaciones para obtener el resultado,
        como podemos ver a continuación:
      </p>

      <button onClick={() => togglePopup("SarrusResult")} className="pop-button">
        Mostrar resultado
      </button>
      {isPopupOpen && selectedPopup === "SarrusResult" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={SarrusResult} alt="" className="Sarrus__image" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default mobileexample;
