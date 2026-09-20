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
            {dictionary.contact.wantToHelp}
          </h2>

          <p className="border-l-2 border-amber-400 pl-5 text-lg leading-relaxed text-gray-700">
            {dictionary.contact.volunteerDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
