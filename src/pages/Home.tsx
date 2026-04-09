import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BENEFITS = [
  { icon: '🚫', title: 'No call centres', desc: 'Book entirely online. No hold music, no callbacks, no hassle.' },
  { icon: '💷', title: 'Fixed price estimate', desc: 'See your price range before you commit. No surprise quotes.' },
  { icon: '📋', title: 'Grant handled for you', desc: 'We check OZEV eligibility and submit the grant on your behalf.' },
  { icon: '⚡', title: 'Next-day availability', desc: 'Most customers are booked within 48 hours.' },
  { icon: '🏆', title: 'Vetted electricians only', desc: 'Every partner is NAPIT or NICEIC registered with background checks.' },
  { icon: '📍', title: 'Greater Manchester only', desc: 'We go deep not wide — local knowledge, fast response times.' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />

      {/* Benefits section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label">Why PlugdIn</div>
            <h2>Built around <span className="text-gradient">your time</span></h2>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b) => (
              <div className="benefit-card" key={b.title}>
                <span className="benefit-icon">{b.icon}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ Preview */}
      <section className="section" id="faq-preview">
        <div className="container">
          <div className="text-center">
            <div className="section-label">Common Questions</div>
            <h2>Got questions? <span className="text-gradient">We've got answers.</span></h2>
          </div>
          <FAQ limit={4} />
          <div className="text-center" style={{ marginTop: 32 }}>
            <Link to="/faq" className="btn btn-secondary">See all FAQs</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-sm" style={{
        background: 'linear-gradient(135deg, rgba(0,212,168,0.1), rgba(0,168,255,0.1))',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: 16 }}>Ready to charge smarter?</h2>
          <p style={{ maxWidth: 480, margin: '0 auto 36px' }}>
            Join hundreds of Greater Manchester EV owners who got their charger fitted without the faff.
          </p>
          <Link to="/book" className="btn btn-primary btn-lg" id="cta-bottom-book">
            ⚡ Book My Install — It's Free to Request
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
