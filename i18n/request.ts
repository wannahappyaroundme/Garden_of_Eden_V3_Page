import { getRequestConfig } from 'next-intl/server';
import { locales } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  let validLocale: string = locale || 'en';
  if (!locales.includes(validLocale as any)) {
    validLocale = 'en';
  }

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
