import { useState } from 'react';

interface Props {
  chargerType: string;
  chargerSpeed: string;
  property: string;
  parking: string;
  onChange: (field: string, val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const CHARGER_TYPES = [
  { value: 'tethered', label: 'Tethered', icon: '🔌', sub: 'Cable built-in — just plug & go' },
  { value: 'untethered', label: 'Untethered', icon: '🔁', sub: 'Socket only — use any cable' },
];

const SPEEDS = [
  { value: '3.7kw', label: '3.7kW', sub: 'Overnight charge (~20hrs)' },
  { value: '7kw',   label: '7kW',   sub: 'Smart overnight (~8–10hrs)', recommended: true },
  { value: '22kw',  label: '22kW',  sub: 'Fast top-up (~3–4hrs)' },
];

function grantEligible(property: string, parking: string) {
  return (property === 'detached' || property === 'semi' || property === 'terraced') &&
         (parking === 'driveway' || parking === 'garage' || parking === 'offstreet');
}

export default function StepCharger({ chargerType, chargerSpeed, property, parking, onChange, onNext, onBack }: Props) {
  const [showSpeedInfo, setShowSpeedInfo] = useState(false);
  const eligible = grantEligible(property, parking);
  const canContinue = chargerType && chargerSpeed;

  return (
    <div>
      <h2 className="step-title">Choose your charger</h2>
      <p className="step-subtitle">Not sure what to pick? We'll always recommend what's best for your car and home.</p>

      {eligible && (
        <div className="grant-banner">
          <span className="gb-icon">🎉</span>
          <div className="gb-text">
            <strong>You may qualify for the OZEV Grant — up to £350 off!</strong>
            <span>Based on your property and parking type. We handle the application for you.</span>
          </div>
        </div>
      )}

      {/* Charger Type */}
      <div style={{ marginBottom: 36 }}>
        <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: 12 }}>
          Charger style
        </label>
        <div className="option-cards" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: 440 }}>
          {CHARGER_TYPES.map((ct) => (
            <div
              key={ct.value}
              className={`option-card${chargerType === ct.value ? ' selected' : ''}`}
              onClick={() => onChange('chargerType', ct.value)}
              role="button"
              tabIndex={0}
              id={`charger-${ct.value}`}
              onKeyDown={(e) => e.key === 'Enter' && onChange('chargerType', ct.value)}
            >
              <span className="oc-icon">{ct.icon}</span>
              <span className="oc-label">{ct.label}</span>
              <span className="oc-sub">{ct.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Charger Speed */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}>
            Charging speed
          </label>
          <button
            onClick={() => setShowSpeedInfo(!showSpeedInfo)}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '100px', padding: '3px 10px', fontSize: '0.78rem', color: 'var(--text-muted)', cursor: 'pointer' }}
            id="speed-info-toggle"
          >
            What's the difference?
          </button>
        </div>

        {showSpeedInfo && (
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '16px 20px', marginBottom: 16, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, animation: 'slide-in 0.3s ease' }}>
            <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>Choosing your charger speed</strong>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>
              <strong style={{ color: 'var(--brand-primary)' }}>7kW is the sweet spot</strong> for most home users — it charges overnight and works with the OZEV grant. 
              22kW is great for high-mileage drivers but needs a 3-phase supply (not standard in most GM homes). 
              3.7kW is the slowest and suits very light daily use.
            </p>
          </div>
        )}

        <div className="option-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 500 }}>
          {SPEEDS.map((sp) => (
            <div
              key={sp.value}
              className={`option-card${chargerSpeed === sp.value ? ' selected' : ''}`}
              onClick={() => onChange('chargerSpeed', sp.value)}
              role="button"
              tabIndex={0}
              id={`speed-${sp.value}`}
              onKeyDown={(e) => e.key === 'Enter' && onChange('chargerSpeed', sp.value)}
              style={{ position: 'relative' }}
            >
              {sp.recommended && (
                <span style={{
                  position: 'absolute', top: -10, right: -10,
                  background: 'var(--accent)', color: '#000',
                  fontSize: '0.65rem', fontWeight: 800, padding: '2px 8px',
                  borderRadius: '100px', fontFamily: 'var(--font-heading)',
                }}>
                  POPULAR
                </span>
              )}
              <span className="oc-label">{sp.label}</span>
              <span className="oc-sub">{sp.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wizard-actions">
        <button className="btn btn-secondary" onClick={onBack} id="step-charger-back">← Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!canContinue} id="step-charger-next">
          Continue →
        </button>
      </div>
    </div>
  );
}
