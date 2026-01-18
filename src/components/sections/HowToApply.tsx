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

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {dictionary.howToApply.description}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-xl mt-1">&#9312;</div>
              <p className="text-gray-700">{dictionary.howToApply.step1}</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-xl mt-1">&#9313;</div>
              <p className="text-gray-700">{dictionary.howToApply.step2}</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-xl mt-1">&#9314;</div>
              <p className="text-gray-700">{dictionary.howToApply.step3}</p>
            </div>
          </div>

          <div className="p-6 bg-amber-50 rounded-lg border border-amber-200 mb-6">
            <p className="text-amber-800 font-medium text-center">
              {dictionary.howToApply.availability}
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-2xl">&#9993;</div>
            <div>
              <p className="font-semibold text-gray-900">
                {dictionary.howToApply.emailLabel}
              </p>
              <p className="text-amber-600">smilehandymanny@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
