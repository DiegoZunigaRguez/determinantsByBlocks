import React from 'react';
import './dev.css';
import Photo from '../../assets/Diego.jpg';

const DiegoPhoto = () => {
  return (
    <div className='dev__img'>
        <img src={Photo} alt="" srcset="" />
    </div>
  )
}

export default DiegoPhoto