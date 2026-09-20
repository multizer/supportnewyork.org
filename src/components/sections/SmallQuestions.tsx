import type { Dictionary } from "@/i18n/getDictionary";

interface SmallQuestionsProps {
  dictionary: Dictionary;
}

export default function SmallQuestions({ dictionary }: SmallQuestionsProps) {
  return (
    <section className="px-6 py-10">
      <div className="prose">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          {dictionary.smallQuestions.title}
        </h2>

        <p className="mb-5 text-lg leading-relaxed text-gray-800">
          {dictionary.smallQuestions.description1}
        </p>

        <p className="mb-5 text-lg leading-relaxed text-gray-800">
          {dictionary.smallQuestions.description2}
        </p>

        <p className="mb-5 font-serif text-2xl font-bold text-amber-800">
          {dictionary.smallQuestions.answer}
        </p>

        <p className="mb-5 text-lg leading-relaxed text-gray-800">
          {dictionary.smallQuestions.description3}
        </p>

        <p className="border-l-2 border-amber-400 pl-5 text-lg font-semibold leading-relaxed text-gray-800">
          {dictionary.smallQuestions.closing}
        </p>
      </div>
    </section>
  );
}
