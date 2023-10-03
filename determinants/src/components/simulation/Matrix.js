const renderProductMatrix = () => {
  if (submatrices.length === 0 || currentStep >= submatrices.length) {
    return null;
  }

  const renderProductDeterminant = (step) => {
    if (matrixSize === 4) {
      switch (step) {
        case 0:
          return (
            <div className="">
              <h3>Primer producto de determinantes</h3>
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
            </div>
          );
        case 1:
          return (
            <div className="">
              <h3>Segundo producto de determinantes</h3>
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
            </div>
          );
        case 2:
          return (
            <div className="">
              <h3>Tercer producto de determinantes</h3>
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
            </div>
          );
        case 3:
          return (
            <div className="">
              <h3>Cuarto producto de determinantes</h3>
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
            </div>
          );
        case 4:
          return (
            <div className="">
              <h3>Quinto producto de determinantes</h3>
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
            </div>
          );
        case 5:
          return (
            <div className="">
              <h3>Sexto producto de determinantes</h3>
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
          );
        default:
          return null;
      }
    } else if (matrixSize === 5) {
      switch (step) {
        case 0:
          return (
            <div className="">
              <h3>Primer producto de determinantes</h3>
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
            </div>
          );
        case 1:
          return (
            <div className="">
              <h3>Segundo producto de determinantes</h3>
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
            </div>
          );
        case 2:
          return (
            <div className="">
              <h3>Tercer producto de determinantes</h3>
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
            </div>
          );
        case 3:
          return (
            <div className="">
              <h3>Cuarto producto de determinantes</h3>
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
            </div>
          );
        case 4:
          return (
            <div className="">
              <h3>Quinto producto de determinantes</h3>
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
            </div>
          );
        case 5:
          return (
            <div className="">
              <h3>Sexto producto de determinantes</h3>
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
            </div>
          );
        case 6:
          return (
            <div className="">
              <h3>Septimo producto de determinantes</h3>
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
        case 7:
          return (
            <div className="">
              <h3>Octavo producto de determinantes</h3>
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
            </div>
          );
        case 8:
          return (
            <div className="">
              <h3>Noveno producto de determinantes</h3>
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
            </div>
          );
        case 9:
          return (
            <div className="">
              <h3>Decimo producto de determinantes</h3>
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
        default:
          return null;
      }
    } else {
      switch (step) {
        case 0:
          return (
            <div className="">
              <h3>Primer producto de determinantes</h3>
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
        case 1:
          return (
            <div className="">
              <h3>Segundo producto de determinantes</h3>
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
        case 2:
          return (
            <div className="">
              <h3>Tercer producto de determinantes</h3>
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
        case 3:
          return (
            <div className="">
              <h3>Cuarto producto de determinantes</h3>
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
        case 4:
          return (
            <div className="">
              <h3>Quinto producto de determinantes</h3>
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
        case 5:
          return (
            <div className="">
              <h3>Sexto producto de determinantes</h3>
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
        case 6:
          return (
            <div className="">
              <h3>Septimo producto de determinantes</h3>
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
        case 7:
          return (
            <div className="">
              <h3>Octavo producto de determinantes</h3>
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
        case 8:
          return (
            <div className="">
              <h3>Noveno producto de determinantes</h3>
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
        case 9:
          return (
            <div className="">
              <h3>Decimo producto de determinantes</h3>
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
        case 10:
          return (
            <div className="">
              <h3>Onceavo producto de determinantes</h3>
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
        case 11:
          return (
            <div className="">
              <h3>Doceavo producto de determinantes</h3>
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
        case 12:
          return (
            <div className="">
              <h3>Treceavo producto de determinantes</h3>
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
        case 13:
          return (
            <div className="">
              <h3>Catorceavo producto de determinantes</h3>
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
        case 14:
          return (
            <div className="">
              <h3>Quinceavo producto de determinantes</h3>
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
        default:
          return null;
      }
    }
  };

  return renderProductDeterminant(currentStep);
};

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
  calculateMult(calculateDeterminant(matrix10_1), calculateSarrus(matrix10_2))
);
