import React from "react";
import Combinatoria from "../../assets/Productos.png";
import Expression from "../../assets/TTExp.png";
import Sarrus from "../../assets/Sarrus.png";
//Se declaran las imagenes para la explicación de las matrices 4x4
import firstSum4x4 from "../../assets/firstSum4x4.png";
import secondSum4x4 from "../../assets/secondSum4x4.png";
import thirdSum4x4 from "../../assets/thirdSum4x4.png";
import fourthSum4x4 from "../../assets/fourthSum4x4.png";
import fifthSum4x4 from "../../assets/fifthSum4x4.png";
import sixthSum4x4 from "../../assets/sixthSum4x4.png";
import Det2x2 from "../../assets/defDet2x2.png";
//Se declaran las imagenes para la explicación de las matrices 5x5
import Productos5x5 from "../../assets/productos5x5.png";
import firstSum5x5 from "../../assets/firstSum5x5.png";
import secondSum5x5 from "../../assets/secondSum5x5.png";
import thirdSum5x5 from "../../assets/thirdSum5x5.png";
import fourthSum5x5 from "../../assets/fourthSum5x5.png";
import fifthSum5x5 from "../../assets/fifthSum5x5.png";
import sixthSum5x5 from "../../assets/sixthSum5x5.png";
import seventhSum5x5 from "../../assets/seventhSum5x5.png";
import eightSum5x5 from "../../assets/eighthSum5x5.png";
import ninthSum5x5 from "../../assets/ninthSum5x5.png";
import tenthSum5x5 from "../../assets/tenthSum5x5.png";
//Se importan las imagenes para la explicación de las matrices 6x6
import Productos6x6 from "../../assets/productos6x6.png";
import firstSum6x6 from "../../assets/firstSum6x6.png";
import secondSum6x6 from "../../assets/secondSum6x6.png";
import thirdSum6x6 from "../../assets/thirdSum6x6.png";
import fourthSum6x6 from "../../assets/fourthSum6x6.png";
import fifthSum6x6 from "../../assets/fifthSum6x6.png";
import sixthSum6x6 from "../../assets/sixthSum6x6.png";
import seventhSum6x6 from "../../assets/seventhSum6x6.png";
import eighthSum6x6 from "../../assets/eighthSum6x6.png";
import ninthSum6x6 from "../../assets/ninthSum6x6.png";
import tenthSum6x6 from "../../assets/tenthSum6x6.png";
import eleventhSum6x6 from "../../assets/eleventhSum6x6.png";
import TwelfthSum6x6 from "../../assets/TwelfthSum6x6.png";
import ThirteenthSum6x6 from "../../assets/ThirteenthSum6x6.png";
import Fourteen6x6 from "../../assets/Fourteen6x6.png";
import fifteenSum6x6 from "../../assets/fifteenSum6x6.png";

