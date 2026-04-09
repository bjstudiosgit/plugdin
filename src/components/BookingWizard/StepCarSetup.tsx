import { CAR_MAKES, PROPERTY_TYPES, PARKING_TYPES } from '../../data/carMakes';

interface Props {
  car: string;
  property: string;
  parking: string;
  smartMeter: string;
  onChange: (field: string, val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepCarSetup({ car, property, parking, smartMeter, onChange, onNext, onBack }: Props) {
  const canContinue = car && property && parking && smartMeter;

  return (
    <div>
      <h2 className="step-title">Your car & property</h2>
      <p className="step-subtitle">Just a few details so we can match you with the right charger and electrician.</p>

      {/* Car Make */}
      <div className="input-group" style={{ marginBottom: 32, maxWidth: 400 }}>
        <label htmlFor="car-make">Your electric vehicle</label>
        <select
          id="car-make"
          className="input"
          value={car}
          onChange={(e) => onChange('car', e.target.value)}
        >
          <option value="">Select your car make…</option>
          {CAR_MAKES.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {/* Property Type */}
      <div style={{ marginBottom: 32 }}>
        <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: 12 }}>
          Property type
        </label>
        <div className="option-cards">
          {PROPERTY_TYPES.map((pt) => (
            <div
              key={pt.value}
              className={`option-card${property === pt.value ? ' selected' : ''}`}
              onClick={() => onChange('property', pt.value)}
              role="button"
              tabIndex={0}
              id={`property-${pt.value}`}
              onKeyDown={(e) => e.key === 'Enter' && onChange('property', pt.value)}
            >
              <span className="oc-icon">{pt.icon}</span>
              <span className="oc-label">{pt.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Parking */}
      <div style={{ marginBottom: 32 }}>
        <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: 12 }}>
          Parking setup
        </label>
        <div className="option-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {PARKING_TYPES.map((pk) => (
            <div
              key={pk.value}
              className={`option-card${parking === pk.value ? ' selected' : ''}`}
              onClick={() => onChange('parking', pk.value)}
              role="button"
              tabIndex={0}
              id={`parking-${pk.value}`}
              onKeyDown={(e) => e.key === 'Enter' && onChange('parking', pk.value)}
            >
              <span className="oc-icon">{pk.icon}</span>
              <span className="oc-label">{pk.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Meter */}
      <div style={{ marginBottom: 28 }}>
        <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: 12 }}>
          Do you have a smart meter?
        </label>
        <div className="option-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 380 }}>
          {[['yes','Yes ✓','🔌'], ['no','No ✗','⚙️'], ['unsure','Not Sure','❓']].map(([v, l, i]) => (
            <div
              key={v}
              className={`option-card${smartMeter === v ? ' selected' : ''}`}
              onClick={() => onChange('smartMeter', v)}
              role="button"
              tabIndex={0}
              id={`smartmeter-${v}`}
              onKeyDown={(e) => e.key === 'Enter' && onChange('smartMeter', v)}
            >
              <span className="oc-icon">{i}</span>
              <span className="oc-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wizard-actions">
        <button className="btn btn-secondary" onClick={onBack} id="step-car-back">← Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!canContinue} id="step-car-next">
          Continue →
        </button>
      </div>
    </div>
  );
}
