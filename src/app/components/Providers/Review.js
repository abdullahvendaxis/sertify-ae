export default function Review() {
  return (
 <>
<div>
  {/* ===== TESTIMONIALS ===== */}
  <section>
    <div className="container">
      <div className="section-head">
        <span className="eyebrow"><span className="dot" />Provider stories</span>
        <h2>Trusted by UAE's <span className="gradient-text">legal professionals.</span></h2>
      </div>
      <div className="testimonials-grid">
        <div className="tcard">
          <div className="tstars">★★★★★</div>
          <blockquote>"Sertify brought us 40% more attestation clients in the first quarter. The booking flow is smooth, and payouts are always on time."</blockquote>
          <div className="tperson">
            <div className="tavatar">AM</div>
            <div>
              <div className="name">Ahmad Al Marzooqi</div>
              <div className="role">Managing Partner, Al Marzooqi Legal</div>
            </div>
          </div>
        </div>
        <div className="tcard">
          <div className="tstars">★★★★★</div>
          <blockquote>"As a typing center, we struggled to reach new customers. Now we handle 60+ bookings a month directly from the app. Game changer."</blockquote>
          <div className="tperson">
            <div className="tavatar">FR</div>
            <div>
              <div className="name">Fatima Rashid</div>
              <div className="role">Owner, Golden Pen Typing Services</div>
            </div>
          </div>
        </div>
        <div className="tcard">
          <div className="tstars">★★★★★</div>
          <blockquote>"The dashboard gives me everything, earnings, reviews, chat, in one place. I can run my practice from my phone while on site."</blockquote>
          <div className="tperson">
            <div className="tavatar">KH</div>
            <div>
              <div className="name">Khalid Hamdan</div>
              <div className="role">Independent Notary, Abu Dhabi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

 </>
  );
}