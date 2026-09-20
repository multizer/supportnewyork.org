import type { Dictionary } from "@/i18n/getDictionary";

interface CommunitySupportProps {
  dictionary: Dictionary;
}

export default function CommunitySupport({ dictionary }: CommunitySupportProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <div className="border-y border-amber-200 bg-amber-50/60 px-5 py-10 sm:px-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              {dictionary.communitySupport.eyebrow}
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900">
              {dictionary.communitySupport.title}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-gray-800">
              {dictionary.communitySupport.description2}
            </p>
            <p className="mb-5 text-base leading-relaxed text-gray-800">
              {dictionary.communitySupport.description3}
            </p>

            <div className="mt-8 border-t border-amber-200 pt-7">
              <h3 className="mb-4 text-xl font-bold leading-snug text-gray-900">
                {dictionary.communitySupport.electricalTitle}
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-800">
                {dictionary.communitySupport.electricalDescription1}
              </p>
              <p className="mb-4 text-base leading-relaxed text-gray-800">
                {dictionary.communitySupport.electricalDescription2}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {dictionary.communitySupport.electricalDescription3}
              </p>
            </div>
            <a
              href="https://www.stardeltaelectric.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-bold text-amber-900 underline decoration-amber-300 underline-offset-4 transition-colors hover:text-amber-950"
            >
              {dictionary.communitySupport.partnerLink}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-14">
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              {dictionary.trust.title}
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-800">
              {dictionary.trust.description}
            </p>
            <ul className="space-y-4">
              {dictionary.trust.items.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
