export default function Hero() {
  return (
 <>

<div>
  {/* ===== HERO ===== */}
  <section className="page-hero">
    <div className="hero-bg">
      <div className="blob b1" />
      <div className="blob b2" />
    </div>
    <div className="container page-hero-content">
      <div className="eyebrow-light"><span className="dot" />How It Works</div>
      <h1>Legal help, in <span className="gradient-text">four simple steps.</span></h1>
      <p className="lead">From finding the right professional to tracking the outcome of your case, Sertify keeps every step transparent, secure, and in your pocket.</p>
      <div className="hero-cta">
        <a href="services.html" className="btn btn-gold">Explore Services</a>
        <a href="#flow" className="btn btn-outline-light">See the Flow</a>
      </div>
    </div>
  </section>
  {/* ===== JOURNEY STEPS ===== */}
  <section id="flow">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow"><span className="dot" />User Journey</span>
        <h2>Your Sertify journey, <span className="gradient-text">step by step.</span></h2>
        <p>Whether you need a notary, a lawyer, or a simple typing service, the experience is the same. Fast, clear, and fully trackable.</p>
      </div>
      {/* STEP 1 */}
      <div className="step-row">
        <div className="step-content">
          <div className="step-number"><span className="num">1</span>Discover</div>
          <h2>Find the <span className="gradient-text">right professional.</span></h2>
          <p>Browse 1,200+ verified legal and notary providers across the UAE. Filter by service, emirate, rating, language, or turnaround time.</p>
          <ul className="step-points">
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Smart filters for every service category
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              See verified badges, ratings, and reviews up front
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Compare prices transparently before booking
            </li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="mock-search">
            <div className="mock-search-input">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
              <span>Notary near Business Bay</span>
            </div>
            <div className="mock-chips">
              <span className="mock-chip active">Notarization</span>
              <span className="mock-chip">Dubai</span>
              <span className="mock-chip">4.5+</span>
            </div>
            <div className="mock-result">
              <div className="mock-avatar">AM</div>
              <div className="mock-result-body">
                <div className="t">Al Marzooqi Legal</div>
                <div className="s">Notarization • 4.9 (212 reviews)</div>
              </div>
              <div className="mock-result-rate">AED 150</div>
            </div>
            <div className="mock-result">
              <div className="mock-avatar g">KH</div>
              <div className="mock-result-body">
                <div className="t">Khalid Hamdan</div>
                <div className="s">Independent Notary • 4.8 (168)</div>
              </div>
              <div className="mock-result-rate">AED 175</div>
            </div>
          </div>
        </div>
      </div>
      {/* STEP 2 */}
      <div className="step-row reverse">
        <div className="step-content">
          <div className="step-number"><span className="num">2</span>Book</div>
          <h2>Book instantly at a <span className="gradient-text">fair price.</span></h2>
          <p>Pick a date, confirm the fee, and lock in your booking. No haggling, no hidden charges. Urgent bookings can be fast-tracked in hours.</p>
          <ul className="step-points">
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Transparent, upfront pricing
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Secure payment held until service completion
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Same-day and express slots available
            </li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="mock-book">
            <div className="mb-title">Notarization of POA</div>
            <div className="mb-sub">Al Marzooqi Legal • Business Bay</div>
            <div className="mb-lbl">Select Date</div>
            <div className="mb-dates">
              <div className="mb-date"><div className="d">14</div>Tue</div>
              <div className="mb-date active"><div className="d">15</div>Wed</div>
              <div className="mb-date"><div className="d">16</div>Thu</div>
              <div className="mb-date"><div className="d">17</div>Fri</div>
            </div>
            <div className="mb-price">
              <span className="t">Total (incl. VAT)</span>
              <span className="p">AED 175</span>
            </div>
            <button className="mb-confirm">Confirm Booking</button>
          </div>
        </div>
      </div>
      {/* STEP 3 */}
      <div className="step-row">
        <div className="step-content">
          <div className="step-number"><span className="num">3</span>Chat</div>
          <h2>Communicate <span className="gradient-text">in one place.</span></h2>
          <p>Share documents, clarify details, and stay aligned with your provider through Sertify's built-in secure chat. Everything stays logged and encrypted.</p>
          <ul className="step-points">
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Encrypted in-app messaging
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Upload IDs, contracts, and legal documents safely
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Full conversation history attached to your booking
            </li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="mock-chat">
            <div className="mc-head">
              <div className="mock-avatar">AM</div>
              <div>
                <div className="t">Al Marzooqi Legal</div>
                <div className="s">Online</div>
              </div>
            </div>
            <div className="chat-bubble them">Hi Aadil, could you share a copy of your Emirates ID?</div>
            <div className="chat-bubble me">Sure, uploading now.</div>
            <div className="chat-file">
              <div className="cf-icon">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <div className="cf-text">
                <div className="t">Emirates_ID.pdf</div>
                <div className="s">284 KB • Encrypted</div>
              </div>
            </div>
            <div className="chat-bubble them">Received. Your POA draft will be ready in 2 hours.</div>
          </div>
        </div>
      </div>
      {/* STEP 4 */}
      <div className="step-row reverse">
        <div className="step-content">
          <div className="step-number"><span className="num">4</span>Track</div>
          <h2>Track every step, <span className="gradient-text">start to finish.</span></h2>
          <p>Live status updates keep you informed from submission to completion. Every milestone is timestamped, and your booking history is always one tap away.</p>
          <ul className="step-points">
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Live booking and case status
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Dubai Courts validation for eligible services
            </li>
            <li>
              <span className="chk">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              Invoices and documents stored in one place
            </li>
          </ul>
        </div>
        <div className="step-visual">
          <div className="mock-track">
            <div className="track-head">
              <div className="t">Booking #SRT-10284</div>
              <div className="s">Notarization of POA</div>
            </div>
            <ul className="track-steps">
              <li className="done">
                <span className="ts-dot" />
                <div className="ts-body">
                  <div className="t">Booking Confirmed</div>
                  <div className="s">Wed, Apr 15 • 10:22 AM</div>
                </div>
              </li>
              <li className="done">
                <span className="ts-dot" />
                <div className="ts-body">
                  <div className="t">Documents Received</div>
                  <div className="s">Wed, Apr 15 • 11:05 AM</div>
                </div>
              </li>
              <li className="active">
                <span className="ts-dot" />
                <div className="ts-body">
                  <div className="t">Drafting in Progress</div>
                  <div className="s">In progress</div>
                </div>
              </li>
              <li>
                <span className="ts-dot" />
                <div className="ts-body">
                  <div className="t">Ready for Collection</div>
                  <div className="s">Expected today 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

 </>
  );
}