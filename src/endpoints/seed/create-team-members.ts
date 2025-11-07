import { Payload, PayloadRequest, File } from 'payload'
import fs from 'fs'
import path from 'path'
import { IndustriesServed } from '@/payload-types'

const members: (Omit<IndustriesServed, 'id' | 'createdAt' | 'updatedAt' | 'image' | 'category'> & {
  file: string
  category: string
})[] = [
  {
    name: 'Umbrella Policies',
    icon: 'umbrella',
    file: 'umbrella-policies.webp',
    description:
      'Extra liability protection for businesses that need coverage beyond standard limits.',
    coverageAreas: [
      { area: 'Excess Liability' },
      { area: 'Multi-Policy Coverage' },
      { area: 'Asset Protection' },
    ],
    category: 'Professional Services',
  },
]

export const createServicedIndustries = async ({
  payload,
  req,
  categoryIds,
}: {
  payload: Payload
  req: PayloadRequest
  categoryIds: { [key: string]: number }
}): Promise<void> => {
  payload.logger.info('Seeding service industries...')

  for (const member of members) {
    const filePath = path.resolve(process.cwd(), `src/endpoints/seed/member/${member.file}`)
    const fileBuffer = await fs.promises.readFile(filePath)
    const ext = path.extname(industry.file).slice(1)

    // Create the media record
    const media = await payload.create({
      collection: 'media',
      context: { disableRevalidate: true },
      data: {
        alt: `Image for ${industry.name}`,
      },
      file: {
        name: industry.file,
        data: fileBuffer,
        mimetype: `image/${ext}`,
        size: fileBuffer.byteLength,
      },
    })

    // Create the insurance carrier, linking to that media
    await payload.create({
      collection: 'industries-served',
      context: { disableRevalidate: true },
      data: {
        name: industry.name,
        icon: industry.icon,
        description: industry.description,
        image: media.id,
        coverageAreas: industry.coverageAreas,
        category: categoryIds[industry.category],
      },
    })

    payload.logger.info(`Seeded ${industry.name}`)
  }

  payload.logger.info('Finished seeding insurance carriers.')
}
