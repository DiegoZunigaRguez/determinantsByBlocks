import React from 'react';
import './dev.css';
import Photo from '../../assets/Abraham.jpg';

const AbrahamPhoto = () => {
  return (
    <div className='dev__img'>
        <img src={Photo} alt="" srcset="" />
    </div>
  )
}

export default AbrahamPhoto