import React from 'react';
import './dev.css';
import DiegoPhoto from './DiegoPhoto';

const Diego = () => {
  return (
    <div className=''>
        <div className='dev__container'>
            <DiegoPhoto/>
        </div>
        <h3 className='skills__title'>Diego Zúñiga Rodríguez</h3>
        <div className='skills__content'>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>PHP</h3>
                        <span className='skills__level'>Intermedio</span>
                    </div>
                </div>
                <div className='skills__data'>
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>NodeJS</h3>
                        <span className='skills__level'>Básico</span>
                    </div>
                </div>
                <div className='skills__data'>
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>Java</h3>
                        <span className='skills__level'>Intermedio</span>
                    </div>
                </div>
            </div>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>C#</h3>
                        <span className='skills__level'>Intermedio</span>
                </div>
                </div>
                <div className='skills__data'>
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>MySQL</h3>
                        <span className='skills__level'>Intermedio</span>
                    </div>
                </div>
                <div className='skills__data'>
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 className='skills__name'>SQL</h3>
                        <span className='skills__level'>Intermedio</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Diego