export default function AISection() {
  return (
 <>
{/* ===== NEWSLETTER ===== */}
<section className="newsletter-wrap">
  <div className="container">
    <div className="newsletter-card">
      <div>
        <h2>Stay ahead of UAE's <span className="gradient-text">legal landscape.</span></h2>
        <p>Weekly digest of essential legal updates, new guides, and provider spotlights. No spam, ever.</p>
      </div>
      <div>
        <form className="newsletter-form" onsubmit="event.preventDefault();">
          <input type="email" placeholder="you@example.com" required />
          <button type="submit">Subscribe</button>
        </form>
        <div className="newsletter-note">Join 4,200+ UAE professionals reading Sertify Weekly.</div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}