import React from "react";
import "./about.css";
import Determinante from "../../assets/aboutDet.png";
import Productos from "../../assets/Productos.png";
import Suma from "../../assets/Signos.png";
import Det1 from "../../assets/Det1.png";
import Det2 from "../../assets/Det2.png";
import Det3 from "../../assets/Det3.png";
import Det4 from "../../assets/Det4.png";
import Det5 from "../../assets/Det5.png";
import Det6 from "../../assets/Det6.png";
import Det2x2 from "../../assets/about2x2.png";
import aboutProd from "../../assets/aboutProd.png";
import aboutRes from "../../assets/aboutRes.png";

const example = () => {
  return (
    <div>
      <p>
        Para poder mostrar el funcionamiento del algoritmo, definiremos una
        matriz de 4x4 como se muestra a continuación:
      </p>
      <img src={Determinante} alt="" className="formula__imagen__easy" />
      <p>
        Como se nos indica en la formula mostrada, debemos saber el número de
        bloques 2x2 que se deben construir mediante la siguiente formula:
      </p>
      <img src={Productos} alt="" className="formula__imagen" />
      <p>
        Ahora, sabiendo el número de productos de determinantes se necesitan, se
        determinan los signos que deben llevar cada uno de los productos
        mediante las siguiente formula:
      </p>
      <img src={Suma} alt="" className="formula__imagen"/>
      <p>
        Sabemos ahora que se deben obtener 6 productos de matrices, por lo
        tanto, a continuación, se muestra como se determina cada uno de los
        bloques:
      </p>
      <img src={Det1} alt="" className="formula__imagen__easy"/>
      <img src={Det2} alt="" className="formula__imagen__easy"/>
      <img src={Det3} alt="" className="formula__imagen__easy"/>
      <img src={Det4} alt="" className="formula__imagen__easy"/>
      <img src={Det5} alt="" className="formula__imagen__easy"/>
      <img src={Det6} alt="" className="formula__imagen__easy"/>
      <br />
      <p>
        La expresión ahora, en base del producto de determinantes, resulta como
        se muestra a continuación:
      </p>
      <img src={Det2x2} alt="" className="formula__imagen"/>
      <p>Ahora, realizando los determinantes 2x2, tenemos lo siguiente:</p>
      <img src={aboutProd} alt="" className="formula__imagen"/>
      <p>
        Por último, teniendo en cuenta el resultado del producto de
        determinantes 2x2, tenemos:
      </p>
      <img src={aboutRes} alt="" className="formula__imagen"/>
      <br />
    </div>
  );
};

export default example;
