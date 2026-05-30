"use client";

import { useEffect, useState } from "react";

const notifyServicesChanged = () => {
  window.dispatchEvent(new CustomEvent("sertify:services-filters-changed"));
};

export default function ServicesHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [emirate, setEmirate] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get("q") || "");
    setEmirate(params.get("emirate") || "");
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const trimmedQuery = searchQuery.trim();

      if (trimmedQuery) {
        params.set("q", trimmedQuery);
      } else {
        params.delete("q");
      }

      if (emirate) {
        params.set("emirate", emirate);
      } else {
        params.delete("emirate");
      }

      const queryString = params.toString();
      window.history.replaceState({}, "", queryString ? `/services?${queryString}` : "/services");
      notifyServicesChanged();
    }, 400);

    return () => window.clearTimeout(timer);
  }, [searchQuery, emirate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    notifyServicesChanged();
  };

  return (
 <>
<section className="page-hero">
  <div className="hero-bg">
    <div className="blob b1" />
    <div className="blob b2" />
  </div>
  <div className="container page-hero-content">
    <div className="eyebrow-light"><span className="dot" />Our services</div>
    <h1>Every legal service you'll <span className="gradient-text">ever need.</span></h1>
    <p className="lead">Browse verified UAE legal professionals across 15+ service categories. From notarization to court filing, every booking is transparent, secure, and backed by Sertify.</p>
    <form className="search-card" onSubmit={handleSubmit}>
      <div className="search-input">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
        <input
          type="search"
          placeholder="Search notary, lawyer, attestation..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      <label className="search-select">
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
        <select value={emirate} onChange={(event) => setEmirate(event.target.value)}>
          <option value="">All Emirates</option>
          <option value="Dubai">Dubai</option>
          <option value="Abu Dhabi">Abu Dhabi</option>
          <option value="Sharjah">Sharjah</option>
          <option value="Ajman">Ajman</option>
          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
          <option value="Fujairah">Fujairah</option>
          <option value="Umm Al Quwain">Umm Al Quwain</option>
        </select>
      </label>
      <button type="submit" className="btn btn-gold">Search</button>
    </form>
    <div className="hero-stats">
      <div className="hs-item">
        <div className="hs-val">1,200+</div>
        <div className="hs-lbl">Verified Providers</div>
      </div>
      <div className="hs-sep" />
      <div className="hs-item">
        <div className="hs-val">15+</div>
        <div className="hs-lbl">Service Categories</div>
      </div>
      <div className="hs-sep" />
      <div className="hs-item">
        <div className="hs-val">7</div>
        <div className="hs-lbl">Emirates Covered</div>
      </div>
      <div className="hs-sep" />
      <div className="hs-item">
        <div className="hs-val">4.9</div>
        <div className="hs-lbl">Average Rating</div>
      </div>
    </div>
  </div>
</section>

 </>
  );
}
