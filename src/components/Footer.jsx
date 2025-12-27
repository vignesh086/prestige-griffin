import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-company">
          <h3>Prestige Griffin</h3>
          <p className="footer-tagline">Strategic Growth Through Innovation</p>
        </div>

        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Finance & Banking</li>
            <li>AI & Technology</li>
            <li>Defense and Arms</li>
            <li>Commodities</li>
          </ul>
        </div>

        <div className="footer-section footer-connect">
          <h4>Connect With Us</h4>
          <div className="footer-social">
            <a href="https://wa.me/60126880357" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:info@prestigegriffin.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2018-2025 Prestige Griffin. All rights reserved.</p>
        <div className="footer-legal">
          <span>Terms & Conditions</span>
          <span className="separator">|</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
