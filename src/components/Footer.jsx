import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Navigation */}
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Contact Information */}
        <div className="footer-contact">
          <p className="footer-address">
            Kuala Lumpur, Malaysia
          </p>
          <p className="footer-email">
            <a href="mailto:vignesh@prestigegriffin.com">vignesh@prestigegriffin.com</a>
          </p>
          <p className="footer-phone">
            <a href="tel:+60126880357">+60 12 688 0357</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prestige Griffin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
