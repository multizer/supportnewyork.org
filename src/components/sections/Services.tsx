import type { Dictionary } from "@/i18n/getDictionary";

interface ServicesProps {
  dictionary: Dictionary;
}

export default function Services({ dictionary }: ServicesProps) {
  const categories = dictionary.services.categories;

  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.services.title}
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {dictionary.services.description}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-sm transition-shadow duration-200"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-150 pb-2">
                  <span className="w-1.5 h-5 bg-amber-600 rounded-full"></span>
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-base text-gray-800 flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-600 select-none font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="font-bold text-lg text-gray-900 mb-1">
              {dictionary.services.notSureTitle}
            </h4>
            <p className="text-base text-gray-700 leading-relaxed">
              {dictionary.services.notSureDescription}
            </p>
          </div>

          <div className="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-base text-amber-950 whitespace-pre-line leading-relaxed">
              <strong className="text-amber-900">Note:</strong>{"\n"}{dictionary.services.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
