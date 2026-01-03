import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="brand">
        <img src="/PG.png" alt="Prestige Griffin Logo" />
        <h1>Prestige Griffin</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <nav className={isMenuOpen ? 'active' : ''}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About Us</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link>
        <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={closeMenu}>Careers</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
