// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Resource } from 'sst'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { getServerSideURL } from './utilities/getURL'
import { InsuranceCarrier } from './collections/InsuranceCarrier'
import { IndustriesServed } from './collections/IndustriesServed'
import { Services } from './collections/Services'
import { IndustryCategory } from './collections/IndustryCategory'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- Assurixs',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.ico',
        },
      ],
    },
    components: {
      graphics: {
        Logo: '@/components/Logo',
        Icon: '@/components/AdminIcon',
      },
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  plugins: [
    s3Storage({
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) => {
            const bucket = Resource.AssurixsUploads.name
            const region = 'us-east-1'

            const key = prefix ? `${prefix}/${filename}` : filename

            return `https://${bucket}.s3.${region}.amazonaws.com/${key}`
          },
        },
      },
      bucket: Resource.AssurixsUploads.name,
      config: {},
    }),
  ],
  db: postgresAdapter({
    pool: {
      host: Resource.AssurixsPostgres.host,
      port: Resource.AssurixsPostgres.port,
      user: Resource.AssurixsPostgres.username,
      password: Resource.AssurixsPostgres.password,
      database: Resource.AssurixsPostgres.database,
    },
  }),
  collections: [Media, Users, InsuranceCarrier, IndustryCategory, IndustriesServed, Services],
  cors: [getServerSideURL()].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
