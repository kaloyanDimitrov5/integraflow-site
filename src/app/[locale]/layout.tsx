import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import LedPixelBackground from '@/components/sections/LedPixelBackground';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers>
        <LedPixelBackground />
        <Navbar />
        {children}
      </Providers>
    </NextIntlClientProvider>
  );
}
