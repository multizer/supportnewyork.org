import type { Dictionary } from "@/i18n/getDictionary";
import Image from "next/image";

interface StoriesProps {
  dictionary: Dictionary;
}

export default function Stories({ dictionary }: StoriesProps) {
  return (
    <section id="stories" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.stories.title}
          </h2>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/opentoday.png"
                alt="Community Sundays - Open Today"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <blockquote className="text-lg italic text-gray-700 border-l-4 border-amber-400 pl-4 mb-4">
                &ldquo;{dictionary.stories.quote}&rdquo;
              </blockquote>
              <p className="text-gray-600">{dictionary.stories.message}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center">
            {dictionary.stories.checkBack}
          </p>
        </div>
      </div>
    </section>
  );
}
