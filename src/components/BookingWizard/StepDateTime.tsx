interface Props {
  selectedDate: string;
  selectedTime: string;
  chargerSpeed: string;
  onChange: (field: string, val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = [
  { value: 'morning',   label: 'Morning',   sub: '8am – 12pm', icon: '🌅' },
  { value: 'afternoon', label: 'Afternoon', sub: '12pm – 4pm', icon: '☀️' },
  { value: 'evening',   label: 'Evening',   sub: '4pm – 7pm',  icon: '🌆' },
];

function getPriceRange(speed: string) {
  if (speed === '22kw') return '£750–£1,200';
  if (speed === '3.7kw') return '£350–£550';
  return '£450–£750';
}

function getCalendarDays() {
  const days: Array<{ date: Date; disabled: boolean }> = [];
  const today = new Date();
  const startOfWeek = today.getDay(); // 0=Sun

  // pad empty days at start to align with day of week
  for (let i = 0; i < startOfWeek; i++) {
    // @ts-ignore
    days.push(null);
  }

  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({ date: d, disabled: d.getDay() === 0 }); // no Sundays
  }
  return days;
}

function fmt(d: Date) {
  return d.toISOString().split('T')[0];
}

function fmtDisplay(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
}

export default function StepDateTime({ selectedDate, selectedTime, chargerSpeed, onChange, onNext, onBack }: Props) {
  const calDays = getCalendarDays();
  const canContinue = selectedDate && selectedTime;

  return (
    <div>
      <h2 className="step-title">Pick a date & time</h2>
      <p className="step-subtitle">Available slots for the next 14 days. No Sundays (electricians need a rest too).</p>

      <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: 14 }}>
        Select a date
      </label>

      {/* Calendar */}
      <div className="calendar-grid" style={{ marginBottom: 32 }}>
        {DAY_NAMES.map((d) => (
          <div className="cal-day-label" key={d}>{d}</div>
        ))}
        {calDays.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} className="cal-day empty" />
          ) : (
            <div
              key={fmt(day.date)}
              className={`cal-day${day.disabled ? ' disabled' : ''}${selectedDate === fmt(day.date) ? ' selected' : ''}`}
              onClick={() => !day.disabled && onChange('selectedDate', fmt(day.date))}
              title={day.disabled ? 'Unavailable' : fmtDisplay(fmt(day.date))}
              id={`cal-day-${fmt(day.date)}`}
              role={day.disabled ? undefined : 'button'}
              tabIndex={day.disabled ? -1 : 0}
              onKeyDown={(e) => e.key === 'Enter' && !day.disabled && onChange('selectedDate', fmt(day.date))}
            >
              {day.date.getDate()}
            </div>
          )
        )}
      </div>

      {selectedDate && (
        <>
          <label style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: 14 }}>
            Preferred time — {fmtDisplay(selectedDate)}
          </label>
          <div className="time-slots" style={{ marginBottom: 0 }}>
            {TIME_SLOTS.map((ts) => (
              <div
                key={ts.value}
                className={`time-slot${selectedTime === ts.value ? ' selected' : ''}`}
                onClick={() => onChange('selectedTime', ts.value)}
                id={`timeslot-${ts.value}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onChange('selectedTime', ts.value)}
              >
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 6 }}>{ts.icon}</span>
                <span className="time-slot-label">{ts.label}</span>
                <span className="time-slot-sub">{ts.sub}</span>
              </div>
            ))}
          </div>

          <div className="price-estimate" style={{ marginTop: 32 }}>
            <div className="pe-label">Estimated installation cost</div>
            <div className="pe-price">{getPriceRange(chargerSpeed)}</div>
            <div className="pe-note">Including VAT · OZEV grant may reduce this by up to £350 · No obligation until confirmed</div>
          </div>
        </>
      )}

      <div className="wizard-actions">
        <button className="btn btn-secondary" onClick={onBack} id="step-datetime-back">← Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={!canContinue} id="step-datetime-next">
          Continue →
        </button>
      </div>
    </div>
  );
}
