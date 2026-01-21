import {
  Hero,
  About,
  Services,
  Stories,
  Notice,
  HowToApply,
  Contact,
} from "@/components/sections";
import { getDictionary } from "@/i18n/getDictionary";

export default async function Home() {
  const dictionary = await getDictionary("en");

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
