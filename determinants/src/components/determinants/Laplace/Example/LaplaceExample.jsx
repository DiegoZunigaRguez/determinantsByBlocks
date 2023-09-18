import React from "react";
import MatrixExample from "../mobile/mobilematrix5";
import Mobilesubmatrix1 from "../mobile/mobilesubmatrix1";
import Mobilesubmatrix2 from "../mobile/mobilesubmatrix2";
import Mobilesubmatrix3 from "../mobile/mobilesubmatrix3";
import Mobilesubmatrix4 from "../mobile/mobilesubmatrix4";

const LaplaceExample = () => {
  return (
    <div>
      <p>
        Primero, definimos una matriz de dimensión 4x4 como se muestra a
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
      <Mobilesubmatrix1/>
      <br />
      <p>
        Para la segunda submatriz, tomamos la primera posición es decir el valor
        "2", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <Mobilesubmatrix2/>
      <br />
      <p>
        Para la tercera submatriz, tomamos la primera posición es decir el valor
        "3", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>
      <Mobilesubmatrix3/>
      <br />
      <p>
        Para la cuarta submatriz, tomamos la primera posición es decir el valor
        "4", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <Mobilesubmatrix4/>
      <br />
      <p>
        Una vez hecho esa expansión por separado podemos definirlo como sigue:
      </p>
      <br />
      <p>
        Como se puede observar, el calculo de determinantes aún no se puede
        realizar, por lo que a cada matriz de 3x3 se le tiene que realizar su
        respectiva expansión de laplace.
      </p>
      <p>Para la primera matriz de 3x3, se tiene lo siguiente:</p>
      
      <br />
      <p>Para la segunda</p>
      
      <br />
      <p>Para la tercera</p>
      
      <br />
      <p>Para la cuarta</p>
      
      <br />
      <p>
        Ahora podemos realizar el calculo del determinante para cada uno de los
        determinantes, siguiendo el calculo de un determinante 2x2, como se
        muestra a continuación:
      </p>
      
    </div>
  );
};

export default LaplaceExample;
