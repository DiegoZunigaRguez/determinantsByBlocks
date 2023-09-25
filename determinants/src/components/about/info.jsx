import React from "react";
import "./about.css";

const info = () => {
  return (
    <div>
      <p>
        Las personas que estudian matemáticas, en específico materias
        relacionadas al Algebra Lineal o Algebra Superior, presentan
        complicaciones en el tema de Determinantes, no especialmente en la
        comprensión de este, sino por la gran cantidad de pasos que conlleva
        realizar el cálculo de un determinante, por lo que recurren a
        calculadoras tales como: <br /><br />1. Wolfram Alpha <br />
        2. Wolfram Mathematica <br />
        3. Symbolab <br />
        4. Mathway
      </p>
      <p>
        Es común que otras aplicaciones de cálculo de determinantes estén
        dirigidas a realizar el proceso de forma rápida de los determinantes sin
        ahondar mucho en la explicación como es el caso de Wolfram Mathematica,
        dichas aplicaciones no ofrecen una explicación de manera más detallada o
        visual para que el usuario (en este caso el alumno), tengan un mejor
        entendimiento en cómo se hizo el cálculo o como se aplicó la regla de
        cofactores o si en algún otro caso se aplicó un método distinto. Por lo
        que al ser la primera aplicación dirigida al mejorar el entendimiento
        del alumno con ayuda de la animación web que tendrá una forma de
        explicar de manera más intuitiva, además de tener información pertinente
        de los determinantes así como ejemplos ilustrativos, por otro lado, el
        tiempo de ejecución tanto de la animación como de la aplicación de
        escritorio serán rápidos para que el usuario (en este caso alumno),
        tenga que esperar mucho tiempo para poder obtener el resultado de su
        determinante, con esto se puede asegurar que será distinto a las
        aplicaciones existentes.
      </p>
      <p>
        Aunque el teorema de expansión de Laplace proporciona un mecanismo
        poderoso para el cálculo de determinantes de cualquier tamaño, el uso de
        la fórmula en sí podría ser confuso para un estudiante de Ingeniería.
        Además de que los determinantes que los estudiantes suelen calcular en
        un curso de álgebra son como máximo para matrices de 6×6, y en ese
        sentido creemos que la motivación de los estudiantes con respecto a este
        tema podría mejorar utilizando este proyecto.
      </p>
      <p>
        Por ejemplo, el número de determinantes de matrices de 2x2, que se
        necesita calcular en la expansión del Determinante de una Matriz de 3x3
        es solo 3. por cierto para este caso hay algunos artículos que brindan
        algunas alternativas para su cálculo, puede ser la regla de Sarrus que
        puedes verificar en el apartado Regla de Sarrus que se encuentra en la
        seccion de determinantes. Sin embargo, el número de determinantes de
        matrices de 2x2 aumenta a 12, cuando se trata de calcular el
        determinante de una matriz de 4x4, así como 60 para una matriz de 5x5, y
        360 determinantes de matrices de 2x2 para una matriz de 6x6. También
        existen otros trabajos que han propuesto alternativas para el cálculo de
        los determinantes en general para cualquier tamaño de matriz.
      </p>
      <p>
        A continuación, se presenta la expresión generalizada para matrices NxN,
        por lo que supongamos una matriz "A" de tamaño NxN, tenemos la siguiente
        expresión
      </p>
    </div>
  );
};

export default info;
