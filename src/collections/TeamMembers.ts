import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import tags from 'lucide-static/tags.json'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
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
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'biography',
      type: 'textarea',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageAlign',
      label: 'Image Alignment (for larger screens)',
      type: 'select',
      options: ['left', 'right'],
      defaultValue: 'left',
      required: false,
    },
  ],
}
