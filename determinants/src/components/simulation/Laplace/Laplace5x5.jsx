import React from "react";

const Laplace5x5 = (props) => {
  const { parametro1, parametro2 } = props;
  const generateDeterminantContent = (matrix, step) => {
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
          case 9:
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
          case 14:
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
          case 15:
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
          case 17:
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
          case 18:
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
          case 19:
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
          case 9:
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
          case 10:
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
          case 11:
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
          case 14:
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
          case 15:
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

    switch (step) {
      case 1:
        return (
          <div className="laplace">
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
      case 2:
        return (
          <div className="laplace">
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
      case 3:
        return (
          <div className="laplace">
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
      case 4:
        return (
          <div className="laplace">
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__down">
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
      case 5:
        return (
          <div className="laplace__2">
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
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
      case 6:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 7:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 8:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
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
      case 10:
        return (
          <div className="laplace__4">
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
      case 11:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 12:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 13:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          </div>
        );
      case 14:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
                </div>
              ))}
            </div>
          </div>
        );
      case 15:
        return (
          <div className="laplace__4">
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 4).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
                </div>
              ))}
            </div>
            <p>]</p>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 17:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 18:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          </div>
        );
      case 19:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
          </div>
        );
      case 20:
        return (
          <div className="laplace__2">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
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
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
      case 21:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
      case 22:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
      case 23:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
          </div>
        );
      case 24:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
      case 25:
        return (
          <div className="laplace__4">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
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
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
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
      case 26:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
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
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
      case 27:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
          </div>
        );
      case 28:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
          </div>
        );
      case 29:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(1, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 4).map((cell, columnIndex) => (
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
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
            <p>-</p>
            <>
              {matrix.slice(1, 2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
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
      case 30:
        return (
          <div className="laplace__4">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
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
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
          </div>
        );
      case 31:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 32:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 33:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(2, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0, 1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
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
      case 34:
        return (
          <div className="laplace__4">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
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
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
          </div>
        );
      case 35:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 36:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          </div>
        );
      case 37:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(3, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p>-</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
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
          </div>
        );
      case 38:
        return (
          <div className="laplace__2">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
              <p>)</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
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
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
          </div>
        );
      case 39:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 40:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
          </div>
        );
      case 41:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
            <p>=</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
            <p>+</p>
            <>
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row highlight__laplace">
                  {row.slice(4, 5).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
          <div className="laplace__2">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
              <p>)</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 4).map((cell, columnIndex) => (
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
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
          </div>
        );
      case 43:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row ">
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
      case 44:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
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
          </div>
        );
      case 45:
        return (
          <div className="laplace">
            <div className="determinant">
              {matrix.slice(2, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 3).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </>
            <div className="determinant">
              {matrix.slice(3, 5).map((row, rowIndex) => (
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
              {matrix.slice(2, 3).map((row, rowIndex) => (
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
              {matrix.slice(3, 5).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 3).map((cell, columnIndex) => (
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
          <div className="laplace__2">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
              <p>)</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(2, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
          </div>
        );
      case 47:
        return (
          <div className="laplace__2">
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
              <p>)</p>
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
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
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <p>(</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(3, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>-</p>
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(2, 3).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(3, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p>)</p>
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  </div>
                ))}
              </div>
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
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
              <p>+</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(3, 4).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>-</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(3, 4).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row ">
                    {row.slice(1, 3).map((cell, columnIndex) => (
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                    {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
            <p>+</p>
            <>
              {matrix.slice(0, 1).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(4, 5).map((cell, columnIndex) => (
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
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(0, 1).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="determinant">
                {matrix.slice(2, 5).map((row, rowIndex) => (
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
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(1, 2).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(2, 3).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>-</p>
              <>
                {matrix.slice(1, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    {row.slice(4, 5).map((cell, columnIndex) => (
                      <div className="matrix-cell" key={columnIndex}>
                        <input type="text" value={cell} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </>
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
              <p>]</p>
            </>
          </div>
        );
        case 48:
            return (
              <div className="laplace">
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row ">
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
                <p>=</p>
                <>
                  {matrix.slice(2, 3).map((row, rowIndex) => (
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
                  {matrix.slice(3, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row ">
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
          case 49:
            return (
              <div className="laplace">
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  {matrix.slice(2, 3).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </>
                <div className="determinant">
                  {matrix.slice(3, 5).map((row, rowIndex) => (
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
                  {matrix.slice(2, 3).map((row, rowIndex) => (
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
                  {matrix.slice(3, 5).map((row, rowIndex) => (
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
              </div>
            );
          case 50:
            return (
              <div className="laplace">
                <div className="determinant">
                  {matrix.slice(2, 5).map((row, rowIndex) => (
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
                  {matrix.slice(2, 3).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 2).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </>
                <div className="determinant">
                  {matrix.slice(3, 5).map((row, rowIndex) => (
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
                  {matrix.slice(2, 3).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(2, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </>
                <div className="determinant">
                  {matrix.slice(3, 5).map((row, rowIndex) => (
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
                  {matrix.slice(2, 3).map((row, rowIndex) => (
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
                  {matrix.slice(3, 5).map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                      {row.slice(1, 3).map((cell, columnIndex) => (
                        <div className="matrix-cell" key={columnIndex}>
                          <input type="text" value={cell} readOnly />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          
      default:
        break;
    }
  };
  return <div>{generateDeterminantContent(parametro1, parametro2)}</div>;
};

export default Laplace5x5;
