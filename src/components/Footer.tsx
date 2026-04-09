import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo" style={{ display: 'inline-flex', textDecoration: 'none' }}>
            <span style={{ color: 'var(--brand-primary)', fontSize: '1.4rem' }}>⚡</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              Plugd<span style={{ color: 'var(--brand-primary)' }}>In</span>
            </span>
          </Link>
          <p>Greater Manchester's friendliest EV charger installation service. Vetted electricians, OZEV grants handled, zero faff.</p>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><Link to="/book">Book an Install</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul className="footer-links">
            <li><a href="mailto:hello@plugdin.co.uk">hello@plugdin.co.uk</a></li>
            <li><a href="tel:01612345678">0161 234 5678</a></li>
            <li><span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Mon–Sat, 8am–6pm</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ color: 'var(--text-muted)' }}>© 2026 PlugdIn Manchester Ltd. All rights reserved.</p>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>OZEV-approved partner network · NAPIT/NICEIC certified electricians</p>
      </div>
    </footer>
  );
}
