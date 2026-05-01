export default function Marquee() {
  return (
 <>
<section className="providers-modern" id="providers">
  <div className="container providers-grid">
    <div>
      <span className="eyebrow"><span className="dot" />For legal professionals</span>
      <h2 style={{marginTop: 14}}>Grow your practice. <span className="gradient-text">Own your time.</span></h2>
      <p style={{marginTop: 14, fontSize: '1.05rem'}}>Join the UAE's leading legal marketplace. Manage services, accept bookings, and get paid, all from a single dashboard built for lawyers, PROs, notaries, and typing centers.</p>
      <ul>
        <li>
          <span className="check-icon"><svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg></span>
          List and manage services with flexible pricing
        </li>
        <li>
          <span className="check-icon"><svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg></span>
          Receive booking requests and chat with clients
        </li>
        <li>
          <span className="check-icon"><svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg></span>
          Track earnings and get reliable payouts
        </li>
        <li>
          <span className="check-icon"><svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg></span>
          Publish legal articles to build authority
        </li>
        <li>
          <span className="check-icon"><svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg></span>
          Access AI tools to draft faster
        </li>
      </ul>
      <a href="#" className="btn btn-primary" style={{padding: '12px 24px'}}>Become a Provider
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </div>
    <div className="dashboard-card">
      <div className="db-header">
        <div>
          <div className="t">Earnings Dashboard</div>
          <div className="s">Last 30 days</div>
        </div>
        <div className="db-pill">Active</div>
      </div>
      <div className="db-stats">
        <div className="db-stat">
          <div className="lbl">Revenue</div>
          <div className="val">AED 22,450</div>
          <div className="trend">↑ 18.2%</div>
        </div>
        <div className="db-stat">
          <div className="lbl">Bookings</div>
          <div className="val">147</div>
          <div className="trend">↑ 12.4%</div>
        </div>
      </div>
      <div className="db-chart">
        <svg viewBox="0 0 300 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#D4A857" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4A857" stopOpacity={0} />
            </linearGradient>
          </defs>
          <path d="M0,60 L20,50 L45,55 L70,35 L95,40 L120,25 L150,30 L180,18 L210,22 L240,12 L270,15 L300,8 L300,80 L0,80 Z" fill="url(#grad)" />
          <path d="M0,60 L20,50 L45,55 L70,35 L95,40 L120,25 L150,30 L180,18 L210,22 L240,12 L270,15 L300,8" fill="none" stroke="#D4A857" strokeWidth={2} />
        </svg>
      </div>
      <div className="db-footer">
        <span>Next payout: <strong>AED 3,850</strong></span>
        <span>In 2 days</span>
      </div>
    </div>
  </div>
</section>

 </>
  );
}