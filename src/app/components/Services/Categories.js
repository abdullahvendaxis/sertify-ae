"use client";

import { useEffect, useState } from "react";
import { getServiceCategories } from "@/services/servicesService";

const iconPaths = [
  <path key="doc" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />,
  <path key="shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <path key="chat" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  <path key="home" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
];

const getTitle = (category) =>
  category?.title_en || category?.title || category?.name || category?.slug || "Service";

const getDescription = (category) =>
  category?.description_en ||
  category?.description ||
  "Verified legal professionals ready to help with this service category.";

const notifyServicesChanged = () => {
  window.dispatchEvent(new CustomEvent("sertify:services-filters-changed"));
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setActiveCategory(params.get("category") || "");

    const loadCategories = async () => {
      try {
        const response = await getServiceCategories();
        setCategories(response.categories || response.data?.categories || response || []);
      } catch {
        setCategories([]);
      }
    };

    loadCategories();
  }, []);

  const applyCategory = (categoryId) => {
    const params = new URLSearchParams(window.location.search);
    if (categoryId) {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }

    setActiveCategory(categoryId);
    const queryString = params.toString();
    window.history.replaceState({}, "", queryString ? `/services?${queryString}` : "/services");
    notifyServicesChanged();
  };

  return (
    <section id="categories">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" />Categories</span>
          <h2>Browse by <span className="gradient-text">service type.</span></h2>
          <p>Every category is staffed by verified, licensed professionals across the UAE.</p>
        </div>

        <div className="service-category-filter">
          <button
            className={`cat-btn ${!activeCategory ? "active" : ""}`}
            onClick={() => applyCategory("")}
            type="button"
          >
            All Services
          </button>
          {categories.map((category) => (
            <button
              className={`cat-btn ${activeCategory === category.id ? "active" : ""}`}
              key={category.id}
              onClick={() => applyCategory(category.id)}
              type="button"
            >
              {getTitle(category)}
            </button>
          ))}
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <button
              className={`cat-card ${activeCategory === category.id ? "active" : ""}`}
              key={category.id}
              onClick={() => applyCategory(category.id)}
              type="button"
            >
              <div className="cat-icon">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  {iconPaths[index % iconPaths.length]}
                </svg>
              </div>
              <h3>{getTitle(category)}</h3>
              <p>{getDescription(category)}</p>
              <div className="cat-meta">
                <span className="cat-count">View services</span>
                <span className="cat-price">Explore</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
