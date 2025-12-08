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
      'We provide comprehensive malpractice and business insurance for medical practices of all specialties.',
    coverageAreas: [
      { area: 'Medical Malpractice Insurance' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Dentists',
    icon: 'award',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/dentists.webp',
    description:
      'We offer tailored coverage for dentists, with protection for malpractice, liability, and workers compensation.',
    coverageAreas: [
      { area: 'Dental Malpractice' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Urgent Care Centers',
    icon: 'siren',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/urgent-care.webp',
    description:
      'Flexible insurance solutions for urgent care centers, supporting medical malpractice protection, general liability coverage, and workers compensation.”',
    coverageAreas: [
      { area: 'Medical Malpractice' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Surgery Centers',
    icon: 'briefcase-medical',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/surgery-centers.webp',
    description:
      'Tailored insurance options for surgery centers, offering malpractice, liability, and workers compensation coverage.',
    coverageAreas: [
      { area: 'Medical Malpractice' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Pharmacies',
    icon: 'pill',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/pharmacies.webp',
    description:
      'Reliable coverage for pharmacies, offering protection across professional liability, general liability, and workers compensation.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'Workers Compensation' },
      { area: 'General Liability' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Hospitals',
    icon: 'hospital',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/hospitals.webp',
    description:
      'Comprehensive support for hospitals, offering coverage for malpractice, general liability, and workers compensation.',
    coverageAreas: [
      { area: 'Medical Malpractice' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Restaurants',
    icon: 'utensils-crossed',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/restaurants-bars.webp',
    description: 'Complete protection for food service businesses including liquor liability.',
    coverageAreas: [
      { area: 'Liquor Liability' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Food & Beverage',
  },
  {
    name: 'Commercial Real Estate',
    icon: 'house',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/property-management.webp',
    description: 'Comprehensive coverage for property managers and real estate professionals.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Property Coverage' },
      { area: 'Directors & Officers' },
    ],
    category: 'Real Estate',
  },
  {
    name: 'House of Worship',
    icon: 'church',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/house-of-worship.webp',
    description: 'Insurance solutions tailored for religious institutions and places of worship.',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Property Coverage' },
      { area: 'Workers Comp & D&O Coverage' },
    ],
    category: 'Nonprofit',
  },
  {
    name: 'Labs & Diagnostics',
    icon: 'test-tube',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/labs-diagnostics.webp',
    description: 'Specialized insurance for diagnostic facilities and medical laboratories.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
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
      { area: 'Workers Compensation' },
    ],
    category: 'Healthcare',
  },
  {
    name: 'Nonprofits',
    icon: 'heart',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/nonprofits.webp',
    description:
      'Comprehensive insurance solutions for nonprofits, covering general liability, property, and D&O needs.”',
    coverageAreas: [
      { area: 'General Liability' },
      { area: 'Property Coverage' },
      { area: 'Directors & Officers' },
    ],
    category: 'Nonprofit',
  },
  {
    name: 'Legal Services',
    icon: 'scale',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/legal-services.webp',
    description: 'Professional liability and business coverage for law firms and attorneys.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
    ],
    category: 'Professional Services',
  },
  {
    name: 'Insurance Agencies',
    icon: 'building',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/industries/insurance-agencies.webp',
    description:
      'Comprehensive business protection for insurance agencies, including professional liability, general liability, and workers compensation.',
    coverageAreas: [
      { area: 'Professional Liability' },
      { area: 'General Liability' },
      { area: 'Workers Compensation' },
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
