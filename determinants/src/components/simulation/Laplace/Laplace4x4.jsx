import React from "react";

const Laplace4x4 = (props) => {
  const { parametro1, parametro2 } = props;
  const generateDeterminantContent = (matrix, step) => {
    const calculateDeterminant = (matrix) => {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
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
    switch (step) {
      case 1:
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
                    <div className="matrix-cell" key={columnIndex}>
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
                    <div className="matrix-cell" key={columnIndex}>
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
                    <div className="matrix-cell" key={columnIndex}>
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
                    <div className="matrix-cell" key={columnIndex}>
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
                    <div className="matrix-cell" key={columnIndex}>
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
                    <div className="matrix-cell" key={columnIndex}>
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
        
      default:
        return null;
    }
  };

  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Laplace4x4;
