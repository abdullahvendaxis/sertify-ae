import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
});

export const metadata = {
  title: "Sertify | UAE's First Legal Services Marketplace",
  description:
    "Sertify connects you with verified legal and notary service providers across the UAE.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}