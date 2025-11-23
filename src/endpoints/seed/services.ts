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
    name: 'Cyber Billing and E&O',
    description:
      'Combined cyber liability and billing errors protection covering data breaches, cyber attacks, privacy violations, and mistakes in billing or claims processing.',
  },
  {
    icon: 'file-text',
    name: 'Professional Liability E&O Coverage',
    description:
      'Comprehensive protection against professional errors, omissions, and negligence in the services you provide.',
  },
  {
    icon: 'building',
    name: 'Directors & Officers',
    description:
      'Liability protection for company directors and officers against lawsuits and legal claims.',
  },
]
