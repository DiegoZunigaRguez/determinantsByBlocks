import React from 'react';
import './home.css';
import Data from './Data';

function Home() {
  return (
    <section className='section home' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Data/>
            </div>
        </div>
    </section>
  )
}

export default Home