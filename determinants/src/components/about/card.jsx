import React, { useState } from "react";
import "./about.css";
import Info from "./info";
import Example from "./example";
import Mobileexample from "./mobile/mobileexample";
import TTExpression from "../../assets/TTExpresion.png";

const Card = () => {
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
      <div className="desktop">
        <div className="about__card">
          <div className="about__card-content">
            <h2>Determinantes por bloques</h2>
            <Info />
            <img src={TTExpression} alt="" className="formula__imagen" />
            <h2>Ejemplo</h2>
            <br />
            <Example />
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="about__card">
          <div className="about__card-content">
            <h2>Determinantes por bloques</h2>
            <Info />
            <button onClick={() => togglePopup("TT")} className="pop-button">
              Mostrar algoritmo
            </button>
            {isPopupOpen && selectedPopup === "TT" && (
              <>
                <div className="overlay" onClick={closePopup}></div>
                <div className="popup">
                  <button onClick={closePopup}>X</button>
                  <div className="popup-content">
                    <img
                      src={TTExpression}
                      alt=""
                      className="formula__imagen__easy"
                    />
                  </div>
                </div>
              </>
            )}
            <br />
            <h2>Ejemplo</h2>
            <Mobileexample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
