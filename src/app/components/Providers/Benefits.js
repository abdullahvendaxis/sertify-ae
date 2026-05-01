export default function Benefits() {
  return (
 <>
{/* ===== BENEFITS BENTO ===== */}
<section className="benefits">
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />Why Sertify</span>
      <h2>Everything you need to <span className="gradient-text">run and grow.</span></h2>
      <p>We handle the clients, payments, scheduling, and marketing so you can focus on the legal work.</p>
    </div>
    <div className="bento">
      {/* Big dark card with chart */}
      <div className="bento-card dark b-wide">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1={12} y1={20} x2={12} y2={10} /><line x1={18} y1={20} x2={18} y2={4} /><line x1={6} y1={20} x2={6} y2={16} /></svg>
        </div>
        <h3>Transparent earnings &amp; weekly payouts</h3>
        <p>Track every booking, tip, and payout in real time. Funds move to your bank every week, no waiting.</p>
        <div className="big-benefit-chart">
          <div className="bbar" style={{height: '30%'}} />
          <div className="bbar" style={{height: '50%'}} />
          <div className="bbar" style={{height: '45%'}} />
          <div className="bbar tall" style={{height: '70%'}} />
          <div className="bbar" style={{height: '55%'}} />
          <div className="bbar tall" style={{height: '85%'}} />
          <div className="bbar tall" style={{height: '100%'}} />
        </div>
        <div className="bbar-labels">
          <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span>
        </div>
      </div>
      {/* Right top card (light) */}
      <div className="bento-card b-half">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
        </div>
        <h3>Real-time booking requests</h3>
        <p>Accept, decline, or reschedule with one tap. Clients are notified instantly, so you never chase anyone.</p>
      </div>
      {/* Row 2 */}
      <div className="bento-card b-third">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" /></svg>
        </div>
        <h3>Verified, high-intent clients</h3>
        <p>Every user is ID-verified. No tire-kickers, no spam.</p>
      </div>
      <div className="bento-card b-third">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        </div>
        <h3>In-app chat with clients</h3>
        <p>Share files, confirm details, and keep every conversation in one secure place.</p>
      </div>
      <div className="bento-card b-third">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={2} y={3} width={20} height={14} rx={2} /><line x1={8} y1={21} x2={16} y2={21} /><line x1={12} y1={17} x2={12} y2={21} /></svg>
        </div>
        <h3>Provider dashboard</h3>
        <p>A clean control center for services, earnings, reviews, and articles, on desktop or mobile.</p>
      </div>
      {/* Row 3 */}
      <div className="bento-card b-third">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </div>
        <h3>Featured placement</h3>
        <p>Earn top-provider status through ratings, response time, and completed bookings.</p>
      </div>
      <div className="bento-card b-third">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={9} y1={13} x2={15} y2={13} /><line x1={9} y1={17} x2={13} y2={17} /></svg>
        </div>
        <h3>Publish legal articles</h3>
        <p>Share your expertise, build authority, and drive new clients through educational content.</p>
      </div>
      <div className="bento-card b-third">
        <div className="bc-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 2L12 12" /><path d="M16 2h6v6" /></svg>
        </div>
        <h3>AI tools for providers</h3>
        <p>Draft responses, generate service descriptions, and answer client queries faster.</p>
      </div>
    </div>
  </div>
</section>



 </>
  );
}