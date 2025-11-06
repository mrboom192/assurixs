import type { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type InsuranceCarrierArgs = {
  logo: Media
}

export const insuranceCarrierSeedData: ((
  args: InsuranceCarrierArgs,
) => RequiredDataFromCollectionSlug<'insurance-carriers'>)[] = [
  ({ logo }) => ({
    name: 'AmTrust',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Biberk',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'CNA',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Dentist Advantage',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Employers',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Great American',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Guide One',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Hanover',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Indigo',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Liberty Mutual',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'LoneStar Alliance',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Medical Protective',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'PHLY',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'ProAssurance',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'The Doctors Company',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'The Hartford',
    logo: logo.id,
  }),
  ({ logo }) => ({
    name: 'Travelers',
    logo: logo.id,
  }),
]
