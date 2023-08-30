import React from 'react';
import './dev.css';
import Abraham from './Abraham';
import Diego from './Diego';

const developers = () => {
  return (
    <div className="developers" id='developers'>
      <div className="developers__header">
        <h1>Desarrolladores</h1>
      </div>
      <div className="developers__card">
        <Abraham/>
        <Diego/>
      </div>
    </div>
  )
}

export default developers