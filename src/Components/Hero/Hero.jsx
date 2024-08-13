import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1>Lorem, ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque provident expedita eveniet tempore perferendis ea nobis quo at iusto, omnis nemo optio ratione saepe cupiditate non exercitationem, nisi dolor. Repellendus!</p>
            <button className='btn'>Explore <img src={arrow} alt=''/></button>
        </div>

    </div>
  )
}

export default Hero