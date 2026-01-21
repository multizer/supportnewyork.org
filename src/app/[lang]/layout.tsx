import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales, type Locale } from "@/i18n/config";
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

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isKorean = lang === "ko";
  const baseUrl = "https://supportnewyork.org"; // Assuming this is the domain

  const title = isKorean
    ? "Support New York - 뉴욕 한인 무료 IT 봉사 & 기술 지원 (Kenny)"
    : "Support New York - Free Tech Support for NYC Neighbors (by Kenny)";

  const description = isKorean
    ? "뉴욕 맨해튼, 브루클린 지역 시니어 및 이웃을 위한 케니(Kenny)의 무료 IT 자원봉사. 와이파이, 스마트폰, 앱 설정 등 디지털 도움을 드립니다."
    : "Free personal tech support for seniors and neighbors in Manhattan and Brooklyn. Kenny (SmileHandyman) helps with Wi-Fi, smartphones, and app settings every Sunday.";

  const keywords = isKorean
    ? [
      "뉴욕 무료컴퓨터 도우미", "뉴욕 컴퓨터 자원봉사"
    ]
    : [
      "free tech support NYC", "senior digital help", "Manhattan volunteer",
      "Brooklyn community service", "Williamsburg tech aid", "free Wi-Fi setup",
      "smartphone help for seniors", "Community Sundays", "Kenny volunteer",
      "Support New York", "digital literacy NYC"
    ];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "en-US": "/en",
        "ko-KR": "/ko",
      },
    },
    openGraph: {
      title: "Support New York",
      description,
      url: `${baseUrl}/${lang}`,
      siteName: "Support New York",
      locale: isKorean ? "ko_KR" : "en_US",
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
      title,
      description,
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
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (locales.includes(langParam as Locale) ? langParam : "en") as Locale;
  const dictionary = await getDictionary(lang);
  const isKorean = lang === "ko";
  const description = isKorean
    ? "뉴욕 맨해튼, 브루클린 지역 시니어 및 이웃을 위한 케니(Kenny)의 무료 IT 자원봉사. 와이파이, 스마트폰, 앱 설정 등 디지털 도움을 드립니다."
    : "Free personal tech support for seniors and neighbors in Manhattan and Brooklyn. Kenny (SmileHandyman) helps with Wi-Fi, smartphones, and app settings every Sunday.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VolunteerAction",
    "name": isKorean ? "뉴욕 무료 IT 기술 지원 (Support New York)" : "Support New York - Free Tech Support",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dictionary={dictionary} />
      <main>{children}</main>
      <Footer dictionary={dictionary} />
    </>
  );
}
