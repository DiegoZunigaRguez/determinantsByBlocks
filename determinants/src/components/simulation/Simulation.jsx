import React, { useState } from 'react';
import './simulation.css';

const Simulation = () => {
	const [size, setSize] = useState(4);
  const [matrixData, setMatrixData] = useState(Array.from(Array(4), () => new Array(4).fill(null)));

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    if (newSize < 4) {
      alert("Matrix size must be at least 4x4");
    } else {
      setSize(newSize);
      setMatrixData(Array.from(Array(newSize), () => new Array(newSize).fill(null)));
    }
  };

  const handleAutofill = () => {
	const newData = matrixData.map(row => row.map(cell => Math.floor(Math.random() * 10)));
	setMatrixData(newData);
  }
  

  const handleMatrixInputChange = (event, i, j) => {
    const newValue = parseInt(event.target.value);
    const newData = [...matrixData];
    newData[i][j] = newValue;
    setMatrixData(newData);
  };

  const renderMatrix = () => {
    let matrix = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(
          <input 
            key={`${i}-${j}`} 
            className="cell" 
            type="number" 
            value={matrixData[i][j] || ''} 
            onChange={(event) => handleMatrixInputChange(event, i, j)} 
          />
        );
      }
      matrix.push(<div key={i} className="row">{row}</div>);
    }
    return matrix;
  };

  return (
    <div>
      <div>
        <label>Matrix Size: </label>
        <input type="number" value={size} onChange={handleSizeChange} />
      </div>
      <div className="matrix">{renderMatrix()}</div>
      <button onClick={handleAutofill}>Autofill</button>
    </div>
  );
}

export default Simulation