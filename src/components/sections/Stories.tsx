import type { Dictionary } from "@/i18n/getDictionary";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

interface Story {
  _id: string;
  title: string;
  quote: string;
  message: string;
  image: SanityImage;
}

interface StoriesProps {
  dictionary: Dictionary;
  stories?: Story[];
}

export default function Stories({ dictionary, stories = [] }: StoriesProps) {
  return (
    <section id="stories" className="scroll-mt-24 px-5 py-8 sm:px-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider !my-0 !mb-8" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.stories.title}
          </h2>

          {stories.length > 0 ? (
            stories.map((story) => (
              <div key={story._id} className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                {story.image && (
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={urlForImage(story.image).url()}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{story.title}</h3>
                  {story.quote && (
                    <blockquote className="text-lg italic text-gray-700 border-l-4 border-amber-400 pl-4 mb-4">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                  )}
                  <p className="text-gray-600 whitespace-pre-wrap">{story.message}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg leading-relaxed text-gray-700">
              {dictionary.stories.emptyNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
