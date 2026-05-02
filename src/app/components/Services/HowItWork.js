export default function HowItWork() {
  return (
 <>
{/* ===== HOW IT WORKS ===== */}
<section className="how-mini">
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />How booking works</span>
      <h2>Book a service in <span className="gradient-text">three steps.</span></h2>
    </div>
    <div className="how-grid">
      <div className="how-card">
        <div className="how-num">1</div>
        <h3>Choose your service</h3>
        <p>Browse categories or search for the exact service you need. Filter by price, rating, and emirate.</p>
      </div>
      <div className="how-card">
        <div className="how-num">2</div>
        <h3>Pick a verified provider</h3>
        <p>Review ratings, check prices, then pick a time slot that works for you. Pay securely in-app.</p>
      </div>
      <div className="how-card">
        <div className="how-num">3</div>
        <h3>Get it done</h3>
        <p>Chat with your provider, track progress, and receive notarized or attested documents in record time.</p>
      </div>
    </div>
  </div>
</section>

{/* ===== AI TEASER ===== */}
<section className="ai-teaser">
  <div className="ai-card">
    <div>
      <span className="eyebrow-light"><span className="dot" />Sertify AI</span>
      <h2>Not sure where to start?<br /><span className="gradient-text">Ask Sertify AI.</span></h2>
      <p>Our AI legal assistant helps you figure out which service you need, drafts documents on the spot, and connects you with the right verified provider.</p>
      <div style={{display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap'}}>
        <a href="/#ai" className="btn btn-gold">Try AI Assistant
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
      </div>
    </div>
    <div className="ai-visual">
      <div className="ai-bubble me">I need to authorize my brother to sell my property in Dubai. What do I need?</div>
      <div className="ai-bubble">You'll need a Property Power of Attorney. I can draft it now and book a notary for same-day attestation. Want me to proceed?</div>
    </div>
  </div>
</section>


 </>
  );
}