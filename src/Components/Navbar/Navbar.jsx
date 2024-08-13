import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/dummy.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Become A Tutor</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;


