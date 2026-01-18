import type { Dictionary } from "@/i18n/getDictionary";

interface NoticeProps {
  dictionary: Dictionary;
}

export default function Notice({ dictionary }: NoticeProps) {
  return (
    <section id="notice" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.notice.title}
          </h2>

          {/* Service Area Notice */}
          <div className="mb-6 p-6 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">
              &#128205; {dictionary.notice.serviceAreaTitle}
            </h3>
            <p className="text-amber-800 leading-relaxed">
              {dictionary.notice.serviceAreaMessage}
            </p>
          </div>

          {/* Coming Soon */}
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">&#128227;</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {dictionary.notice.comingSoon}
            </h3>
            <p className="text-gray-500">{dictionary.notice.description}</p>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            {dictionary.notice.stayTuned}
          </p>
        </div>
      </div>
    </section>
  );
}
