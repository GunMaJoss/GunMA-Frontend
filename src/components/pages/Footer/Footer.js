import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
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
        Find more experiences in GunMA
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items2'>
            <h2>About Us</h2>
           <p>
           GunMA is an internship information provider platform that was founded in 2021, which was developed by a group of teenagers with IT backgrounds. It started with the problem of the number of students and high school and vocational high school students who had difficulty in finding information related to internships. This idea was present and this application began to be developed.</p>
          </div>
          <div className='footer-link-items'>
            <h2>About App</h2>
            <Link to='/AboutUs'>Term & Condition</Link>
            <Link to='/AboutUs'>Privacy & Policy</Link>
            <Link to='/bantuan'>Help</Link>
            <Link to={
                '//www.pens.ac.id/'
              }target='_blank'>Support</Link>
         
          </div>
         
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link 
            to={
              '//api.whatsapp.com/send?phone=6282231532679'
            }target='_blank'>Whatsapp</Link>
{/* 
            <Link to={'//mailto:email@gmail.com'}target='_blank'>Email</Link> */}
            <Link to={'//www.instagram.com/gunmajoss/'}target='_blank'>Instagram</Link>
            <Link to={
                '//www.youtube.com/watch?v=WMo-lk0YuFw'
              }
              target='_blank'>Youtube</Link>
           
          </div>

          <div className='footer-link-items'>
            <h2>Response</h2>
            <Link 
            to={
              '//docs.google.com/forms/d/e/1FAIpQLSeyhqaZTbK93lcG2VQ5lGLMnN2vxzJW9-lrhbUSplGxHNAXSA/viewform' }target='_blank'>Feedback</Link>

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
          <small class='website-rights'>GunMA © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//api.whatsapp.com/send?phone=6282231532679'
              }
              target='_blank'
              aria-label='whatsapp'
            >
              <FaWhatsapp />
            </Link>
            {/* <Link
              className='social-icon-link'
              to={'//mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncGXRsxhcjsXBmdKFgwqfcbNClgRnvGcCsmPlRHzpvdNFtxjrwhbCrsJWMZKpqCXsBFdF'}
              target='_blank'
              aria-label='Email'
            >
              <FaEnvelope/>
            </Link> */}
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/gunmajoss/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/watch?v=WMo-lk0YuFw'
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