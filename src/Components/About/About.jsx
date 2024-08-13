import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play from '../../assets/play.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play} alt='' className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT SOMASMART</h3>
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus reiciendis aperiam hic asperiores quia aspernatur est mollitia expedita molestiae atque dignissimos numquam modi facilis, dolores a quam neque natus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus reiciendis aperiam hic asperiores quia aspernatur est mollitia expedita molestiae atque dignissimos numquam modi facilis, dolores a quam neque natus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus reiciendis aperiam hic asperiores quia aspernatur est mollitia expedita molestiae atque dignissimos numquam modi facilis, dolores a quam neque natus.</p>
        </div>
    </div>
  )
}

export default About