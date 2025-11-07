import { getPayload } from 'payload'
import IndustriesGridClient from './client'
import config from '@payload-config'
import { Media } from '@/payload-types'

export default async function IndustriesGrid() {
  const payload = await getPayload({ config })

  const [categories, industries] = await Promise.all([
    await payload
      .find({
        collection: 'industry-category',
        pagination: false,
      })
      .then((res) => res.docs),
    await payload
      .find({
        collection: 'industries-served',
        pagination: false,
        depth: 1,
      })
      .then((res) => res.docs),
  ])

  return <IndustriesGridClient categories={categories} industries={industries} />
}
