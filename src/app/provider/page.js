
import Header from "../components/Header";
import ProviderHero from "../components/Providers/ProviderHero";
import Benefits from "../components/Providers/Benefits";
import Commission from "../components/Providers/Commission";
import JoinSteps from "../components/Providers/JoinSteps";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import css from "@/app/provider.css";


import { SITE_URL } from "../lib/site";

const PAGE_URL = `${SITE_URL}/providers`;
const OG_IMAGE = `${SITE_URL}/logo.jpg`;

export const metadata = {
  title: "For Providers",
  description:
    "Join Sertify. Grow your legal practice with verified bookings, transparent payouts, and modern tools built for UAE legal professionals.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "For Providers | Sertify",
    description:
      "Join Sertify. Grow your legal practice with verified bookings, transparent payouts, and modern tools built for UAE legal professionals.",
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
    title: "For Providers | Sertify",
    description:
      "Join Sertify. Grow your legal practice with verified bookings, transparent payouts, and modern tools built for UAE legal professionals.",
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
      name: "For Providers | Sertify",
      description:
        "Join Sertify. Grow your legal practice with verified bookings, transparent payouts, and modern tools built for UAE legal professionals.",
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
          name: "For Providers",
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
       <ProviderHero /> 
      <Benefits />
    <Commission />
    <JoinSteps />
       <FinalCta />
       <Footer /> 
    </>
  );
}
