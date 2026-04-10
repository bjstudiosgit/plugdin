import { useState } from 'react';
import StepLocation from './StepLocation';
import StepCarSetup from './StepCarSetup';
import StepCharger from './StepCharger';
import StepDateTime from './StepDateTime';
import StepDetails from './StepDetails';
import StepConfirmation from './StepConfirmation';

const STEP_LABELS = ['Location', 'Your Setup', 'Charger', 'Date & Time', 'Details', 'Done'];

function genRef() {
  return 'PGD-' + Math.random().toString(36).toUpperCase().slice(2, 8);
}

export default function BookingWizard() {
  const [step, setStep] = useState(0);
  const [bookingRef] = useState(genRef);

  // Form state
  const [postcode, setPostcode] = useState('');
  const [car, setCar] = useState('');
  const [property, setProperty] = useState('');
  const [parking, setParking] = useState('');
  const [smartMeter, setSmartMeter] = useState('');
  const [chargerType, setChargerType] = useState('');
  const [chargerSpeed, setChargerSpeed] = useState('7kw');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleCarSetupChange(field: string, val: string) {
    if (field === 'car') setCar(val);
    if (field === 'property') setProperty(val);
    if (field === 'parking') setParking(val);
    if (field === 'smartMeter') setSmartMeter(val);
  }

  function handleChargerChange(field: string, val: string) {
    if (field === 'chargerType') setChargerType(val);
    if (field === 'chargerSpeed') setChargerSpeed(val);
  }

  function handleDateTimeChange(field: string, val: string) {
    if (field === 'selectedDate') setSelectedDate(val);
    if (field === 'selectedTime') setSelectedTime(val);
  }

  function handleDetailsChange(field: string, val: string) {
    if (field === 'name') setName(val);
    if (field === 'email') setEmail(val);
    if (field === 'phone') setPhone(val);
    if (field === 'message') setMessage(val);
  }

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="wizard-page">
      {/* Header with progress */}
      {step < 5 && (
        <div className="wizard-header">
          <h1>Book Your EV Charger Install</h1>
          <p>Tell us a bit about yourself — takes under 3 minutes.</p>

          <div className="progress-bar-wrap">
            <div className="progress-steps">
              {STEP_LABELS.slice(0, 5).map((label, i) => (
                <div
                  key={label}
                  className={`ps-step${i < step ? ' completed' : ''}${i === step ? ' active' : ''}`}
                >
                  <div className="ps-dot">
                    {i < step ? '✓' : i + 1}
                  </div>
                  <div className="ps-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="wizard-body">
        {step === 0 && (
          <StepLocation
            postcode={postcode}
            onChange={setPostcode}
            onNext={next}
          />
        )}
        {step === 1 && (
          <StepCarSetup
            car={car}
            property={property}
            parking={parking}
            smartMeter={smartMeter}
            onChange={handleCarSetupChange}
            onNext={next}
            onBack={back}
          />
        )}
        {step === 2 && (
          <StepCharger
            chargerType={chargerType}
            chargerSpeed={chargerSpeed}
            property={property}
            parking={parking}
            onChange={handleChargerChange}
            onNext={next}
            onBack={back}
          />
        )}
        {step === 3 && (
          <StepDateTime
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            chargerSpeed={chargerSpeed}
            onChange={handleDateTimeChange}
            onNext={next}
            onBack={back}
          />
        )}
        {step === 4 && (
          <StepDetails
            data={{ postcode, car, property, parking, chargerType, chargerSpeed, selectedDate, selectedTime }}
            name={name}
            email={email}
            phone={phone}
            message={message}
            onChange={handleDetailsChange}
            onSubmit={next}
            onBack={back}
          />
        )}
        {step === 5 && (
          <StepConfirmation
            name={name}
            bookingRef={bookingRef}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        )}
      </div>
    </div>
  );
}
