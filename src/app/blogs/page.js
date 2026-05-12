import BlogHero from "../components/Blogs/BlogHero";
import CategoriesFilter from "../components/Blogs/CategoriesFilter";
import FeaturesBlog from "../components/Blogs/FeaturesBlog";
import Header from "../components/Header";
import Newsletter from "../components/Blogs/Newsletter";
import Footer from "../components/Footer";
import css from "@/app/blog.css";

import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/blog`;
const OG_IMAGE = `${SITE_URL}/logo.jpg`;

export const metadata = {
  title: "Blogs",
  description:
    "Insights, guides, and updates on UAE legal services. Learn about notarization, POAs, attestation, contracts, and more from trusted professionals.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Blogs | Sertify",
    description:
      "Insights, guides, and updates on UAE legal services. Learn about notarization, POAs, attestation, contracts, and more from trusted professionals.",
    url: PAGE_URL,
    siteName: "Sertify",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sertify",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blogs | Sertify",
    description:
      "Insights, guides, and updates on UAE legal services. Learn about notarization, POAs, attestation, contracts, and more from trusted professionals.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Sertify",
      url: SITE_URL,
      logo: OG_IMAGE,
    },

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Sertify",
    },

    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Blogs | Sertify",
      description:
        "Insights, guides, and updates on UAE legal services. Learn about notarization, POAs, attestation, contracts, and more from trusted professionals.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function ProviderPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    
      <Header />
       <BlogHero /> 
      <CategoriesFilter />
    <FeaturesBlog />
  
       <Newsletter />
       <Footer /> 
    </>
  );
}