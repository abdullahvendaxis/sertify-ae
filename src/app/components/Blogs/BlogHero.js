"use client";

import { useEffect, useState } from "react";

const notifyBlogFiltersChanged = () => {
  window.dispatchEvent(new CustomEvent("sertify:blog-filters-changed"));
};

export default function BlogHero({ query = "" }) {
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get("q") || "");
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

      const queryString = params.toString();
      const nextUrl = queryString ? `/blogs?${queryString}` : "/blogs";
      window.history.replaceState({}, "", nextUrl);
      notifyBlogFiltersChanged();
    }, 400);

    return () => window.clearTimeout(timer);
  }, [searchQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery) {
      params.set("q", trimmedQuery);
    } else {
      params.delete("q");
    }

    const queryString = params.toString();
    window.history.replaceState({}, "", queryString ? `/blogs?${queryString}` : "/blogs");
    notifyBlogFiltersChanged();
  };

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
    <form className="blog-search" action="/blogs" onSubmit={handleSubmit}>
      <div className="blog-search-input">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
        <input
          name="q"
          type="search"
          placeholder="Search articles, topics, or authors..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-gold">Search</button>
    </form>
  </div>
</section>

</>
  );
}
