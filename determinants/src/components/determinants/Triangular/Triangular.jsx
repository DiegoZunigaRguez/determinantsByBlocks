import React from "react";
import "../det.css";
import Theory from "./Theory";
import VideoPlayer from "./VideoPlayer";

const Triangular = () => {
  return (
    <div>
      <h2>Matriz Triangular</h2>
      <Theory/>
      <br />
      <h2>Ejemplo</h2>
      <h2>Recursos de consulta</h2>
      <VideoPlayer/>
    </div>
  );
};

export default Triangular;