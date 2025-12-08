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
    name: 'Cyber Liability',
    description:
      'Protection against data breaches, cyberattacks, and privacy violations that threaten your business operations and patient information.',
  },
  {
    icon: 'dollar-sign',
    name: 'Errors & Omissions (E&O) Coverage',
    description:
      'Comprehensive coverage for financial damages arising from mistakes, oversights, or professional service failures.',
  },
  {
    icon: 'users',
    name: 'Group Employee Benefits',
    description:
      "Customized benefit solutions that help you attract, support, and retain employees while protecting your organization's overall well-being.",
  },
  {
    icon: 'accessibility',
    name: 'Disability Insurance',
    description:
      'Income protection that safeguards you or your employees in the event an injury or illness prevents you from working.',
  },
  {
    icon: 'heart',
    name: 'Life Insurance',
    description:
      'Financial protection for your family or business through guaranteed benefits that secure long-term stability and peace of mind.',
  },
  {
    icon: 'file-text',
    name: 'Professional Liability',
    description:
      'Comprehensive protection against claims of professional errors, omissions, or negligence in the services you provide.',
  },
  {
    icon: 'building',
    name: 'Directors & Officers',
    description:
      'Liability protection for company directors and officers against lawsuits and legal claims.',
  },
]
