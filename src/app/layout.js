import "./globals.css";
import { Inter } from "next/font/google";
import { SITE_URL } from "./lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

// ======================================
// SEO METADATA
// ======================================
export const metadata = {
  // IMPORTANT
  metadataBase: new URL(SITE_URL),



  // TITLE
  title: {
    default:
      "Sertify | UAE's First Legal Services Marketplace",

    template: "%s | Sertify",
  },

  // DESCRIPTION
  description:
    "Sertify connects you with verified legal and notary service providers across the UAE.",

  // ICONS
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  // OPEN GRAPH
  openGraph: {
    title:
      "Sertify | Legal Services Marketplace",

    description:
      "Connect with verified legal and notary service providers across the UAE.",

    url: SITE_URL,

    siteName: "Sertify",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sertify",
      },
    ],
  },

  // TWITTER
  twitter: {
    card: "summary_large_image",

    title:
      "Sertify | Legal Services Marketplace",

    description:
      "Connect with verified legal and notary service providers across the UAE.",

    images: ["/logo.jpg"],
  },

  // ROBOTS
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ======================================
// ROOT LAYOUT
// ======================================
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
            <head>
        <meta name="google-site-verification" content="7D-0cstyN80XsBus9sE6mRjIfGjKq4ui-2AW6ffptcw" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}