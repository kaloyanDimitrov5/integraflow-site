import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

import { Products } from './src/collections/Products'
import { Media } from './src/collections/Media'

const serverURL = (process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000').replace(/\/$/, '')

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'change-me',
  serverURL,

  csrf: [
    serverURL,
    'http://localhost:3000',
    'http://localhost:3001',
  ],

  collections: [Media, Products],

  localization: {
    locales: ['en', 'bg'],
    defaultLocale: 'en',
    fallback: true,
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
    push: true,
  }),
})
