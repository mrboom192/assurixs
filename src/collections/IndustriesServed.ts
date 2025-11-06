import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import tags from 'lucide-static/tags.json'

export const IndustriesServed: CollectionConfig = {
  slug: 'industries-served',
  labels: {
    singular: 'Serviced Industry',
    plural: 'Serviced Industries',
  },
  folders: false,
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Industry Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description of services',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      label:
        'Choose an icon to represent this industry. You can preview icons at https://lucide.dev/icons',
      type: 'select',
      options: Object.keys(tags),
      required: true,
    },
    {
      name: 'image',
      label: 'Upload an image to represent this industry',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'coverageAreas',
      label: 'Coverage Areas',
      type: 'array',
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'area',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      label: 'Industry Category',
      type: 'relationship',
      relationTo: 'industry-category',
      required: true,
    },
  ],
}
