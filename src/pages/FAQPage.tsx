import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  return (
    <>
      <div style={{ paddingTop: 70, background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '80px 24px 60px' }}>
        <div className="container text-center">
          <div className="section-label">Help Centre</div>
          <h1>Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p style={{ maxWidth: 500, margin: '16px auto 0', fontSize: '1.05rem' }}>
            Everything you need to know before booking. Still stuck? Just email us.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FAQ />

          <div className="text-center" style={{ marginTop: 60, padding: '48px 32px', background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
              Still have a question?
            </p>
            <p style={{ marginBottom: 28 }}>Our team is based in Manchester and typically replies within a couple of hours.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:hello@plugdin.co.uk" className="btn btn-secondary" id="faq-email-cta">✉️ hello@plugdin.co.uk</a>
              <Link to="/book" className="btn btn-primary" id="faq-book-cta">⚡ Just Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
