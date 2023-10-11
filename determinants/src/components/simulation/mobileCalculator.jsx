import React from "react";
import './Simulation.css';

const MobileCalculator = (props) => {
  const { parametro1, parametro2 } = props;

  const getSign = (n) => {
    return n % 2 === 0 ? 1 : -1;
  };

  const printMatrix = (mtz) => {
    for (var i = 0; i < mtz.length; i++) {
      for (var j = 0; j < mtz[i].length; j++) {
        console.log(mtz[i][j] + "\t");
      }
      console.log();
    }
  };

  const getComplementaryMatrix = (mtz, n, index0, index1) => {
    var comp = [];
    for (var i = 2, auxI = 0; i < n; i++, auxI++) {
      comp[auxI] = [];
      for (var j = 0, auxJ = 0; j < n; j++) {
        if (j === index0 || j === index1) {
          continue;
        }
        comp[auxI][auxJ++] = mtz[i][j];
      }
    }
    printMatrix(comp);
    return comp;
  };

  const determinant = (matrix, dimension) => {
    var det = 0;
    if (dimension === 2) {
      det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else if (dimension === 3) {
      det =
        matrix[0][0] * matrix[1][1] * matrix[2][2] +
        matrix[1][0] * matrix[2][1] * matrix[0][2] +
        matrix[2][0] * matrix[0][1] * matrix[1][2] -
        matrix[0][2] * matrix[1][1] * matrix[2][0] -
        matrix[1][2] * matrix[2][1] * matrix[0][0] -
        matrix[2][2] * matrix[0][1] * matrix[1][0];
    } else {
      var m0 = [[0, 0], [0, 0]]; // Inicializar m0 como una matriz 2x2
      for (var left = 0; left < dimension - 1; left++) {
        m0[0][0] = matrix[0][left];
        m0[1][0] = matrix[1][left];
        for (var right = left + 1; right < dimension; right++) {
          m0[0][1] = matrix[0][right];
          m0[1][1] = matrix[1][right];
          var aux = getComplementaryMatrix(matrix, dimension, left, right);
          det +=
            getSign(left % 2 === 1 ? right : right + 1) *
            determinant(m0, 2) *
            determinant(aux, dimension - 2);
        }
      }
    }
    return det;
  };

  return (
    <div>
      <p className="result__text">El resultado del determinante es: </p>
      <p className="result__text">{determinant(parametro1, parametro2)}</p>
    </div>
  );
};

export default MobileCalculator;
