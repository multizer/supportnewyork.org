import {
  Hero,
  About,
  Services,
  Stories,
  Notice,
  HowToApply,
  Contact,
} from "@/components/sections";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (locales.includes(langParam as Locale) ? langParam : "en") as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Services dictionary={dictionary} />
      <Stories dictionary={dictionary} />
      <Notice dictionary={dictionary} />
      <HowToApply dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </>
  );
}
