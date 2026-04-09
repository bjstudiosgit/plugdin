export default function TrustStrip() {
  const items = [
    { icon: '🏆', text: 'OZEV Approved Partners' },
    { icon: '⚡', text: 'NAPIT / NICEIC Certified' },
    { icon: '📍', text: 'Greater Manchester Only' },
    { icon: '✅', text: '12-Month Guarantee' },
    { icon: '💬', text: 'Confirmed in 30 Minutes' },
  ];

  return (
    <div className="trust-strip">
      <div className="trust-items">
        {items.map((item) => (
          <div className="trust-item" key={item.text}>
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
