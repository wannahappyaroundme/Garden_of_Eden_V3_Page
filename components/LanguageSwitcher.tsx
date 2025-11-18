'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  // useParams에서 locale 추출
  const currentLocale = (params.locale as string) || 'en';
  const isKorean = currentLocale === 'ko';

  const toggleLanguage = () => {
    // 토글: ko <-> en
    const newLocale = isKorean ? 'en' : 'ko';

    // 현재 경로에서 locale 부분을 추출
    const segments = pathname.split('/').filter(Boolean);

    // 첫 번째 segment가 locale이면 제거
    const pathWithoutLocale =
      (segments[0] === 'ko' || segments[0] === 'en')
        ? '/' + segments.slice(1).join('/')
        : pathname;

    // 새로운 경로 생성
    const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;

    // 페이지 이동
    router.push(newPath);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="group flex items-center gap-3 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg border border-purple-200/60 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle language"
      >
        {/* Icon */}
        <Languages className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />

        {/* Language Display */}
        <div className="flex items-center gap-2">
          <span
            className={`font-bold text-sm transition-all duration-300 ${
              isKorean
                ? 'text-purple-700 scale-110'
                : 'text-gray-400 scale-90'
            }`}
          >
            한국어
          </span>
          <div className="w-8 h-4 bg-gray-200 rounded-full relative">
            <div
              className={`absolute top-0.5 w-3 h-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full shadow-md transition-all duration-300 ${
                isKorean ? 'left-0.5' : 'left-4'
              }`}
            />
          </div>
          <span
            className={`font-bold text-sm transition-all duration-300 ${
              !isKorean
                ? 'text-purple-700 scale-110'
                : 'text-gray-400 scale-90'
            }`}
          >
            EN
          </span>
        </div>
      </button>
    </div>
  );
}
