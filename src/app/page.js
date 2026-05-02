import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import HowItWorks from "@/app/components/howitworks";
import AiSection from "@/app/components/AISection";
import Providers from "@/app/components/Providers";
 import Testimonials from "@/app/components/Testimonials";
import FinalCta from "@/app/components/FinalCta";
import Footer from "@/app/components/Footer";
import css from "@/app/home.css";

import { SITE_URL } from "./lib/site";

const PAGE_URL = `${SITE_URL}/providers`;
const OG_IMAGE = `${SITE_URL}/logo.jpg`;
export const metadata = {
  title: "Sertify | UAE's First Legal Services Marketplace",
  description:
    "Sertify connects you with verified legal and notary service providers across the UAE.",
  icons: {
    icon: "/logo.jpg",
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
      description:
        "Sertify is a UAE legal services marketplace connecting users with verified legal professionals.",
    },


    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Sertify",
      publisher: {
        "@id": `${SITE_URL}#organization`,
      },
    },


    {
      "@type": "WebPage",
      "@id": `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: "Sertify | UAE Legal Services Marketplace",
      description:
        "Connect with verified legal professionals across the UAE. Book, chat, and manage services in one trusted platform.",
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      about: {
        "@id": `${SITE_URL}#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE,
      },
    },


    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
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
       <Marquee />
       <Features />
     
      <HowItWorks /> 
      <AiSection /> 
      <Providers /> 
      <Testimonials /> 
       <FinalCta />
       <Footer /> 
    </>
  );
}