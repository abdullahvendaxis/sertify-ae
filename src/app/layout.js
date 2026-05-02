import "./globals.css";
import { Inter } from "next/font/google";
import { SITE_URL } from "./lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL), // ✅ IMPORTANT for dynamic URLs

  title: {
    default: "Sertify | UAE's First Legal Services Marketplace",
    template: "%s | Sertify",
  },

  description:
    "Sertify connects you with verified legal and notary service providers across the UAE.",

  icons: {
    icon: "/logo.jpg",
  },

  openGraph: {
    title: "Sertify | Legal Services Marketplace",
    description:
      "Connect with verified legal and notary service providers across the UAE.",
    url: SITE_URL,
    siteName: "Sertify",
    type: "website",
    images: [
      {
        url: "/logo.jpg", // auto becomes https://sertify.ae/logo.jpg
        width: 1200,
        height: 630,
        alt: "Sertify",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sertify | Legal Services Marketplace",
    description:
      "Connect with verified legal and notary service providers across the UAE.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}