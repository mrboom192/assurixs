import type { GlobalConfig } from 'payload'

import { revalidateHomePage } from './hooks/revalidateHomePage'

export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroText',
      type: 'text',
      required: true,
    },
    {
      name: 'heroSubtext',
      type: 'text',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateHomePage],
  },
}
