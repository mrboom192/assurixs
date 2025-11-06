import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import tags from 'lucide-static/tags.json'

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
      options: Object.keys(tags),
      required: true,
    },
  ],
}
