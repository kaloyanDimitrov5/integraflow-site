import '@payloadcms/next/css';
import config from '@payload-config';
import {
  createLocalReq,
  executeAuthStrategies,
  getAccessResults,
  getPayload,
  getRequestLanguage,
  parseCookies,
} from 'payload';
import {headers as getNextHeaders} from 'next/headers';
import {initI18n} from '@payloadcms/translations';
import {RootProvider} from '@payloadcms/ui';
import {getClientConfig} from '@payloadcms/ui/utilities/getClientConfig';
import {applyLocaleFiltering} from 'payload/shared';
import {handleServerFunctions} from '@payloadcms/next/layouts';
import {importMap} from './admin/importMap';
import type {I18n, I18nClient} from '@payloadcms/translations';
import type {LanguageOptions, ServerFunctionClient} from 'payload';
import type {ReactNode} from 'react';

export default async function PayloadLayout({children}: {children: ReactNode}) {
  const headers = await getNextHeaders();
  const cookies = parseCookies(headers);

  const payload = await getPayload({config});
  const payloadConfig = payload.config;

  const languageCode = getRequestLanguage({config: payloadConfig, cookies, headers});
  const i18n = (await initI18n({
    config: payloadConfig.i18n,
    context: 'client',
    language: languageCode,
  })) as I18nClient;

  const {responseHeaders, user} = await executeAuthStrategies({headers, payload});

  const req = await createLocalReq(
    {
      req: {
        headers,
        host: headers.get('host') ?? 'localhost',
        i18n: i18n as unknown as I18n,
        responseHeaders,
        user,
      },
    },
    payload,
  );

  const permissions = await getAccessResults({req});

  const languageOptions: LanguageOptions = Object.entries(
    payloadConfig.i18n.supportedLanguages || {},
  ).reduce((acc: LanguageOptions, [language, languageConfig]: [string, unknown]) => {
    const lc = languageConfig as {translations: {general: {thisLanguage: string}}};
    acc.push({
      label: lc.translations.general.thisLanguage,
      value: language as LanguageOptions[number]['value'],
    });
    return acc;
  }, []);

  const clientConfig = getClientConfig({
    config: payloadConfig,
    i18n,
    importMap,
    user: user ?? true,
  });

  await applyLocaleFiltering({clientConfig, config: payloadConfig, req});

  const cookiePrefix = payloadConfig.cookiePrefix || 'payload';
  const cookieHeader = headers.get('cookie') || '';
  const themeMatch = cookieHeader.match(new RegExp(`${cookiePrefix}-theme=([^;]+)`));
  const theme = themeMatch?.[1] === 'dark' ? 'dark' : 'light';

  async function serverFunction(args: Parameters<typeof handleServerFunctions>[0]) {
    'use server';
    return handleServerFunctions({...args, config, importMap});
  }

  async function switchLanguageServerAction(lang: string) {
    'use server';
    const {cookies: nextCookies} = await import('next/headers');
    const jar = await nextCookies();
    jar.set({name: `${cookiePrefix}-lng`, path: '/', value: lang});
  }

  return (
    <html lang={languageCode} data-theme={theme} suppressHydrationWarning>
      <head>
        <style>{`@layer payload-default, payload;`}</style>
      </head>
      <body>
        <RootProvider
          config={clientConfig}
          dateFNSKey={i18n.dateFNSKey}
          fallbackLang={payloadConfig.i18n.fallbackLanguage}
          isNavOpen={true}
          languageCode={languageCode}
          languageOptions={languageOptions}
          locale={req.locale ?? undefined}
          permissions={user ? permissions : (null as never)}
          serverFunction={serverFunction as ServerFunctionClient}
          switchLanguageServerAction={switchLanguageServerAction}
          theme={theme}
          translations={i18n.translations}
          user={user ?? null}
        >
          {children}
        </RootProvider>
        <div id="portal" />
      </body>
    </html>
  );
}
