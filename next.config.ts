import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import {withPayload} from '@payloadcms/next/withPayload';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default withPayload(withNextIntl(nextConfig));
