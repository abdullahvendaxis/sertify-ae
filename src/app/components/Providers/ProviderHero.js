export default function ProviderHero() {
  return (
 <>
{/* ===== HERO ===== */}
<section className="page-hero">
  <div className="hero-bg">
    <div className="blob b1" />
    <div className="blob b2" />
    <div className="blob b3" />
  </div>
  <div className="container">
    <div className="hero-grid">
      <div>
        <div className="eyebrow-light"><span className="dot" />For Legal Professionals</div>
        <h1>Grow your practice. <span className="gradient-text">Own your time.</span></h1>
        <p className="lead">Join the UAE's first legal services marketplace. Get verified bookings, transparent payouts, and modern tools built for lawyers, notaries, PROs, and typing centers.</p>
        <div className="hero-cta">
          <a href="#join" className="btn btn-primary">Become a Provider</a>
          <a href="#demo" className="btn btn-outline-light">Book a Demo</a>
        </div>
        <div className="hero-highlights">
          <div className="hh-item">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            No monthly fees to start
          </div>
          <div className="hh-item">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Weekly payouts
          </div>
          <div className="hh-item">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Verified clients only
          </div>
        </div>
      </div>
      <div className="dash-card">
        <div className="dash-head">
          <div className="greet">
            <div className="g1">Welcome back</div>
            <div className="g2">Al Mansoori Legal</div>
          </div>
          <div className="dash-avatar">AM</div>
        </div>
        <div className="dash-stats">
          <div className="ds-card gold">
            <div className="lbl">This Month</div>
            <div className="val">AED 24,650</div>
            <div className="chg">+18.4% vs last month</div>
          </div>
          <div className="ds-card">
            <div className="lbl">Bookings</div>
            <div className="val">47</div>
            <div className="chg">+12 new this week</div>
          </div>
        </div>
        <div className="dash-chart">
          <div className="dc-head">
            <div className="t">Revenue trend</div>
            <div className="tab">Last 7 days</div>
          </div>
          <div className="bars">
            <div className="bar" style={{height: '40%'}} />
            <div className="bar" style={{height: '55%'}} />
            <div className="bar" style={{height: '35%'}} />
            <div className="bar tall" style={{height: '70%'}} />
            <div className="bar" style={{height: '50%'}} />
            <div className="bar tall" style={{height: '85%'}} />
            <div className="bar tall" style={{height: '95%'}} />
          </div>
          <div className="bar-labels">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </div>
        <div className="dash-book">
          <div className="db-icon">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={4} width={18} height={18} rx={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
          </div>
          <div className="db-body">
            <div className="t">New booking request</div>
            <div className="s">POA attestation, Dubai, today 4:00 PM</div>
          </div>
          <div className="db-pill">Confirmed</div>
        </div>
        <div className="float-review">
          <div className="fr-avatar">SR</div>
          <div className="fr-text">
            <div className="fr-stars">★★★★★</div>
            <div className="t">"Exceptional service."</div>
            <div className="s">Sara R. left a 5-star review</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 </>
  );
}