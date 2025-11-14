import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // 지원하는 언어 목록
  locales,

  // 기본 언어
  defaultLocale: 'en',

  // URL에 언어 코드가 없으면 브라우저 언어 감지
  localeDetection: true,

  // 언어 prefix를 as-needed로 변경 (Cloudflare Pages 호환성)
  localePrefix: 'as-needed'
});

export const config = {
  // next-intl이 처리할 경로 패턴 (모든 경로 포함)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
