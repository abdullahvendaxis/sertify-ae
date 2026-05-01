export default function Features() {
  return (
    <>
{/* ===== FEATURES / BENTO ===== */}
<section id="services">
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />What we offer</span>
      <h2>Legal peace of mind, <span className="gradient-text">built in.</span></h2>
      <p>Everything you need to find, book, and track legal services in one platform designed for the UAE.</p>
    </div>
    <div className="bento">
      {/* BIG CARD 1: Explore verified professionals */}
      <div className="bento-card b-wide-3 dark">
        <div className="bento-deco" />
        <div className="bento-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
        </div>
        <h3>Explore verified professionals</h3>
        <p>Smart filters across services, pricing, ratings, and emirate. Every provider is vetted before joining.</p>
        {/* Mini search UI */}
        <div className="mini-search">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
          <span>Search notary, lawyer, PRO...</span>
          <span className="emirate-chip">Dubai</span>
        </div>
        {/* Mini provider list */}
        <div className="mini-providers">
          <div className="mini-provider">
            <div className="mp-avatar" style={{background: 'linear-gradient(135deg, #E8C889, #B88C3A)'}}>HA</div>
            <div className="mp-info">
              <div className="mp-name">Hussain A. · Notary</div>
              <div className="mp-meta"><span className="star">★</span> 4.9 &nbsp;·&nbsp; 312 bookings</div>
            </div>
            <div className="mp-price">AED 250</div>
          </div>
          <div className="mini-provider">
            <div className="mp-avatar" style={{background: 'linear-gradient(135deg, #4AAE8C, #2D8768)'}}>SK</div>
            <div className="mp-info">
              <div className="mp-name">Sara K. · Legal Consultant</div>
              <div className="mp-meta"><span className="star">★</span> 5.0 &nbsp;·&nbsp; 148 bookings</div>
            </div>
            <div className="mp-price">AED 350</div>
          </div>
        </div>
      </div>
      {/* BIG CARD 2: Book instantly */}
      <div className="bento-card b-wide-3 gold">
        <div className="bento-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={4} width={18} height={18} rx={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
        </div>
        <h3>Book instantly, pay transparently</h3>
        <p>No back and forth. No hidden fees. Pick a slot, upload documents, pay securely.</p>
        {/* Mini booking UI */}
        <div className="mini-booking">
          <div className="mb-label">Choose a slot</div>
          <div className="mb-dates">
            <div className="mb-date"><span className="d">Mon</span><span className="n">14</span></div>
            <div className="mb-date active"><span className="d">Tue</span><span className="n">15</span></div>
            <div className="mb-date"><span className="d">Wed</span><span className="n">16</span></div>
            <div className="mb-date"><span className="d">Thu</span><span className="n">17</span></div>
          </div>
          <div className="mb-footer">
            <div className="mb-price-wrap">
              <div className="mb-price-lbl">Total</div>
              <div className="mb-price">AED 250</div>
            </div>
            <div className="mb-confirm">
              Confirm booking
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
        </div>
      </div>
      {/* Row 2: 3 equal cards */}
      <div className="bento-card b-sq">
        <div className="big-num">15<span>+</span></div>
        <h3 style={{fontSize: '1rem', marginTop: 8}}>Service categories</h3>
        <p style={{margin: 0, fontSize: '0.9rem'}}>From notarization to court filing, all in one app.</p>
      </div>
      <div className="bento-card b-sq">
        <div className="big-num">24<span>/7</span></div>
        <h3 style={{fontSize: '1rem', marginTop: 8}}>Always available</h3>
        <p style={{margin: 0, fontSize: '0.9rem'}}>Instant booking and live chat, any hour of the day.</p>
      </div>
      <div className="bento-card b-sq dark-soft">
        <div className="bento-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
        </div>
        <h3>Dubai Courts integration</h3>
        <p style={{margin: 0, fontSize: '0.9rem'}}>Notarized documents recognized without friction.</p>
        <div className="status-chip">
          <span className="status-dot" />
          Verified &amp; validated
        </div>
      </div>
      {/* Row 3: 3 equal cards */}
      <div className="bento-card b-sq">
        <div className="bento-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        </div>
        <h3>In-app live chat</h3>
        <p style={{margin: 0, fontSize: '0.9rem'}}>Message your provider directly and share documents.</p>
      </div>
      <div className="bento-card b-sq">
        <div className="bento-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
        </div>
        <h3>Legal articles</h3>
        <p style={{margin: 0, fontSize: '0.9rem'}}>Educational content from licensed UAE professionals.</p>
      </div>
      <div className="bento-card b-sq">
        <div className="bento-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
        </div>
        <h3>Real-time tracking</h3>
        <p style={{margin: 0, fontSize: '0.9rem'}}>Every booking and document, with live status updates.</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}