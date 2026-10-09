import type { Dictionary } from "@/i18n/getDictionary";
import { SERVICE_PAUSED } from "@/config/serviceStatus";

interface ServicePauseBannerProps {
  dictionary: Dictionary;
}

export default function ServicePauseBanner({ dictionary }: ServicePauseBannerProps) {
  if (!SERVICE_PAUSED) return null;

  return (
    <>
      <div aria-hidden="true" className="h-56 sm:h-52" />
      <div className="fixed right-4 top-[4.5rem] z-40 w-[calc(100%-2rem)] max-w-sm sm:right-6">
        <div
          role="status"
          className="relative overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 px-5 py-4 text-left text-amber-950 shadow-2xl shadow-amber-950/20 ring-1 ring-amber-200/80 sm:px-6 sm:py-5"
        >
          <span
            className="absolute inset-y-0 left-0 w-1.5 bg-amber-500"
            aria-hidden="true"
          />
          <div className="flex items-start gap-3 pl-1">
            <span
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300/70 text-xl shadow-inner"
              aria-hidden="true"
            >
              👋
            </span>
            <div>
              <span className="mb-1.5 inline-flex rounded-full bg-amber-200/80 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-950">
                Visit update
              </span>
              <p className="mb-1 text-xl font-bold tracking-tight">{dictionary.servicePause.greeting}</p>
              <p className="text-xl leading-relaxed text-amber-950">
                {dictionary.servicePause.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
