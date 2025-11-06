import type { Service } from '@/payload-types'

export const servicesSeedData: Omit<Service, 'createdAt' | 'id' | 'updatedAt'>[] = [
  {
    icon: 'Briefcase',
    name: 'Workers Compensation',
    description:
      'Comprehensive coverage for California businesses with competitive rates and flexible payment options.',
  },
  {
    icon: 'Shield',
    name: 'General Liability',
    description:
      'Protection against third-party claims for bodily injury, property damage, and advertising injury.',
  },
  {
    icon: 'Home',
    name: 'Property Insurance',
    description:
      'Coverage for your business property, equipment, and inventory against damage and loss.',
  },
  {
    icon: 'UserCheck',
    name: 'Group or Individual Disability',
    description:
      'Income protection for employees or individuals unable to work due to illness or injury.',
  },
  {
    icon: 'Heart',
    name: 'Life Insurance',
    description:
      'Financial security for your loved ones and key person protection for your business.',
  },
  {
    icon: 'Users',
    name: 'Group Employee Benefits',
    description:
      'Competitive benefit packages including health, dental, vision, and retirement plans.',
  },
  {
    icon: 'FileText',
    name: 'Professional Liability',
    description: 'Errors and omissions coverage for professional services and advice.',
  },
  {
    icon: 'HeartPulse',
    name: 'Dental Malpractice',
    description:
      'Specialized professional liability coverage for dental practitioners and practices.',
  },
  {
    icon: 'HeartPulse',
    name: 'Medical Malpractice',
    description:
      'Comprehensive professional liability protection for physicians and medical facilities.',
  },
  {
    icon: 'UserX',
    name: 'Employment Practice Liability',
    description:
      'Protection against claims of discrimination, harassment, wrongful termination, and more.',
  },
  {
    icon: 'Lock',
    name: 'Cyber Liability',
    description:
      'Coverage for data breaches, cyber attacks, and privacy liability in the digital age.',
  },
  {
    icon: 'DollarSign',
    name: 'Billing E&O',
    description:
      'Errors and omissions coverage specifically for medical billing companies and professionals.',
  },
  {
    icon: 'FileText',
    name: 'E&O Coverage',
    description:
      'Professional liability protection for errors, omissions, and negligence in your services.',
  },
  {
    icon: 'Building',
    name: 'Directors & Officers',
    description:
      'Liability protection for company directors and officers against lawsuits and legal claims.',
  },
]
