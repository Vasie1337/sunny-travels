import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sunny Travels</h3>
          <p>Your gateway to unforgettable summer adventures. Discover the best vacation destinations with personalized packages and exceptional service.</p>
          <div className="social-links">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">i</a>
            <a href="#" className="social-icon">y</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Vacation Packages</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Popular Destinations</h3>
          <ul className="footer-links">
            <li><a href="#">Bali, Indonesia</a></li>
            <li><a href="#">Santorini, Greece</a></li>
            <li><a href="#">Maldives</a></li>
            <li><a href="#">Cancun, Mexico</a></li>
            <li><a href="#">Hawaii, USA</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><span>📱</span> +1 (555) 123-4567</li>
            <li><span>✉️</span> info@sunnytravels.com</li>
            <li><span>📍</span> 123 Travel Street, Vacation City, ST 12345</li>
          </ul>
        </div>
      </div>
      
      <div className="copyright-bar">
        &copy; {new Date().getFullYear()} Sunny Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
