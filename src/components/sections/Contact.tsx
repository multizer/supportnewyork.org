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

          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {dictionary.contact.description}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200 shadow-xs">
              <div className="text-3xl text-amber-850">&#9993;</div>
              <div>
                <p className="font-bold text-gray-900">
                  {dictionary.contact.email}
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

            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200 shadow-xs">
              <div className="text-3xl text-amber-850">&#128172;</div>
              <div>
                <p className="font-bold text-gray-900">
                  {dictionary.contact.facebook}
                </p>
                <a
                  href="https://www.facebook.com/supportnewyork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-955 underline font-bold transition-colors text-lg"
                >
                  facebook.com/supportnewyork
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <h3 className="font-bold text-lg text-amber-900 mb-2">
              {dictionary.contact.wantToHelp}
            </h3>
            <p className="text-base text-amber-950 leading-relaxed">
              {dictionary.contact.volunteerDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
