import { CarrierCarouselClient } from './Component.client'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function CarrierCarousel() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'insurance-carriers',
    pagination: false,
  })

  return <CarrierCarouselClient data={result.docs || []} />
}
