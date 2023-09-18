import React from "react";
import Matrix from "../../../../assets/A4.png";
import M11 from "../../../../assets/M11.png";
import M12 from "../../../../assets/M12.png";
import M13 from "../../../../assets/M13.png";
import M14 from "../../../../assets/M14.png";
import Expansion from "../../../../assets/expansion.png";
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
      <img srcSet={Matrix} alt="" className="formula__imagen__easy" />
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
      <img srcSet={M11} alt="" className="formula__imagen" />
      <br />
      <p>
        Para la segunda submatriz, tomamos la primera posición es decir el valor
        "2", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <img srcSet={M12} alt="" className="formula__imagen" />
      <br />
      <p>
        Para la tercera submatriz, tomamos la primera posición es decir el valor
        "3", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna.
      </p>
      <img srcSet={M13} alt="" className="formula__imagen" />
      <br />
      <p>
        Para la cuarta submatriz, tomamos la primera posición es decir el valor
        "4", ignoramos la fila y columna que estan contenidas por dicha
        posición. Una vez hecho esto, procedemos a tomar la matriz de dimensión
        3x3 que no esta incluida por dicha fila y columna. Es importante
        recordar que en esta posición el signo se cambia.
      </p>
      <img srcSet={M14} alt="" className="formula__imagen" />
      <br />
      <p>
        Una vez hecho esa expansión por separado podemos definirlo como sigue:
      </p>
      <img srcSet={Expansion} alt="" className="formula__imagen" />
      <br />
      <p>
        Como se puede observar, el calculo de determinantes aún no se puede
        realizar, por lo que a cada matriz de 3x3 se le tiene que realizar su
        respectiva expansión de laplace.
      </p>
      <p>Para la primera matriz de 3x3, se tiene lo siguiente:</p>
      <img srcSet={M111} alt="" className="formula__imagen__result" />
      <img srcSet={M112} alt="" className="formula__imagen__result" />
      <img srcSet={M113} alt="" className="formula__imagen__result" />
      <br />
      <p>Para la segunda</p>
      <img srcSet={M121} alt="" className="formula__imagen__result" />
      <img srcSet={M122} alt="" className="formula__imagen__result" />
      <img srcSet={M123} alt="" className="formula__imagen__result" />
      <br />
      <p>Para la tercera</p>
      <img srcSet={M131} alt="" className="formula__imagen__result" />
      <img srcSet={M132} alt="" className="formula__imagen__result" />
      <img srcSet={M133} alt="" className="formula__imagen__result" />
      <br />
      <p>Para la cuarta</p>
      <img srcSet={M141} alt="" className="formula__imagen__result" />
      <img srcSet={M142} alt="" className="formula__imagen__result" />
      <img srcSet={M143} alt="" className="formula__imagen__result" />
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
      <img srcSet={Resultado} alt="" className="formula__imagen__result" />
    </div>
  );
};

export default LaplaceExample;
