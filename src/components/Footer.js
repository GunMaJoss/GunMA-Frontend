import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaEnvelope
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Give your experience for the progress of our website
        </p>
        <p className='footer-subscription-text'>
        Let us know about your feedback on this below
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='feedback'
              type='string'
              placeholder='Your Feedback'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>About App</Link>
            <Link to='/'>Term & Condition</Link>
            <Link to='/'>Privacy & Policy</Link>
            <Link to='/'>Help & Support</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
         
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={
                '//chat.whatsapp.com/Gf3WMpetc3pKp8GssWwRfM'
              }>Whatsapp</Link>

            <Link to={'//mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncGXRsxhcjsXBmdKFgwqfcbNClgRnvGcCsmPlRHzpvdNFtxjrwhbCrsJWMZKpqCXsBFdF'}>Email</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Youtube</Link>
           
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="images/logo5.png"></img>
            </Link>
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//chat.whatsapp.com/Gf3WMpetc3pKp8GssWwRfM'
              }
              target='_blank'
              aria-label='whatsapp'
            >
              <FaWhatsapp />
            </Link>
            <Link
              className='social-icon-link'
              to={'//mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncGXRsxhcjsXBmdKFgwqfcbNClgRnvGcCsmPlRHzpvdNFtxjrwhbCrsJWMZKpqCXsBFdF'}
              target='_blank'
              aria-label='Email'
            >
              <FaEnvelope/>
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/it.a.19/?utm_medium=copy_link'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/watch?v=g2JQLQfw1J8'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
          
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;