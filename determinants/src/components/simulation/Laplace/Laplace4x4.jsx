import React from "react";

const Laplace4x4 = (props) => {
  const { parametro1, parametro2 } = props;
  const generateDeterminantContent = (matrix, step) => {
    const calculateDeterminant = (matrix) => {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    };

    const calculateMult = (num1, num2) => {
      return num1 * num2;
    };

    const calculatSum1 = (num1, num2, num3) => {
      return num1 + num2 + num3;
    };

    const calculateSum = (num1, num2, num3, num4) => {
      return num1 + num2 + num3 + num4;
    };

    const shouldHighlightCell = (rowIndex, columnIndex, step) => {
      if (matrix[0].length === 4) {
        switch (step) {
          case 5:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 6:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 7:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__laplace";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 8:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 9:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 10:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 11:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 12:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 13:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 14:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 15:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__down";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
          case 16:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  case 2:
                    return "highlight__laplace";
                  case 3:
                    return "highlight";
                  default:
                    return "";
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              case 3:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  case 2:
                    return "highlight";
                  case 3:
                    return "highlight__down";
                  default:
                    return "";
                }
              default:
                return false;
            }
        }
      } else if (matrix[0].length === 5) {
        return null;
      }
    };

    const shouldHighlightCell2 = (rowIndex, columnIndex, step) => {
      if (matrix[0].length === 4) {
        switch (step) {
          case 8:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 9:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 10:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  case 1:
                    return "highlight__laplace";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  case 1:
                    return "highlight";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 11:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 12:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight__down";
                  default:
                    return false;
                }
              default:
                return false;
            }
          case 13:
            switch (rowIndex) {
              case 0:
                switch (columnIndex) {
                  case 0:
                    return "highlight__laplace";
                  default:
                    return false;
                }
              case 1:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              case 2:
                switch (columnIndex) {
                  case 0:
                    return "highlight";
                  default:
                    return false;
                }
              default:
                return false;
            }
        }
      } else if (matrix[0].length === 5) {
        return null;
      }
    };

    //Se declaran los determinantes 2x2 que se generan
    //Se declara la primera expansión
    const det_1 = [
      [matrix[2][2], matrix[2][3]],
      [matrix[3][2], matrix[3][3]],
    ];
    const det_2 = [
      [matrix[2][1], matrix[2][3]],
      [matrix[3][1], matrix[3][3]],
    ];
    const det_3 = [
      [matrix[2][1], matrix[2][2]],
      [matrix[3][1], matrix[3][2]],
    ];
    //Se declara la segunda expansión
    const det_4 = [
      [matrix[2][2], matrix[2][3]],
      [matrix[3][2], matrix[3][3]],
    ];
    const det_5 = [
      [matrix[2][0], matrix[2][3]],
      [matrix[3][0], matrix[3][3]],
    ];
    const det_6 = [
      [matrix[2][0], matrix[2][2]],
      [matrix[3][0], matrix[3][2]],
    ];
    //Se declara la segunda expansión
    const det_7 = [
      [matrix[2][1], matrix[2][3]],
      [matrix[3][1], matrix[3][3]],
    ];
    const det_8 = [
      [matrix[2][0], matrix[2][3]],
      [matrix[3][0], matrix[3][3]],
    ];
    const det_9 = [
      [matrix[2][0], matrix[2][1]],
      [matrix[3][0], matrix[3][1]],
    ];
    //Se declara la cuarta expansión
    const det_10 = [
      [matrix[2][1], matrix[2][2]],
      [matrix[3][1], matrix[3][2]],
    ];
    const det_11 = [
      [matrix[2][0], matrix[2][2]],
      [matrix[3][0], matrix[3][2]],
    ];
    const det_12 = [
      [matrix[2][0], matrix[2][1]],
      [matrix[3][0], matrix[3][1]],
    ];

    //Se declaran los elementos que pertenecen los elementos
    const a21 = [matrix[1][0]];
    const a22 = [matrix[1][1]];
    const a23 = [matrix[1][2]];
    const a24 = [matrix[1][3]];

    //Se declaran los primeros números
    const a11 = [matrix[0][0]];
    const a12 = [matrix[0][1]];
    const a13 = [matrix[0][2]];
    const a14 = [matrix[0][3]];
    //Se declaran las primeras sumas
    const sum = [];
    sum[0] = calculatSum1(
      calculateMult(calculateMult(a22, calculateDeterminant(det_1)), 1),
      calculateMult(calculateMult(a23, calculateDeterminant(det_2)), -1),
      calculateMult(calculateMult(a24, calculateDeterminant(det_3)), 1)
    );
    sum[1] = calculatSum1(
      calculateMult(calculateMult(a21, calculateDeterminant(det_4)), 1),
      calculateMult(calculateMult(a23, calculateDeterminant(det_5)), -1),
      calculateMult(calculateMult(a24, calculateDeterminant(det_6)), 1)
    );
    sum[2] = calculatSum1(
      calculateMult(calculateMult(a21, calculateDeterminant(det_7)), 1),
      calculateMult(calculateMult(a22, calculateDeterminant(det_8)), -1),
      calculateMult(calculateMult(a24, calculateDeterminant(det_9)), 1)
    );
    sum[3] = calculatSum1(
      calculateMult(calculateMult(a21, calculateDeterminant(det_10)), 1),
      calculateMult(calculateMult(a22, calculateDeterminant(det_11)), -1),
      calculateMult(calculateMult(a23, calculateDeterminant(det_12)), 1)
    );

    switch (step) {
      case 1:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 4).map((cell, columnIndex) => (
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
          <div className="expansion">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
      case 3:
        return (
          <div className="expansion">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
      case 4:
        return (
          <div className="expansion">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
      case 5:
        return (
          <div className="expansion">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 6:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 7:
        return (
          <div className="expansion">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 8:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 9:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 10:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell2(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell2(
                              rowIndex,
                              columnIndex,
                              step
                            ) === "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
          </div>
        );
      case 15:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>]</p>
          </div>
        );
      case 16:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <div className="determinant">
              {matrix.slice(1, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 3).map((cell, columnIndex) => (
                    <div
                      className={`matrix-cell ${
                        shouldHighlightCell(rowIndex, columnIndex, step) ===
                        "highlight"
                          ? "highlight"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__down"
                          ? "highlight__down"
                          : shouldHighlightCell(rowIndex, columnIndex, step) ===
                            "highlight__laplace"
                          ? "highlight__laplace"
                          : ""
                      }`}
                      key={columnIndex}
                    >
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
          </div>
        );
      case 17:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>

            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
          </div>
        );
      case 18:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>

            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
          </div>
        );
      case 19:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_2)}</p>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>

            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
          </div>
        );
      case 20:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_1)}</p>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_2)}</p>
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>* {calculateDeterminant(det_3)}</p>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <p>[</p>

            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>]</p>
          </div>
        );
      case 21:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>

            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 22:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>

            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 23:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 24:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 25:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 26:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_9)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 27:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_9)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_10)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 28:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_9)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_10)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_11)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 4).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
          </div>
        );
      case 29:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_1)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_2)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_3)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_9)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_10)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_11)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_12)}</p>
              <p>]</p>
            </>
          </div>
        );
      case 30:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>({calculateMult(a22, calculateDeterminant(det_1))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_2))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_3))})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_4)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_5)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_6)}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_9)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_10)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_11)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_12)}</p>
              <p>]</p>
            </>
          </div>
        );
      case 31:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>({calculateMult(a22, calculateDeterminant(det_1))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_2))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_3))})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>({calculateMult(a21, calculateDeterminant(det_4))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_5))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_6))})</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_7)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_8)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_9)}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_10)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_11)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_12)}</p>
              <p>]</p>
            </>
          </div>
        );
      case 32:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>({calculateMult(a22, calculateDeterminant(det_1))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_2))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_3))})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>({calculateMult(a21, calculateDeterminant(det_4))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_5))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_6))})</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>({calculateMult(a21, calculateDeterminant(det_7))})</p>
              <p>-</p>
              <p>({calculateMult(a22, calculateDeterminant(det_8))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_9))})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_10)}</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_11)}</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>* {calculateDeterminant(det_12)}</p>
              <p>]</p>
            </>
          </div>
        );
      case 33:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>({calculateMult(a22, calculateDeterminant(det_1))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_2))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_3))})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>({calculateMult(a21, calculateDeterminant(det_4))})</p>
              <p>-</p>
              <p>({calculateMult(a23, calculateDeterminant(det_5))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_6))})</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>({calculateMult(a21, calculateDeterminant(det_7))})</p>
              <p>-</p>
              <p>({calculateMult(a22, calculateDeterminant(det_8))})</p>
              <p>+</p>
              <p>({calculateMult(a24, calculateDeterminant(det_9))})</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>({calculateMult(a21, calculateDeterminant(det_10))})</p>
              <p>-</p>
              <p>({calculateMult(a22, calculateDeterminant(det_11))})</p>
              <p>+</p>
              <p>({calculateMult(a23, calculateDeterminant(det_12))})</p>
              <p>]</p>
            </>
          </div>
        );
      case 34:
        return (
          <div className="expansion__5">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>
                {calculateMult(
                  calculateMult(a22, calculateDeterminant(det_1)),
                  1
                )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a23, calculateDeterminant(det_2)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a23, calculateDeterminant(det_2)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a23, calculateDeterminant(det_2)),
                      -1
                    )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a24, calculateDeterminant(det_3)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a24, calculateDeterminant(det_3)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a24, calculateDeterminant(det_3)),
                      -1
                    )}
              </p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>
                {calculateMult(
                  calculateMult(a21, calculateDeterminant(det_4)),
                  -1
                )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a23, calculateDeterminant(det_5)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a23, calculateDeterminant(det_5)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a23, calculateDeterminant(det_5)),
                      -1
                    )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a24, calculateDeterminant(det_6)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a24, calculateDeterminant(det_6)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a24, calculateDeterminant(det_6)),
                      -1
                    )}
              </p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>
                {calculateMult(
                  calculateMult(a21, calculateDeterminant(det_7)),
                  -1
                )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a22, calculateDeterminant(det_8)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a22, calculateDeterminant(det_8)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a22, calculateDeterminant(det_8)),
                      -1
                    )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a24, calculateDeterminant(det_9)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a24, calculateDeterminant(det_9)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a24, calculateDeterminant(det_9)),
                      -1
                    )}
              </p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>
                {calculateMult(
                  calculateMult(a21, calculateDeterminant(det_10)),
                  -1
                )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a22, calculateDeterminant(det_11)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a22, calculateDeterminant(det_11)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a22, calculateDeterminant(det_11)),
                      -1
                    )}
              </p>
              <p>
                {calculateMult(
                  calculateMult(a23, calculateDeterminant(det_12)),
                  -1
                ) >= 0
                  ? `+ ${calculateMult(
                      calculateMult(a23, calculateDeterminant(det_12)),
                      -1
                    )}`
                  : calculateMult(
                      calculateMult(a23, calculateDeterminant(det_12)),
                      -1
                    )}
              </p>
              <p>]</p>
            </>
          </div>
        );
      case 35:
        return (
          <div className="expansion__2">
            <p>=</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <>
              <p>[</p>
              <p>{sum[0]}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>{sum[1]}</p>
              <p>]</p>
            </>
            <p>+</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>{sum[2]}</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              <>
                {matrix.slice(0, 1).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>[</p>
              <p>{sum[3]}</p>
              <p>]</p>
            </>
          </div>
        );
      case 36:
        return (
          <div className="expansion__2">
            <p>=</p>
            <p>({calculateMult(a11, sum[0])})</p>
            <p>-</p>
            <p>({calculateMult(a12, sum[1])})</p>
            <p>+</p>
            <p>({calculateMult(a13, sum[2])})</p>
            <p>-</p>
            <p>({calculateMult(a14, sum[3])})</p>
          </div>
        );
      case 37:
        return (
          <div className="expansion__2">
            <p>=</p>
            <p>{calculateMult(calculateMult(a11, sum[0]), 1)}</p>
            <p>
              {calculateMult(calculateMult(a12, sum[1]), -1) >= 0
                ? `+${calculateMult(calculateMult(a12, sum[1]), -1)}`
                : calculateMult(calculateMult(a12, sum[1]), -1)}
            </p>
            <p>
              {calculateMult(calculateMult(a13, sum[2]), 1) >= 0
                ? `+${calculateMult(calculateMult(a13, sum[2]), 1)}`
                : calculateMult(calculateMult(a13, sum[2]), 1)}
            </p>
            <p>
              {calculateMult(calculateMult(a14, sum[3]), -1) >= 0
                ? `+${calculateMult(calculateMult(a14, sum[3]), -1)}`
                : calculateMult(calculateMult(a14, sum[3]), -1)}
            </p>
          </div>
        );
      case 38:
        return (
          <div className="expansion__2">
            <p>=</p>
            <p>{calculateMult(calculateMult(a11, sum[0]), 1)}</p>
            <p>
              {calculateMult(calculateMult(a12, sum[1]), -1) >= 0
                ? `+${calculateMult(calculateMult(a12, sum[1]), -1)}`
                : calculateMult(calculateMult(a12, sum[1]), -1)}
            </p>
            <p>
              {calculateMult(calculateMult(a13, sum[2]), 1) >= 0
                ? `+${calculateMult(calculateMult(a13, sum[2]), 1)}`
                : calculateMult(calculateMult(a13, sum[2]), 1)}
            </p>
            <p>
              {calculateMult(calculateMult(a14, sum[3]), -1) >= 0
                ? `+${calculateMult(calculateMult(a14, sum[3]), -1)}`
                : calculateMult(calculateMult(a14, sum[3]), -1)}
            </p>
            <p>=</p>
            <p>
              {calculateSum(
                calculateMult(calculateMult(a11, sum[0]), 1),
                calculateMult(calculateMult(a12, sum[1]), -1),
                calculateMult(calculateMult(a13, sum[2]), 1),
                calculateMult(calculateMult(a14, sum[3]), -1)
              )}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Laplace4x4;
