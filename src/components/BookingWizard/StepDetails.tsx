import { useState } from 'react';

interface BookingData {
  postcode: string;
  car: string;
  property: string;
  parking: string;
  chargerType: string;
  chargerSpeed: string;
  selectedDate: string;
  selectedTime: string;
}

interface Props {
  data: BookingData;
  name: string;
  email: string;
  phone: string;
  message: string;
  onChange: (field: string, val: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

function fmtDisplay(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
}

const SLOT_LABELS: Record<string, string> = {
  morning: 'Morning (8am–12pm)',
  afternoon: 'Afternoon (12pm–4pm)',
  evening: 'Evening (4pm–7pm)',
};

export default function StepDetails({ data, name, email, phone, message, onChange, onSubmit, onBack }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!email.includes('@')) e.email = 'Please enter a valid email address.';
    if (phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid UK phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (validate()) onSubmit();
  }

  const speedLabel: Record<string, string> = { '3.7kw': '3.7kW', '7kw': '7kW', '22kw': '22kW' };

  return (
    <div>
      <h2 className="step-title">Almost done!</h2>
      <p className="step-subtitle">Just your contact details — we'll confirm your booking within 30 minutes.</p>

      {/* Booking Summary */}
      <div className="summary-card">
        <div className="summary-row">
          <span className="sr-label">📍 Postcode</span>
          <span className="sr-val">{data.postcode.toUpperCase()}</span>
        </div>
        <div className="summary-row">
          <span className="sr-label">🚗 Vehicle</span>
          <span className="sr-val">{data.car}</span>
        </div>
        <div className="summary-row">
          <span className="sr-label">🏠 Property</span>
          <span className="sr-val capitalize">{data.property} · {data.parking}</span>
        </div>
        <div className="summary-row">
          <span className="sr-label">⚡ Charger</span>
          <span className="sr-val capitalize">{data.chargerType} · {speedLabel[data.chargerSpeed] || data.chargerSpeed}</span>
        </div>
        <div className="summary-row">
          <span className="sr-label">📅 Appointment</span>
          <span className="sr-val">{fmtDisplay(data.selectedDate)} · {SLOT_LABELS[data.selectedTime]}</span>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div className="input-group">
          <label htmlFor="detail-name">Full name *</label>
          <input
            id="detail-name"
            type="text"
            className={`input${errors.name ? ' error' : ''}`}
            placeholder="e.g. Sarah Moss"
            value={name}
            onChange={(e) => { onChange('name', e.target.value); setErrors(prev => ({ ...prev, name: '' })); }}
          />
          {errors.name && <span style={{ color: 'var(--danger)', fontSize: '0.82rem' }}>{errors.name}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="detail-phone">Mobile number *</label>
          <input
            id="detail-phone"
            type="tel"
            className={`input${errors.phone ? ' error' : ''}`}
            placeholder="e.g. 07700 900123"
            value={phone}
            onChange={(e) => { onChange('phone', e.target.value); setErrors(prev => ({ ...prev, phone: '' })); }}
          />
          {errors.phone && <span style={{ color: 'var(--danger)', fontSize: '0.82rem' }}>{errors.phone}</span>}
        </div>
      </div>

      <div className="input-group" style={{ marginBottom: 20 }}>
        <label htmlFor="detail-email">Email address *</label>
        <input
          id="detail-email"
          type="email"
          className={`input${errors.email ? ' error' : ''}`}
          placeholder="e.g. sarah@email.com"
          value={email}
          onChange={(e) => { onChange('email', e.target.value); setErrors(prev => ({ ...prev, email: '' })); }}
        />
        {errors.email && <span style={{ color: 'var(--danger)', fontSize: '0.82rem' }}>{errors.email}</span>}
      </div>

      <div className="input-group" style={{ marginBottom: 28 }}>
        <label htmlFor="detail-message">Anything else we should know? (optional)</label>
        <textarea
          id="detail-message"
          className="input"
          placeholder="e.g. parking access info, gate codes, specific concerns…"
          value={message}
          onChange={(e) => onChange('message', e.target.value)}
          rows={3}
          style={{ resize: 'vertical' }}
        />
      </div>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: 28, lineHeight: 1.6 }}>
        By confirming, you agree to be contacted by PlugdIn and a vetted partner electrician. 
        No payment is taken now — your electrician will quote on-site before any work begins.
      </p>

      <div className="wizard-actions">
        <button className="btn btn-secondary" onClick={onBack} id="step-details-back">← Back</button>
        <button className="btn btn-accent btn-lg" onClick={handleSubmit} id="step-details-submit">
          ⚡ Confirm My Booking
        </button>
      </div>
    </div>
  );
}
