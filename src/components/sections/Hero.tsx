import type { Dictionary } from "@/i18n/getDictionary";

interface HeroProps {
  dictionary: Dictionary;
}

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="prose">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            {dictionary.hero.title1}
            <br />
            <span className="text-amber-700">{dictionary.hero.title2}</span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-800 font-semibold mb-6 italic">
            &ldquo;{dictionary.hero.subtitle}&rdquo;
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 whitespace-pre-line">
            {dictionary.hero.description}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {dictionary.hero.noCatch}
          </p>

          <div className="mt-10 p-6 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-amber-900 font-semibold mb-1">
              {dictionary.hero.communitySundays}
            </p>
            <p className="text-amber-800 text-sm whitespace-pre-line leading-relaxed">
              {dictionary.hero.pilotDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
