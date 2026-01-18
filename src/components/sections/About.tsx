import type { Dictionary } from "@/i18n/getDictionary";

interface AboutProps {
  dictionary: Dictionary;
}

export default function About({ dictionary }: AboutProps) {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.about.title}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {dictionary.about.description1}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {dictionary.about.description2}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {dictionary.about.description3}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {dictionary.about.focusTitle}
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">&#10003;</span>
              <span>{dictionary.about.focus1}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">&#10003;</span>
              <span>{dictionary.about.focus2}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">&#10003;</span>
              <span>{dictionary.about.focus3}</span>
            </li>
          </ul>

          <blockquote className="mt-8 pl-6 border-l-4 border-amber-400 italic text-gray-500">
            &ldquo;{dictionary.about.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
