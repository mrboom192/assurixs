import { Payload, PayloadRequest } from 'payload'

const categories = [
  {
    title: 'Healthcare',
  },
  {
    title: 'Professional Services',
  },
  {
    title: 'Technology',
  },
  {
    title: 'Food & Beverage',
  },
  {
    title: 'Real Estate',
  },
  {
    title: 'Nonprofit',
  },
]

export const createIndustryCategories = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<{ [key: string]: number }> => {
  payload.logger.info('Seeding industry categories...')
  const categoryIds: { [key: string]: number } = {}

  for (const category of categories) {
    // Create the industry category
    const createdCategory = await payload.create({
      collection: 'industry-category',
      context: { disableRevalidate: true },
      data: category,
    })

    categoryIds[createdCategory.title] = createdCategory.id
    payload.logger.info(`Seeded ${category.title}`)
  }

  payload.logger.info('Finished seeding industry categories.')
  return categoryIds
}
