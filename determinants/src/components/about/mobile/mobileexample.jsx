import React, {useState} from 'react';
import "../about.css";
import Determinante from "../../../assets/aboutDet.png";
import Productos from "../../../assets/mobileCom.png";
import Suma from "../../../assets/Signos.png";
import Det1 from "../../../assets/Det1.png";
import Det2 from "../../../assets/Det2.png";
import Det3 from "../../../assets/Det3.png";
import Det4 from "../../../assets/Det4.png";
import Det5 from "../../../assets/Det5.png";
import Det6 from "../../../assets/Det6.png";
import Det2x2 from "../../../assets/about2x2.png";
import aboutProd from "../../../assets/aboutProd.png";
import aboutRes from "../../../assets/aboutRes.png";

const mobileexample = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  const togglePopup = (popup) => {
    setIsPopupOpen(!isPopupOpen);
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div>
      <p>
        Para poder mostrar el funcionamiento del algoritmo, definiremos una
        matriz de 4x4 como se muestra a continuación:
      </p>
      <button onClick={() => togglePopup("Det")} className="pop-button">
        Mostrar determinante
      </button>
      {isPopupOpen && selectedPopup === "Det" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Determinante} alt="" className="formula__imagen__easy" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>
        Como se nos indica en la formula mostrada, debemos saber el número de
        bloques 2x2 que se deben construir mediante la siguiente formula:
      </p>
      <button onClick={() => togglePopup("Com")} className="pop-button">
        Mostrar combinatoria
      </button>
      {isPopupOpen && selectedPopup === "Com" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Productos} alt="" className="formula__imagen" />
            </div>
          </div>
        </>
      )}
      <br />
      <p>
        Ahora, sabiendo el número de productos de determinantes se necesitan, se
        determinan los signos que deben llevar cada uno de los productos
        mediante las siguiente formula:
      </p>
      <button onClick={() => togglePopup("Sum")} className="pop-button">
        Mostrar sumatoria
      </button>
      {isPopupOpen && selectedPopup === "Sum" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Suma} alt="" className="formula__imagen"/>
            </div>
          </div>
        </>
      )}
      <br />
      <p>
        Sabemos ahora que se deben obtener 6 productos de matrices, por lo
        tanto, a continuación, se muestra como se determina cada uno de los
        bloques:
      </p>
      <button onClick={() => togglePopup("Det1")} className="pop-button">
        Mostrar primer producto
      </button>
      {isPopupOpen && selectedPopup === "Det1" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det1} alt="" className="formula__imagen__easy"/>
            </div>
          </div>
        </>
      )}
      <br />
      <button onClick={() => togglePopup("Det2")} className="pop-button">
        Mostrar segundo producto
      </button>
      {isPopupOpen && selectedPopup === "Det2" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det2} alt="" className="formula__imagen__easy"/>
            </div>
          </div>
        </>
      )}
      <br />
      <button onClick={() => togglePopup("Det3")} className="pop-button">
        Mostrar tercer producto
      </button>
      {isPopupOpen && selectedPopup === "Det3" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det3} alt="" className="formula__imagen__easy"/>
            </div>
          </div>
        </>
      )}
      <br />
      <button onClick={() => togglePopup("Det4")} className="pop-button">
        Mostrar cuarto producto
      </button>
      {isPopupOpen && selectedPopup === "Det4" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det4} alt="" className="formula__imagen__easy"/>
            </div>
          </div>
        </>
      )}
      <br />
      <button onClick={() => togglePopup("Det5")} className="pop-button">
        Mostrar quinto producto
      </button>
      {isPopupOpen && selectedPopup === "Det5" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det5} alt="" className="formula__imagen__easy"/>
            </div>
          </div>
        </>
      )}
      <br />
      <button onClick={() => togglePopup("Det6")} className="pop-button">
        Mostrar sexto producto
      </button>
      {isPopupOpen && selectedPopup === "Det6" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det6} alt="" className="formula__imagen__easy"/>
            </div>
          </div>
        </>
      )}
      
      <br />
      <p>
        La expresión ahora, en base del producto de determinantes, resulta como
        se muestra a continuación:
      </p>
      <button onClick={() => togglePopup("Expansion")} className="pop-button">
        Mostrar expansión
      </button>
      <br />
      {isPopupOpen && selectedPopup === "Expansion" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={Det2x2} alt="" className="formula__imagen"/>
            </div>
          </div>
        </>
      )}
      
      <p>Ahora, realizando los determinantes 2x2, tenemos lo siguiente:</p>
      <button onClick={() => togglePopup("Mult")} className="pop-button">
        Mostrar multiplicaciones
      </button>
      <br />
      {isPopupOpen && selectedPopup === "Mult" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={aboutProd} alt="" className="formula__imagen"/>
            </div>
          </div>
        </>
      )}
      
      <p>
        Por último, teniendo en cuenta el resultado del producto de
        determinantes 2x2, tenemos:
      </p>
      <button onClick={() => togglePopup("Resu")} className="pop-button">
        Mostrar resultado
      </button>
      <br />
      {isPopupOpen && selectedPopup === "Resu" && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <button onClick={closePopup}>X</button>
            <div className="popup-content">
            <img src={aboutRes} alt="" className="formula__imagen"/>
            </div>
          </div>
        </>
      )}
      
    </div>
  )
}

export default mobileexample