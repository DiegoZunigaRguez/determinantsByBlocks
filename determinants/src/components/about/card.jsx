import React from "react";
import "./about.css";
import Info from "./info";

const card = () => {
  return (
    <div className="about__card">
      <div className="about__card-content">
        <h2>Determinantes por bloques</h2>
        <Info />
      </div>
    </div>
  );
};

export default card;
