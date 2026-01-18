import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Support New York - Neighbors Helping Neighbors with Technology",
  description:
    "Free digital and tech help for seniors, people with disabilities, and low-income neighbors in New York City. Community Sundays every week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${merriweather.variable} ${openSans.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
