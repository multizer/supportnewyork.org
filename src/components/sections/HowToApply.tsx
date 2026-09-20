import type { Dictionary } from "@/i18n/getDictionary";

interface HowToApplyProps {
  dictionary: Dictionary;
}

export default function HowToApply({ dictionary }: HowToApplyProps) {
  return (
    <section id="how-to-apply" className="scroll-mt-24 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.howToApply.title}
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            {dictionary.howToApply.description}
          </p>

          <ol className="mb-8 list-decimal space-y-4 pl-7 text-base text-gray-800 marker:font-bold marker:text-amber-800 md:text-lg">
            <li className="pl-2 leading-relaxed">{dictionary.howToApply.step1}</li>
            <li className="pl-2 leading-relaxed">{dictionary.howToApply.step2}</li>
            <li className="pl-2 leading-relaxed">{dictionary.howToApply.step3}</li>
          </ol>

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {dictionary.howToApply.phoneLabel}
            </h3>
            <p className="py-2 text-3xl font-bold text-amber-800">
              917-818-0994
            </p>
            <div className="mt-3">
              <p className="text-lg font-semibold text-gray-900">{dictionary.howToApply.emailLabel}</p>
              <p className="max-w-full break-words py-2 text-xl font-bold text-amber-800 sm:text-2xl">
                kennysam11354@gmail.com
              </p>
            </div>
            <p className="mt-3 text-lg leading-relaxed text-gray-700">
              {dictionary.howToApply.voicemailNote}
            </p>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-gray-800">
            {dictionary.howToApply.onBehalf}
          </p>

          <div className="mb-8 border-l-2 border-amber-400 pl-5">
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              {dictionary.howToApply.serviceAreaTitle}
            </h3>
            <p className="mb-4 leading-relaxed text-gray-800">
              {dictionary.howToApply.serviceAreaMessage}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {dictionary.howToApply.availability}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
