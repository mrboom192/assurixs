import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const InsuranceCarriers: CollectionConfig = {
  slug: 'insurance-carriers',
  folders: false,
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      label: 'Company name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      label: 'Company logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'website',
      label: 'Company website',
      type: 'text',
      required: false,
    },
  ],
}
