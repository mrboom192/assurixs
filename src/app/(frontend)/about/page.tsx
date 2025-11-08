import { Award, Target, Heart, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in insurance brokerage and client service.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Your peace of mind is our priority. We treat your business like our own.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focused on delivering tangible savings and superior coverage.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Long-term relationships built on trust, transparency, and expertise.',
    },
  ]

  const team = [
    {
      name: 'Ahmad Oyoun',
      role: 'President & Founder',
      bio: 'As President and Founder of Assurix Insurance Services, Ahmad Oyoun brings over 30 years of experience in the insurance industry. Since beginning his career in 1993, Ahmad has built a reputation for his ability to strategically tailor insurance solutions that align with the unique needs of each client. With a strong foundation serving dental and healthcare professionals, Ahmad developed a deep understanding of complex risk management and specialized coverage design. His success in these industries became the foundation for a broader expertise—allowing him to effectively advise and protect clients across diverse sectors including professional services, retail operations, and commercial businesses. Since founding Assurix in 2019, Ahmad has led the company with a commitment to integrity, personalized service, and long-term client relationships. His leadership philosophy is built on understanding clients beyond their policies—focusing on the people, goals, and growth behind every business. Outside of work, Ahmad is passionate about mentorship, community involvement, and empowering the next generation of insurance professionals, ensuring the same standard of care and excellence carries forward into the future of the industry.',
      image: '/ahmad.jpeg',
    },
    {
      name: 'Sallman Oyoun',
      role: 'Vice President',
      bio: "As Vice President of Assurix Insurance Services, Sallman Oyoun represents the next generation of leadership and innovation within the company. Since entering the insurance industry in 2022, Sallman has quickly developed a reputation for his strategic approach to client relations, business development, and modernizing operational processes within Assurix. Sallman earned his Bachelor of Science in Chemistry from Cal Poly Pomona in 2022, and later completed his Master of Business Administration (MBA) from California State University, Long Beach in the summer of 2025. His unique combination of analytical thinking and business insight allows him to bridge data-driven strategy with personalized client care—ensuring every solution aligns with both coverage needs and long-term financial goals. Under Sallman's leadership, Assurix continues to expand its reach and refine its client experience. His forward-thinking mindset, dedication to excellence, and passion for helping professionals protect what they've built reflect the very values on which Assurix was founded.",
      image: '/sallman.jpeg',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-32 pb-20 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">About Assurix Insurance</h1>
            <p className="text-xl text-white/90">
              Dedicated to protecting what matters most to you
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Founded in 2019, Assurixs Insurance Services was built on a foundation of
                  expertise in serving healthcare professionals and life science companies
                  throughout California. As our client base expanded and our expertise grew, we
                  developed comprehensive service offerings to meet the diverse needs of businesses
                  across multiple industries.
                </p>
                <p className="mb-4">
                  Our agency represents a commitment to assurance, expertise, and personalized
                  service. We work exclusively with A-rated carriers, ensuring our clients receive
                  coverage they can depend on from financially stable insurance companies.
                </p>
                <p>
                  Today, Assurixs serves pharmacies, medical and dental practices, restaurants,
                  commercial real estate professionals, and other businesses that require
                  specialized insurance expertise. Our core values remain unchanged: providing
                  trusted insurance solutions with personalized, local service.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg">
              <h3 className="mb-3">Professionally Managed with Personal Service</h3>
              <p className="text-muted-foreground">
                We bring decades of insurance experience combined with modern service standards.
                We've built our reputation on specialized expertise and personal attention to each
                client's unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-xl text-foreground mb-8">
              To save our clients money while providing superior coverage and personalized service
              through trusted, A-rated insurance carriers.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that quality insurance shouldn't come with impersonal service. Every client
              deserves direct access to experienced brokers who understand their industry and care
              about their success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              return (
                <Card
                  key={index}
                  className="text-center bg-white border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4 shadow-md">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your protection and peace of mind
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Ahmad Oyoun - First */}
            <Card className="overflow-hidden shadow-xl border-2 border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto bg-gray-900">
                  <img
                    src={'/ahmad.jpeg'}
                    alt="Ahmad Oyoun"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3
                      className="text-2xl md:text-3xl mb-2"
                      style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                    >
                      Ahmad Oyoun
                    </h3>
                    <p
                      className="text-lg text-gray-600"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      President & Founder
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As President and Founder of Assurixs Insurance Services, Ahmad Oyoun brings over
                    30 years of experience in the insurance industry. Since beginning his career in
                    1993, Ahmad has built a reputation for his ability to strategically tailor
                    insurance solutions that align with the unique needs of each client.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    With a strong foundation serving dental and healthcare professionals, Ahmad
                    developed a deep understanding of complex risk management and specialized
                    coverage design. Since founding Assurixs in 2019, Ahmad has led the company with
                    a commitment to integrity, personalized service, and long-term client
                    relationships. His leadership philosophy is built on understanding clients
                    beyond their policies—focusing on the people, goals, and growth behind every
                    business.
                  </p>
                </CardContent>
              </div>
            </Card>

            {/* Sallman Oyoun - Second */}
            <Card className="overflow-hidden shadow-xl border-2 border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto bg-gray-900 lg:order-2">
                  <img
                    src="/sallman.jpeg"
                    alt="Sallman Oyoun"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center lg:order-1">
                  <div className="mb-4">
                    <h3
                      className="text-2xl md:text-3xl mb-2"
                      style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                    >
                      Sallman Oyoun
                    </h3>
                    <p
                      className="text-lg text-gray-600"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      Vice President
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As Vice President of Assurixs Insurance Services, Sallman Oyoun represents the
                    next generation of leadership and innovation within the company. Since entering
                    the insurance industry in 2022, Sallman has quickly developed a reputation for
                    his strategic approach to client relations, business development, and
                    modernizing operational processes within Assurixs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Sallman earned his Bachelor of Science in Chemistry from Cal Poly Pomona in
                    2022, and later completed his Master of Business Administration (MBA) from
                    California State University, Long Beach in the summer of 2025. His unique
                    combination of analytical thinking and business insight allows him to bridge
                    data-driven strategy with personalized client care—ensuring every solution
                    aligns with both coverage needs and long-term financial goals.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Card Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2 border-gray-200">
              <div className="bg-white p-8 md:p-12 text-center relative">
                <div className="relative z-10">
                  <h2
                    className="text-3xl md:text-4xl mb-4 text-gray-900"
                    style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                  >
                    Ready to Experience the Assurixs Difference?
                  </h2>
                  <p
                    className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                    style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                  >
                    Let our experienced team provide you with personalized insurance solutions
                    backed by A-rated carriers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      //   onClick={() => onNavigate('contact')}
                      size="lg"
                      className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      Get Your Free Quote
                    </Button>
                    <Button
                      //   onClick={() => onNavigate('services')}
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      View Our Services
                    </Button>
                  </div>
                  <p
                    className="text-sm text-gray-500 mt-6"
                    style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                  >
                    ✓ No obligations • ✓ Personalized service • ✓ 30+ years of expertise
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-white">30+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-white">500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-white">100%</div>
              <p className="text-gray-300">A-Rated Carriers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-white">24/7</div>
              <p className="text-gray-300">Claims Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
