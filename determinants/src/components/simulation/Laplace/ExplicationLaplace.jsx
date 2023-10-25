import React from "react";

import ExpansionLaplace from "../../../assets/expresion.png";
import Det2x2 from "../../../assets/defDet2x2.png";

const ExplicationLaplace = (props) => {
  const { parametro1, parametro2 } = props;
  const Steps = (matrixSize, step) => {
    if (matrixSize === 4) {
      switch (step) {
        case 0:
          return (
            <div className="explication__step">
              <p>
                Bienvenido, aquí te presentamos una animación con la explicación
                del método de Laplace, que es el método más utilizado en las
                universidades y en calculadoras online.{" "}
              </p>
              <p>
                Primero, a partir de la siguiente expresión, podemos determinar
                los determinantes de la expansión, para comenzar con un
                determinante de dimensión 4x4, se deben generar 4 determinantes
                3x3.
              </p>
              <br />
              <img srcSet={ExpansionLaplace} alt="" className="formula" />
            </div>
          );
        case 1:
          return (
            <div className="explication__step">
              <p>
                Para el primer determinante 3x3, se toma la primera fila y
                primera columna, para ello como se ve, se toma el determinante
                3x3 que se obtiene al hacer esa selección. Para el elemento que
                multiplica el determinante, se toma la intersección entre la
                primera fila y la primera columna.
              </p>
            </div>
          );
        case 2:
          return (
            <div className="explication__step">
              <p>
                Para el segundo determinante 3x3, se toma la primera fila y
                segunda columna, para ello como se ve, se toma el determinante
                3x3 que se obtiene al hacer esa selección. Para el elemento que
                multiplica el determinante, se toma la intersección entre la
                primera fila y la segunda columna.
              </p>
            </div>
          );
        case 3:
          return (
            <div className="explication__step">
              <p>
                Para el tercer determinante 3x3, se toma la primera fila y
                tercera columna, para ello como se ve, se toma el determinante
                3x3 que se obtiene al hacer esa selección. Para el elemento que
                multiplica el determinante, se toma la intersección entre la
                primera fila y la tercera columna.
              </p>
            </div>
          );
        case 4:
          return (
            <div className="explication__step">
              <p>
                Para el cuarto determinante 3x3, se toma la primera fila y
                cuarta columna, para ello como se ve, se toma el determinante
                3x3 que se obtiene al hacer esa selección. Para el elemento que
                multiplica el determinante, se toma la intersección entre la
                primera fila y la cuarta columna.
              </p>
              <br />
              <p>
                Ahora, se procede a hacer de nuevo la expansión del determinante
                3x3 obteniendo determinantes de dimensión 2x2
              </p>
            </div>
          );
        case 5:
          return (
            <div className="explication__step">
              <p>
                Para el primer determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la primera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                primera columna.
              </p>
            </div>
          );
        case 6:
          return (
            <div className="explication__step">
              <p>
                Para el primer determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la segunda columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                segunda columna.
              </p>
            </div>
          );
        case 7:
          return (
            <div className="explication__step">
              <p>
                Para el primer determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la tercera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                tercera columna.
              </p>
            </div>
          );
        case 8:
          return (
            <div className="explication__step">
              <p>
                Para el segundo determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la primera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                primera columna.
              </p>
            </div>
          );
        case 9:
          return (
            <div className="explication__step">
              <p>
                Para el segundo determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la segunda columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                segunda columna.
              </p>
            </div>
          );
        case 10:
          return (
            <div className="explication__step">
              <p>
                Para el segundo determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la tercera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                tercera columna.
              </p>
            </div>
          );
        case 11:
          return (
            <div className="explication__step">
              <p>
                Para el tercer determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la primera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                primera columna.
              </p>
            </div>
          );
        case 12:
          return (
            <div className="explication__step">
              <p>
                Para el tercer determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la segunda columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                segunda columna.
              </p>
            </div>
          );
        case 13:
          return (
            <div className="explication__step">
              <p>
                Para el tercer determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la tercera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                tercera columna.
              </p>
            </div>
          );
        case 14:
          return (
            <div className="explication__step">
              <p>
                Para el cuarto determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la primera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                primera columna.
              </p>
            </div>
          );
        case 15:
          return (
            <div className="explication__step">
              <p>
                Para el cuarto determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la segunda columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                segunda columna.
              </p>
            </div>
          );
        case 16:
          return (
            <div className="explication__step">
              <p>
                Para el cuarto determinante 3x3, se realiza el mismo
                procedimiento, se toma la primera fila y la tercera columna, por
                lo que el determinante 2x2 que se obtiene es lo que no esta
                dentro de esta intersección. El elemento que multiplica a este
                determinante es la intersección de la primera fila con la
                tercera columna.
              </p>
            </div>
          );
        case 17:
          return (
            <div className="explication__step">
              <p>Una vez que se obtiene la expansión de cada determinante 3x3, procedemos a hacer el cálculo de cada 
                determinante 2x2, como se muestra a continuación:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 18:
          return (
            <div className="explication__step">
              <p>Para el primer determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 19:
          return (
            <div className="explication__step">
              <p>Para el segundo determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 20:
          return (
            <div className="explication__step">
              <p>Para el tercer determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 21:
          return (
            <div className="explication__step">
              <p>Para el cuarto determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 22:
          return (
            <div className="explication__step">
              <p>Para el quinto determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 23:
          return (
            <div className="explication__step">
              <p>Para el sexto determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 24:
          return (
            <div className="explication__step">
              <p>Para el séptimo determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 25:
          return (
            <div className="explication__step">
              <p>Para el octavo determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 26:
          return (
            <div className="explication__step">
              <p>Para el noveno determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 27:
          return (
            <div className="explication__step">
              <p>Para el décimo determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 28:
          return (
            <div className="explication__step">
              <p>Para el onceavo determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 29:
          return (
            <div className="explication__step">
              <p>Para el doceavo determinante, se calcula mediante la siguente expresión:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
              <br />
              <p>Se procede a realizar las multiplicaciones dentro del primer corchete.</p>
            </div>
          );
        case 30:
          return (
            <div className="explication__step">
              <p>Realizando las multiplicaciones del segundo corchete.</p>
            </div>
          );
        case 31:
          return (
            <div className="explication__step">
              <p>Realizando las multiplicaciones del tercera corchete.</p>
            </div>
          );
        case 32:
          return (
            <div className="explication__step">
              <p>Realizando las multiplicaciones del cuarto corchete.</p>
            </div>
          );
        case 33:
          return (
            <div className="explication__step">
              <p>Una vez que se tienen las multiplicaciones, se debe realizar la multiplicación de signos
                dentro de cada corchete.
              </p>
            </div>
          );
        case 34:
          return (
            <div className="explication__step">
              <p>Realizando la suma dentro de cada corchete.
              </p>
            </div>
          );
        case 35:
          return (
            <div className="explication__step">
              <p>Multiplicando el contenido del corchete por elemento fuera de el.
              </p>
            </div>
          );
        case 36:
          return (
            <div className="explication__step">
              <p>Realizando la multiplicación de signos.
              </p>
            </div>
          );
        case 37:
          return (
            <div className="explication__step">
              <p>Una vez que se tienen los signos correctos, procedemos a sumar los elementos.
              </p>
            </div>
          );
        case 38:
          return (
            <div className="explication__step">
              <p>
                Finalmente,puedes ver el resultado del determinante que
                colocaste, puedes comprobar el resultado en la calculadora de tu
                preferencia.
              </p>
              <br />
              <p>
                Si quieres ingresar un nuevo determinante, puedes dar click en
                el botón "Nueva simulación".
              </p>
            </div>
          );
        default:
          return false;
      }
    } else {
      return null;
    }
  };
  return <div>{Steps(parametro1, parametro2)}</div>;
};

export default ExplicationLaplace;
