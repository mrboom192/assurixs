import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { DynamicIcon } from 'lucide-react/dynamic'

export async function HomeIndustriesGrid() {
  const payload = await getPayload({ config })

  const industries = await payload
    .find({ collection: 'industries-served', pagination: false })
    .then((res) => res.docs)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4 text-gray-900"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Industries we serve
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Specialized expertise across healthcare and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {industries.map((industry, index) => (
              <Link
                href="/industries-we-serve"
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-md transition-all text-left"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
                  <DynamicIcon
                    name={industry.icon}
                    className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors"
                  />
                </div>
                <h3
                  className="text-sm text-gray-900 mb-1"
                  style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                >
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
