import type { Dictionary } from "@/i18n/getDictionary";

interface FooterProps {
  dictionary: Dictionary;
}

export default function Footer({ dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center">
          <p className="font-serif text-lg font-bold text-gray-900 mb-2">
            Support New York
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {dictionary.footer.tagline}
          </p>
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Support New York. {dictionary.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
