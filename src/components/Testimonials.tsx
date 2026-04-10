const TESTIMONIALS = [
  {
    stars: 5,
    text: "I was dreading the whole process — calls with tradespeople, getting quotes, figuring out grants. PlugdIn handled literally everything. Booked Sunday evening, electrician was there Thursday morning. Absolutely brilliant.",
    name: 'Sarah M.',
    location: 'Trafford',
    initials: 'SM',
  },
  {
    stars: 5,
    text: "The OZEV grant thing I'd been putting off for ages because I didn't understand it. PlugdIn told me I qualified mid-booking, handled the forms, and knocked £350 off my bill. Proper magic.",
    name: 'James O.',
    location: 'Bury',
    initials: 'JO',
  },
  {
    stars: 5,
    text: "Stockport lad here — never expected a service this slick for EV stuff. Whole booking took 5 minutes on my phone, got an email confirmation 20 minutes later. Electrician was on time, tidy, and knew his stuff.",
    name: 'Craig B.',
    location: 'Stockport',
    initials: 'CB',
  },
];

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-label">Customer Stories</div>
          <h2>Greater Manchester <span className="text-gradient">already charging</span></h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-location">📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
