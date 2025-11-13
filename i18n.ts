import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// 지원하는 언어 목록
export const locales = ['en', 'ko'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // 지원하지 않는 언어인 경우 404
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
