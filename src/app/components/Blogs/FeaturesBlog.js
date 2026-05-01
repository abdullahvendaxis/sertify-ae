export default function FeaturesBlog() {
  return (
 <>
<div>
  {/* ===== FEATURED ARTICLE ===== */}
  <section className="featured-wrap">
    <div className="container">
      <div className="featured-card">
        <div className="featured-image">
          <div className="featured-svg">
            <svg width={120} height={120} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
        </div>
        <div className="featured-content">
          <span className="featured-tag">Featured</span>
          <h2>The Complete 2026 Guide to Document Attestation in the UAE</h2>
          <p>Everything you need to know about MOFA attestation, embassy attestation, and ministry approvals. When to use each, expected timelines, typical fees, and common mistakes to avoid.</p>
          <div className="post-meta">
            <div className="post-author">SL</div>
            <div>
              <div className="name">Sertify Legal Team</div>
            </div>
            <div className="sep" />
            <span>Apr 10, 2026</span>
            <div className="sep" />
            <span>12 min read</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ===== ARTICLES ===== */}
  <section className="articles-wrap">
    <div className="container">
      <div className="section-head-row">
        <div>
          <h2>Latest <span className="gradient-text">articles.</span></h2>
          <p>Fresh insights every week from UAE's verified legal professionals.</p>
        </div>
        <button className="sort-pill">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={12} x2={15} y2={12} /><line x1={3} y1={18} x2={9} y2={18} /></svg>
          Sort: Most recent
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9" /></svg>
        </button>
      </div>
      <div className="articles-grid">
        {/* Article 1 */}
        <article className="article-card">
          <div className="article-image art-1">
            <div className="blob-accent" />
            <span className="cat-badge">Visa &amp; Residency</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x={3} y={4} width={18} height={18} rx={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>Golden Visa 2026: Who qualifies and how to apply</h3>
            <p>A plain-English breakdown of the updated Golden Visa requirements, including the new investor and skilled professional categories.</p>
            <div className="article-meta">
              <div className="post-author">FR</div>
              <div className="name">Fatima Rashid</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                8 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 2 */}
        <article className="article-card">
          <div className="article-image art-2">
            <div className="blob-accent" />
            <span className="cat-badge">Property Law</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>How to draft a POA for property sale in Dubai</h3>
            <p>Step-by-step guide to preparing a compliant Power of Attorney, including required documents and notarization.</p>
            <div className="article-meta">
              <div className="post-author">AM</div>
              <div className="name">Ahmad Al Marzooqi</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                6 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 3 */}
        <article className="article-card">
          <div className="article-image art-3">
            <div className="blob-accent" />
            <span className="cat-badge">Business</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 7L4 7" /><path d="M20 12L4 12" /><path d="M20 17L4 17" /><rect x={3} y={3} width={18} height={18} rx={2} /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>Setting up a mainland company in the UAE: 2026 edition</h3>
            <p>The updated process, costs, and licensing categories after the full foreign ownership reforms. What has changed and what to expect.</p>
            <div className="article-meta">
              <div className="post-author">KH</div>
              <div className="name">Khalid Hamdan</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                10 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 4 */}
        <article className="article-card">
          <div className="article-image art-4">
            <div className="blob-accent" />
            <span className="cat-badge">Employment</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><path d="M20 8v6M23 11h-6" /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>End-of-service gratuity: a complete calculation guide</h3>
            <p>Understand exactly how your gratuity is calculated under the updated UAE Labour Law, with worked examples for limited and unlimited contracts.</p>
            <div className="article-meta">
              <div className="post-author">SL</div>
              <div className="name">Sertify Legal Team</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                7 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 5 */}
        <article className="article-card">
          <div className="article-image art-5">
            <div className="blob-accent" />
            <span className="cat-badge">Family Law</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>Civil marriage in Abu Dhabi: rights and process</h3>
            <p>Everything expatriates need to know about civil marriage registration, its legal effects, and how it differs from traditional Sharia marriage.</p>
            <div className="article-meta">
              <div className="post-author">FR</div>
              <div className="name">Fatima Rashid</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                9 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 6 */}
        <article className="article-card">
          <div className="article-image art-6">
            <div className="blob-accent" />
            <span className="cat-badge">Notarization</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>When do you actually need a notary in the UAE?</h3>
            <p>Not every document needs notarization. A practical guide to which transactions legally require a notary, and which ones do not.</p>
            <div className="article-meta">
              <div className="post-author">KH</div>
              <div className="name">Khalid Hamdan</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                5 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 7 */}
        <article className="article-card">
          <div className="article-image art-7">
            <div className="blob-accent" />
            <span className="cat-badge">Attestation</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx={12} cy={8} r={7} /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>Degree attestation: from home country to UAE job offer</h3>
            <p>The full attestation chain for your educational certificates. Expected timelines, estimated costs, and how to avoid rejections.</p>
            <div className="article-meta">
              <div className="post-author">SL</div>
              <div className="name">Sertify Legal Team</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                8 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 8 */}
        <article className="article-card">
          <div className="article-image art-8">
            <div className="blob-accent" />
            <span className="cat-badge">Legal Tech</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 2L12 12" /><path d="M16 2h6v6" /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>How AI is reshaping legal services in the GCC</h3>
            <p>From automated contract review to digital notarization, a look at the technologies transforming how legal work is delivered.</p>
            <div className="article-meta">
              <div className="post-author">AM</div>
              <div className="name">Ahmad Al Marzooqi</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                6 min
              </div>
            </div>
          </div>
        </article>
        {/* Article 9 */}
        <article className="article-card">
          <div className="article-image art-9">
            <div className="blob-accent" />
            <span className="cat-badge">Business</span>
            <div className="article-image-art">
              <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1={12} y1={20} x2={12} y2={10} /><line x1={18} y1={20} x2={18} y2={4} /><line x1={6} y1={20} x2={6} y2={16} /></svg>
            </div>
          </div>
          <div className="article-body">
            <h3>UAE Corporate Tax: what SMEs need to know now</h3>
            <p>A direct, no-jargon guide to 9% corporate tax thresholds, exemptions, and the filings that will keep you compliant.</p>
            <div className="article-meta">
              <div className="post-author">SL</div>
              <div className="name">Sertify Legal Team</div>
              <div className="read-time">
                <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                11 min
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="load-more-wrap">
        <button className="load-more-btn">Load more articles</button>
      </div>
    </div>
  </section>
</div>

 </>
  );
}