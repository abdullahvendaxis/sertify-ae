import Header from "../components/Header";
import Hero from "../components/HowItWork/Hero";
import Ai from "../components/HowItWork/Ai";
import BookingCard from "../components/HowItWork/BookingCard";
 import CompareSection from "../components/HowItWork/CompareSection";
import Faq from "../components/HowItWork/Faq";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";


 import css from "@/app/howitwork.css";


import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/how-it-work`;
const OG_IMAGE = `${SITE_URL}/logo.jpg`;

export const metadata = {
  title: "How It Works",
  description:
    "See how Sertify connects you with verified UAE legal professionals in four simple steps. Search, book, chat, and track every service in one trusted app.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "How It Works | Sertify",
    description:
      "See how Sertify connects you with verified UAE legal professionals in four simple steps. Search, book, chat, and track every service in one trusted app.",
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
    title: "How It Works | Sertify",
    description:
      "See how Sertify connects you with verified UAE legal professionals in four simple steps. Search, book, chat, and track every service in one trusted app.",
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
      name: "How It Works | Sertify",
      description:
        "See how Sertify connects you with verified UAE legal professionals in four simple steps. Search, book, chat, and track every service in one trusted app.",
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
          name: "How It Works",
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
      <Hero />
     <Ai />
     <BookingCard />
     <CompareSection />
     <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}