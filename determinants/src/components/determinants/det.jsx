/*import React from "react";
import "./det.css";
import Laplace from "./Laplace";

const det = () => {
  return (
    <section className="section det" id="determinants">
      <h2 className="section__title det__title">Determinantes</h2>
      <div className="message__det">
        <p>
          Te mostraremos información acerca de los métodos más comúnes para el
          cálculo de determinantes con algunos ejemplos para que los tengas en
          consideración.
        </p>
      </div>
      <div className="buttons">
        <button onclick="window.location.href='#Laplace'">Regla de Laplace</button>
        <button onclick="window.location.href='#seccion2'">Regla de Sarrus</button>
        <button onclick="window.location.href='#seccion3'">Matriz Triangular</button>
      </div>
      <Laplace />
    </section>
  );
};

export default det;*/

import React, { useState } from "react";
import "./det.css"; // Asegúrate de que el nombre del archivo CSS sea "Det.css" o el que desees

function Det() {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleCard = (cardNumber) => {
    setSelectedCard(cardNumber === selectedCard ? null : cardNumber);
  };

  return (
    <div className="dev__container">
      <h1>Título</h1>
      <p>Párrafo de contenido.</p>
      <div className="dev__button-container">
        <button onClick={() => toggleCard(1)}>Botón 1</button>
        <button onClick={() => toggleCard(2)}>Botón 2</button>
        <button onClick={() => toggleCard(3)}>Botón 3</button>
      </div>
      <div className={`dev__card ${selectedCard === 1 ? "active" : ""}`}>
        <div className="dev__card-content">
          <h2>Tarjeta 1</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={`dev__card ${selectedCard === 2 ? "active" : ""}`}>
        <div className="dev__card-content">
          <h2>Tarjeta 2</h2>
          <p>
            Contenido de la tarjeta 2. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas tristique justo in ligula fringilla, ac
            dignissim purus vulputate. Sed vel scelerisque velit.
          </p>
        </div>
      </div>
      <div className={`dev__card ${selectedCard === 3 ? "active" : ""}`}>
        <div className="dev__card-content">
          <h2>Tarjeta 3</h2>
          <p>
            Contenido de la tarjeta 3. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas tristique justo in ligula fringilla, ac
            dignissim purus vulputate. Sed vel scelerisque velit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Det;
