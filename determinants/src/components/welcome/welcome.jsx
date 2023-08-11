import React from 'react';
import './welcome.css';
import Message from './message';

const Welcome = () => {
  return (
    <section className='section welcome' id='welcome'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Message/>
            </div>
        </div>
    </section>
  )
}

export default Welcome