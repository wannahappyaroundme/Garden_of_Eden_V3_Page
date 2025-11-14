'use client';

import { useLocale } from 'next-intl';
import { locales } from '@/i18n';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/60 backdrop-blur-xl p-2 rounded-full shadow-lg border border-white/50">
      {locales.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}/`}
          className={`px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
            locale === lang
              ? 'bg-gradient-to-r from-purple-400 to-indigo-400 text-white shadow-md'
              : 'text-gray-700 hover:bg-white/80'
          }`}
        >
          {lang === 'en' ? 'EN' : '한국어'}
        </Link>
      ))}
    </div>
  );
}
