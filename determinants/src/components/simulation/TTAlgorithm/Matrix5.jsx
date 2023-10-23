import React from "react";

const Matrix5 = (props) => {
  const { parametro1, parametro2 } = props;

  const generateDeterminantContent = (matrix, step) => {
    //Se declaran las funciones para realizar los calculos
    const calculateDeterminant = (matrix) => {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    };

    const calculateSarrus = (matrix) => {
      const determinant =
        matrix[0][0] * matrix[1][1] * matrix[2][2] +
        matrix[0][1] * matrix[1][2] * matrix[2][0] +
        matrix[0][2] * matrix[1][0] * matrix[2][1] -
        matrix[0][2] * matrix[1][1] * matrix[2][0] -
        matrix[0][1] * matrix[1][0] * matrix[2][2] -
        matrix[0][0] * matrix[1][2] * matrix[2][1];

      return determinant;
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

    //Se declaran el primer producto de matrices
    const matrix1_1 = [
      [matrix[0][0], matrix[0][1]],
      [matrix[1][0], matrix[1][1]],
    ];
    const matrix1_2 = [
      [matrix[2][2], matrix[2][3], matrix[2][4]],
      [matrix[3][2], matrix[3][3], matrix[3][4]],
      [matrix[4][2], matrix[4][3], matrix[4][4]],
    ];
    //Se declara el segundo producto de matrices
    const matrix2_1 = [
      [matrix[0][0], matrix[0][2]],
      [matrix[1][0], matrix[1][2]],
    ];
    const matrix2_2 = [
      [matrix[2][1], matrix[2][3], matrix[2][4]],
      [matrix[3][1], matrix[3][3], matrix[3][4]],
      [matrix[4][1], matrix[4][3], matrix[4][4]],
    ];
    //Se declara el tercer producto de determinantes
    const matrix3_1 = [
      [matrix[0][0], matrix[0][3]],
      [matrix[1][0], matrix[1][3]],
    ];
    const matrix3_2 = [
      [matrix[2][1], matrix[2][2], matrix[2][4]],
      [matrix[3][1], matrix[3][2], matrix[3][4]],
      [matrix[4][1], matrix[4][2], matrix[4][4]],
    ];
    //Se declara el cuarto producto de determinantes
    const matrix4_1 = [
      [matrix[0][0], matrix[0][4]],
      [matrix[1][0], matrix[1][4]],
    ];
    const matrix4_2 = [
      [matrix[2][1], matrix[2][2], matrix[2][3]],
      [matrix[3][1], matrix[3][2], matrix[3][3]],
      [matrix[4][1], matrix[4][2], matrix[4][3]],
    ];
    //Se declara el quinto producto de determinantes
    const matrix5_1 = [
      [matrix[0][1], matrix[0][2]],
      [matrix[1][1], matrix[1][2]],
    ];
    const matrix5_2 = [
      [matrix[2][0], matrix[2][3], matrix[2][4]],
      [matrix[3][0], matrix[3][3], matrix[3][4]],
      [matrix[4][0], matrix[4][3], matrix[4][4]],
    ];
    //Se declara el sexto producto de determinantes
    const matrix6_1 = [
      [matrix[0][1], matrix[0][3]],
      [matrix[1][1], matrix[1][3]],
    ];
    const matrix6_2 = [
      [matrix[2][0], matrix[2][2], matrix[2][4]],
      [matrix[3][0], matrix[3][2], matrix[3][4]],
      [matrix[4][0], matrix[4][2], matrix[4][4]],
    ];
    //Se declara el septimo producto de determinantes
    const matrix7_1 = [
      [matrix[0][1], matrix[0][4]],
      [matrix[1][1], matrix[1][4]],
    ];
    const matrix7_2 = [
      [matrix[2][0], matrix[2][2], matrix[2][3]],
      [matrix[3][0], matrix[3][2], matrix[3][3]],
      [matrix[4][0], matrix[4][2], matrix[4][3]],
    ];
    //Se declara el octavo producto de determinantes
    const matrix8_1 = [
      [matrix[0][2], matrix[0][3]],
      [matrix[1][2], matrix[1][3]],
    ];
    const matrix8_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][4]],
      [matrix[3][0], matrix[3][1], matrix[3][4]],
      [matrix[4][0], matrix[4][1], matrix[4][4]],
    ];
    //Se declara el noveno producto de determinantes
    const matrix9_1 = [
      [matrix[0][2], matrix[0][4]],
      [matrix[1][2], matrix[1][4]],
    ];
    const matrix9_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][3]],
      [matrix[3][0], matrix[3][1], matrix[3][3]],
      [matrix[4][0], matrix[4][1], matrix[4][3]],
    ];
    //Se declara el decimo producto de determinantes
    const matrix10_1 = [
      [matrix[0][3], matrix[0][4]],
      [matrix[1][3], matrix[1][4]],
    ];
    const matrix10_2 = [
      [matrix[2][0], matrix[2][1], matrix[2][2]],
      [matrix[3][0], matrix[3][1], matrix[3][2]],
      [matrix[4][0], matrix[4][1], matrix[4][2]],
    ];
    /*Se colocan las variables para las sumas al final del resultado*/
    const sum = [];
    sum[0] = calculateMult(
      1,
      calculateMult(calculateDeterminant(matrix1_1), calculateSarrus(matrix1_2))
    );
    sum[1] = calculateMult(
      -1,
      calculateMult(calculateDeterminant(matrix2_1), calculateSarrus(matrix2_2))
    );
    sum[2] = calculateMult(
      1,
      calculateMult(calculateDeterminant(matrix3_1), calculateSarrus(matrix3_2))
    );
    sum[3] = calculateMult(
      -1,
      calculateMult(calculateDeterminant(matrix4_1), calculateSarrus(matrix4_2))
    );
    sum[4] = calculateMult(
      1,
      calculateMult(calculateDeterminant(matrix5_1), calculateSarrus(matrix5_2))
    );
    sum[5] = calculateMult(
      -1,
      calculateMult(calculateDeterminant(matrix6_1), calculateSarrus(matrix6_2))
    );

    sum[6] = calculateMult(
      1,
      calculateMult(calculateDeterminant(matrix7_1), calculateSarrus(matrix7_2))
    );
    sum[7] = calculateMult(
      1,
      calculateMult(calculateDeterminant(matrix8_1), calculateSarrus(matrix8_2))
    );
    sum[8] = calculateMult(
      -1,
      calculateMult(calculateDeterminant(matrix9_1), calculateSarrus(matrix9_2))
    );

    sum[9] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix10_1),
        calculateSarrus(matrix10_2)
      )
    );
    switch (step) {
      case 1:
        return (
          <div className="expansion5x5">
            <p>=</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
      case 2:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
      case 3:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
          </div>
        );
      case 4:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row highlight">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
      case 6:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
      case 7:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down ">
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
                </div>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
      case 9:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
            <p>-</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
                </div>
              ))}
            </div>
          </div>
        );
      case 10:
        return (
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
                </div>
              ))}
            </div>
            <p>+</p>
            <div className="determinant">
              {matrix.slice(0, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              ({calculateDeterminant(matrix1_1)} * {calculateSarrus(matrix1_2)})
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
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
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 18:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 2).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 19:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 20:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case 21:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>({calculateDeterminant(matrix1_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix1_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 22:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>({calculateDeterminant(matrix2_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix2_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 23:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>({calculateDeterminant(matrix3_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix3_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 24:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>({calculateDeterminant(matrix4_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix4_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 25:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>({calculateDeterminant(matrix5_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix5_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 26:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix5_1),
                calculateSarrus(matrix5_2)
              )}
              )
            </p>
            <p>-</p>
            <p>({calculateDeterminant(matrix6_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix6_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 27:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix5_1),
                calculateSarrus(matrix5_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix6_1),
                calculateSarrus(matrix6_2)
              )}
              )
            </p>
            <p>+</p>
            <p>({calculateDeterminant(matrix7_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix7_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 28:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix5_1),
                calculateSarrus(matrix5_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix6_1),
                calculateSarrus(matrix6_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix7_1),
                calculateSarrus(matrix7_2)
              )}
              )
            </p>
            <p>+</p>
            <p>({calculateDeterminant(matrix8_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix8_2)})</p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 29:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix5_1),
                calculateSarrus(matrix5_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix6_1),
                calculateSarrus(matrix6_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix7_1),
                calculateSarrus(matrix7_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix8_1),
                calculateSarrus(matrix8_2)
              )}
              )
            </p>
            <p>-</p>
            <p>({calculateDeterminant(matrix9_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix9_2)})</p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 30:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix5_1),
                calculateSarrus(matrix5_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix6_1),
                calculateSarrus(matrix6_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix7_1),
                calculateSarrus(matrix7_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix8_1),
                calculateSarrus(matrix8_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix9_1),
                calculateSarrus(matrix9_2)
              )}
              )
            </p>
            <p>+</p>
            <p>({calculateDeterminant(matrix10_1)}</p>
            <p>*</p>
            <p>{calculateSarrus(matrix10_2)})</p>
          </div>
        );
      case 31:
        return (
          <div className="expansion5x5">
            <p className="det__result">=</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix1_1),
                calculateSarrus(matrix1_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix2_1),
                calculateSarrus(matrix2_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix3_1),
                calculateSarrus(matrix3_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix4_1),
                calculateSarrus(matrix4_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix5_1),
                calculateSarrus(matrix5_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix6_1),
                calculateSarrus(matrix6_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix7_1),
                calculateSarrus(matrix7_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix8_1),
                calculateSarrus(matrix8_2)
              )}
              )
            </p>
            <p>-</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix9_1),
                calculateSarrus(matrix9_2)
              )}
              )
            </p>
            <p>+</p>
            <p>
              (
              {calculateMult(
                calculateDeterminant(matrix10_1),
                calculateSarrus(matrix10_2)
              )}
              )
            </p>
          </div>
        );
      case 32:
        return (
          <div className="expansion">
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
          </div>
        );
      case 33:
        return (
          <div className="expansion">
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
            <p>=</p>
            <p>{calculateSum(sum)}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Matrix5;
