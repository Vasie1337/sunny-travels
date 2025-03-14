import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sunny Travels</h3>
          <p>Your gateway to unforgettable summer adventures. Discover the best vacation destinations with personalized packages and exceptional service.</p>
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
