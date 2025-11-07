import { Star, Quote, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import IndustriesGrid from '@/components/IndustriesGrid'

export default function IndustriesPage() {
  const testimonials = [
    {
      quote:
        "Assurixs's understanding of medical practice insurance is unmatched. They saved us over 30% on our malpractice coverage while actually improving our policy terms. Their expertise made the transition seamless.",
      author: 'Dr. Sarah Chen',
      role: 'Family Practice Physician',
      industry: 'Medical Practice',
      rating: 5,
    },
    {
      quote:
        'As a new dental practice owner, I was overwhelmed by insurance options. Assurixs guided me through every step, explained all coverage types, and got me comprehensive protection at a competitive rate.',
      author: 'Dr. Michael Rodriguez',
      role: 'Dental Practice Owner',
      industry: 'Dental Care',
      rating: 5,
    },
    {
      quote:
        'The difference between Assurixs and the large 1-800 companies is night and day. We have a dedicated broker who knows our urgent care facility and responds immediately when we need help.',
      author: 'Jennifer Walsh',
      role: 'Director of Operations',
      industry: 'Urgent Care',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-32 pb-20 lg:pt-40 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              className="bg-white text-gray-900 mb-6 px-4 py-2"
              style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Many Industries, One Expert Partner
            </Badge>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Industries We Serve
            </h1>
            <p
              className="text-xl text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Deep expertise where it matters most—specialized insurance solutions for businesses
              that need expert protection
            </p>
          </div>
        </div>
      </section>

      <IndustriesGrid />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
                What Our Clients Say
              </h2>
              <p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
              >
                Real experiences from businesses we've helped protect with A-rated insurance
                coverage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-2 border-gray-100"
                >
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-[#FFEB87] opacity-80" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFEB87] text-[#FFEB87]" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p
                      className="text-sm text-gray-700 mb-4 italic"
                      style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                    >
                      "{testimonial.quote}"
                    </p>

                    {/* Author info */}
                    <div className="border-t border-gray-200 pt-4">
                      <p
                        className="text-sm text-[#2B2E4A]"
                        style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                      >
                        {testimonial.role}
                      </p>
                      <Badge className="mt-2 bg-gray-900 text-white">{testimonial.industry}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Focus Matters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
              Why Our Industry Focus Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
                    Better Understanding
                  </h3>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                  >
                    We know your industry's unique risks, regulations, and insurance needs inside
                    and out.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
                    Stronger Relationships
                  </h3>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                  >
                    Our carrier partnerships in these industries mean better rates and more flexible
                    terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
                    Faster Service
                  </h3>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                  >
                    Industry expertise means quicker quotes, smoother underwriting, and faster
                    policy issuance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2
            className="mb-4 text-3xl md:text-4xl"
            style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
          >
            Is Your Business in One of Our Focus Industries?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
          >
            Let's discuss how our specialized expertise can save you money and improve your
            coverage.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
          >
            Get Your Industry-Specific Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
