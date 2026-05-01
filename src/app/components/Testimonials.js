export default function Marquee() {
  return (
 <>
 <section>
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />Loved by UAE residents</span>
      <h2>Trusted by the people who <span className="gradient-text">matter most.</span></h2>
    </div>
    <div className="quotes-grid">
      <div className="quote-modern">
        <div className="stars">★★★★★</div>
        <p>"I needed a POA drafted and notarized in 24 hours. Sertify connected me with a licensed notary, and the whole thing was done before lunch."</p>
        <div className="quote-author">
          <div className="avatar-q">FA</div>
          <div className="author-info">
            <div className="name">Fatima A.</div>
            <div className="role">Dubai Resident</div>
          </div>
        </div>
      </div>
      <div className="quote-modern">
        <div className="stars">★★★★★</div>
        <p>"As an SME owner, I used to waste hours chasing attestation paperwork. Sertify made it a 3-click process. The transparent pricing is a game-changer."</p>
        <div className="quote-author">
          <div className="avatar-q">RK</div>
          <div className="author-info">
            <div className="name">Rahul K.</div>
            <div className="role">Business Owner, Abu Dhabi</div>
          </div>
        </div>
      </div>
      <div className="quote-modern">
        <div className="stars">★★★★★</div>
        <p>"Joining Sertify doubled my monthly client bookings. The dashboard is intuitive and the AI tools save me hours on drafting."</p>
        <div className="quote-author">
          <div className="avatar-q">MS</div>
          <div className="author-info">
            <div className="name">Mohammed S.</div>
            <div className="role">Legal Consultant, Sharjah</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}