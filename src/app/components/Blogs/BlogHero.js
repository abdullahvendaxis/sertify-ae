export default function BlogHero() {
  return (
 <>
 {/* ===== HERO ===== */}
<section className="page-hero">
  <div className="hero-bg">
    <div className="blob b1" />
    <div className="blob b2" />
  </div>
  <div className="container page-hero-content">
    <div className="eyebrow-light"><span className="dot" />Sertify Blog</div>
    <h1>Legal knowledge, <span className="gradient-text">made simple.</span></h1>
    <p className="lead">Guides, insights, and updates on UAE legal services. Written by verified professionals and our in-house legal team.</p>
    <div className="blog-search">
      <div className="blog-search-input">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
        <input type="text" placeholder="Search articles, topics, or authors..." />
      </div>
      <a href="#" className="btn btn-gold">Search</a>
    </div>
  </div>
</section>

</>
  );
}