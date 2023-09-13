import React from 'react';
import Matrix from "../../../../assets/matrix3x3.png";
import '../../det.css';

const mobilematrix = () => {
  return (
    <div>
        <img srcSet={Matrix} alt="" className="formula__imagen__easy" />
    </div>
  )
}

export default mobilematrix