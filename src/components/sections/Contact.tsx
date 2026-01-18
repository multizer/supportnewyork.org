import type { Dictionary } from "@/i18n/getDictionary";

interface ContactProps {
  dictionary: Dictionary;
}

export default function Contact({ dictionary }: ContactProps) {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.contact.title}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {dictionary.contact.description}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-2xl">&#9993;</div>
              <div>
                <p className="font-semibold text-gray-900">
                  {dictionary.contact.email}
                </p>
                <p className="text-amber-600">
                  smilehandymanny@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-2xl">&#128172;</div>
              <div>
                <p className="font-semibold text-gray-900">
                  {dictionary.contact.facebook}
                </p>
                <a
                  href="https://www.facebook.com/supportnewyork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  facebook.com/supportnewyork
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-semibold text-amber-800 mb-2">
              {dictionary.contact.wantToHelp}
            </h3>
            <p className="text-sm text-amber-700">
              {dictionary.contact.volunteerDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
