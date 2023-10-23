import React from "react";

const Matrix6_4 = (props) => {
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
    const matrix1 = [
      [matrix[0][0], matrix[0][1]],
      [matrix[1][0], matrix[1][1]],
    ];
    const matrix2 = [
      [matrix[2][2], matrix[2][3]],
      [matrix[3][2], matrix[3][3]],
    ];
    const matrix3 = [
      [matrix[0][0], matrix[0][2]],
      [matrix[1][0], matrix[1][2]],
    ];
    const matrix4 = [
      [matrix[2][1], matrix[2][3]],
      [matrix[3][1], matrix[3][3]],
    ];
    const matrix5 = [
      [matrix[0][0], matrix[0][3]],
      [matrix[1][0], matrix[1][3]],
    ];
    const matrix6 = [
      [matrix[2][1], matrix[2][2]],
      [matrix[3][1], matrix[3][2]],
    ];
    const matrix7 = [
      [matrix[0][1], matrix[0][2]],
      [matrix[1][1], matrix[1][2]],
    ];
    const matrix8 = [
      [matrix[2][0], matrix[2][3]],
      [matrix[3][0], matrix[3][3]],
    ];
    const matrix9 = [
      [matrix[0][1], matrix[0][3]],
      [matrix[1][1], matrix[1][3]],
    ];
    const matrix10 = [
      [matrix[2][0], matrix[2][2]],
      [matrix[3][0], matrix[3][2]],
    ];
    const matrix11 = [
      [matrix[0][2], matrix[0][3]],
      [matrix[1][2], matrix[1][3]],
    ];
    const matrix12 = [
      [matrix[2][0], matrix[2][1]],
      [matrix[3][0], matrix[3][1]],
    ];
    const sum = [];
    sum[0] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix1),
        calculateDeterminant(matrix2)
      )
    );
    sum[1] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix3),
        calculateDeterminant(matrix4)
      )
    );
    sum[2] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix5),
        calculateDeterminant(matrix6)
      )
    );
    sum[3] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix7),
        calculateDeterminant(matrix8)
      )
    );
    sum[4] = calculateMult(
      -1,
      calculateMult(
        calculateDeterminant(matrix9),
        calculateDeterminant(matrix10)
      )
    );
    sum[5] = calculateMult(
      1,
      calculateMult(
        calculateDeterminant(matrix11),
        calculateDeterminant(matrix12)
      )
    );
    switch (step) {
      case 1:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row highlight__down">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
          </>
        );
      case 2:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row highlight__down">
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
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row highlight__down">
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
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row highlight">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row highlight__down">
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
            </div>
          </>
        );
      case 7:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
            </div>
          </>
        );
      case 8:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p className="det__result">=</p>
              <p>
                ({calculateDeterminant(matrix1)} *{" "}
                {calculateDeterminant(matrix2)})
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
            </div>
          </>
        );
      case 9:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p className="det__result">=</p>
              <p>({calculateDeterminant(matrix1)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix2)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix3)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix4)})</p>
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
            </div>
          </>
        );
      case 10:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>({calculateDeterminant(matrix1)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix2)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix3)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix4)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix5)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix6)})</p>
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
            </div>
          </>
        );
      case 11:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>({calculateDeterminant(matrix1)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix2)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix3)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix4)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix5)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix6)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix7)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix8)})</p>
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
            </div>
          </>
        );
      case 12:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>({calculateDeterminant(matrix1)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix2)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix3)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix4)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix5)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix6)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix7)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix8)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix9)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix10)})</p>
              <p>+</p>
              <div className="determinant">
                {matrix.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
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
                {matrix.slice(2, 4).map((row, rowIndex) => (
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
            </div>
          </>
        );
      case 13:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>({calculateDeterminant(matrix1)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix2)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix3)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix4)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix5)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix6)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix7)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix8)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix9)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix10)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix11)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix12)})</p>
            </div>
          </>
        );
      case 14:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix1),
                  calculateDeterminant(matrix2)
                )}
                )
              </p>
              <p>-</p>
              <p>({calculateDeterminant(matrix3)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix4)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix5)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix6)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix7)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix8)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix9)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix10)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix11)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix12)})</p>
            </div>
          </>
        );
      case 15:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix1),
                  calculateDeterminant(matrix2)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix3),
                  calculateDeterminant(matrix4)
                )}
                )
              </p>
              <p>+</p>
              <p>({calculateDeterminant(matrix5)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix6)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix7)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix8)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix9)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix10)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix11)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix12)})</p>
            </div>
          </>
        );
      case 16:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix1),
                  calculateDeterminant(matrix2)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix3),
                  calculateDeterminant(matrix4)
                )}
                )
              </p>
              <p>+</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix5),
                  calculateDeterminant(matrix6)
                )}
                )
              </p>
              <p>-</p>
              <p>({calculateDeterminant(matrix7)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix8)})</p>
              <p>-</p>
              <p>({calculateDeterminant(matrix9)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix10)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix11)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix12)})</p>
            </div>
          </>
        );
      case 17:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix1),
                  calculateDeterminant(matrix2)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix3),
                  calculateDeterminant(matrix4)
                )}
                )
              </p>
              <p>+</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix5),
                  calculateDeterminant(matrix6)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix7),
                  calculateDeterminant(matrix8)
                )}
                )
              </p>
              <p>-</p>
              <p>({calculateDeterminant(matrix9)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix10)})</p>
              <p>+</p>
              <p>({calculateDeterminant(matrix11)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix12)})</p>
            </div>
          </>
        );
      case 18:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix1),
                  calculateDeterminant(matrix2)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix3),
                  calculateDeterminant(matrix4)
                )}
                )
              </p>
              <p>+</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix5),
                  calculateDeterminant(matrix6)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix7),
                  calculateDeterminant(matrix8)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix9),
                  calculateDeterminant(matrix10)
                )}
                )
              </p>
              <p>+</p>
              <p>({calculateDeterminant(matrix11)}</p>
              <p>*</p>
              <p>{calculateDeterminant(matrix12)})</p>
            </div>
          </>
        );
      case 19:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix1),
                  calculateDeterminant(matrix2)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix3),
                  calculateDeterminant(matrix4)
                )}
                )
              </p>
              <p>+</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix5),
                  calculateDeterminant(matrix6)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix7),
                  calculateDeterminant(matrix8)
                )}
                )
              </p>
              <p>-</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix9),
                  calculateDeterminant(matrix10)
                )}
                )
              </p>
              <p>+</p>
              <p>
                (
                {calculateMult(
                  calculateDeterminant(matrix11),
                  calculateDeterminant(matrix12)
                )}
                )
              </p>
            </div>
          </>
        );
      case 20:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>{sum[0]}</p>
              <p>{sum[1] >= 0 ? `+${sum[1]}` : sum[1]}</p>
              <p>{sum[2] >= 0 ? `+${sum[2]}` : sum[2]}</p>
              <p>{sum[3] >= 0 ? `+${sum[3]}` : sum[3]}</p>
              <p>{sum[4] >= 0 ? `+${sum[4]}` : sum[4]}</p>
              <p>{sum[5] >= 0 ? `+${sum[5]}` : sum[5]}</p>
            </div>
          </>
        );
      case 21:
        return (
          <>
            <div className="determinant">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.map((cell) => (
                    <input type="text" value={cell} readOnly />
                  ))}
                </div>
              ))}
            </div>
            <div className="expansion">
              <p>=</p>
              <p>{sum[0]}</p>
              <p>{sum[1] >= 0 ? `+${sum[1]}` : sum[1]}</p>
              <p>{sum[2] >= 0 ? `+${sum[2]}` : sum[2]}</p>
              <p>{sum[3] >= 0 ? `+${sum[3]}` : sum[3]}</p>
              <p>{sum[4] >= 0 ? `+${sum[4]}` : sum[4]}</p>
              <p>{sum[5] >= 0 ? `+${sum[5]}` : sum[5]}</p>
              <p>=</p>
              <p>{calculateSum(sum)}</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Matrix6_4;
