import { Link } from 'react-router-dom';

interface Props {
  name: string;
  bookingRef: string;
  selectedDate: string;
  selectedTime: string;
}

function fmtDisplay(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
}

const SLOT_LABELS: Record<string, string> = {
  morning: 'Morning (8am–12pm)',
  afternoon: 'Afternoon (12pm–4pm)',
  evening: 'Evening (4pm–7pm)',
};

export default function StepConfirmation({ name, bookingRef, selectedDate, selectedTime }: Props) {
  const firstName = name.split(' ')[0];

  return (
    <div className="confirmation-page">
      <div className="confirm-icon">⚡</div>

      <h2 style={{ fontSize: '2.2rem', marginBottom: 12 }}>
        You're all booked, {firstName}! 🎉
      </h2>

      <p style={{ fontSize: '1.1rem', maxWidth: 520, margin: '0 auto 24px' }}>
        We're on it. You'll receive a confirmation email and a text within <strong style={{ color: 'var(--text-primary)' }}>30 minutes</strong> with your electrician's details.
      </p>

      <div className="booking-ref">REF: {bookingRef}</div>

      <div style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-active)',
        borderRadius: 'var(--radius-md)',
        padding: '28px 32px',
        maxWidth: 440,
        margin: '32px auto',
        textAlign: 'left',
      }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 16 }}>
          Your appointment
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: '1.3rem' }}>📅</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{fmtDisplay(selectedDate)}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: '1.3rem' }}>🕐</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{SLOT_LABELS[selectedTime]}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: '1.3rem' }}>✅</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Electrician confirmed by email within 30 mins</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: '1.3rem' }}>🎁</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>OZEV grant eligibility check included</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
        <Link to="/" className="btn btn-secondary">← Back to Home</Link>
        <a href="#" className="btn btn-primary" id="add-to-calendar">📅 Add to Calendar</a>
      </div>

      <p style={{ marginTop: 40, fontSize: '0.85rem', color: 'var(--text-dim)' }}>
        Questions? Email <a href="mailto:hello@plugdin.co.uk" style={{ color: 'var(--brand-primary)' }}>hello@plugdin.co.uk</a> or call <a href="tel:01612345678" style={{ color: 'var(--brand-primary)' }}>0161 234 5678</a>
      </p>
    </div>
  );
}
