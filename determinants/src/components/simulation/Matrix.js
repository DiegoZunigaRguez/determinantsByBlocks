const renderProductDeterminant = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="">
            <h3>Primer producto de determinantes</h3>
            <div className="determinant">
            {matrix.slice(0,2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0,1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(1,2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2,4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(2, 3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3,4).map((cell, columnIndex) => (
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
            {matrix.slice(0,2).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(0,1).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(2,3).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="determinant">
              {matrix.slice(2,4).map((row, rowIndex) => (
                <div key={rowIndex} className="matrix-row">
                  {row.slice(1, 2).map((cell, columnIndex) => (
                    <div className="matrix-cell" key={columnIndex}>
                      <input type="text" value={cell} readOnly />
                    </div>
                  ))}
                  {row.slice(3,4).map((cell, columnIndex) => (
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
  };