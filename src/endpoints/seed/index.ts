import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { servicesSeedData } from './services'
import path from 'path'
import fs from 'fs'
import { createInsuranceCarriers } from './create-insurance-carriers'
import { createIndustryCategories } from './create-industry-category'
import { createServicedIndustries } from './create-serviced-industry'

const collections: CollectionSlug[] = [
  'insurance-carrier',
  'industries-served',
  'services',
  'media',
]

// const globals: GlobalSlug[] = ['home']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing media files...`)
  const mediaDir = path.resolve(process.cwd(), 'public/media')

  if (fs.existsSync(mediaDir)) {
    const files = fs.readdirSync(mediaDir)
    for (const file of files) {
      const filePath = path.join(mediaDir, file)
      try {
        fs.unlinkSync(filePath)
      } catch (err) {
        payload.logger.error(`Failed to delete ${filePath}: ${(err as Error).message}`)
      }
    }
    payload.logger.info(`— Cleared ${files.length} files from ${mediaDir}`)
  } else {
    payload.logger.warn(`— Media directory not found: ${mediaDir}`)
  }

  payload.logger.info(`— Clearing collections...`)
  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )
  await payload.db.deleteMany({ collection: 'industry-category', req, where: {} })
  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding services...`)
  for (const service of servicesSeedData) {
    await payload.create({
      collection: 'services',
      data: service,
    })
  }

  await createInsuranceCarriers({ payload, req })
  const categoryIds = await createIndustryCategories({ payload, req })
  await createServicedIndustries({ payload, req, categoryIds })

  payload.logger.info('Seeded database successfully!')
}
