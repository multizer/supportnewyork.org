import type { Dictionary } from "@/i18n/getDictionary";

interface ServicesProps {
  dictionary: Dictionary;
}

export default function Services({ dictionary }: ServicesProps) {
  const services = [
    dictionary.services.items.wifi,
    dictionary.services.items.smartphone,
    dictionary.services.items.videocall,
    dictionary.services.items.email,
    dictionary.services.items.hometech,
    dictionary.services.items.online,
    dictionary.services.items.accessibility,
  ];

  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <hr className="section-divider" />

        <div className="prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dictionary.services.title}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {dictionary.services.description}
          </p>

          <div className="grid gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> {dictionary.services.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
