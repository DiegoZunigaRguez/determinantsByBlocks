import React from "react";
import "./det.css";

const Laplace = () => {
  return (
    <div>
      <h2>Regla de Laplace</h2>
      <p>
        El teorema de Laplace es un algoritmo que nos proporciona el camino para
        encontrar el determinante de una matriz. El teorema de Laplace también
        es llamada expansión por menores y expansión por los cofactores. El
        teorema de Laplace se nombra después en honor al matemático francés
        Peter Simon Laplace (1749-1827). Pierre-Simon, marqués de Laplace ;
        Beaumont-en-Auge, Francia, 1749 - París, 1827. Matemático francés. Hijo
        de un granjero, inició sus estudios primarios en la escuela local, pero
        gracias a la intervención de D'Alembert, quien había quedado
        profundamente impresionado por un escrito del joven sobre los principios
        de la mecánica, pudo trasladarse a la capital, donde consiguió una plaza
        en la École Militaire. Continuador de la mecánica newtoniana, hizo un
        gran aporte para el posterior descubrimiento de lo que hoy se conoce
        como transformada de Laplace, así también descubrió la muy conocida y
        famosa ecuación de Laplace; en el área de la estadística sentó las bases
        de la teoría i=analítica de la probabilidad; y como astrónomo planteó la
        teoría nebular sobre la formación del sistema solar. Compartió la
        doctrina filosófica del determinismo científico. A continuación, se
        presenta un ejemplo teórico de la regla de Laplace:
        <br />
        <br />
        1. Definimos una matriz de 3x3 como se muestra a continuación:
      </p>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>3x3</mi>
          </mrow>
        </msub>
        <mo>=</mo>
        <mrow>
          <mo>[</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>11</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>12</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>13</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>21</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>22</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>23</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>31</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>32</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>33</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>]</mo>
        </mrow>
      </math>
      <p className="after-formula">
        {" "}
        2. Empecemos por el primer elemento{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
        </math>
        . Eliminamos las filas y columnas que integren{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
        </math>
        . Los elementos que queden sin eliminar, será el primer determinante
        menor multiplicado por{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
        </math>
        .
      </p>
      <p>
        {" "}
        3. Seguimos con el segundo elemento de la primera fila, es decir,{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>12</mi>
            </mrow>
          </msub>
        </math>
        . Repetimos el proceso: rallamos las filas y columnas que contengan
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>12</mi>
            </mrow>
          </msub>
        </math>
        .
      </p>
      <p>4. Ajustamos el signo del menor.</p>
      <p>
        5. Añadimos el segundo determinante menor al resultado anterior y
        formamos una serie de expansión.
      </p>
      <p>
        {" "}
        6. Continuamos con el tercer elemento de la primera fila, es decir,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>13</mi>
            </mrow>
          </msub>
        </math>
        . Repetimos el proceso: rallamos la fila y la columna que contengan{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>13</mi>
            </mrow>
          </msub>
        </math>
        .
      </p>
      <p>
        7. Añadimos el tercer determinante menor al resultado anterior y
        ampliamos la serie de expansión como se muestra en la siguiente
        expresión.
      </p>

      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>|A|</mo>
        <mo>=</mo>
        <mrow>
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>11</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>12</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>13</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>21</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>22</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>23</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>31</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>32</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>33</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
        </mrow>
      </math>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>=</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>11</mi>
          </mrow>
        </msub>
        <mrow>
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>22</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>23</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>32</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>33</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
        </mrow>
      </math>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>-</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>12</mi>
          </mrow>
        </msub>
        <mrow>
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>21</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>23</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>31</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>33</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
        </mrow>
      </math>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>+</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>13</mi>
          </mrow>
        </msub>
        <mrow>
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>21</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>22</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>31</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>32</mi>
                    </mrow>
                  </msub>
                </mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
        </mrow>
      </math>
      <p className="after-formula">
        La fórmula para el teorema de Laplace de una matriz A del n×n se muestra
        en la siguiente expresión:
      </p>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>|A|</mo>
        <mo>=</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>i1</mi>
          </mrow>
        </msub>
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>i1</mi>
          </mrow>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>i2</mi>
          </mrow>
        </msub>
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>i3</mi>
          </mrow>
        </msub>
        <mo>+</mo>
        <mo>...</mo>
        <mo>+</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>in</mi>
          </mrow>
        </msub>
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>in</mi>
          </mrow>
        </msub>
        <mo>=</mo>
      </math>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <munderover>
            <mo>&#x2211;</mo>
            <mn>k=1</mn>
            <mn>n</mn>
          </munderover>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>ik</mi>
            </mrow>
          </msub>
          <msub>
            <mi>A</mi>
            <mrow>
              <mi>ik</mi>
            </mrow>
          </msub>
        </mrow>
      </math>
      <p className="after-formula">
        donde esta el{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>ij</mi>
            </mrow>
          </msub>
        </math>{" "}
        que corresponde a un elemento de la matriz y del{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>c</mi>
            <mrow>
              <mi>ij</mi>
            </mrow>
          </msub>
        </math>{" "}
        es el cofactor del{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>ij</mi>
            </mrow>
          </msub>
        </math>{" "}
        del elemento
      </p>
    </div>
  );
};

export default Laplace;
