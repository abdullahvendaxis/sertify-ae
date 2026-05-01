export default function ServicesFeature() {
  return (
 <>
{/* ===== FEATURED SERVICES ===== */}
<section className="featured-wrap">
  <div className="container">
    <div className="section-head">
      <span className="eyebrow"><span className="dot" />Most booked</span>
      <h2>Popular services right now.</h2>
      <p>These are the services UAE residents book most often on Sertify.</p>
    </div>
    <div className="featured-grid">
      <div className="service-card">
        <div className="service-head">
          <span className="service-tag popular">Most Popular</span>
          <div className="service-rating"><span className="star">★</span>4.9 (312)</div>
        </div>
        <h3>Power of Attorney, Property</h3>
        <p>Full drafting and notarization of property POAs, tailored to Dubai Land Department requirements.</p>
        <div className="service-footer">
          <div className="service-price">
            <div className="p-lbl">Starting</div>
            <div className="p-val"><span className="from">from</span> AED 350</div>
          </div>
          <a href="#" className="service-book">Book now</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-head">
          <span className="service-tag">Fast turnaround</span>
          <div className="service-rating"><span className="star">★</span>5.0 (248)</div>
        </div>
        <h3>MOFA Attestation</h3>
        <p>Ministry of Foreign Affairs attestation of educational, marriage, and commercial documents.</p>
        <div className="service-footer">
          <div className="service-price">
            <div className="p-lbl">Starting</div>
            <div className="p-val"><span className="from">from</span> AED 180</div>
          </div>
          <a href="#" className="service-book">Book now</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-head">
          <span className="service-tag popular">Most Popular</span>
          <div className="service-rating"><span className="star">★</span>4.9 (198)</div>
        </div>
        <h3>Legal Consultation, 30-min</h3>
        <p>Video or in-person consultation with a licensed UAE lawyer on any legal matter.</p>
        <div className="service-footer">
          <div className="service-price">
            <div className="p-lbl">Starting</div>
            <div className="p-val"><span className="from">from</span> AED 250</div>
          </div>
          <a href="#" className="service-book">Book now</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-head">
          <span className="service-tag">Same day</span>
          <div className="service-rating"><span className="star">★</span>4.8 (175)</div>
        </div>
        <h3>NOC Drafting</h3>
        <p>Custom No-Objection Certificates for travel, employment, tenancy, and more.</p>
        <div className="service-footer">
          <div className="service-price">
            <div className="p-lbl">Starting</div>
            <div className="p-val"><span className="from">from</span> AED 120</div>
          </div>
          <a href="#" className="service-book">Book now</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-head">
          <span className="service-tag">Expert review</span>
          <div className="service-rating"><span className="star">★</span>5.0 (142)</div>
        </div>
        <h3>Contract Review, Standard</h3>
        <p>Comprehensive review and redlining of commercial, employment, and lease contracts.</p>
        <div className="service-footer">
          <div className="service-price">
            <div className="p-lbl">Starting</div>
            <div className="p-val"><span className="from">from</span> AED 450</div>
          </div>
          <a href="#" className="service-book">Book now</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-head">
          <span className="service-tag">Certified</span>
          <div className="service-rating"><span className="star">★</span>4.9 (289)</div>
        </div>
        <h3>Legal Translation</h3>
        <p>Certified Arabic, English, and multi-language legal translation for official use.</p>
        <div className="service-footer">
          <div className="service-price">
            <div className="p-lbl">Starting</div>
            <div className="p-val"><span className="from">from</span> AED 80</div>
          </div>
          <a href="#" className="service-book">Book now</a>
        </div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}