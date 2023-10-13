import React from "react";
import Matrix64 from "./Matrix6_4";
import Calculator from "./Calculator";

const Matrix6 = (props) => {
  const { parametro1, parametro2 } = props;
  const generateDeterminantContent = (matrix, step) => {
    const calculateDeterminant = (matrix) => {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    };

    const calculateMult = (value1, value2) => {
      return value1 * value2;
    };

    const calculateSum = (sum) => {
      let res = 0;
      for (let i = 0; i < sum.length; i++) {
        res += sum[i];
      }
      return res;
    };
    //Se declara el primer determinante 4x4 para poder mandarla como argumento de la función
    const matrix4 = [
      [matrix[2][2], matrix[2][3], matrix[2][4], matrix[2][5]],
      [matrix[3][2], matrix[3][3], matrix[3][4], matrix[3][5]],
      [matrix[4][2], matrix[4][3], matrix[4][4], matrix[4][5]],
      [matrix[5][2], matrix[5][3], matrix[5][4], matrix[5][5]],
    ];

    const getSign = (n) => {
      return n % 2 === 0 ? 1 : -1;
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
      //printMatrix(comp);
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
    //del paso 17-37 se expone la forma de calculo del determinante 4x4, ¿Se debe agregar la explicación?
    //Para el paso donde se calculan los determinantes por aparte, se tiene lo siguiente
    //Para el primer producto de determinantes
    const matrix1_1 = [
      [matrix[0][0], matrix[0][1]],
      [matrix[1][0], matrix[1][1]],
    ];
    const matrix1_2 = [
      [matrix[2][2], matrix[2][3], matrix[2][4], matrix[2][5]],
      [matrix[3][2], matrix[3][3], matrix[3][4], matrix[3][5]],
      [matrix[4][2], matrix[4][3], matrix[4][4], matrix[4][5]],
      [matrix[5][2], matrix[5][3], matrix[5][4], matrix[5][5]],
    ];
    //Para el segundo producto de determinantes
    const matrix2_1 = [
      [matrix[0][0], matrix[0][2]],
      [matrix[1][0], matrix[1][2]],
    ];
    const matrix2_2 = [
      [matrix[2][1], matrix[2][3], matrix[2][4], matrix[2][5]],
      [matrix[3][1], matrix[3][3], matrix[3][4], matrix[3][5]],
      [matrix[4][1], matrix[4][3], matrix[4][4], matrix[4][5]],
      [matrix[5][1], matrix[5][3], matrix[5][4], matrix[5][5]],
    ];
    //Para el tercer producto de determinantes
    const matrix3_1 = [
      [matrix[0][0], matrix[0][3]],
      [matrix[1][0], matrix[1][3]],
    ];
    const matrix3_2 = [
      [matrix[2][1], matrix[2][2], matrix[2][4], matrix[2][5]],
      [matrix[3][1], matrix[3][2], matrix[3][4], matrix[3][5]],
      [matrix[4][1], matrix[4][2], matrix[4][4], matrix[4][5]],
      [matrix[5][1], matrix[5][2], matrix[5][4], matrix[5][5]],
    ];
    //Para el cuarto producto de determinantes
    const matrix4_1 = [
      [matrix[0][0], matrix[0][4]],
      [matrix[1][0], matrix[1][4]],
    ];
    const matrix4_2 = [
      [matrix[2][1], matrix[2][2], matrix[2][3], matrix[2][5]],
      [matrix[3][1], matrix[3][2], matrix[3][3], matrix[3][5]],
      [matrix[4][1], matrix[4][2], matrix[4][3], matrix[4][5]],
      [matrix[5][1], matrix[5][2], matrix[5][3], matrix[5][5]],
    ];
    //Para el quinto producto de determinantes
    const matrix5_1 = [
      [matrix[0][0], matrix[0][5]],
      [matrix[1][0], matrix[1][5]],
    ];
    const matrix5_2 = [
      [matrix[2][1], matrix[2][2], matrix[2][3], matrix[2][4]],
      [matrix[3][1], matrix[3][2], matrix[3][3], matrix[3][4]],
      [matrix[4][1], matrix[4][2], matrix[4][3], matrix[4][4]],
      [matrix[5][1], matrix[5][2], matrix[5][3], matrix[5][4]],
    ];
    //Para el sexto producto de determinantes
    const matrix6_1 = [
      [matrix[0][1], matrix[0][2]],
      [matrix[1][1], matrix[1][2]],
    ];
    const matrix6_2 = [
      [matrix[2][0], matrix[2][3], matrix[2][4], matrix[2][5]],
      [matrix[3][0], matrix[3][3], matrix[3][4], matrix[3][5]],
      [matrix[4][0], matrix[4][3], matrix[4][4], matrix[4][5]],
      [matrix[5][0], matrix[5][3], matrix[5][4], matrix[5][5]],
    ];
    //Para el septimo producto de determinantes
    const matrix7_1 = [
      [matrix[0][1], matrix[0][3]],
      [matrix[1][1], matrix[1][3]],
    ];
    const matrix7_2 = [
      [matrix[2][0], matrix[2][2], matrix[2][4], matrix[2][5]],
      [matrix[3][0], matrix[3][2], matrix[3][4], matrix[3][5]],
      [matrix[4][0], matrix[4][2], matrix[4][4], matrix[4][5]],
      [matrix[5][0], matrix[5][2], matrix[5][4], matrix[5][5]],
    ];
    //Para el octavo producto de determinantes
    const matrix8_1 = [
      [matrix[0][1], matrix[0][4]],
      [matrix[1][1], matrix[1][4]],
    ];
    const matrix8_2 = [
      [matrix[2][0], matrix[2][2], matrix[2][3], matrix[2][5]],
      [matrix[3][0], matrix[3][2], matrix[3][3], matrix[3][5]],
      [matrix[4][0], matrix[4][2], matrix[4][3], matrix[4][5]],
      [matrix[5][0], matrix[5][2], matrix[5][3], matrix[5][5]],
    ];
    //Para el noveno producto de determinantes
    const matrix9_1 = [
      [matrix[0][1], matrix[0][5]],
      [matrix[1][1], matrix[1][5]],
    ];
    const matrix9_2 = [
      [matrix[2][0], matrix[2][2], matrix[2][3], matrix[2][4]],
      [matrix[3][0], matrix[3][2], matrix[3][3], matrix[3][4]],
      [matrix[4][0], matrix[4][2], matrix[4][3], matrix[4][4]],
      [matrix[5][0], matrix[5][2], matrix[5][3], matrix[5][4]],
    ];
    //Para el decimo producto de determinantes
    const matrix10_1 = [
      [matrix[0][2], matrix[0][3]],
      [matrix[1][2], matrix[1][3]],
    ];
    const matrix10_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][4], matrix[2][5]],
      [matrix[3][0], matrix[3][1], matrix[3][4], matrix[3][5]],
      [matrix[4][0], matrix[4][1], matrix[4][4], matrix[4][5]],
      [matrix[5][0], matrix[5][1], matrix[5][4], matrix[5][5]],
    ];
    //Para el undecimo producto de determinantes
    const matrix11_1 = [
      [matrix[0][2], matrix[0][4]],
      [matrix[1][2], matrix[1][4]],
    ];
    const matrix11_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][3], matrix[2][5]],
      [matrix[3][0], matrix[3][1], matrix[3][3], matrix[3][5]],
      [matrix[4][0], matrix[4][1], matrix[4][3], matrix[4][5]],
      [matrix[5][0], matrix[5][1], matrix[5][3], matrix[5][5]],
    ];
    //Para el doceavo producto de determinantes
    const matrix12_1 = [
      [matrix[0][2], matrix[0][5]],
      [matrix[1][2], matrix[1][5]],
    ];
    const matrix12_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][3], matrix[2][4]],
      [matrix[3][0], matrix[3][1], matrix[3][3], matrix[3][4]],
      [matrix[4][0], matrix[4][1], matrix[4][3], matrix[4][4]],
      [matrix[5][0], matrix[5][1], matrix[5][3], matrix[5][4]],
    ];
    //Para el treceavo producto de determinantes
    const matrix13_1 = [
      [matrix[0][3], matrix[0][4]],
      [matrix[1][3], matrix[1][4]],
    ];
    const matrix13_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][5]],
      [matrix[3][0], matrix[3][1], matrix[3][2], matrix[3][5]],
      [matrix[4][0], matrix[4][1], matrix[4][2], matrix[4][5]],
      [matrix[5][0], matrix[5][1], matrix[5][2], matrix[5][5]],
    ];
    //Para el catorceavo producto de determinantes
    const matrix14_1 = [
      [matrix[0][3], matrix[0][5]],
      [matrix[1][3], matrix[1][5]],
    ];
    const matrix14_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][4]],
      [matrix[3][0], matrix[3][1], matrix[3][2], matrix[3][4]],
      [matrix[4][0], matrix[4][1], matrix[4][2], matrix[4][4]],
      [matrix[5][0], matrix[5][1], matrix[5][2], matrix[5][4]],
    ];
    //Para el quinceavo producto de determinantes
    const matrix15_1 = [
      [matrix[0][4], matrix[0][5]],
      [matrix[1][4], matrix[1][5]],
    ];
    const matrix15_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][3]],
      [matrix[3][0], matrix[3][1], matrix[3][2], matrix[3][3]],
      [matrix[4][0], matrix[4][1], matrix[4][2], matrix[4][3]],
      [matrix[5][0], matrix[5][1], matrix[5][2], matrix[5][3]],
    ];

    //Se declara el arreglo donde se van a almacenar los datos de las
    //multiplicaciones
    const sum = [];
    //Para la primera sumatoria
    sum[0] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix1_1),
        determinant(matrix1_2, 4)
      )
    );
    sum[1] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix2_1),
        determinant(matrix2_2, 4)
      )
    );
    sum[2] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix3_1),
        determinant(matrix3_2, 4)
      )
    );
    sum[3] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix4_1),
        determinant(matrix4_2, 4)
      )
    );
    sum[4] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix5_1),
        determinant(matrix5_2, 4)
      )
    );
    //Para la segunda sumatoria
    sum[5] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix6_1),
        determinant(matrix6_2, 4)
      )
    );

    sum[6] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix7_1),
        determinant(matrix7_2, 4)
      )
    );
    sum[7] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix8_1),
        determinant(matrix8_2, 4)
      )
    );
    sum[8] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix9_1),
        determinant(matrix9_2, 4)
      )
    );
    //Para la tercera sumatoria
    sum[9] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix10_1),
        determinant(matrix10_2, 4)
      )
    );

    sum[10] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix11_1),
        determinant(matrix11_2, 4)
      )
    );
    sum[11] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix12_1),
        determinant(matrix12_2, 4)
      )
    );
    //Para la cuarta sumatoria
    sum[12] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix13_1),
        determinant(matrix13_2, 4)
      )
    );
    sum[13] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix14_1),
        determinant(matrix14_2, 4)
      )
    );
    //Ultimo elemento
    sum[14] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix15_1),
        determinant(matrix15_2, 4)
      )
    );
    switch (step) {
      case 1:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 9:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 10:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 11:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 12:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 13:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 14:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 15:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 16:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 17:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 18:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 19:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 20:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 21:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 22:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 23:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 24:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 25:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 26:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 27:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 28:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 29:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 30:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 31:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 32:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 33:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 34:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 35:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 36:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 37:
        return (
          <>
            <Matrix64 parametro1={matrix4} parametro2={step - 16} />
          </>
        );
      case 38:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 39:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 40:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 41:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 42:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 43:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 44:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 45:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 46:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 47:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix10_1)} *
              <Calculator parametro1={matrix10_2} parametro2={4} />)
            </p>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 48:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix10_1)} *
              <Calculator parametro1={matrix10_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix11_1)} *
              <Calculator parametro1={matrix11_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 49:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix10_1)} *
              <Calculator parametro1={matrix10_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix11_1)} *
              <Calculator parametro1={matrix11_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix12_1)} *
              <Calculator parametro1={matrix12_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 50:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix10_1)} *
              <Calculator parametro1={matrix10_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix11_1)} *
              <Calculator parametro1={matrix11_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix12_1)} *
              <Calculator parametro1={matrix12_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix13_1)} *
              <Calculator parametro1={matrix13_2} parametro2={4} />)
            </p>
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(5, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 51:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix10_1)} *
              <Calculator parametro1={matrix10_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix11_1)} *
              <Calculator parametro1={matrix11_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix12_1)} *
              <Calculator parametro1={matrix12_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix13_1)} *
              <Calculator parametro1={matrix13_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix14_1)} *
              <Calculator parametro1={matrix14_2} parametro2={4} />)
            </p>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 6).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 6).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 52:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} *
              <Calculator parametro1={matrix1_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix2_1)} *
              <Calculator parametro1={matrix2_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix3_1)} *
              <Calculator parametro1={matrix3_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix4_1)} *
              <Calculator parametro1={matrix4_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix5_1)} *
              <Calculator parametro1={matrix5_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix6_1)} *
              <Calculator parametro1={matrix6_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix7_1)} *
              <Calculator parametro1={matrix7_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix8_1)} *
              <Calculator parametro1={matrix8_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix9_1)} *
              <Calculator parametro1={matrix9_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix10_1)} *
              <Calculator parametro1={matrix10_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix11_1)} *
              <Calculator parametro1={matrix11_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix12_1)} *
              <Calculator parametro1={matrix12_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix13_1)} *
              <Calculator parametro1={matrix13_2} parametro2={4} />)
            </p>
            <p>-</p>
            <p>
              ({calculateDeterminant(matrix14_1)} *
              <Calculator parametro1={matrix14_2} parametro2={4} />)
            </p>
            <p>+</p>
            <p>
              ({calculateDeterminant(matrix15_1)} *
              <Calculator parametro1={matrix15_2} parametro2={4} />)
            </p>
          </div>
        );
      case 53:
        return (
          <div className="expansion6x6">
            <p className="det__result">=</p>
            <p>
              ({sum[0]})
            </p>
            <p>-</p>
            <p>
              ({sum[1]})
            </p>
            <p>+</p>
            <p>
            ({sum[2]})
            </p>
            <p>-</p>
            <p>
            ({sum[3]})
            </p>
            <p>+</p>
            <p>
            ({sum[4]})
            </p>
            <p>+</p>
            <p>
            ({sum[5]})
            </p>
            <p>-</p>
            <p>
            ({sum[6]})
            </p>
            <p>+</p>
            <p>
            ({sum[7]})
            </p>
            <p>-</p>
            <p>
            ({sum[8]})
            </p>
            <p>+</p>
            <p>
            ({sum[9]})
            </p>
            <p>-</p>
            <p>
            ({sum[10]})
            </p>
            <p>+</p>
            <p>
            ({sum[11]})
            </p>
            <p>+</p>
            <p>
            ({sum[12]})
            </p>
            <p>-</p>
            <p>
            ({sum[13]})
            </p>
            <p>+</p>
            <p>
            ({sum[14]})
            </p>
          </div>
        );
      case 54:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <p>{sum[0]}</p>
            <p>{sum[1] >= 0 ? `+${sum[1]}` : sum[1]}</p>
            <p>{sum[2] >= 0 ? `+${sum[2]}` : sum[2]}</p>
            <p>{sum[3] >= 0 ? `+${sum[3]}` : sum[3]}</p>
            <p>{sum[4] >= 0 ? `+${sum[4]}` : sum[4]}</p>
            <p>{sum[5] >= 0 ? `+${sum[5]}` : sum[5]}</p>
            <p>{sum[6] >= 0 ? `+${sum[6]}` : sum[6]}</p>
            <p>{sum[7] >= 0 ? `+${sum[7]}` : sum[7]}</p>
            <p>{sum[8] >= 0 ? `+${sum[8]}` : sum[8]}</p>
            <p>{sum[9] >= 0 ? `+${sum[9]}` : sum[9]}</p>
            <p>{sum[10] >= 0 ? `+${sum[10]}` : sum[10]}</p>
            <p>{sum[11] >= 0 ? `+${sum[11]}` : sum[11]}</p>
            <p>{sum[12] >= 0 ? `+${sum[12]}` : sum[12]}</p>
            <p>{sum[13] >= 0 ? `+${sum[13]}` : sum[13]}</p>
            <p>{sum[14] >= 0 ? `+${sum[14]}` : sum[14]}</p>
          </div>
        );
      case 55:
        return (
          <div className="expansion6x6">
            <p>=</p>
            <p>{sum[0]}</p>
            <p>{sum[1] >= 0 ? `+${sum[1]}` : sum[1]}</p>
            <p>{sum[2] >= 0 ? `+${sum[2]}` : sum[2]}</p>
            <p>{sum[3] >= 0 ? `+${sum[3]}` : sum[3]}</p>
            <p>{sum[4] >= 0 ? `+${sum[4]}` : sum[4]}</p>
            <p>{sum[5] >= 0 ? `+${sum[5]}` : sum[5]}</p>
            <p>{sum[6] >= 0 ? `+${sum[6]}` : sum[6]}</p>
            <p>{sum[7] >= 0 ? `+${sum[7]}` : sum[7]}</p>
            <p>{sum[8] >= 0 ? `+${sum[8]}` : sum[8]}</p>
            <p>{sum[9] >= 0 ? `+${sum[9]}` : sum[9]}</p>
            <p>{sum[10] >= 0 ? `+${sum[10]}` : sum[10]}</p>
            <p>{sum[11] >= 0 ? `+${sum[11]}` : sum[11]}</p>
            <p>{sum[12] >= 0 ? `+${sum[12]}` : sum[12]}</p>
            <p>{sum[13] >= 0 ? `+${sum[13]}` : sum[13]}</p>
            <p>{sum[14] >= 0 ? `+${sum[14]}` : sum[14]}</p>
            <p>=</p>
            <p>{calculateSum(sum)}</p>
          </div>
        );
      case 56:
      case 57:
      case 58:
      case 59:
      case 60:
      default:
        return null;
    }
  };
  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Matrix6;
