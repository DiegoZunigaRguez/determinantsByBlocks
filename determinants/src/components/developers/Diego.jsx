import React from "react";
import "./dev.css";
import DiegoPhoto from "../../assets/Diego.jpg";

const Diego = () => {
  return (
    <div className="card">
      <div className="circle">
        <img srcSet={DiegoPhoto} alt="" className="circle__imagen" />
      </div>
      <h2>Diego Zúñiga Rodríguez</h2>
      <ul className="info-list">
        <li>
          <b>Carrera:</b> Ingeniería en sistemas computacionales
        </li>
      </ul>
    </div>
  );
};

export default Diego;
