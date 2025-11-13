'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // /ko/... or /en/... 경로를 변경
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-lg border-2 border-gray-200">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            locale === lang
              ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {lang === 'en' ? 'EN' : '한국어'}
        </button>
      ))}
    </div>
  );
}
