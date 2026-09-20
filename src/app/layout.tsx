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
const siteTitle = "Support New York | A Personal Volunteer Project";
const siteDescription =
  "Kenny’s small personal project offering occasional, hands-on help with everyday technology in Manhattan, Queens, and Brooklyn.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(baseUrl),
  applicationName: "Support New York",
  authors: [{ name: "Kenny Lee", url: baseUrl }],
  creator: "Kenny Lee",
  publisher: "Support New York",
  category: "Personal volunteer project",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: baseUrl,
    siteName: "Support New York",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kenny-lee.png",
        width: 1195,
        height: 1195,
        alt: "Kenny Lee, founder of the Support New York personal volunteer project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/kenny-lee.png"],
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
  const dictionary = await getDictionary();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Support New York",
        "description": siteDescription,
        "inLanguage": "en-US"
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#kenny-lee`,
        "name": "Kenny Lee",
        "url": baseUrl,
        "image": `${baseUrl}/images/kenny-lee.png`
      }
    ]
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
