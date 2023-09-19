import React from "react";
import "../det.css";
import SarrusMatrix from "../../../assets/Sarrus3x3.png";
import SarrusExpansion from "../../../assets/Sarrus3.png";
import SarrusResult from "../../../assets/Sarrusresultado.png";

const SarrusExample = () => {
  return (
    <div>
      <p>
        Primero definimos la matriz de dimension 3x3 que utilizaremos la
        siguiente:
      </p>
      <img src={SarrusMatrix} alt="" className="formula__imagen__easy" />
      <br />
      <p>
        Como podemos ver en la definición podemos expander hacia abajo o a la
        derecha el determinante, en este caso, procederemos a hacer la expansión
        hacia abajo, una vez hecha esa expansión podemos proceder a hacer la
        multiplicación como esta en la siguiente imagen:
      </p>
      <img src={SarrusExpansion} alt="" className="Sarrus__image" />
      <br />
      <p>
        Finalmente, realizando las multiplicaciones para obtener el resultado,
        como podemos ver a continuación:
      </p>
      <img src={SarrusResult} alt="" className="Sarrus__image" />
      <p></p>
    </div>
  );
};

export default SarrusExample;
