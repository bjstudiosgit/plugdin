import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Now covering all 10 Greater Manchester boroughs
          </div>

          <h1>
            EV charger fitted.<br />
            <span className="text-gradient">Zero hassle.</span>
          </h1>

          <p>
            Tell us where you are, we'll find a vetted local electrician, 
            handle the OZEV grant, and book your installation. 
            You relax — we sort it.
          </p>

          <div className="hero-actions">
            <Link to="/book" className="btn btn-primary btn-lg">
              ⚡ Get My Charger Fitted
            </Link>
            <Link to="/how-it-works" className="btn btn-secondary">
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Floating bolt visual */}
      <div className="hero-visual">
        <div className="bolt-graphic" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Outer ring */}
            <circle className="bolt-ring" cx="160" cy="210" r="140" stroke="rgba(0,212,168,0.15)" strokeWidth="1" strokeDasharray="8 6"/>
            <circle cx="160" cy="210" r="110" stroke="rgba(0,212,168,0.08)" strokeWidth="1"/>

            {/* Glow circle */}
            <circle cx="160" cy="210" r="90" fill="rgba(0,212,168,0.05)"/>
            <circle cx="160" cy="210" r="65" fill="rgba(0,212,168,0.08)"/>

            {/* Lightning bolt */}
            <path 
              className="bolt-core"
              d="M185 80 L130 200 L165 200 L135 340 L210 185 L170 185 Z"
              fill="url(#boltGrad)"
              stroke="rgba(0,212,168,0.6)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Sparkles */}
            <circle cx="80" cy="140" r="3" fill="var(--accent)" opacity="0.8"/>
            <circle cx="240" cy="280" r="2.5" fill="var(--brand-primary)" opacity="0.6"/>
            <circle cx="100" cy="300" r="2" fill="var(--accent)" opacity="0.5"/>
            <circle cx="250" cy="150" r="3.5" fill="var(--brand-primary)" opacity="0.7"/>

            <defs>
              <linearGradient id="boltGrad" x1="135" y1="80" x2="210" y2="340" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00D4A8"/>
                <stop offset="100%" stopColor="#00A8FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
