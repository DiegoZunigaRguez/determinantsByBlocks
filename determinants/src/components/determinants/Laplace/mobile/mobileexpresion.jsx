import React from "react";
import Expresion from "../../../../assets/expresion.png";
import "../../det.css";

const mobileexpresion = () => {
  return (
    <div>
      <img srcSet={Expresion} alt="" className="formula__imagen" />
    </div>
  );
};

export default mobileexpresion;
