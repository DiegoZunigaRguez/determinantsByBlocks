import React from "react";
import "./about.css";
import TTExpression from "../../assets/TTExpresion.png";

const info = () => {
  return (
    <div>
      <p>
        Aunque el teorema de expansión de Laplace proporciona un mecanismo
        poderoso para el cálculo de determinantes de cualquier tamaño, según
        nuestra experiencia de muchos años enseñando el curso de Álgebra Lineal,
        el uso de la fórmula en sí podría ser confuso para un estudiante de
        Ingeniería. Además de que los determinantes que los estudiantes suelen
        calcular en un curso de álgebra son como máximo para matrices de 6×6, y
        en ese sentido creemos que la motivación de los estudiantes con respecto
        a este tema podría mejorar utilizando nuestro método.
      </p>
      <p>
        Por ejemplo, el número de determinantes de matrices de 2x2, que se
        necesita calcular en la expansión del Determinante de una Matriz de 3x3
        es solo 3. por cierto para este caso hay algunos artículos que brindan
        algunas alternativas para su cálculo, puede ser la regla de Sarrus que
        puedes verificar en el apartado Regla de Sarrus
        que se encuentra en la seccion de determinantes. Sin embargo, el número
        de determinantes de matrices de 2x2 aumenta a 12, cuando se trata de
        calcular el determinante de una matriz de 4x4, así como 60 para una
        matriz de 5x5, y 360 determinantes de matrices de 2x2 para una matriz de
        6x6. También existen otros trabajos que han propuesto alternativas para
        el cálculo de los determinantes en general para cualquier tamaño de
        matriz.
      </p>
      <p>
        A continuación, se presenta la expresión generalizada para matrices NxN,
        por lo que supongamos una matriz "A" de tamaño NxN, tenemos la siguiente
        expresión
      </p>
      <img src={TTExpression} alt="" className="formula__imagen"/>
    </div>
  );
};

export default info;
