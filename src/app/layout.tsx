import type { Metadata, Viewport } from "next";
import { Noto_Sans_Tamil, Noto_Serif_Tamil, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/announcement-bar";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";
import MobileActionBar from "@/components/layout/mobile-action-bar";
import { defaultMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-noto-sans-tamil",
  subsets: ["tamil", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerifTamil = Noto_Serif_Tamil({
  variable: "--font-noto-serif-tamil",
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#123D2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.fullName,
        "alternateName": [siteConfig.name, siteConfig.fullNameEnglish, siteConfig.nameEnglish],
        "url": siteConfig.url,
        "telephone": siteConfig.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karur",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN",
        },
        "sameAs": [siteConfig.instagram],
        "description": siteConfig.description,
      },
      {
        "@type": "FinancialService",
        "@id": `${siteConfig.url}/#service`,
        "name": siteConfig.fullName,
        "description": "மகளிர் கடன் வழிகாட்டுதல், சுயஉதவிக் குழுக்கள் ஆதரவு, சிறு தொழில் நிதி ஆலோசனைகள்.",
        "url": siteConfig.url,
        "telephone": siteConfig.phone,
        "areaServed": {
          "@type": "City",
          "name": "Karur",
        },
        "priceRange": "Free guidance",
      },
    ],
  };

  return (
    <html
      lang="ta"
      className={`${notoSansTamil.variable} ${notoSerifTamil.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-ivory)] text-[var(--color-text-dark)]">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-900 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          முக்கிய உள்ளடக்கத்திற்குச் செல்ல
        </a>

        <AnnouncementBar />
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
        <MobileActionBar />
      </body>
    </html>
  );
}
