export default function Hero() {
  return (
    <>
<section className="hero">
  <div className="hero-bg">
    <div className="blob b1" />
    <div className="blob b2" />
    <div className="blob b3" />
  </div>
  <div className="container hero-content">
    <div>
      <div className="hero-badge">
        <span className="chip">NEW</span>
        <span>UAE's first legal services marketplace</span>
      </div>
      <h1>
        Legal services,<br />
        <span className="gradient-text">reimagined.</span>
      </h1>
      <div className="tagline"><span>Trusted</span><span className="sep">/</span><span>Verified</span><span className="sep">/</span><span>Instant</span></div>
      <p className="lead">Notarization, legal consultation, document attestation, and much more. Book verified UAE legal professionals in seconds through one transparent platform.</p>
      <div className="hero-cta">
        <a href="#" className="btn btn-primary">Get Started Free
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
        <a href="#" className="btn btn-outline-light">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polygon points="5 3 19 12 5 21 5 3" /></svg>
          Watch demo
        </a>
      </div>
      <div className="social-proof">
        <div className="avatar-stack">
          <div className="a">FA</div>
          <div className="a">RK</div>
          <div className="a">MS</div>
          <div className="a">+2K</div>
        </div>
        <div><strong>2,400+</strong> UAE users &amp; legal professionals trust Sertify</div>
      </div>
    </div>
    <div className="hero-visual">
      <div className="mockup-wrap">
        <img src="mockup.png" alt="Sertify on laptop and mobile" />
      </div>
      <div className="float-card fc1">
        <div className="fc-icon g">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div className="fc-text">
          <div className="t">POA Notarized</div>
          <div className="s">Completed in 24h</div>
        </div>
      </div>
      <div className="float-card fc2">
        <div className="fc-icon y">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </div>
        <div className="fc-text">
          <div className="t">4.9 / 5.0 rating</div>
          <div className="s">From 1.2k reviews</div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}