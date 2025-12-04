import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="brand">
        <img src="/PG.png" alt="Prestige Griffin Logo" />
        <h1>Prestige Griffin</h1>
      </div>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
