import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const loc = useLocation();
  const isBook = loc.pathname.startsWith('/book');

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-bolt">⚡</span>
        <span>Plugd<span style={{ color: 'var(--brand-primary)' }}>In</span></span>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><a href="mailto:hello@plugdin.co.uk">Contact</a></li>
      </ul>
      {!isBook && (
        <Link to="/book" className="btn btn-primary btn-sm navbar-cta">
          Book Now ⚡
        </Link>
      )}
    </nav>
  );
}
