import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { icons } from 'lucide-react'

// A bunch of lucide icons
const options = icons

export const Services: CollectionConfig = {
  slug: 'services',
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
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description of the service',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      label:
        'Choose an icon to represent this service. You can preview icons at https://lucide.dev/icons',
      type: 'select',
      options: Object.keys(options).map((key) => key),
      required: true,
    },
  ],
}
