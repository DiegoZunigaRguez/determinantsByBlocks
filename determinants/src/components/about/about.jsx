import React from "react";
import "./about.css";
import Document from '../../assets/Determinantes2x2.pdf';
//import Info from "./info";

const about = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__title">Acerca del proyecto</h1>
      <p className="about__advice">A continuación, se presentará el modelo matemático con el cual esta
          maravillosa aplicación funciona. <br />De igual manera te dejamos el PDF para que puedas leer este trabajo: </p>
      <button className="button button--flex__about"><a href={Document} download={''}>Descargar Documento</a></button>
      <p className="about__text">Segundo párrafo de contenido.</p>
    </div>
  );
};

export default about;
