export default function AISection() {
  return (
 <>
{/* ===== AI ASSISTANT ===== */}
<section className="ai-section" id="ai">
  <div className="container">
    <div className="ai-card">
      <div>
        <span className="eyebrow" style={{background: 'rgba(212,168,87,0.2)', color: 'var(--gold)', borderColor: 'rgba(212,168,87,0.3)'}}><span className="dot" />Sertify AI</span>
        <h2>Not sure where to start? <span className="gradient-text">Just ask.</span></h2>
        <p>The Sertify AI Legal Assistant guides you through UAE legal processes, helps draft common documents like POAs and NOCs, and points you to the right verified provider for your case.</p>
        <ul className="ai-features">
          <li>
            <span className="chk">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            Answers general legal questions in plain English
          </li>
          <li>
            <span className="chk">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            Suggests the right service and provider for your need
          </li>
          <li>
            <span className="chk">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            Helps prepare documents before your booking
          </li>
        </ul>
      </div>
      <div className="ai-visual">
        <div className="ai-bubble">How do I draft a power of attorney for property management in Dubai?</div>
        <div className="ai-bubble me">To draft a POA for property management, you will need Emirates IDs of both parties, the property title deed, and a notarized POA document. I can draft a standard template for you and book a notary. Want me to proceed?</div>
        <div className="ai-typing">
          <span /><span /><span />
        </div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}