import React from "react";
import Expansion from "../../../../assets/expansion.png";
import "../../det.css";

const mobileexpansion = () => {
  return (
    <div>
      <img srcSet={Expansion} alt="" className="formula__imagen" />
    </div>
  );
};

export default mobileexpansion;
