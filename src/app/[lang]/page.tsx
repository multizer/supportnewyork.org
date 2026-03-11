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
import { client } from "@/sanity/lib/client";
import { STORIES_QUERY, NOTICES_QUERY } from "@/sanity/lib/queries";

// Revalidate data every 60 seconds
export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (locales.includes(langParam as Locale) ? langParam : "en") as Locale;
  const dictionary = await getDictionary(lang);

  // Fetch data from Sanity with error handling
  let stories = [];
  let notices = [];
  
  try {
    // Only attempt to fetch if Sanity is configured
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your_project_id_here") {
      [stories, notices] = await Promise.all([
        client.fetch(STORIES_QUERY, { lang }),
        client.fetch(NOTICES_QUERY, { lang }),
      ]);
    }
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
  }

  return (
    <>
      <Hero dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Services dictionary={dictionary} />
      <Stories dictionary={dictionary} stories={stories} />
      <Notice dictionary={dictionary} notices={notices} />
      <HowToApply dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </>
  );
}

