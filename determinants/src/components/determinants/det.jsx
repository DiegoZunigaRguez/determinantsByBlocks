import React, { useState } from "react";
import "./det.css";
import Laplace from "./Laplace/Laplace";
import Sarrus from "./Sarrus/Sarrus";
import Triangular from "./Triangular/Triangular";

function Det() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  const toggleCard = (cardNumber) => {
    setSelectedCard(cardNumber === selectedCard ? null : cardNumber);
    setSelectedGame(null); // Limpiar la selección de juegos al cambiar de tarjeta
  };

  const toggleGameCard = (game) => {
    setSelectedGame(game === selectedGame ? null : game);
  };

  return (
    <div className="dev__container" id="determinants">
      <h1>Determinantes</h1>
      <p className="dev__text">
        Te mostraremos información acerca de los métodos más comunes para el
        cálculo de determinantes con algunos ejemplos para que los tengas en
        consideración.
      </p>
      <div className="dev__button-container">
        <button className="dev__button" onClick={() => toggleCard(1)}>
          Regla de Laplace
        </button>
        <button className="dev__button" onClick={() => toggleCard(2)}>
          Regla de Sarrus
        </button>
        <button className="dev__button" onClick={() => toggleCard(3)}>
          Matriz Triangular
        </button>
      </div>
      <div className="desktop">
        <div className={`dev__card ${selectedCard === 1 ? "active" : ""}`}>
          <div className="dev__card-content">
            <Laplace />
          </div>
        </div>
        <div className={`dev__card ${selectedCard === 2 ? "active" : ""}`}>
          <div className="dev__card-content">
            <Sarrus />
          </div>
        </div>
        <div className={`dev__card ${selectedCard === 3 ? "active" : ""}`}>
          <div className="dev__card-content">
            <Triangular />
          </div>
        </div>
      </div>
      <div className="mobile">
        {selectedCard === 1 && (
          <div className="card-tabs-container">
            <div>
              <div className="card-tab">
                <button
                  className={`tab-button ${selectedGame === 0 ? "active" : ""}`}
                  onClick={() => toggleGameCard(0)}
                >
                  Pestaña 1
                </button>
                <button
                  className={`tab-button ${selectedGame === 1 ? "active" : ""}`}
                  onClick={() => toggleGameCard(1)}
                >
                  Pestaña 2
                </button>
                <button
                  className={`tab-button ${selectedGame === 2 ? "active" : ""}`}
                  onClick={() => toggleGameCard(2)}
                >
                  Pestaña 3
                </button>
              </div>
              <div className="card-content">
                <div
                  className={`tab-content ${
                    selectedGame === 0 ? "active" : ""
                  }`}
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div
                  className={`tab-content ${
                    selectedGame === 1 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 2
                </div>
                <div
                  className={`tab-content ${
                    selectedGame === 2 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 3
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedCard === 2 && (
          <div className="card-tabs-container">
            <div>
              <div className="card-tab">
                <button
                  className={`tab-button ${selectedGame === 0 ? "active" : ""}`}
                  onClick={() => toggleGameCard(0)}
                >
                  Pestaña 1
                </button>
                <button
                  className={`tab-button ${selectedGame === 1 ? "active" : ""}`}
                  onClick={() => toggleGameCard(1)}
                >
                  Pestaña 2
                </button>
                <button
                  className={`tab-button ${selectedGame === 2 ? "active" : ""}`}
                  onClick={() => toggleGameCard(2)}
                >
                  Pestaña 3
                </button>
              </div>
              <div className="card-content">
                <div
                  className={`tab-content ${
                    selectedGame === 0 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 1
                </div>
                <div
                  className={`tab-content ${
                    selectedGame === 1 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 2
                </div>
                <div
                  className={`tab-content ${
                    selectedGame === 2 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 3
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedCard === 3 && (
          <div className="card-tabs-container">
            <div>
              <div className="card-tab">
                <button
                  className={`tab-button ${selectedGame === 0 ? "active" : ""}`}
                  onClick={() => toggleGameCard(0)}
                >
                  Pestaña 1
                </button>
                <button
                  className={`tab-button ${selectedGame === 1 ? "active" : ""}`}
                  onClick={() => toggleGameCard(1)}
                >
                  Pestaña 2
                </button>
                <button
                  className={`tab-button ${selectedGame === 2 ? "active" : ""}`}
                  onClick={() => toggleGameCard(2)}
                >
                  Pestaña 3
                </button>
              </div>
              <div className="card-content">
                <div
                  className={`tab-content ${
                    selectedGame === 0 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 1
                </div>
                <div
                  className={`tab-content ${
                    selectedGame === 1 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 2
                </div>
                <div
                  className={`tab-content ${
                    selectedGame === 2 ? "active" : ""
                  }`}
                >
                  Contenido de la Pestaña 3
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Det;
