/*Para el primer producto de determinantes*/
return (
    <div className="">
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

/*Para el segundo producto de determinanrtes*/
return (
  <div className="">
    <div className="determinant">
      {matrix.slice(0, 2).map((row, rowIndex) => (
        <div key={rowIndex} className="matrix-row">
          {row.slice(0, 2).map((cell, columnIndex) => (
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
          {row.slice(matrix.length - 1).map((cell, columnIndex) => (
            <div className="matrix-cell" key={columnIndex}>
              <input type="text" value={cell} readOnly />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/*Para el tercer producto de determinantes*/
return (
    <div className="">
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

  /*Para el cuarto producto de determinantes */
  return (
    <div className="">
      <div className="determinant">
      {matrix.slice(0,2).map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.slice(1,2).map((cell, columnIndex) => (
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
            {row.slice(0, 1).map((cell, columnIndex) => (
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

  /*Para el quinto producto */
  return (
    <div className="">
      <div className="determinant">
      {matrix.slice(0,2).map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.slice(1,2).map((cell, columnIndex) => (
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
      <div className="determinant">
        {matrix.slice(2,4).map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.slice(0, 1).map((cell, columnIndex) => (
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
    </div>
  );

  /*Para el sexto producto */
  return (
    <div className="">
      <div className="determinant">
      {matrix.slice(0,2).map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.slice(2,3).map((cell, columnIndex) => (
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
      <div className="determinant">
        {matrix.slice(2,4).map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.slice(0, 1).map((cell, columnIndex) => (
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
    </div>
  );