const Explication = (props) => {
  const { parametro1, parametro2 } = props;
  const Steps = (matrixSize, step) => {
    if (matrixSize === 4) {
      switch (step) {
        case 0:
          return (
            <div className="explication__step">
              Como primer paso, se deben obtener los productos de determinantes,
              para una matriz de dimension 4x4 se deben calcular 6 productos,
              siguiendo la siguiente formula:
              <br />
              <img src={Combinatoria} alt="" className="formula" />
              <br />
              <p>
                Ahora, para determinar los signos se hara mediante la siguente
                expresión:{" "}
              </p>
              <img src={Expression} alt="" className="formula2" />
            </div>
          );
        case 1:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={firstSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 2:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={secondSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 3:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={thirdSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 4:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fourthSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 5:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fifthSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 6:
          return (
            <div className="explication__step">
              <p>
                Finalmente, para el ultimo termino, unicamente se debe sustituir
                los valores donde n=4, ya que la dimension de la matriz es de
                4x4.
              </p>
              <img src={sixthSum4x4} alt="" className="formula2" />
            </div>
          );
        case 7:
          return (
            <div className="explication__step">
              <p>
                Ahora, se tiene toda la expansion de productos de determinantes
                2x2, como se puede observar, se tienen los 6 productos, si no
                recuerdas como se calculo, puedes regresar al inicio de la
                simulación.
              </p>
              <p>
                Como siguiente paso, procederemos a calcular el primer producto
                de determinantes mediante la siguiente definicion:
              </p>
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 8:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el segundo producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 9:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el tercer producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 10:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el cuarto producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 11:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el quinto producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 12:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el sexto producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 13:
          return (
            <div className="explication__step">
              <p>
                Una vez realizados todos los determinantes, se realizan las
                multiplicaciones dentro de cada parentesis. En este caso se
                procede con el primer parentesis.
              </p>
            </div>
          );
        case 14:
          return (
            <div className="explication__step">
              <p>Se procede con el segundo parentesis.</p>
            </div>
          );
        case 15:
          return (
            <div className="explication__step">
              <p>Se procede con el tercer parentesis.</p>
            </div>
          );
        case 16:
          return (
            <div className="explication__step">
              <p>Se procede con el cuarto parentesis.</p>
            </div>
          );
        case 17:
          return (
            <div className="explication__step">
              <p>Se procede con el quinto parentesis.</p>
            </div>
          );
        case 18:
          return (
            <div className="explication__step">
              <p>Se procede con el sexto parentesis y ultimo parentesis.</p>
            </div>
          );
        case 19:
          return (
            <div className="explication__step">
              <p>
                Una vez hecho esto, se hace la multiplicacion de signos para
                sumar los resultados.
              </p>
            </div>
          );
        case 20:
          return (
            <div className="explication__step">
              <p>
                Ahora, sumamos los resultados de los productos para obtener los
                resultados.
              </p>
            </div>
          );
        case 21:
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
                el boton "Nueva simulación".
              </p>
            </div>
          );
        default:
          return false;
      }
    } else if (matrixSize === 5) {
      switch (step) {
        case 0:
          return (
            <div className="explication__step">
              Como primer paso, se deben obtener los productos de determinantes,
              para una matriz de dimension 5x5 se deben calcular 10 productos,
              siguiendo la siguiente formula:
              <br />
              <img src={Productos6x6} alt="" className="formula" />
              <br />
              <p>
                Ahora, para determinar los signos se hara mediante la siguente
                expresión:{" "}
              </p>
              <img src={Expression} alt="" className="formula2" />
            </div>
          );
        case 1:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={firstSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 2:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={secondSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 3:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={thirdSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 4:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fourthSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el cuarto termino de la sumatoria.</p>
            </div>
          );
        case 5:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fifthSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 6:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={sixthSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 7:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={seventhSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 8:
          return (
            <div className="explication__step">
              <p>
                Para la tercera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={eightSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 9:
          return (
            <div className="explication__step">
              <p>
                Para la tercera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={ninthSum5x5} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 10:
          return (
            <div className="explication__step">
              <p>
                Finalmente, para el ultimo termino, unicamente se debe sustituir
                los valores donde n=5, ya que la dimension de la matriz es de
                5x5.
              </p>
              <img src={tenthSum5x5} alt="" className="formula2" />
            </div>
          );
        case 11:
          return (
            <div className="explication__step">
              <p>
                Ahora, se tiene toda la expansion de productos de determinantes
                2x2, como se puede observar, se tienen los 10 productos, si no
                recuerdas como se calculo, puedes regresar al inicio de la
                simulación.
              </p>
              <br />
              <p>
                Como se puede observar tenemos productos de determinantes 2x2
                por determinantes de dimensión 3x3, por lo que para los
                determinantes 3x3 se hará uso de la regla de Sarrus para obtener
                el valor.
              </p>
            </div>
          );
        case 12:
          return (
            <div className="explication__step">
              <p>
                Calculando el primer producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 13:
          return (
            <div className="explication__step">
              <p>
                Calculando el segundo producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 14:
          return (
            <div className="explication__step">
              <p>
                Calculando el tercer producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 15:
          return (
            <div className="explication__step">
              <p>
                Calculando el cuarto producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 16:
          return (
            <div className="explication__step">
              <p>
                Calculando el quinta producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 17:
          return (
            <div className="explication__step">
              <p>
                Calculando el sexto producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 18:
          return (
            <div className="explication__step">
              <p>
                Calculando el septimo producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 19:
          return (
            <div className="explication__step">
              <p>
                Calculando el octavo producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 20:
          return (
            <div className="explication__step">
              <p>
                Calculando el noveno producto de determinantes, primero se
                calcula el determinante 2x2, posterior, usando el metodo de
                Sarrus se obtiene el determinante de 3x3.
              </p>
              <img src={Det2x2} alt="" className="formula" />
              <img src={Sarrus} alt="" className="formula" />
            </div>
          );
        case 21:
          return (
            <div className="explication__step">
              <p>
                Una vez realizando estos calculos de determinantes, procedemos a
                hacer la multiplicacion interna.
              </p>
            </div>
          );
        case 31:
          return (
            <div className="explication__step">
              <p>
                Ya que se multiplicaron los resultados de los determinantes,
                procedemos a realizar la multiplicacion de signos, entre los que
                estan dentro y fuera de los parentesis.
              </p>
            </div>
          );
        case 32:
          return (
            <div className="explication__step">
              <p>
                Una vez obtenidos los signos, procedemos a sumar los resultados.
              </p>
            </div>
          );
        case 33:
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
                el boton "Nueva simulación".
              </p>
            </div>
          );
        default:
          return false;
      }
    } else {
      switch (step) {
        case 0:
          return (
            <div className="explication__step">
              Como primer paso, se deben obtener los productos de determinantes,
              para una matriz de dimension 5x5 se deben calcular 10 productos,
              siguiendo la siguiente formula:
              <br />
              <img src={Productos6x6} alt="" className="formula" />
              <br />
              <p>
                Ahora, para determinar los signos se hara mediante la siguente
                expresión:{" "}
              </p>
              <img src={Expression} alt="" className="formula2" />
            </div>
          );
        case 1:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={firstSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 2:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={secondSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 3:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={thirdSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 4:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fourthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el cuarto termino de la sumatoria.</p>
            </div>
          );
        case 5:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fifthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el quinto termino de la sumatoria.</p>
            </div>
          );
        case 6:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={sixthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 7:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={seventhSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 8:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={eighthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 9:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={ninthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el cuarto termino de la sumatoria.</p>
            </div>
          );
        case 10:
          return (
            <div className="explication__step">
              <p>
                Para la tercera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={tenthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 11:
          return (
            <div className="explication__step">
              <p>
                Para la tercera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={eleventhSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 12:
          return (
            <div className="explication__step">
              <p>
                Para la tercera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={TwelfthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 13:
          return (
            <div className="explication__step">
              <p>
                Para la cuarta sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={ThirteenthSum6x6} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 14:
          return (
            <div className="explication__step">
              <p>
                Para la cuarta sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={Fourteen6x6} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 15:
          return (
            <div className="explication__step">
              <p>
                Finalmente, para el ultimo termino, unicamente se debe sustituir
                los valores donde n=6, ya que la dimension de la matriz es de
                6x6.
              </p>
              <img src={fifteenSum6x6} alt="" className="formula2" />
            </div>
          );
        case 16:
          return (
            <div className="explication__step">
              <p>
                Ahora, se tiene toda la expansion de productos de determinantes
                2x2 por determinante de 4x4, como se puede observar, se tienen
                los 15 productos, si no recuerdas como se calculo, puedes
                regresar al inicio de la simulación.
              </p>
              <br />
              <p>
                Como podemos ver, al tener un determinante de 4x4, necesitamos
                hacer uso del mismo algoritmo, por lo que mostraremos como
                ejemplo solo el primer producto de determinantes, puedes
                elaborar los demás colocandolos dentro de esta aplicación para
                observar el paso a paso de su desarrollo.
              </p>
            </div>
          );
        case 17:
          return (
            <div className="explication__step">
              <p>
                En la parte inferior podemos observar el producto de
                determinantes 2x2 por 4x4, donde procederemos a descomponer el
                determinante 4x4 para poder hacer los calculos pertinentes, como
                se mencionó en el paso anterior únicamente se mostrara este
                producto de determinantes posterior a ello solo se mostrará el
                resultado de dichos determinantes.
              </p>
            </div>
          );
        case 18:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={firstSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 19:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={secondSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 20:
          return (
            <div className="explication__step">
              <p>
                Para la primera sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={thirdSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el tercer termino de la sumatoria.</p>
            </div>
          );
        case 21:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fourthSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el primer termino de la sumatoria.</p>
            </div>
          );
        case 22:
          return (
            <div className="explication__step">
              <p>
                Para la segunda sumatoria, se tiene lo siguiente, es decir para
                determinar los signos de los productos:
              </p>
              <img src={fifthSum4x4} alt="" className="formula2" />
              <p>Ahora tomando el segundo termino de la sumatoria.</p>
            </div>
          );
        case 23:
          return (
            <div className="explication__step">
              <p>
                Finalmente, para el ultimo termino, unicamente se debe sustituir
                los valores donde n=4, ya que la dimension de la matriz es de
                4x4.
              </p>
              <img src={sixthSum4x4} alt="" className="formula2" />
            </div>
          );
        case 24:
          return (
            <div className="explication__step">
              <p>
                Ahora, se tiene toda la expansion de productos de determinantes
                2x2, como se puede observar, se tienen los 6 productos, si no
                recuerdas como se calculo, puedes regresar al inicio de la
                simulación.
              </p>
              <p>
                Como siguiente paso, procederemos a calcular el primer producto
                de determinantes mediante la siguiente definicion:
              </p>
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 25:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el segundo producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 26:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el tercer producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 27:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el cuarto producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 28:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el quinto producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 29:
          return (
            <div className="explication__step">
              <p>
                Procederemos a calcular el sexto producto de determinantes
                mediante la siguiente definicion:
              </p>
              <br />
              <img src={Det2x2} alt="" className="formula" />
            </div>
          );
        case 30:
          return (
            <div className="explication__step">
              <p>
                Una vez realizados todos los determinantes, se realizan las
                multiplicaciones dentro de cada parentesis. En este caso se
                procede con el primer parentesis.
              </p>
            </div>
          );
        case 31:
          return (
            <div className="explication__step">
              <p>Se procede con el segundo parentesis.</p>
            </div>
          );
        case 32:
          return (
            <div className="explication__step">
              <p>Se procede con el tercer parentesis.</p>
            </div>
          );
        case 33:
          return (
            <div className="explication__step">
              <p>Se procede con el cuarto parentesis.</p>
            </div>
          );
        case 34:
          return (
            <div className="explication__step">
              <p>Se procede con el quinto parentesis.</p>
            </div>
          );
        case 35:
          return (
            <div className="explication__step">
              <p>Se procede con el sexto parentesis y ultimo parentesis.</p>
            </div>
          );
        case 36:
          return (
            <div className="explication__step">
              <p>
                Una vez hecho esto, se hace la multiplicacion de signos para
                sumar los resultados.
              </p>
            </div>
          );
        case 37:
          return (
            <div className="explication__step">
              <p>
                Ahora, sumamos los resultados de los productos para obtener los
                resultados.
              </p>
            </div>
          );
        case 38:
          return (
            <div className="explication__step">
              <p>
                Ahora, ya que tienes la explicación de la matriz 4x4, procederemos a mostrar la continuación
                del procedimiento para un determinante 6x6, en este caso mostraremos el resultado del 
                determinante 4x4 y determinante 2x2.
              </p>
            </div>
          );

        default:
          return false;
      }
    }
  };

  return <div>{Steps(parametro1, parametro2)}</div>;
};

export default Explication;
