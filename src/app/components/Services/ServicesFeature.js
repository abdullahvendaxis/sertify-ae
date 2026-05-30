"use client";

import { useEffect, useRef, useState } from "react";
import { getMarketplaceServices, searchServices } from "@/services/servicesService";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_API?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getText = (item, key) =>
  item?.[`${key}_en`] || item?.[key] || item?.[`${key}_ar`] || "";

const getCategoryName = (service) =>
  service?.category?.title_en ||
  service?.category_name ||
  service?.category?.slug ||
  "Service";

const getProviderDetail = (service) =>
  service?.provider?.serviceProviderDetail || service?.provider?.detail || {};

const getProviderName = (service) =>
  getText(getProviderDetail(service), "business_name") ||
  service?.provider?.full_name ||
  "Verified Provider";

const formatPrice = (service) => {
  if (service?.pricing_type === "FREE") return "Free";
  if (service?.pricing_type === "CUSTOM") return "Custom";
  if (!service?.price) return "Quote";

  const amount = Number(service.price);
  const value = Number.isFinite(amount) ? amount.toLocaleString("en-US") : service.price;
  return `${service.currency || "AED"} ${value}`;
};

const formatMode = (value) =>
  String(value || "Service")
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const resolveImage = (src) => {
  if (!src) return "";
  if (/^(https?:|data:)/i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${BACKEND_URL}${src}`;
  const uploadsIndex = src.replace(/\\/g, "/").lastIndexOf("/uploads/");
  if (uploadsIndex >= 0) return `${BACKEND_URL}${src.replace(/\\/g, "/").slice(uploadsIndex)}`;
  if (src.startsWith("/")) return src;
  return `${BACKEND_URL}/${src}`;
};

const normalizeServicesResponse = (response) => ({
  services: response?.services || response?.data?.services || (Array.isArray(response) ? response : []),
  pagination: response?.pagination || response?.data?.pagination || null,
});

const ServiceArtwork = ({ service }) => {
  const image = resolveImage(service.cover_image || service.image_url || service.image);

  if (image) {
    return <img className="service-cover" src={image} alt={getText(service, "title")} crossOrigin="anonymous" />;
  }

  return (
    <div className="service-cover-fallback">
      <svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
      </svg>
    </div>
  );
};

export default function ServicesFeature() {
  const [services, setServices] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [emirate, setEmirate] = useState("");
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
        nextEmirate: params.get("emirate")?.trim() || "",
      };
    };

    const loadServices = async () => {
      const requestId = requestIdRef.current + 1;
      requestIdRef.current = requestId;
      const { nextQuery, nextCategory, nextEmirate } = getFiltersFromUrl();

      setQuery(nextQuery);
      setActiveCategory(nextCategory);
      setEmirate(nextEmirate);

      try {
        setLoading(true);
        setError(null);

        const filters = {
          limit: 12,
          offset: 0,
          sort: nextQuery ? "relevance" : "popular",
          ...(nextCategory ? { category_id: nextCategory } : {}),
          ...(nextEmirate ? { emirate: nextEmirate } : {}),
        };

        const response = nextQuery
          ? await searchServices({ q: nextQuery, ...filters })
          : await getMarketplaceServices(filters);

        if (!isCurrent || requestId !== requestIdRef.current) return;

        const normalized = normalizeServicesResponse(response);
        setServices(normalized.services);
        setPagination(normalized.pagination);
      } catch (loadError) {
        if (!isCurrent || requestId !== requestIdRef.current) return;
        setServices([]);
        setPagination(null);
        setError(loadError.message || "Unable to load services.");
      } finally {
        if (isCurrent && requestId === requestIdRef.current) setLoading(false);
      }
    };

    loadServices();
    window.addEventListener("sertify:services-filters-changed", loadServices);
    window.addEventListener("popstate", loadServices);

    return () => {
      isCurrent = false;
      window.removeEventListener("sertify:services-filters-changed", loadServices);
      window.removeEventListener("popstate", loadServices);
    };
  }, []);

  const heading = query
    ? `Search results for "${query}"`
    : activeCategory || emirate
      ? "Filtered services"
      : "Popular services right now.";

  return (
    <section className="featured-wrap">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" />Marketplace</span>
          <h2>{heading}</h2>
          <p>
            {pagination?.total
              ? `${pagination.total} published services from verified providers.`
              : "Browse trusted services from UAE legal professionals."}
          </p>
        </div>

        {loading ? (
          <div className="featured-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="service-card service-skeleton" key={index}>
                <div className="service-cover-shell" />
                <span />
                <span />
                <span />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="service-empty-state">
            <h3>Services could not load.</h3>
            <p>{error}</p>
          </div>
        ) : services.length ? (
          <div className="featured-grid">
            {services.map((service) => {
              const providerDetail = getProviderDetail(service);
              const rating = Number(providerDetail.rating_avg || 0);
              const reviews = Number(providerDetail.review_count || 0);

              return (
                <a className="service-card" href={service.slug ? `/services/${service.slug}` : "#"} key={service.id}>
                  <div className="service-cover-shell">
                    <ServiceArtwork service={service} />
                    <span className="service-image-tag">{getCategoryName(service)}</span>
                  </div>
                  <div className="service-head">
                    <span className={`service-tag ${service.is_featured ? "popular" : ""}`}>
                      {service.is_featured ? "Featured" : formatMode(service.service_mode)}
                    </span>
                    {rating ? (
                      <div className="service-rating"><span className="star">★</span>{rating.toFixed(1)} ({reviews})</div>
                    ) : null}
                  </div>
                  <h3>{getText(service, "title")}</h3>
                  <p>{getText(service, "short_description") || getText(service, "description")}</p>
                  <div className="service-provider-line">{getProviderName(service)}</div>
                  <div className="service-footer">
                    <div className="service-price">
                      <div className="p-lbl">{service.pricing_type === "STARTING_FROM" ? "Starting" : "Price"}</div>
                      <div className="p-val">
                        {service.pricing_type === "STARTING_FROM" ? <span className="from">from</span> : null} {formatPrice(service)}
                      </div>
                    </div>
                    <span className="service-book">View details</span>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="service-empty-state">
            <h3>No services found.</h3>
            <p>Try another search term, category, or emirate.</p>
          </div>
        )}
      </div>
    </section>
  );
}
