import { Service } from '@/payload-types'

export const servicesSeedData: Omit<Service, 'createdAt' | 'id' | 'updatedAt'>[] = [
  {
    icon: 'briefcase',
    name: 'Workers Compensation',
    description:
      'Comprehensive coverage for California businesses with competitive rates and flexible payment options.',
  },
  {
    icon: 'shield',
    name: 'General Liability',
    description:
      'Protection against third-party claims for bodily injury, property damage, and advertising injury.',
  },
  {
    icon: 'house',
    name: 'Property Insurance',
    description:
      'Coverage for your business property, equipment, and inventory against damage and loss.',
  },
  {
    icon: 'user-check',
    name: 'Group or Individual Disability',
    description:
      'Income protection for employees or individuals unable to work due to illness or injury.',
  },
  {
    icon: 'heart',
    name: 'Life Insurance',
    description:
      'Financial security for your loved ones and key person protection for your business.',
  },
  {
    icon: 'users',
    name: 'Group Employee Benefits',
    description:
      'Competitive benefit packages including health, dental, vision, and retirement plans.',
  },
  {
    icon: 'file-text',
    name: 'Professional Liability',
    description: 'Errors and omissions coverage for professional services and advice.',
  },
  {
    icon: 'heart-pulse',
    name: 'Dental Malpractice',
    description:
      'Specialized professional liability coverage for dental practitioners and practices.',
  },
  {
    icon: 'heart-pulse',
    name: 'Medical Malpractice',
    description:
      'Comprehensive professional liability protection for physicians and medical facilities.',
  },
  {
    icon: 'user-x',
    name: 'Employment Practice Liability',
    description:
      'Protection against claims of discrimination, harassment, wrongful termination, and more.',
  },
  {
    icon: 'lock',
    name: 'Cyber Liability',
    description:
      'Coverage for data breaches, cyber attacks, and privacy liability in the digital age.',
  },
  {
    icon: 'dollar-sign',
    name: 'Billing E&O',
    description:
      'Errors and omissions coverage specifically for medical billing companies and professionals.',
  },
  {
    icon: 'file-text',
    name: 'E&O Coverage',
    description:
      'Professional liability protection for errors, omissions, and negligence in your services.',
  },
  {
    icon: 'building',
    name: 'Directors & Officers',
    description:
      'Liability protection for company directors and officers against lawsuits and legal claims.',
  },
]
