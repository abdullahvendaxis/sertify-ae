export default function BookingCard() {
  return (
 <>
<section className="trust-strip">
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />Built on Trust</span>
      <h2>Every booking is <span className="gradient-text">protected end to end.</span></h2>
    </div>
    <div className="trust-grid">
      <div className="trust-card">
        <div className="trust-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
        </div>
        <h3>Verified providers</h3>
        <p>Every professional is license-verified before being listed on Sertify.</p>
      </div>
      <div className="trust-card">
        <div className="trust-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={11} width={18} height={11} rx={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
        </div>
        <h3>Secure payments</h3>
        <p>Payments are held safely and released only after the service is delivered.</p>
      </div>
      <div className="trust-card">
        <div className="trust-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        </div>
        <h3>Encrypted data</h3>
        <p>All documents and messages are protected with end-to-end encryption.</p>
      </div>
      <div className="trust-card">
        <div className="trust-icon">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="23 4 23 10 17 10" /><path d="M20.49 15A9 9 0 1 1 18 5.9L23 10" /></svg>
        </div>
        <h3>Money-back policy</h3>
        <p>If your provider cannot deliver, we refund you in full. Always.</p>
      </div>
    </div>
  </div>
</section>

 </>
  );
}