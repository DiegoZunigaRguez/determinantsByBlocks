import React from "react";
import "../det.css";
import Theory from "./Theory";
import TriangularExample from "./TriangularExample";
import TriangularExpression from "../../../assets/Triangular.png";
import VideoPlayer from "./VideoPlayer";

const Triangular = () => {
  return (
    <div>
      <h2>Matriz Triangular</h2>
      <Theory/>
      <img src={TriangularExpression} alt="" className="formula__imagen__result"/>
      <br />
      <h2>Ejemplo</h2>
      <TriangularExample/>
      <h2>Recursos de consulta</h2>
      <VideoPlayer/>
    </div>
  );
};

export default Triangular;
