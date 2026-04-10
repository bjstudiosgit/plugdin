import { Link } from 'react-router-dom';

const STEPS = [
  {
    num: '01',
    icon: '📍',
    title: 'Tell us your postcode',
    desc: 'We instantly confirm you\'re within our Greater Manchester coverage area and match you with available local electricians.',
  },
  {
    num: '02',
    icon: '🚗',
    title: 'Tell us about your car & home',
    desc: 'We ask a few quick questions — your EV model, property type, and parking setup. No technical knowledge required.',
  },
  {
    num: '03',
    icon: '⚡',
    title: 'We check your grant eligibility',
    desc: 'Based on your answers, we automatically check if you qualify for the OZEV grant (up to £350 off). We handle the application.',
  },
  {
    num: '04',
    icon: '📅',
    title: 'Pick a date & time',
    desc: 'Choose a morning, afternoon, or evening slot. We\'ll confirm a vetted electrician within 30 minutes.',
  },
  {
    num: '05',
    icon: '🔋',
    title: 'They install, you charge',
    desc: 'Your certified electrician arrives on time, installs your charger, and shows you how to use it. Job done.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <div className="section-label">The Process</div>
          <h2>Simple from start to <span className="text-gradient">charge</span></h2>
          <p style={{ marginTop: 12, maxWidth: 540, margin: '12px auto 0' }}>
            We built PlugdIn for people who just want it sorted. No comparing quotes, 
            no technical jargon, no call centres.
          </p>
        </div>

        <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {STEPS.map((step) => (
            <div className="step-card" key={step.num}>
              <div className="step-number">{step.num}</div>
              <span className="step-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 60 }}>
          <Link to="/book" className="btn btn-primary btn-lg">
            ⚡ Book My Install Now
          </Link>
        </div>
      </div>
    </section>
  );
}
