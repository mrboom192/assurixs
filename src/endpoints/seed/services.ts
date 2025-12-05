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
    name: 'Cyber Liability Coverage',
    description:
      'Protection against data breaches, cyber attacks, ransomware, and privacy violations involving digital information.',
  },
  {
    icon: 'dollar-sign',
    name: 'Billing Errors & Omissions (E&O) Coverage',
    description:
      'Coverage for financial losses resulting from billing mistakes, coding errors, or inaccuracies in claims processing.',
  },
  {
    icon: 'file-text',
    name: 'Professional Liability Coverage',
    description:
      'Comprehensive protection against professional mistakes, omissions, or negligence in the services you provide.',
  },
  {
    icon: 'building',
    name: 'Directors & Officers',
    description:
      'Liability protection for company directors and officers against lawsuits and legal claims.',
  },
]
