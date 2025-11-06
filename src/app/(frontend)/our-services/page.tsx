import { ArrowRight, Shield, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ServicesGrid from '@/components/ServicesGrid'

export default function ServicesPage() {
  const differentiators = [
    {
      title: 'Dedicated Partnership',
      description: 'One experienced broker who understands your business and industry',
    },
    {
      title: 'A-Rated Carriers Only',
      description: 'We exclusively work with financially strong, highly-rated insurance companies',
    },
    {
      title: 'Industry Expertise',
      description:
        'Specialized knowledge in healthcare, commercial real estate, and key business sectors',
    },
    {
      title: 'Proactive Service',
      description: 'Annual policy reviews and continuous optimization of your coverage',
    },
    {
      title: 'California-Based',
      description: 'Local expertise with personalized service and community commitment',
    },
    {
      title: 'Claims Advocacy',
      description: 'Dedicated support and representation throughout the claims process',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-sm text-gray-500 mb-4"
              style={{ fontFamily: 'DM Sans', fontWeight: 500, letterSpacing: '0.05em' }}
            >
              INSURANCE SERVICES
            </p>
            <h1
              className="text-4xl md:text-5xl mb-6 text-gray-900"
              style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
            >
              Comprehensive business insurance backed by A-rated carriers
            </h1>
            <p
              className="text-lg text-gray-600 max-w-3xl leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              We provide specialized insurance solutions across 14 core service areas, delivering
              industry expertise and personalized service to protect what matters most to your
              business.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p
                className="text-sm text-gray-500 mb-4"
                style={{ fontFamily: 'DM Sans', fontWeight: 500, letterSpacing: '0.05em' }}
              >
                OUR APPROACH
              </p>
              <h2
                className="text-3xl text-gray-900"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                What sets us apart
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded">
                  <h3
                    className="text-base text-gray-900 mb-2"
                    style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl mb-6 text-gray-900"
              style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
            >
              Discuss your coverage needs
            </h2>
            <p
              className="text-lg text-gray-600 mb-10"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Contact us for a personalized consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                // onClick={() => onNavigate('contact')}
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6"
                style={{ fontFamily: 'DM Sans', fontWeight: 500 }}
              >
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-6"
                style={{ fontFamily: 'DM Sans', fontWeight: 500 }}
              >
                <Phone className="mr-2 w-4 h-4" />
                714-729-0500
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
