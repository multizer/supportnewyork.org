import type { Dictionary } from "@/i18n/getDictionary";

interface NoticeItem {
  _id: string;
  title: string;
  content: string;
  isUrgent?: boolean;
}

interface NoticeProps {
  dictionary: Dictionary;
  notices?: NoticeItem[];
}

export default function Notice({ dictionary, notices = [] }: NoticeProps) {
  if (notices.length === 0) return null;

  return (
    <section id="notice" className="px-5 py-8 sm:px-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider !my-0 !mb-8" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.notice.title}
          </h2>

          {/* Render Sanity Notices */}
          {notices.map((notice) => (
            <div
              key={notice._id}
              className={`mb-6 p-6 rounded-lg border ${
                notice.isUrgent
                  ? "bg-amber-50 border-amber-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h3 className={`text-lg font-semibold mb-3 ${
                notice.isUrgent ? "text-amber-900" : "text-gray-900"
              }`}>
                {notice.isUrgent ? "🚨 " : "📢 "}
                {notice.title}
              </h3>
              <p className={`${
                notice.isUrgent ? "text-amber-800" : "text-gray-700"
              } leading-relaxed whitespace-pre-wrap`}>
                {notice.content}
              </p>
            </div>
          ))}

          <p className="mt-6 text-sm text-gray-500 text-center">
            {dictionary.notice.stayTuned}
          </p>
        </div>
      </div>
    </section>
  );
}
