import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'card',
        width: 800,
        height: 600,
        fit: 'cover',
      },
      {
        name: 'thumb',
        width: 400,
        height: 300,
        fit: 'cover',
      },
    ],
    adminThumbnail: 'thumb',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}
