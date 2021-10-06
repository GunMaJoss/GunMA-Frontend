import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
       <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>GunMa</h2>
            <Link to='/'>About App</Link>
            <Link to='/'>Privacy & Policy</Link>
            <Link to='/'>Term & Condition</Link>
            <Link to='/'>Feedback & Suggestion</Link>
          </div>
        </div>
        <section class='social-media'>
        <div class='footer-links'>
          <div class='footer-link-items'>
            <h2>Kontak</h2>
            <Link src="logogunma2.png" to='/' >+62 822-3153-2679</Link>
            <Link to='/'>gunma.co.id</Link>
            <Link to='/'>gunma@gmail.com</Link>
          </div>
        </div>
        </section>
      </div>
      </div>

      
  
  );
}

export default Footer;
