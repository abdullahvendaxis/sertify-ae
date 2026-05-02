import Header from "../components/Header";
import ServicesHero from "../components/Services/ServicesHero";
import Categories from "../components/Services/Categories";
import ServicesFeature from "../components/Services/ServicesFeature";
import HowItWork from "../components/Services/HowItWork";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import css from "@/app/services.css";
import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/services`;
const OG_IMAGE = `${SITE_URL}/logo.jpg`;

export const metadata = {
  title: "Services",
  description:
    "Explore trusted legal and professional services on Sertify. Connect with verified experts easily.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Services | Sertify",
    description:
      "Explore trusted legal and professional services on Sertify.",
    url: PAGE_URL,
    siteName: "Sertify",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sertify Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Sertify",
    description:
      "Explore trusted legal and professional services on Sertify.",
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
      name: "Services | Sertify",
      description:
        "Explore trusted legal and professional services on Sertify.",
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
          name: "Services",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Page UI */}
      <Header />
      <ServicesHero />
      <Categories />
      <ServicesFeature />
      <HowItWork />
      <FinalCta />
      <Footer />
    </>
  );
}