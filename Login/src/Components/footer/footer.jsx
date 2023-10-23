import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
        <div className='1no' style={{backgroundColor:"black",marginLeft:"10px", marginBottom:"8px",color:"#3BDC93" , padding:"11px", width:"40px", borderRadius:"50%"}}>CK</div>
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
        <a href="#"><FontAwesomeIcon style={{margin:"10px"}} icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon style={{margin:"10px"}} icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon style={{margin:"10px"}} icon={faLinkedin} /></a>
      </div>
      <div className="footer-copyright">
        &copy; {currentYear} Credit Karma App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;