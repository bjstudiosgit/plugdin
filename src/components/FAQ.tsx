import { useState } from 'react';
import { FAQS } from '../data/faqs';

export default function FAQ({ limit }: { limit?: number }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <div className="faq-list">
      {items.map((faq, i) => (
        <div className={`faq-item${openIdx === i ? ' open' : ''}`} key={i}>
          <button
            className="faq-question"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
            id={`faq-q-${i}`}
          >
            {faq.q}
            <span className="faq-chevron">▼</span>
          </button>
          <div className="faq-answer" aria-labelledby={`faq-q-${i}`}>
            <div className="faq-answer-inner">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
