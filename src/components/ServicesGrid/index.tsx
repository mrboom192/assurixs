import { getPayload } from 'payload'
import config from '@payload-config'
import ServiceCard from './ServiceCard'

export default async function ServicesGrid() {
  const payload = await getPayload({ config })

  const services = await payload
    .find({ collection: 'services', pagination: false, sort: 'createdAt' })
    .then((res) => res.docs)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
