import type { InsuranceCarrier } from '@/payload-types'

export const servicesSeedData: Omit<InsuranceCarrier, 'createdAt' | 'id' | 'updatedAt'>[] = [{}]
