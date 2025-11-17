'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  // 현재 경로에서 locale을 제거하여 경로만 추출
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/60 backdrop-blur-xl p-2 rounded-full shadow-lg border border-white/50">
      {locales.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${pathWithoutLocale}`}
          className={`px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
            locale === lang
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-gray-700 hover:bg-white/80'
          }`}
        >
          {lang === 'en' ? 'EN' : '한국어'}
        </Link>
      ))}
    </div>
  );
}
