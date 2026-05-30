"use client";

import { useEffect, useState } from "react";
import { getArticleCategories } from "@/services/categories";

const getCategoryTitle = (category) =>
  category?.title_en || category?.title || category?.name || category?.slug || "Category";

export default function CategoriesFilter() {
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setActiveCategory(params.get("category") || "");

    const loadCategories = async () => {
      try {
        const response = await getArticleCategories();
        setCategories(response.categories || response.data?.categories || []);
      } catch (error) {
        setCategories([]);
      }
    };

    loadCategories();
  }, []);

  return (
 <>
{/* ===== CATEGORY FILTER ===== */}
<div className="cat-filter-wrap">
  <div className="container">
    <div className="cat-filter">
      <a className={`cat-btn ${!activeCategory ? "active" : ""}`} href="/blogs">All Articles</a>
      {categories.map((category) => (
        <a
          className={`cat-btn ${activeCategory === category.id ? "active" : ""}`}
          href={`/blogs?category=${encodeURIComponent(category.id)}`}
          key={category.id}
        >
          {getCategoryTitle(category)}
        </a>
      ))}
    </div>
  </div>
</div>

 </>
  );
}
