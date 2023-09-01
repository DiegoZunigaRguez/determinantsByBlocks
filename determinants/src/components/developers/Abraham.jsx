import React from "react";
import "./dev.css";
import AbrahamPhoto from "../../assets/Abraham.jpg";

const Abraham = () => {
  return (
    <div className="card">
      <div className="circle">
        <img srcSet={AbrahamPhoto} alt="" className="circle__imagen" />
      </div>
      <h2>Abraham Hernández Alvarado</h2>
      <ul className="info-list">
        <li>
          <b>Carrera:</b> Ingeniería en sistemas computacionales
        </li>
      </ul>
    </div>
  );
};

export default Abraham;
