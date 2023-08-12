import React from 'react';
import './dev.css';
import Abraham from './Abraham';
import Diego from './Diego';

const developers = () => {
  return (
    <section className='section dev' id='developers'>
        <h2 className="section__title dev__title">Desarrolladores</h2>
        <div className='skills__container container grid'>
            <Abraham/>
            <Diego/>
        </div>
    </section>
  )
}

export default developers