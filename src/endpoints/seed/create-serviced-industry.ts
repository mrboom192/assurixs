import { Payload, PayloadRequest } from 'payload'
import { IndustriesServed } from '@/payload-types'
import { fetchFileByURL } from './utils'

const industries: (Omit<
  IndustriesServed,
  'id' | 'createdAt' | 'updatedAt' | 'image' | 'category'
> & { url: string; category: string })[] = [
  {
    name: 'Physicians & Surgeons',
    icon: 'stethoscope',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/physicians.webp',
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
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/dentists.webp',
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
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/pharmacies.webp',
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
    name: 'Restaurants',
    icon: 'utensils-crossed',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/restaurants-bars.webp',
    description: 'Complete protection for food service businesses including liquor liability.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Liquor Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Food & Beverage',
  },
  {
    name: 'Urgent Care Centers',
    icon: 'siren',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/urgent-care.webp',
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
    name: 'Surgery Centers',
    icon: 'scissors',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/surgery-centers.webp',
    description: 'Comprehensive coverage for surgery centers with extended hours protection.',
    coverageAreas: [
      { area: 'Medical Malpractice' },
      { area: 'General Liability' },
      { area: 'Anesthesia Liability' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Hospitals',
    icon: 'hospital',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/hospitals.webp',
    description:
      'Essential liability and property protection for hospitals and large healthcare facilities.',
    coverageAreas: [
      { area: 'Medical Professional Liability' },
      { area: 'General Liability' },
      { area: 'Property & Equipment Coverage' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'House of Worship',
    icon: 'church',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/house-of-worship.webp',
    description: 'Insurance solutions tailored for religious institutions and places of worship.',
    coverageAreas: [
      { area: 'Event Liability Coverage' },
      { area: 'Property Coverage' },
      { area: 'Volunteer Coverage' },
    ],
    category: 'Nonprofit',
  },
  {
    name: 'Nonprofits',
    icon: 'heart',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/nonprofits.webp',
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
    name: 'Commercial Real Estate',
    icon: 'house',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/property-management.webp',
    description: 'Comprehensive coverage for property managers and real estate professionals.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Errors & Omissions' },
      { area: 'Property Coverage' },
    ],
    category: 'Real Estate',
  },
  {
    name: 'Labs & Diagnostics',
    icon: 'test-tube',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/labs-diagnostics.webp',
    description: 'Specialized insurance for diagnostic facilities and medical laboratories.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'Equipment Protection' },
      { area: 'Business Interruption' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Nursing Homes',
    icon: 'accessibility',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/nursing-homes.webp',
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
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/legal-services.webp',
    description: 'Professional liability and business coverage for law firms and attorneys.',
    coverageAreas: [
      { area: 'Malpractice Insurance' },
      { area: 'Cyber Liability' },
      { area: 'General Liability' },
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
    const file = await fetchFileByURL(industry.url)

    // Create the media record
    const media = await payload.create({
      collection: 'media',
      context: { disableRevalidate: true },
      data: {
        alt: `Image for ${industry.name}`,
      },
      file,
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
