import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const baseUrl = "https://supportnewyork.org";

export const metadata: Metadata = {
  title: "Support New York - Free Tech Support for NYC Neighbors (by Kenny)",
  description:
    "Free personal tech support for seniors and neighbors in Manhattan and Brooklyn. Kenny (SmileHandyman) helps with Wi-Fi, smartphones, and app settings every Sunday.",
  keywords: [
    "free tech support NYC", "senior digital help", "Manhattan volunteer",
    "Brooklyn community service", "Williamsburg tech aid", "free Wi-Fi setup",
    "smartphone help for seniors", "Community Sundays", "Kenny volunteer",
    "Support New York", "digital literacy NYC"
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Support New York",
    description: "Free personal tech support for seniors and neighbors in Manhattan and Brooklyn. Kenny (SmileHandyman) helps with Wi-Fi, smartphones, and app settings every Sunday.",
    url: baseUrl,
    siteName: "Support New York",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/opentoday.png",
        width: 1200,
        height: 630,
        alt: "Support New York - Community Sundays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support New York - Free Tech Support for NYC Neighbors (by Kenny)",
    description: "Free personal tech support for seniors and neighbors in Manhattan and Brooklyn. Kenny (SmileHandyman) helps with Wi-Fi, smartphones, and app settings every Sunday.",
    images: ["/images/opentoday.png"],
  },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await getDictionary("en");
  const description = "Free personal tech support for seniors and neighbors in Manhattan and Brooklyn. Kenny (SmileHandyman) helps with Wi-Fi, smartphones, and app settings every Sunday.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VolunteerAction",
    "name": "Support New York - Free Tech Support",
    "description": description,
    "agent": {
      "@type": "Person",
      "name": "Kenny",
      "url": "https://smilehandyman.com"
    },
    "actionStatus": "http://schema.org/ActiveActionStatus",
    "location": {
      "@type": "Place",
      "name": "New York City",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "category": ["Technical Support", "Digital Literacy", "Community Service"],
    "provider": {
      "@type": "Organization",
      "name": "Support New York"
    },
    "areaServed": [
      { "@type": "City", "name": "Manhattan" },
      { "@type": "City", "name": "Brooklyn" },
      { "@type": "City", "name": "Williamsburg" }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "http://schema.org/InStock",
      "description": "Free community service every Sunday"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${openSans.variable} antialiased bg-white text-gray-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header dictionary={dictionary} />
        <main>{children}</main>
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}
