'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    // 현재 경로에서 locale 부분을 추출
    const segments = pathname.split('/').filter(Boolean);

    // 첫 번째 segment가 locale인지 확인
    const currentLocaleInPath = locales.includes(segments[0] as any) ? segments[0] : null;

    // locale을 제외한 경로
    const pathWithoutLocale = currentLocaleInPath
      ? '/' + segments.slice(1).join('/')
      : pathname;

    // 새로운 경로 생성
    const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;

    // 페이지 이동
    router.push(newPath);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/90 backdrop-blur-xl p-2 rounded-full shadow-lg border border-purple-200/60">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
            locale === lang
              ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-purple-100 hover:text-purple-700 hover:shadow-sm'
          }`}
        >
          {lang === 'en' ? 'EN' : '한국어'}
        </button>
      ))}
    </div>
  );
}
