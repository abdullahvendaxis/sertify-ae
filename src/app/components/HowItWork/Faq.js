'use client';

import { useState, useRef } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need to pay before the service is completed?",
      answer:
        "You pay at booking, but the funds are held in escrow by Sertify until your provider completes the service. If anything goes wrong, you are fully refunded.",
    },
    {
      question: "What happens if I need to cancel or reschedule?",
      answer:
        "You can cancel or reschedule directly from the app. Cancellations made before work begins are refunded in full. Late cancellations may incur a partial fee.",
    },
    {
      question: "Are my documents safe on Sertify?",
      answer:
        "Yes. All documents and chats are encrypted in transit and at rest, and access is limited to you and your chosen provider. You can delete documents anytime.",
    },
    {
      question: "Can I use Sertify for urgent, same-day services?",
      answer:
        'Yes. Many providers offer express slots. Filter by "Same day" or "Express" and you will see only providers who can handle urgent requests.',
    },
    {
      question: "Which emirates does Sertify cover?",
      answer:
        "Sertify operates across all seven emirates, with the largest network in Dubai, Abu Dhabi, and Sharjah. Expansion across the GCC is planned.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot" /> FAQ
          </span>
          <h2>
            Good to <span className="gradient-text">know.</span>
          </h2>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <div
                  className="faq-q"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="plus">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {/* Animated Answer */}
                <div
                  className={`faq-a-wrapper ${isOpen ? 'open' : ''}`}
                >
                  <div className="faq-a">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}