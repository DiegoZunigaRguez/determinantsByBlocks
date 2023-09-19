import React, { useState } from "react";
import Theory from "../Theory";
import Triangular from "../../../../assets/Triangular.png";
import "../../det.css";

const Definition = () => {
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
      <h2>Matriz Triangular</h2>
      <Theory />
      <button onClick={() => togglePopup("Triangular")} className="pop-button">
        Mostrar matriz 3x3
      </button>
      {isPopupOpen && selectedPopup === "Triangular" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img srcSet={Triangular} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Definition;
