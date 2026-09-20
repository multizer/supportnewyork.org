import type { Dictionary } from "@/i18n/getDictionary";

interface ContactProps {
  dictionary: Dictionary;
}

export default function Contact({ dictionary }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.contact.title}
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {dictionary.contact.description}
          </p>

          <div className="space-y-5 border-y border-gray-200 py-6">
            <div>
              <p className="font-bold text-gray-900">{dictionary.howToApply.phoneLabel}</p>
              <p className="py-2 text-3xl font-bold text-amber-800">
                917-818-0994
              </p>
              <div className="mt-3">
                <p className="text-lg font-semibold text-gray-900">
                  {dictionary.contact.email}
                </p>
                  <p className="max-w-full break-words py-2 text-xl font-bold text-amber-800 sm:text-2xl">
                    kennysam11354@gmail.com
                  </p>
              </div>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">{dictionary.howToApply.voicemailNote}</p>
            </div>

          </div>

          <div className="mt-9 border-l-2 border-amber-400 pl-5">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {dictionary.contact.wantToHelp}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {dictionary.contact.volunteerDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
