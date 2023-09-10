import React, { useState } from "react";
import "./det.css"; // Asegúrate de que el nombre del archivo CSS sea "Det.css" o el que desees

function Det() {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleCard = (cardNumber) => {
    setSelectedCard(cardNumber === selectedCard ? null : cardNumber);
  };

  return (
    <div className="dev__container" id="determinants">
      <h1>Determinantes</h1>
      <p className="dev__text">
        Te mostraremos información acerca de los métodos más comúnes para el
        cálculo de determinantes con algunos ejemplos para que los tengas en
        consideración.
      </p>
      <div className="dev__button-container">
        <button className="dev__button" onClick={() => toggleCard(1)}>Regla de Laplace</button>
        <button className="dev__button" onClick={() => toggleCard(2)}>Regla de Sarrus</button>
        <button className="dev__button" onClick={() => toggleCard(3)}>Matriz Triangular</button>
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
