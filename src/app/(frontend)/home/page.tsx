import {
  Shield,
  TrendingDown,
  Users,
  Clock,
  CheckCircle2,
  Stethoscope,
  Award,
  Pill,
  TestTube,
  Siren,
  Scissors,
  Hospital,
  Smartphone,
  Umbrella,
  Building2,
  Heart,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  UtensilsCrossed,
  Scale,
  Building,
  Home,
  Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import image_a93b98454ff6a992c83fbfc94eeb62c22f6c2fb6 from 'figma:asset/a93b98454ff6a992c83fbfc94eeb62c22f6c2fb6.png'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
// import { CarrierCarousel } from '@/components/CarrierCarousel/Component'

export async function HomePage() {
  const payload = await getPayload({ config })

  const res = await payload.findGlobal({ slug: 'home' })

  const { heroText, heroSubtext, heroImage } = res as {
    heroText: string
    heroSubtext: string
    heroImage: Media
  }

  const industries = [
    {
      name: 'Medical Professionals',
      description: 'Comprehensive insurance for medical practices',
      icon: Stethoscope,
      image:
        'https://images.unsplash.com/photo-1682706841478-88eb8995357b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzYwOTIyNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dental Professionals',
      description: 'Specialized coverage for dental practices',
      icon: Award,
      image:
        'https://images.unsplash.com/photo-1639390159821-1cf308998c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZGVudGFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDkyMjYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Insurance Agencies',
      description: 'Professional liability for insurance brokers',
      icon: Umbrella,
      image:
        'https://images.unsplash.com/photo-1594665964721-d96c7e10981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBicm9rZXIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjA5MjI2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Food & Beverage',
      description: 'Coverage for restaurants, cafes, and food service',
      icon: UtensilsCrossed,
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nfGVufDB8fHx8MTczMDY3MjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Law Firms',
      description: 'Professional liability and E&O coverage',
      icon: Scale,
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwb2ZmaWNlfGVufDB8fHx8MTczMDY3MjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Hospitals',
      description: 'Comprehensive coverage for hospital facilities',
      icon: Hospital,
      image:
        'https://images.unsplash.com/photo-1643055419804-397de33fe331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjA5MjI2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Surgery Centers',
      description: 'Specialized protection for surgical facilities',
      icon: Scissors,
      image:
        'https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZXJ5JTIwY2VudGVyJTIwb3BlcmF0aW5nfGVufDF8fHx8MTc2MDkyMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Pharmacies',
      description: 'Professional liability for pharmacies',
      icon: Pill,
      image:
        'https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvdmlkZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc2MDkyMjYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'House of Worship',
      description: 'Protection for religious organizations',
      icon: Heart,
      image:
        'https://images.unsplash.com/photo-1758790636662-2f8eec12077e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjaGFyaXR5JTIwb3JnYW5pemF0aW9ufGVufDF8fHx8MTc2MDkyMjYyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Lab & Diagnostics',
      description: 'Coverage for diagnostic facilities',
      icon: TestTube,
      image:
        'https://images.unsplash.com/photo-1758206523917-ebcf4a571e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFiJTIwZGlhZ25vc3RpY3xlbnwxfHx8fDE3NjA5MjI2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Software Development',
      description: 'Coverage for tech businesses',
      icon: Smartphone,
      image:
        'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3NjA4NjAxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Urgent Care',
      description: 'Insurance for urgent care facilities',
      icon: Siren,
      image:
        'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmdlbnQlMjBjYXJlJTIwY2xpbmljfGVufDF8fHx8MTc2MDkyMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Commercial Real Estate',
      description: 'Property owner protection',
      icon: Building,
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVhbCUyMGVzdGF0ZXxlbnwwfHx8fDE3MzA2NzIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Property Management',
      description: 'Liability for property managers',
      icon: Home,
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzMwNjcyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ]

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
              {/* <CarrierCarousel /> */}
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
                  {heroSubtext}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    // onClick={() => onNavigate('contact')}
                    className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg h-auto"
                    style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                  >
                    Get Your Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    // onClick={() => onNavigate('about')}
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg h-auto"
                    style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                  >
                    Learn More
                  </Button>
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
                    <img
                      src={heroImage?.url || ''}
                      alt={heroImage?.alt || ''}
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
                  <div className="absolute top-12 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
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
                  </div>
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
                <button
                  key={index}
                  // onClick={() => onNavigate('industries')}
                  className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-md transition-all text-left"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
                    <industry.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3
                    className="text-sm text-gray-900 mb-1"
                    style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                  >
                    {industry.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                {/* <img
                  src={image_a93b98454ff6a992c83fbfc94eeb62c22f6c2fb6}
                  alt="Assurixs Team"
                  className="w-full h-auto rounded-lg shadow-xl"
                /> */}
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
                  companies can't match.
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

                <Button
                  // onClick={() => onNavigate('about')}
                  className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-6 h-auto"
                  style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                >
                  Learn About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
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
            <Button
              // onClick={() => onNavigate('contact')}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg h-auto"
              style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
            >
              Request Your Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
