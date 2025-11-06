import { Payload, PayloadRequest, File } from 'payload'
import fs from 'fs'
import path from 'path'
import { IndustriesServed } from '@/payload-types'

const industries: (Omit<
  IndustriesServed,
  'id' | 'createdAt' | 'updatedAt' | 'image' | 'category'
> & { file: string; category: string })[] = [
  {
    name: 'Physicians & Surgeons',
    icon: 'stethoscope',
    file: 'physicians.webp',
    description:
      'Comprehensive malpractice and business insurance for medical practices of all specialties.',
    coverageAreas: [
      { area: 'Medical Malpractice Insurance' },
      { area: 'General Liability' },
      { area: 'Business Property Coverage' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Dentists',
    icon: 'award',
    file: 'dentists.webp',
    description:
      'Specialized coverage for dental practices including malpractice and equipment protection.',
    coverageAreas: [
      { area: 'Dental Malpractice' },
      { area: 'Equipment Coverage' },
      { area: 'General Liability' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Pharmacies',
    icon: 'pill',
    file: 'pharmacies.webp',
    description:
      'Complete protection for retail and compounding pharmacies with errors & omissions coverage.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'Product Liability' },
      { area: 'Business Property' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Labs & Diagnostics',
    icon: 'test-tube',
    file: 'labs-diagnostics.webp',
    description: 'Specialized insurance for diagnostic facilities and medical laboratories.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'Equipment Protection' },
      { area: 'Business Interruption' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Urgent Care Centers',
    icon: 'siren',
    file: 'urgent-care.webp',
    description:
      'Comprehensive coverage for urgent care facilities with extended hours protection.',
    coverageAreas: [
      { area: 'Medical Malpractice' },
      { area: 'General Liability' },
      { area: 'Property Coverage' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Beauty & Wellness',
    icon: 'scissors',
    file: 'beauty-wellness.webp',
    description:
      'Coverage for spas, salons, and aesthetic medical practices including equipment and liability.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'General Liability' },
      { area: 'Equipment Coverage' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Nursing Homes',
    icon: 'hospital',
    file: 'nursing-homes.webp',
    description: 'Specialized coverage for skilled nursing and assisted living facilities.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'General Liability' },
      { area: 'Property Coverage' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Legal Services',
    icon: 'scale',
    file: 'legal-services.webp',
    description: 'Professional liability and business coverage for law firms and attorneys.',
    coverageAreas: [
      { area: 'Malpractice Insurance' },
      { area: 'Cyber Liability' },
      { area: 'General Liability' },
    ],
    category: 'Professional Services',
  },
  {
    name: 'Technology Companies',
    icon: 'smartphone',
    file: 'technology-companies.webp',
    description:
      'E&O coverage and cyber protection for software companies and IT service providers.',
    coverageAreas: [
      { area: 'Errors & Omissions' },
      { area: 'Cyber Liability' },
      { area: 'Business Property' },
    ],
    category: 'Technology',
  },
  {
    name: 'Restaurants & Bars',
    icon: 'utensils-crossed',
    file: 'restaurants-bars.webp',
    description: 'Complete protection for food service businesses including liquor liability.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Liquor Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Food & Beverage',
  },
  {
    name: 'Property Management',
    icon: 'house',
    file: 'property-management.webp',
    description: 'Comprehensive coverage for property managers and real estate professionals.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Errors & Omissions' },
      { area: 'Property Coverage' },
    ],
    category: 'Real Estate',
  },
  {
    name: 'General Contractors',
    icon: 'building-2',
    file: 'general-contractors.webp',
    description:
      'Specialized insurance for contractors including general liability and workers comp.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
      { area: 'Auto Coverage' },
    ],
    category: 'Professional Services',
  },
  {
    name: 'Nonprofits',
    icon: 'heart',
    file: 'nonprofits.webp',
    description:
      'Affordable coverage for nonprofit organizations including D&O and volunteer protection.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Directors & Officers' },
      { area: 'Property Coverage' },
    ],
    category: 'Nonprofit',
  },
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

  for (const industry of industries) {
    const filePath = path.resolve(process.cwd(), `src/endpoints/seed/industries/${industry.file}`)
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
