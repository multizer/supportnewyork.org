import Image from "next/image";
import type { Dictionary } from "@/i18n/getDictionary";

interface AboutProps {
  dictionary: Dictionary;
}

export default function About({ dictionary }: AboutProps) {
  const description2Parts = dictionary.about.description2.split(/(NeoCymax|multizer\.com)/g);

  return (
    <section id="about" className="scroll-mt-56 px-5 py-8 sm:px-6 sm:py-10">
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
              {description2Parts.map((part, index) => {
                if (part === "NeoCymax") {
                  return (
                    <strong key={`${part}-${index}`} className="font-bold text-gray-950">
                      {part}
                    </strong>
                  );
                }
                if (part === "multizer.com") {
                  return (
                    <Image
                      key={`${part}-${index}`}
                      src="/images/about-multizer-label.png"
                      alt="Kenny's company"
                      width={115}
                      height={17}
                      className="inline-block h-[1.1em] w-auto align-text-bottom"
                    />
                  );
                }
                return part;
              })}
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

          <details className="group rounded-xl border border-stone-200 bg-amber-50/50 px-5 py-4">
            <summary className="cursor-pointer list-none text-base leading-relaxed text-gray-700 transition-colors hover:text-gray-900 marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-start gap-2">
                <svg
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200 group-open:rotate-90"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="underline decoration-amber-300 decoration-1 underline-offset-4 group-hover:decoration-amber-500">
                  {dictionary.about.verify.summary}
                </span>
              </span>
            </summary>
            <div className="mt-3 border-t border-amber-100 pt-3">
              <p className="mb-3 text-[0.95rem] leading-relaxed text-gray-700">
                {dictionary.about.verify.body}
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed">
                {dictionary.about.verify.links.map((link) => (
                  <li key={link.url} className="text-gray-700">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                      className="text-gray-800 underline decoration-amber-300 decoration-1 underline-offset-4 transition-colors hover:text-amber-700 hover:decoration-amber-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </article>
      </div>
    </section>
  );
}
