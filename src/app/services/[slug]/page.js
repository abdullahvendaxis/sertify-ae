import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "@/app/services.css";
import { getMarketplaceServices, getServiceBySlug } from "@/services/servicesService";
import { SITE_URL } from "../../lib/site";

const BACKEND_URL =
  process.env.VITE_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.VITE_BACKEND_API?.replace(/\/api\/?$/, "") ||
  process.env.NEXT_PUBLIC_BACKEND_API?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getText = (item, key) =>
  item?.[`${key}_en`] || item?.[key] || item?.[`${key}_ar`] || "";

const getServiceFromResponse = (response) =>
  response?.service || response?.data?.service || response?.services?.[0] || response?.data?.services?.[0] || null;

const normalizeServicesResponse = (response) =>
  response?.services || response?.data?.services || (Array.isArray(response) ? response : []);

const getCategoryName = (service) =>
  service?.category?.title_en || service?.category_name || service?.category?.slug || "Service";

const getProviderDetail = (service) =>
  service?.provider?.serviceProviderDetail || service?.provider?.detail || {};

const getProviderName = (service) =>
  getText(getProviderDetail(service), "business_name") ||
  service?.provider?.full_name ||
  "Verified Provider";

const formatValue = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const formatPrice = (service) => {
  if (service?.pricing_type === "FREE") return "Free";
  if (service?.pricing_type === "CUSTOM") return "Custom quote";
  if (!service?.price) return "Request quote";

  const amount = Number(service.price);
  const value = Number.isFinite(amount) ? amount.toLocaleString("en-US") : service.price;
  return `${service.currency || "AED"} ${value}`;
};

const resolveImage = (src) => {
  if (!src) return "";
  if (/^(https?:|data:)/i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${BACKEND_URL}${src}`;
  const uploadsIndex = src.replace(/\\/g, "/").lastIndexOf("/uploads/");
  if (uploadsIndex >= 0) return `${BACKEND_URL}${src.replace(/\\/g, "/").slice(uploadsIndex)}`;
  if (src.startsWith("/")) return src;
  return `${BACKEND_URL}/${src}`;
};

export async function generateStaticParams() {
  try {
    const response = await getMarketplaceServices({
      limit: 100,
      offset: 0,
      sort: "popular",
    });

    return normalizeServicesResponse(response)
      .filter((service) => service.slug)
      .map((service) => ({ slug: service.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await getServiceBySlug(slug);
    const service = getServiceFromResponse(response);
    if (!service) return { title: "Service | Sertify" };

    const title = getText(service, "meta_title") || getText(service, "title");
    const description = getText(service, "meta_description") || getText(service, "short_description");
    const image = resolveImage(service.cover_image);

    return {
      title,
      description,
      alternates: { canonical: `${SITE_URL}/services/${slug}` },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/services/${slug}`,
        type: "website",
        images: image ? [{ url: image, alt: title }] : undefined,
      },
    };
  } catch {
    return { title: "Service | Sertify" };
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  let service = null;
  let error = null;

  try {
    const response = await getServiceBySlug(slug);
    service = getServiceFromResponse(response);
  } catch (loadError) {
    error = loadError.message || "Unable to load service.";
  }

  const title = getText(service, "title");
  const shortDescription = getText(service, "short_description");
  const description = getText(service, "description");
  const image = resolveImage(service?.cover_image);
  const providerDetail = getProviderDetail(service || {});
  const rating = Number(providerDetail.rating_avg || 0);

  return (
    <>
      <Header />
      <main className="service-detail-page">
        <div className="container">
          <a className="service-back-link" href="/services">Back to services</a>

          {error || !service ? (
            <div className="service-empty-state">
              <h1>Service not found.</h1>
              <p>{error || "This service may have been removed or is no longer published."}</p>
            </div>
          ) : (
            <div className="service-detail-grid">
              <article className="service-detail-main">
                <div className="service-detail-cover">
                  {image ? (
                    <img src={image} alt={title} crossOrigin="anonymous" />
                  ) : (
                    <div className="service-cover-fallback">Sertify Service</div>
                  )}
                </div>
                <div className="service-detail-body">
                  <span className="service-detail-kicker">{getCategoryName(service)}</span>
                  <h1>{title}</h1>
                  {shortDescription ? <p className="service-detail-lead">{shortDescription}</p> : null}
                  <div className="service-detail-copy">
                    <p>{description || shortDescription || "This verified service is available through Sertify."}</p>
                  </div>
                </div>
              </article>

              <aside className="service-detail-side">
                <div className="service-detail-price">
                  <div className="p-lbl">{service.pricing_type === "STARTING_FROM" ? "Starting from" : "Price"}</div>
                  <div className="p-val">{formatPrice(service)}</div>
                </div>

                <div className="service-detail-provider">
                  <h3>{getProviderName(service)}</h3>
                  <p>
                    {providerDetail.provider_type ? formatValue(providerDetail.provider_type) : "Legal service provider"}
                    {rating ? ` · ★ ${rating.toFixed(1)} (${providerDetail.review_count || 0})` : ""}
                  </p>
                </div>

                <div className="service-detail-facts">
                  <div className="service-detail-fact"><span>Mode</span><strong>{formatValue(service.service_mode)}</strong></div>
                  <div className="service-detail-fact"><span>Consultation</span><strong>{formatValue(service.consultation_type || service.location_type)}</strong></div>
                  <div className="service-detail-fact"><span>Duration</span><strong>{service.duration_minutes ? `${service.duration_minutes} min` : "Flexible"}</strong></div>
                  <div className="service-detail-fact"><span>Location</span><strong>{service.emirate || providerDetail.emirate || "UAE"}</strong></div>
                  <div className="service-detail-fact"><span>Booking</span><strong>{service.booking_enabled ? "Available" : "Request only"}</strong></div>
                </div>

                <a className="btn service-detail-book" href="#">Book now</a>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
