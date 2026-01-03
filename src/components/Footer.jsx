import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Logo & Tagline */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <img src="/griffin-logo.svg" alt="Prestige Griffin" />
            <span>PRESTIGE GRIFFIN</span>
          </div>
          <p className="footer-tagline">
            Strategic insights and innovative solutions for sustainable growth.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column footer-links">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Services Column */}
        <div className="footer-column footer-links">
          <h4>Services</h4>
          <nav className="footer-nav">
            <Link to="/services">Finance & Banking</Link>
            <Link to="/services">AI & Technology</Link>
            <Link to="/services">Defense</Link>
            <Link to="/services">Commodities</Link>
          </nav>
        </div>

        {/* Legal Column */}
        <div className="footer-column footer-links">
          <h4>Legal</h4>
          <nav className="footer-nav">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prestige Griffin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
