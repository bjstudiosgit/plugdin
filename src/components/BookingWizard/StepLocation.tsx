import { useState } from 'react';
import { isGMPostcode, getGMBorough } from '../../data/gmPostcodes';

interface Props {
  postcode: string;
  onChange: (postcode: string) => void;
  onNext: () => void;
}

export default function StepLocation({ postcode, onChange, onNext }: Props) {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const borough = postcode.length >= 2 ? getGMBorough(postcode) : null;
  const valid = postcode.length >= 5 && isGMPostcode(postcode);

  function handleNext() {
    setTouched(true);
    if (postcode.trim().length < 5) {
      setError('Please enter your full postcode.');
      return;
    }
    if (!isGMPostcode(postcode)) {
      setError('Sorry, we only cover Greater Manchester. We\'re expanding soon!');
      return;
    }
    setError('');
    onNext();
  }

  return (
    <div>
      <h2 className="step-title">Where are you located?</h2>
      <p className="step-subtitle">We'll confirm you're within our Greater Manchester coverage area.</p>

      <div className="input-group" style={{ maxWidth: 340 }}>
        <label htmlFor="postcode-input">Your postcode</label>
        <input
          id="postcode-input"
          type="text"
          className={`input${touched && error ? ' error' : ''}`}
          placeholder="e.g. M1 1AE, SK3 8AT, BL1 2PQ"
          value={postcode}
          onChange={(e) => {
            onChange(e.target.value);
            if (touched) setError('');
          }}
          onBlur={() => setTouched(true)}
          maxLength={8}
          style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}
          autoFocus
        />
        {touched && error && (
          <span style={{ color: 'var(--danger)', fontSize: '0.88rem' }}>⚠️ {error}</span>
        )}
        {borough && !error && (
          <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
            📍 Looks like you're in {borough} ✓
          </span>
        )}
      </div>

      {/* Coverage map hint */}
      <div style={{ marginTop: 40 }}>
        <p style={{ fontSize: '0.9rem', marginBottom: 16 }}>
          We cover all of Greater Manchester — postcodes starting with:
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['M', 'SK', 'BL', 'OL', 'WN', 'WA'].map((p) => (
            <span key={p} style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              color: 'var(--brand-primary)',
            }}>
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="wizard-actions">
        <span />
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!postcode.trim()}
          id="step-location-next"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
