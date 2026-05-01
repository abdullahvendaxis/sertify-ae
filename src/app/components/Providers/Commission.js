export default function Commission() {
  return (
 <>
{/* ===== COMMISSION / TRANSPARENCY ===== */}
<section>
  <div className="container">
    <div className="commission-wrap">
      <div className="commission-art">
        <div className="lbl">Commission</div>
        <div className="big-pct">15<span className="pct">%</span></div>
        <p>Flat, predictable commission on completed bookings. No setup fees. No hidden charges. Top providers drop to as low as 10% after 6 months.</p>
      </div>
      <div>
        <span className="eyebrow"><span className="dot" />Honest pricing</span>
        <h2>Only pay when you <span className="gradient-text">get paid.</span></h2>
        <p style={{margin: '16px 0 10px'}}>We win when you win. Commission is deducted only on successful bookings, and every fee is visible in your dashboard before confirmation.</p>
        <ul className="commission-list">
          <li>
            <span className="chk">
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <div>
              <strong>15% standard, 10% for top providers</strong>
              <span className="note">Rewarded based on ratings, response time, and volume.</span>
            </div>
          </li>
          <li>
            <span className="chk">
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <div>
              <strong>No joining or monthly fees</strong>
              <span className="note">Listing, profile, and booking management are always free.</span>
            </div>
          </li>
          <li>
            <span className="chk">
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <div>
              <strong>Optional Pro subscription</strong>
              <span className="note">For featured placement, sponsored listings, and article publishing.</span>
            </div>
          </li>
          <li>
            <span className="chk">
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <div>
              <strong>Weekly payouts to your bank</strong>
              <span className="note">Funds settle every Monday. Track every transaction live.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

 </>
  );
}