"use client";

import { useEffect, useRef, useState } from "react";
import { getPublishedArticles, searchArticles } from "@/services/articleService";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_API?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getText = (item, key) =>
  item?.[`${key}_en`] || item?.[key] || item?.[`${key}_ar`] || "";

const getCategoryName = (article) =>
  article?.category?.title_en ||
  article?.category?.name ||
  (typeof article?.category === "string" ? article.category : "") ||
  article?.tags?.[0] ||
  "Article";

const getAuthorName = (article) =>
  article?.author?.full_name ||
  article?.author_name ||
  (article?.author_type === "provider" ? "Verified Provider" : "Sertify Legal Team");

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "SL";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const resolveImage = (src) => {
  if (!src) return "";
  if (/^(https?:|data:)/i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${BACKEND_URL}${src}`;
  if (src.startsWith("/")) return src;
  return `${BACKEND_URL}${src.startsWith("/") ? "" : "/"}${src}`;
};

const ArticleArtwork = ({ article, index, featured = false }) => {
  const image = resolveImage(article?.cover_image || article?.image_url || article?.image);

  if (image) {
    return (
      <img
        className={featured ? "featured-cover" : "article-cover"}
        src={image}
        alt={getText(article, "title")}
        crossOrigin="anonymous"
      />
    );
  }

  return (
    <>
      <div className="blob-accent" />
      <div className="article-image-art">
        <svg width={featured ? 120 : 72} height={featured ? 120 : 72} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1={16} y1={13} x2={8} y2={13} />
          <line x1={16} y1={17} x2={8} y2={17} />
          <line x1={10} y1={9} x2={8} y2={9} />
        </svg>
      </div>
    </>
  );
};

const ArticleMeta = ({ article, showDate = false }) => {
  const authorName = getAuthorName(article);
  const readTime = article?.reading_time || article?.reading_minutes;
  const publishedAt = formatDate(article?.published_at || article?.created_at);

  return (
    <div className={showDate ? "post-meta" : "article-meta"}>
      <div className="post-author">{getInitials(authorName)}</div>
      <div className="name">{authorName}</div>
      {showDate && publishedAt ? (
        <>
          <div className="sep" />
          <span>{publishedAt}</span>
        </>
      ) : null}
      {readTime ? (
        <>
          {showDate ? <div className="sep" /> : null}
          <span className="read-time">
            {!showDate ? (
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
            ) : null}
            {readTime} min read
          </span>
        </>
      ) : null}
    </div>
  );
};

export default function FeaturesBlog() {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const requestIdRef = useRef(0);

  useEffect(() => {
    let isCurrent = true;

    const getFiltersFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return {
        nextQuery: params.get("q")?.trim() || "",
        nextCategory: params.get("category")?.trim() || "",
      };
    };

    const loadArticles = async () => {
      const requestId = requestIdRef.current + 1;
      requestIdRef.current = requestId;
      const { nextQuery, nextCategory } = getFiltersFromUrl();

      setQuery(nextQuery);
      setActiveCategory(nextCategory);

      try {
        setLoading(true);
        setError(null);

        const filters = {
          lean: true,
          ...(nextCategory ? { category_id: nextCategory } : {}),
        };

        const response = nextQuery
          ? await searchArticles(nextQuery, filters, 12, 0)
          : await getPublishedArticles({
              limit: 12,
              offset: 0,
              sort: "recent",
              ...filters,
            });

        if (!isCurrent || requestId !== requestIdRef.current) return;

        const publishedArticles = response.articles || response.data?.articles || [];
        setArticles(publishedArticles);
        setPagination(response.pagination || response.data?.pagination || null);
      } catch (loadError) {
        if (!isCurrent || requestId !== requestIdRef.current) return;
        setArticles([]);
        setPagination(null);
        setError(loadError.message || "Unable to load articles.");
      } finally {
        if (isCurrent && requestId === requestIdRef.current) setLoading(false);
      }
    };

    loadArticles();

    window.addEventListener("sertify:blog-filters-changed", loadArticles);
    window.addEventListener("popstate", loadArticles);

    return () => {
      isCurrent = false;
      window.removeEventListener("sertify:blog-filters-changed", loadArticles);
      window.removeEventListener("popstate", loadArticles);
    };
  }, []);

  const featuredArticle = articles.find((article) => article.is_featured);
  const heading = query
    ? `Search results for "${query}"`
    : activeCategory
      ? "Category articles"
      : "Latest articles.";

  if (loading) {
    return (
      <section className="articles-wrap">
        <div className="container">
          <div className="section-head-row">
            <div>
              <h2>Loading <span className="gradient-text">articles.</span></h2>
              <p>Fetching the latest published articles from Sertify.</p>
            </div>
          </div>
          <div className="articles-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="article-card article-skeleton" key={index}>
                <div className="article-image" />
                <div className="article-body">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="articles-wrap">
        <div className="container">
          <div className="blog-empty-state">
            <h2>Articles could not load.</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!articles.length) {
    return (
      <section className="articles-wrap">
        <div className="container">
          <div className="blog-empty-state">
            <h2>No published articles found.</h2>
            <p>Check back soon for new legal guides and updates.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {featuredArticle ? (
        <section className="featured-wrap">
          <div className="container">
            <a className="featured-card" href={featuredArticle.slug ? `/blogs/${featuredArticle.slug}` : "#"}>
              <div className="featured-image">
                <ArticleArtwork article={featuredArticle} featured />
              </div>
              <div className="featured-content">
                <span className="featured-tag">Featured</span>
                <h2>{getText(featuredArticle, "title")}</h2>
                <p>{getText(featuredArticle, "excerpt")}</p>
                <ArticleMeta article={featuredArticle} showDate />
              </div>
            </a>
          </div>
        </section>
      ) : null}

      <section className="articles-wrap">
        <div className="container">
          <div className="section-head-row">
            <div>
              <h2>
                {heading.replace("articles.", "")}
                {!query && !activeCategory ? <span className="gradient-text">articles.</span> : null}
              </h2>
              <p>
                {pagination?.total
                  ? `${pagination.total} published articles from Sertify.`
                  : "Fresh insights from UAE's verified legal professionals."}
              </p>
            </div>
            <span className="sort-pill">
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={12} x2={15} y2={12} /><line x1={3} y1={18} x2={9} y2={18} /></svg>
              Sort: Most recent
            </span>
          </div>

          <div className="articles-grid">
            {articles.map((article, index) => (
              <a
                className="article-card"
                href={article.slug ? `/blogs/${article.slug}` : "#"}
                key={article.id || article.slug || index}
              >
                <div className={`article-image art-${(index % 9) + 1}`}>
                  <ArticleArtwork article={article} index={index} />
                  <span className="cat-badge">{getCategoryName(article)}</span>
                </div>
                <div className="article-body">
                  <h3>{getText(article, "title")}</h3>
                  <p>{getText(article, "excerpt")}</p>
                  <ArticleMeta article={article} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
