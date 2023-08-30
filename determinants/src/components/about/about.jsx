import React from "react";
import "./about.css";
import Document from '../../assets/Determinantes2x2.pdf';
import Info from "./info";

const about = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__title">Acerca del proyecto</h1>
      <p className="about__text">Primer párrafo de contenido.</p>
      <button>Botón</button>
      <p className="about__text">Segundo párrafo de contenido.</p>
    </div>
    /*<section className="section about" id="about">
      <h2 className="section__title det__title">Acerca del proyecto</h2>
      <div className="message__about">
        <p>
          A continuación, se presentará el modelo matemático con el cual esta
          maravillosa aplicación funciona.
        </p>
        <br/>
        <p>De igual manera te dejamos el PDF para que puedas leer este trabajo: </p>
        <button className="button__download"><a href={Document} download={''}>Descargar Documento</a></button>
        <Info/>
      </div>
    </section>*/
  );
};

export default about;
