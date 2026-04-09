import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function HowItWorksPage() {
  return (
    <>
      <div style={{ paddingTop: 70, background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '80px 24px 60px' }}>
        <div className="container text-center">
          <div className="section-label">The Process</div>
          <h1>How <span className="text-gradient">PlugdIn</span> works</h1>
          <p style={{ maxWidth: 540, margin: '16px auto 0', fontSize: '1.1rem' }}>
            From postcode to plug-in, we map out every step so you know exactly what to expect.
          </p>
        </div>
      </div>

      <HowItWorks />

      {/* What happens on the day */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-label">Installation Day</div>
            <h2>What happens <span className="text-gradient">on the day</span></h2>
          </div>
          <div className="steps-grid" style={{ marginTop: 48 }}>
            {[
              { time: '8:00am', icon: '📲', text: 'Your electrician sends a "on my way" text with their name and ETA.' },
              { time: 'Arrival', icon: '👋', text: 'They introduce themselves, walk the install route with you, confirm the plan.' },
              { time: '~1hr', icon: '🔧', text: 'Installation begins. Most jobs take 2–4 hours depending on cable run length.' },
              { time: 'Finishing', icon: '🧹', text: 'Full tidy-up. They test the charger with your actual car.' },
              { time: 'Done!', icon: '⚡', text: 'They walk you through the app, warranty paperwork, and answer any questions.' },
            ].map((i) => (
              <div className="step-card" key={i.time}>
                <div className="step-number" style={{ fontSize: '1rem', fontWeight: 700, opacity: 0.6, fontSize: '0.9rem' }}>{i.time}</div>
                <span className="step-icon">{i.icon}</span>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to go?</h2>
          <p style={{ margin: '12px auto 32px', maxWidth: 400 }}>Takes 3 minutes to book. We handle the rest.</p>
          <Link to="/book" className="btn btn-primary btn-lg" id="how-it-works-cta">⚡ Book Now</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
