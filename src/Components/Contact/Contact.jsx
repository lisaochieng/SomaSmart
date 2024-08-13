import React from 'react';
import './Contact.css';
import arrow from '../../assets/arrow.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src='' alt=''/></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum amet expedita ipsam commodi sint sed enim nostrum temporibus, veritatis vero voluptatibus necessitatibus nesciunt impedit praesentium explicabo ratione culpa consequatur recusandae.</p>
        <ul>
          <li><img src='' alt=''/>Lorem ipsum email@email.com</li>
          <li><img src='' alt=''/>+254123423445</li>
          <li><img src='' alt=''/>Lorem ipsum dolor, address KE</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now<img src={arrow} alt=''/></button>
        </form>
        <span>sending...</span>
      </div>
    </div>
  );
};

export default Contact;
