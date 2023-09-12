import React from "react";
import MatrixExample from "./MatrixExample";
import SubmatrixM11 from "./SubmatrixM11";
import SubmatrixM12 from "./SubmatrixM12";
import SubmatrixM13 from "./SubmatrixM13";
import SubmatrixM14 from "./SubmatrixM14";
import Expansion from "./Expansion";
import SubmatrixM111 from "./SubmatrixM11_1";
import SubmatrixM121 from "./SubmatrixM12_1";
import SubmatrixM131 from "./SubmatrixM13_1";
import SubmatrixM141 from "./SubmatrixM14_1";
import Matrix22 from "./Matrix22";

const LaplaceExample = () => {
  return (
    <div>
      <p>
        Primero, definimos una matriz de dimensión 5x5 como se muestra a
        continuación:
      </p>
      <MatrixExample />
      <p>
        Posterior a ello, generamos las submatrices siguiendo la expresión
        anterior:
      </p>
      <p>
        Para la primera submatriz, tomamos la primera posición es decir el valor
        "1", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>
      <SubmatrixM11 />
      <br />
      <p>
        Para la segunda submatriz, tomamos la primera posición es decir el valor
        "2", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <SubmatrixM12 />
      <br />
      <p>
        Para la tercera submatriz, tomamos la primera posición es decir el valor
        "3", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>
      <SubmatrixM13 />
      <br />
      <p>
        Para la cuarta submatriz, tomamos la primera posición es decir el valor
        "4", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <SubmatrixM14 />
      <br />
      <p>
        Una vez hecho esa expansión por separado podemos definirlo como sigue:
      </p>
      <Expansion />
      <br />
      <p>
        Como se puede observar, el calculo de determinantes aún no se puede
        realizar, por lo que a cada matriz de 3x3 se le tiene que realizar su
        respectiva expansión de laplace.
      </p>
      <p>Para la primera matriz de 3x3, se tiene lo siguiente:</p>
      <SubmatrixM111 />
      <br />
      <p>Para la segunda</p>
      <SubmatrixM121 />
      <br />
      <p>Para la tercera</p>
      <SubmatrixM131 />
      <br />
      <p>Para la cuarta</p>
      <SubmatrixM141 />
      <br />
      <p>
        Ahora podemos realizar el calculo del determinante para cada uno de los
        determinantes, siguiendo el calculo de un determinante 2x2, como se
        muestra a continuación:
      </p>
      <Matrix22/>
    </div>
  );
};

export default LaplaceExample;
