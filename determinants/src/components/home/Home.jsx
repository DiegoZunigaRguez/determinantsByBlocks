import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';

function Home() {
  return (
    <section className='section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Social/>
                <Data/>
            </div>
        </div>
    </section>
  )
}

export default Home