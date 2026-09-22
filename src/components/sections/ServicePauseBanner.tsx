import type { Dictionary } from "@/i18n/getDictionary";
import { SERVICE_PAUSED } from "@/config/serviceStatus";

interface ServicePauseBannerProps {
  dictionary: Dictionary;
}

export default function ServicePauseBanner({ dictionary }: ServicePauseBannerProps) {
  if (!SERVICE_PAUSED) return null;

  return (
    <div className="px-5 pt-20 sm:px-6 sm:pt-24">
      <div className="max-w-3xl mx-auto">
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-4 sm:items-center sm:px-5"
        >
          <span className="mt-0.5 text-2xl sm:mt-0" aria-hidden="true">
            ⏸️
          </span>
          <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
            <span className="font-bold">{dictionary.servicePause.badge}:</span>{" "}
            {dictionary.servicePause.message}
          </p>
        </div>
      </div>
    </div>
  );
}
