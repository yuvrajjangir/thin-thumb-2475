// src/Footer.js

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
        <div className='1no' style={{backgroundColor:"black", color:"#3BDC93" , padding:"10px", width:"25px", borderRadius:"25px"}}>CK</div>
          <h2>Credit Karma App</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <div className="footer-copyright">
        &copy; {currentYear} Credit Karma App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
