import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'bg'] as const;
type AppLocale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  const resolvedLocale: AppLocale =
    (locales as readonly string[]).includes(locale ?? '')
      ? (locale as AppLocale)
      : 'en';

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
