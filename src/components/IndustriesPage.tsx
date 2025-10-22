import {
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
  X,
  Star,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const industries = [
    {
      name: "Medical Doctors",
      description:
        "Comprehensive insurance for medical practices including malpractice coverage, general liability, and specialized protection for physicians starting their own practice.",
      icon: Stethoscope,
      image:
        "https://images.unsplash.com/photo-1682706841478-88eb8995357b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzYwOTIyNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Malpractice claims defense",
        "Patient data protection",
        "Medical equipment coverage",
        "Employment practices liability",
      ],
    },
    {
      name: "Dentists",
      description:
        "Specialized coverage for dental practices including professional liability, general liability, and protection for dental equipment and office operations.",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1639390159821-1cf308998c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZGVudGFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDkyMjYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Professional liability exposure",
        "Dental equipment protection",
        "HIPAA compliance requirements",
        "Patient safety concerns",
      ],
    },
    {
      name: "Allied Healthcare Provider",
      description:
        "Protection for healthcare service providers including nurses, therapists, and allied health professionals with specialized liability coverage.",
      icon: Pill,
      image:
        "https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvdmlkZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc2MDkyMjYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Professional liability coverage",
        "Patient care standards",
        "Regulatory compliance",
        "Equipment and facility protection",
      ],
    },
    {
      name: "Lab, MRI, Diagnostics Center",
      description:
        "Coverage for diagnostic and imaging facilities including equipment protection, professional liability, and specialized coverage for medical testing operations.",
      icon: TestTube,
      image:
        "https://images.unsplash.com/photo-1758206523917-ebcf4a571e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFiJTIwZGlhZ25vc3RpY3xlbnwxfHx8fDE3NjA5MjI2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Expensive equipment protection",
        "Result accuracy liability",
        "Patient data security",
        "Regulatory compliance",
      ],
    },
    {
      name: "Urgent Care",
      description:
        "Insurance solutions for urgent care facilities including professional liability, general liability, and coverage for emergency medical services.",
      icon: Siren,
      image:
        "https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmdlbnQlMjBjYXJlJTIwY2xpbmljfGVufDF8fHx8MTc2MDkyMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Emergency care liability",
        "High patient volume risks",
        "Equipment and facility coverage",
        "Staff liability protection",
      ],
    },
    {
      name: "Surgery Centers",
      description:
        "Specialized protection for surgical facilities including professional liability for surgical procedures, facility coverage, and equipment protection.",
      icon: Scissors,
      image:
        "https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZXJ5JTIwY2VudGVyJTIwb3BlcmF0aW5nfGVufDF8fHx8MTc2MDkyMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Surgical malpractice exposure",
        "Specialized equipment coverage",
        "Facility liability protection",
        "Anesthesia-related risks",
      ],
    },
    {
      name: "Hospitals",
      description:
        "Comprehensive coverage for hospital facilities including professional liability, property protection, and specialized coverage for hospital operations.",
      icon: Hospital,
      image:
        "https://images.unsplash.com/photo-1643055419804-397de33fe331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjA5MjI2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Multi-specialty liability coverage",
        "Large-scale facility protection",
        "Employee liability coverage",
        "Complex regulatory compliance",
      ],
    },
    {
      name: "Medical Technology",
      description:
        "Insurance for medical tech companies including product liability, professional liability, and coverage for healthcare technology innovations.",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1758691463569-66de91d76452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYwOTE4Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Product liability exposure",
        "Cyber security risks",
        "Intellectual property protection",
        "Regulatory compliance",
      ],
    },
    {
      name: "Insurance Brokers",
      description:
        "Professional liability for insurance brokers including errors & omissions coverage and protection for insurance advisory services.",
      icon: Umbrella,
      image:
        "https://images.unsplash.com/photo-1594665964721-d96c7e10981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBicm9rZXIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjA5MjI2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Errors & omissions liability",
        "Client data protection",
        "Contract disputes",
        "Regulatory compliance",
      ],
    },
    {
      name: "Technology Company",
      description:
        "Coverage for tech businesses and startups including cyber liability, professional liability, and protection for technology operations.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3NjA4NjAxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Cyber security risks",
        "Data breach liability",
        "Product liability",
        "Professional liability coverage",
      ],
    },
    {
      name: "House of Worship & Nonprofit Organization",
      description:
        "Tailored protection for nonprofits and religious organizations including property coverage, liability protection, and specialized nonprofit coverage.",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1758790636662-2f8eec12077e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjaGFyaXR5JTIwb3JnYW5pemF0aW9ufGVufDF8fHx8MTc2MDkyMjYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      challenges: [
        "Property and liability coverage",
        "Volunteer protection",
        "Event liability coverage",
        "Directors & officers liability",
      ],
    },
  ];

  const notServed = [
    "High-risk manufacturing",
    "Hazardous materials handling",
    "Aviation and aerospace",
    "Construction and contracting (we can refer you to specialists)",
    "Transportation and trucking",
  ];

  const testimonials = [
    {
      quote:
        "Assurix&apos;s understanding of medical practice insurance is unmatched. They saved us over 30% on our malpractice coverage while actually improving our policy terms. Their expertise made the transition seamless.",
      author: "Dr. Sarah Chen",
      role: "Family Practice Physician",
      industry: "Medical Practice",
      rating: 5,
    },
    {
      quote:
        "As a new dental practice owner, I was overwhelmed by insurance options. Assurix guided me through every step, explained all coverage types, and got me comprehensive protection at a competitive rate.",
      author: "Dr. Michael Rodriguez",
      role: "Dental Practice Owner",
      industry: "Dental Care",
      rating: 5,
    },
    {
      quote:
        "The difference between Assurix and the large 1-800 companies is night and day. We have a dedicated broker who knows our urgent care facility and responds immediately when we need help.",
      author: "Jennifer Walsh",
      role: "Director of Operations",
      industry: "Urgent Care",
      rating: 5,
    },
    {
      quote:
        "Our surgery center had complex insurance needs. Assurix not only found us A-rated carriers but also identified coverage gaps in our previous policy that could have been catastrophic.",
      author: "Dr. James Patterson",
      role: "Medical Director",
      industry: "Surgery Center",
      rating: 5,
    },
    {
      quote:
        "Professional service that treats us like family, not just another policy number. Assurix has been instrumental in protecting our diagnostic center as we&apos;ve grown.",
      author: "Maria Santos",
      role: "Lab Administrator",
      industry: "Diagnostics Center",
      rating: 5,
    },
    {
      quote:
        "I wish I&apos;d found Assurix years ago. Their nonprofit expertise helped our organization save money while ensuring we had proper coverage for all our community programs.",
      author: "Rev. David Thompson",
      role: "Executive Director",
      industry: "Nonprofit Organization",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100">
              Specialized insurance expertise for businesses that need more than
              generic coverage
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              We focus on industries where we can provide the most value through
              specialized knowledge and carrier relationships. This ensures you
              get coverage that truly fits your business, not a
              one-size-fits-all solution.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => onNavigate("contact")}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="text-white mb-2">
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <div className="border-t border-border pt-4">
                      <h4 className="text-sm mb-2">
                        Common Challenges We Address:
                      </h4>
                      <ul className="space-y-1">
                        {industry.challenges.map(
                          (challenge, challengeIndex) => (
                            <li
                              key={challengeIndex}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{challenge}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from businesses we&apos;ve helped protect with
                A-rated insurance coverage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-[#C9A227] opacity-50" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#C9A227] text-[#C9A227]"
                          />
                        )
                      )}
                    </div>

                    {/* Quote text */}
                    <p
                      className="text-sm text-gray-700 mb-4 italic"
                      style={{ fontFamily: "DM Sans", fontWeight: 400 }}
                    >
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Author info */}
                    <div className="border-t border-gray-200 pt-4">
                      <p
                        className="text-sm text-[#2B2E4A]"
                        style={{ fontFamily: "DM Sans", fontWeight: 600 }}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontFamily: "DM Sans", fontWeight: 400 }}
                      >
                        {testimonial.role}
                      </p>
                      <p
                        className="text-xs text-[#5A9F3F] mt-1"
                        style={{ fontFamily: "DM Sans", fontWeight: 500 }}
                      >
                        {testimonial.industry}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-sm text-muted-foreground mb-4">
                Join hundreds of satisfied businesses who trust Assurix for
                their insurance needs
              </p>
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-[#2C4A7C] hover:bg-[#2B2E4A]"
              >
                Get Your Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Not Served Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Industries We Don&apos;t Serve</h2>
            <p className="text-center text-muted-foreground mb-8">
              To provide the best service, we focus on industries where we have
              deep expertise. If your business falls into one of these
              categories, we&apos;re happy to refer you to specialists.
            </p>
            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {notServed.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Don&apos;t see your industry listed? Contact us—we may still be
              able to help or provide a trusted referral.
            </p>
          </div>
        </div>
      </section>

      {/* Why Industry Focus Matters */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Why Our Industry Focus Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A227] to-[#5A9F3F] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="mb-3">Better Understanding</h3>
                <p className="text-muted-foreground">
                  We know your industry&apos;s unique risks, regulations, and
                  insurance needs inside and out.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5A9F3F] to-[#2C4A7C] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="mb-3">Stronger Relationships</h3>
                <p className="text-muted-foreground">
                  Our carrier partnerships in these industries mean better rates
                  and more flexible terms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C4A7C] to-[#2B2E4A] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="mb-3">Faster Service</h3>
                <p className="text-muted-foreground">
                  Industry expertise means quicker quotes, smoother
                  underwriting, and faster policy issuance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">
            Is Your Business in One of Our Focus Industries?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our specialized expertise can save you money
            and improve your coverage.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-[#C9A227] text-[#2B2E4A] hover:bg-[#C9A227]/90 px-8 py-6 text-lg shadow-lg"
          >
            Get Your Industry-Specific Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
