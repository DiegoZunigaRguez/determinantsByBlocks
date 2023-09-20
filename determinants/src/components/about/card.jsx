import React from "react";
import "./about.css";
import Info from "./info";
import Example from "./example";

const card = () => {
  return (
    <div>
      <div className="desktop">
        <div className="about__card">
          <div className="about__card-content">
            <h2>Determinantes por bloques</h2>
            <Info />
            <h2>Ejemplo</h2>
            <br />
            <Example />
          </div>
        </div>
      </div>
      <div className="mobile">
        
      </div>
    </div>
  );
};

export default card;
