import Image from "next/image";
import type { Dictionary } from "@/i18n/getDictionary";

interface AboutProps {
  dictionary: Dictionary;
}

export default function About({ dictionary }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-8 sm:px-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider !my-0 !mb-8" />

        <article className="prose">
          <div className="mb-10 flex flex-col sm:block">
            <h2 className="order-1 mb-6 text-3xl font-bold text-gray-900 sm:order-none">
              {dictionary.about.title}
            </h2>

            <figure className="order-2 mx-auto mb-6 w-full max-w-[240px] sm:order-none sm:float-left sm:mx-0 sm:mb-2 sm:mr-8 sm:w-[220px]">
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
                <Image
                  src="/images/kenny-lee-2026.png"
                  alt="Portrait of Kenny Lee"
                  width={1627}
                  height={1762}
                  sizes="(max-width: 640px) 240px, 220px"
                  className="aspect-square h-auto w-full object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic text-gray-500 sm:text-left">
                {dictionary.about.photoCaption}
              </figcaption>
            </figure>

            <p className="order-3 mb-5 text-lg leading-relaxed text-gray-800 sm:order-none">
              {dictionary.about.description1}
            </p>
            <p className="order-3 text-lg leading-relaxed text-gray-800 sm:order-none">
              {dictionary.about.description2}
            </p>
            <div className="order-3 clear-both sm:order-none" />
          </div>

          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            {dictionary.about.career2}
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            {dictionary.about.purpose1}
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            {dictionary.about.purpose2}
          </p>
        </article>
      </div>
    </section>
  );
}
