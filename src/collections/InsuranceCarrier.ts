import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const InsuranceCarrier: CollectionConfig = {
  slug: 'insurance-carrier',
  admin: {
    useAsTitle: 'name',
    description:
      'Insurance carriers we work with. Companies here will be displayed in the carrier carousel on the homepage and partially in the footer.',
  },
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
