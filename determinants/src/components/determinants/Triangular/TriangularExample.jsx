import React from "react";
import "../det.css";
import Matrix from "../../../assets/TriangularMatrix.png";
import Change from "../../../assets/Cambio_signo.png";
import FColumn from "../../../assets/PrimeraColumna.png";
import SColumn from "../../../assets/Segundacolumna.png";
import TColumn from "../../../assets/TerceraColumna.png";
import Diagonal from "../../../assets/Diagonal.png";

const TriangularExample = () => {
  return (
    <div>
      <p>
        Para este ejemplo definimos el determinante de dimension 4x4 como sigue:
      </p>
      <img src={Matrix} alt="" className="formula__imagen__easy" />
      <p>
        Para poder utilizar este método, debemos de encontrar la triangular
        superior o inferior, para este ejemplo buscaremos la triangular
        superior, para ello al tener un cero en la tercera fila y tercera
        columna, intercambiamos la primera por la tercera fila, como sabemos, el
        determinante cambia de signo si se intercambian dos filas o columnas
        cualesquiera de una matriz.
      </p>
      <img src={Change} alt="" className="formula__imagen__result" />
      <p>
        Multiplicamos la primera fila por −1/2 y la sumamos a la segunda fila,
        de la misma manera multiplicamos la primera fila por −1/2 y la sumamos a
        la tercera fila, de la misma manera multiplicamos la primera fila por
        −1/2 y la sumamos a la cuarta fila.
      </p>
      <img src={FColumn} alt="" className="formula__imagen__easy" />
      <p>
        Multiplicamos la segunda fila por −38 y la sumamos a la tercera fila, de
        la misma manera multiplicamos la primera fila por −9/18 y la sumamos a
        la tercera fila.
      </p>
      <img src={SColumn} alt="" className="formula__imagen__easy" />
      <p>
        Multiplicamos la tercera fila por −16/57 y la sumamos a la cuarta fila.
      </p>
      <img src={TColumn} alt="" className="formula__imagen__easy" />
      <p>
        De esta manera encontramos un determinante diagonal, multiplicando se obtiene:
      </p>
      <img src={Diagonal} alt="" className="formula__imagen"/>
    </div>
  );
};

export default TriangularExample;
