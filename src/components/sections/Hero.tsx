import type { Dictionary } from "@/i18n/getDictionary";

interface HeroProps {
  dictionary: Dictionary;
}

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="prose">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            {dictionary.hero.title1}
            <br />
            <span className="text-amber-600">{dictionary.hero.title2}</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {dictionary.hero.description}
          </p>

          <p className="text-lg text-gray-500 leading-relaxed">
            {dictionary.hero.noCatch}
          </p>

          <div className="mt-10 p-6 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-amber-800 font-medium mb-1">
              {dictionary.hero.communitySundays}
            </p>
            <p className="text-amber-700 text-sm">
              {dictionary.hero.pilotDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
