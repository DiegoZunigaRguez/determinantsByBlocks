import React from "react";
import MatrixExample from "../mobile/mobilematrix5";
import Mobilesubmatrix1 from "../mobile/mobilesubmatrix1";
import Mobilesubmatrix2 from "../mobile/mobilesubmatrix2";
import Mobilesubmatrix3 from "../mobile/mobilesubmatrix3";
import Mobilesubmatrix4 from "../mobile/mobilesubmatrix4";
import Mobilematrixexpansion from "../mobile/mobilematrixexpansion";
import M111 from "../../../../assets/M111.png";
import M112 from "../../../../assets/M112.png";
import M113 from "../../../../assets/M113.png";
import M121 from "../../../../assets/M121.png";
import M122 from "../../../../assets/M122.png";
import M123 from "../../../../assets/M123.png";
import M131 from "../../../../assets/M131.png";
import M132 from "../../../../assets/M132.png";
import M133 from "../../../../assets/M133.png";
import M141 from "../../../../assets/M141.png";
import M142 from "../../../../assets/M142.png";
import M143 from "../../../../assets/M143.png";
import Expansion2 from "../../../../assets/MExpansion2.png";
import M22 from "../../../../assets/Matrix2x2.png";
import Resultado from "../../../../assets/Resultado.png";

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
      <Mobilesubmatrix1 />
      <br />
      <p>
        Para la segunda submatriz, tomamos la primera posición es decir el valor
        "2", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <Mobilesubmatrix2 />
      <br />
      <p>
        Para la tercera submatriz, tomamos la primera posición es decir el valor
        "3", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>
      <Mobilesubmatrix3 />
      <br />
      <p>
        Para la cuarta submatriz, tomamos la primera posición es decir el valor
        "4", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <Mobilesubmatrix4 />
      <br />
      <p>
        Una vez hecho esa expansión por separado podemos definirlo como sigue:
      </p>
      <Mobilematrixexpansion />
      <br />
      <p>
        Como se puede observar, el calculo de determinantes aún no se puede
        realizar, por lo que a cada matriz de 3x3 se le tiene que realizar su
        respectiva expansión de laplace.
      </p>
      <p>Para la primera matriz de 3x3, se tiene lo siguiente:</p>
      <img srcSet={M111} alt="" className="formula__imagen__easy" />
      <img srcSet={M112} alt="" className="formula__imagen__easy" />
      <img srcSet={M113} alt="" className="formula__imagen__easy" />
      <br />
      <p>Para la segunda</p>
      <img srcSet={M121} alt="" className="formula__imagen__easy" />
      <img srcSet={M122} alt="" className="formula__imagen__easy" />
      <img srcSet={M123} alt="" className="formula__imagen__easy" />
      <br />
      <p>Para la tercera</p>
      <img srcSet={M131} alt="" className="formula__imagen__easy" />
      <img srcSet={M132} alt="" className="formula__imagen__easy" />
      <img srcSet={M133} alt="" className="formula__imagen__easy" />
      <br />
      <p>Para la cuarta</p>
      <img srcSet={M141} alt="" className="formula__imagen__easy" />
      <img srcSet={M142} alt="" className="formula__imagen__easy" />
      <img srcSet={M143} alt="" className="formula__imagen__easy" />
      <br />
      <p>Una vez hecha esta ultima expansión tenemos lo siguiente:</p>
      <img srcSet={Expansion2} alt="" className="formula__imagen" />
      <p>
        <br />
        Ahora podemos realizar el calculo del determinante para cada uno de los
        determinantes, siguiendo el calculo de un determinante 2x2, como se
        muestra a continuación:
      </p>
      <img srcSet={M22} alt="" className="formula__imagen" />
      <p>
        <br />
        Finalmente el resultado del determinante es el siguiente:
      </p>
      <img srcSet={Resultado} alt="" className="formula__imagen" />
    </div>
  );
};

export default LaplaceExample;
