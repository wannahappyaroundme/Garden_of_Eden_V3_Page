import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // 지원하는 언어 목록
  locales,

  // 기본 언어
  defaultLocale: 'en',

  // URL에 언어 코드가 없으면 브라우저 언어 감지
  localeDetection: true,

  // 언어 prefix 항상 표시 (e.g., /en/..., /ko/...)
  localePrefix: 'always'
});

export const config = {
  // next-intl이 처리할 경로 패턴
  matcher: ['/', '/(ko|en)/:path*']
};
