import { Shield, TrendingDown, Users, Clock, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CarrierCarousel } from '@/components/CarrierCarousel/Component'
import Image from 'next/image'
import Link from 'next/link'
import { HomeIndustriesGrid } from '@/components/HomeIndustriesGrid'

export default function HomePage() {
  const benefits = [
    {
      icon: Shield,
      title: 'A-Rated Carriers Only',
      description: 'We partner exclusively with financially strong, trusted insurance companies.',
    },
    {
      icon: TrendingDown,
      title: 'Save Money',
      description: 'Competitive rates and expert negotiation to reduce your insurance costs.',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Direct access to dedicated brokers who understand your industry.',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Quick quotes and claims support when you need it most.',
    },
  ]

  const whyChoosePoints = [
    'Deep industry expertise across healthcare and commercial sectors',
    'Direct relationships with decision-makers at top carriers',
    'Proactive policy reviews to ensure optimal coverage',
    'No automated phone trees or outsourced support',
    'Decades of combined experience in specialty insurance',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Family Oriented Split Layout */}
      <section className="relative bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 pt-28 pb-12 lg:pt-32 lg:pb-16 border-b border-gray-100 overflow-hidden">
        {/* Decorative background elements - navy/purple shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large navy/purple rounded rectangle - positioned lower, under the image */}
          <div className="absolute top-[40%] right-[-8%] w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/4 to-purple-500/3 rounded-[3rem] rotate-6"></div>
          {/* Smaller accent shapes */}
          <div className="absolute top-[50%] right-[10%] w-28 h-28 bg-indigo-400/25 rounded-2xl rotate-12"></div>
          <div className="absolute bottom-[20%] left-[8%] w-32 h-32 bg-blue-300/20 rounded-full blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Insurance Carriers - Above hero content */}
            <div className="mb-12 overflow-hidden">
              <p
                className="text-center text-xs uppercase tracking-wider text-gray-500 mb-6"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                Trusted A-Rated Insurance Carriers
              </p>
              <CarrierCarousel />
            </div>

            {/* Hero Heading - Full Width */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900 leading-tight"
              style={{ fontFamily: 'DM Sans', fontWeight: 900 }}
            >
              Your Gateway to{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Optimal</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-200/60 to-purple-200/60 -skew-x-12 rounded"></span>
              </span>{' '}
              Insurance Solutions
            </h1>

            {/* Hero Split Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                <p
                  className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                  style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                >
                  Commercial insurance tailored to your industry. Get matched with A-rated carriers
                  and save an average of 30% on coverage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/contact">
                    <Button
                      className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg h-auto"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      Get Your Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg h-auto"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Stats inline */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div
                      className="text-3xl md:text-4xl mb-1 text-gray-900"
                      style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                    >
                      30+
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                    >
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl md:text-4xl mb-1 text-gray-900"
                      style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                    >
                      500+
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                    >
                      Happy Clients
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl md:text-4xl mb-1 text-gray-900"
                      style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                    >
                      A+
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                    >
                      Rated Carriers
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image with Badge */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative scale-105 lg:scale-110">
                  {/* Main hero image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/hero.webp"
                      alt="The Assurixs team"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Floating badge - 30+ Years - Bottom Left */}
                  <div className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div
                          className="text-2xl text-gray-900"
                          style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                        >
                          30+
                        </div>
                        <div
                          className="text-xs text-gray-600"
                          style={{ fontFamily: 'DM Sans', fontWeight: 500 }}
                        >
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge - 24/7 Support - Top Right */}
                  {/* <div className="absolute top-12 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-900" />
                      <div>
                        <span
                          className="text-sm text-gray-900"
                          style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                        >
                          24/7 Support
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl mb-4 text-gray-900"
                style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
              >
                Why businesses choose Assurixs
              </h2>
              <p
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
              >
                Professional coverage backed by industry expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="mb-3 text-gray-900"
                    style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'DM Sans', fontWeight: 400 }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <HomeIndustriesGrid />

      {/* Why Choose Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <Image
                  src="/holding_hands.jpg"
                  alt="Assurixs Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2
                  className="text-3xl md:text-4xl mb-6 text-gray-900"
                  style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                >
                  The Assurixs difference
                </h2>
                <p
                  className="text-lg text-gray-600 mb-8"
                  style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                >
                  With over 30 years of experience, we provide personalized service that larger
                  companies can&apos;t match.
                </p>

                <div className="space-y-4 mb-8">
                  {whyChoosePoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <Link href="/about">
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-6 h-auto"
                    style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                  >
                    Learn About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-xl text-gray-300 mb-10"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Get a personalized quote in as little as 24 hours
            </p>
            <Link href="/contact">
              <Button
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg h-auto"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                Request Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
