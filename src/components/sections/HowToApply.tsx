import type { Dictionary } from "@/i18n/getDictionary";

interface HowToApplyProps {
  dictionary: Dictionary;
}

export default function HowToApply({ dictionary }: HowToApplyProps) {
  return (
    <section id="how-to-apply" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.howToApply.title}
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            {dictionary.howToApply.description}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-150">
              <div className="text-xl mt-1 text-amber-800 font-bold">&#9312;</div>
              <p className="text-gray-900 text-base md:text-lg leading-relaxed">{dictionary.howToApply.step1}</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-150">
              <div className="text-xl mt-1 text-amber-800 font-bold">&#9313;</div>
              <p className="text-gray-900 text-base md:text-lg leading-relaxed">{dictionary.howToApply.step2}</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-150">
              <div className="text-xl mt-1 text-amber-800 font-bold">&#9314;</div>
              <p className="text-gray-900 text-base md:text-lg leading-relaxed">{dictionary.howToApply.step3}</p>
            </div>
          </div>

          <div className="p-6 bg-amber-50 rounded-lg border border-amber-200 mb-6">
            <p className="text-amber-900 font-semibold text-center leading-relaxed">
              {dictionary.howToApply.availability}
            </p>
          </div>

          <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200 shadow-xs">
            <div className="text-3xl text-amber-800">&#9993;</div>
            <div>
              <p className="font-bold text-gray-900 text-base">
                {dictionary.howToApply.emailLabel}
              </p>
              <p className="text-lg">
                <a
                  href="mailto:smilehandymanny@gmail.com"
                  className="text-amber-800 hover:text-amber-950 underline font-bold transition-colors"
                >
                  smilehandymanny@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
