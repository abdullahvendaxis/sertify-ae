export default function AiSection() {
  return (
 <>
{/* ===== AI ===== */}
<section id="ai" className="ai-modern">
  <div className="blob bx1" />
  <div className="blob bx2" />
  <div className="container">
    <div>
      <span className="eyebrow"><span className="dot" />Sertify AI</span>
      <h2>Your <span className="gradient-text">AI legal assistant,</span> ready 24/7.</h2>
      <p>Answers legal questions, drafts documents like POAs and NOCs, and guides you through complex processes. Providers use it too, to respond faster and draft better content.</p>
      <div style={{display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap'}}>
        <a href="#" className="btn btn-gold">Try AI Assistant
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
        <a href="#" className="btn btn-outline-light">Learn more</a>
      </div>
    </div>
    <div className="ai-chat-modern">
      <div className="chat-header">
        <div className="chat-dot" />
        <div>
          <div className="chat-title">Sertify AI</div>
          <div className="chat-sub">Online. Typically replies instantly</div>
        </div>
      </div>
      <div className="msg user">
        <div className="msg-avatar">A</div>
        <div className="msg-body">How do I draft a Power of Attorney for property in Dubai?</div>
      </div>
      <div className="msg">
        <div className="msg-avatar">S</div>
        <div className="msg-body">For a property POA you'll need: passport copies, Emirates ID, and property title deed. I can draft it now, or connect you with a verified notary for same-day attestation.</div>
      </div>
      <div className="msg user">
        <div className="msg-avatar">A</div>
        <div className="msg-body">Draft it please.</div>
      </div>
      <div className="msg">
        <div className="msg-avatar">S</div>
        <div className="msg-body">Drafting your POA now, tailored to Dubai Land Department requirements. You'll review and book a notary in one click.</div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}