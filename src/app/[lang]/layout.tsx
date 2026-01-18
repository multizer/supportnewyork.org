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

  return {
    title: isKorean
      ? "Support New York - 이웃이 이웃을 돕습니다, 기술로"
      : "Support New York - Neighbors Helping Neighbors with Technology",
    description: isKorean
      ? "뉴욕시의 시니어, 장애인, 저소득층 이웃을 위한 무료 디지털 및 기술 지원. 매주 일요일 커뮤니티 선데이 운영."
      : "Free digital and tech help for seniors, people with disabilities, and low-income neighbors in New York City. Community Sundays every week.",
    keywords: [
      "tech support",
      "seniors",
      "NYC",
      "volunteer",
      "community",
      "digital help",
    ],
    openGraph: {
      title: "Support New York",
      description: isKorean
        ? "이웃이 이웃을 돕습니다, 기술로"
        : "Neighbors helping neighbors with technology",
      type: "website",
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

  return (
    <>
      <Header lang={lang} dictionary={dictionary} />
      <main>{children}</main>
      <Footer dictionary={dictionary} />
    </>
  );
}
