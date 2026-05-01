"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="nav">

        {/* LOGO */}
        <a href="/" className="logo">
          <img src="logo.jpg" alt="Sertify logo" />
          <span>Sertify</span>
        </a>

        {/* NAV LINKS */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/how-it-work" onClick={() => setOpen(false)}>How it works</a>
          <a href="/provider" onClick={() => setOpen(false)}>For Providers</a>
          <a href="/blogs" onClick={() => setOpen(false)}>Blogs</a>
        </nav>

        {/* CTA + MOBILE */}
        <div className="nav-cta">

          <a href="#" className="btn btn-ghost">Login</a>
          <a href="#" className="btn btn-primary">Sign Up</a>

          <button
            className="mobile-toggle"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>

        </div>

      </div>
    </header>
  );
}