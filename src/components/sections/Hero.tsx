import type { Dictionary } from "@/i18n/getDictionary";

interface HeroProps {
  dictionary: Dictionary;
}

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section id="hero" className="px-5 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="prose">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            {dictionary.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            {dictionary.hero.title1}
            <br />
            <span className="text-amber-700">{dictionary.hero.title2}</span>
          </h1>

          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            {dictionary.hero.description}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {dictionary.hero.noCatch}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {dictionary.hero.pilotDescription}
          </p>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-amber-800 underline decoration-amber-300 underline-offset-4 transition-colors hover:text-amber-950"
          >
            {dictionary.hero.meetMe}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
