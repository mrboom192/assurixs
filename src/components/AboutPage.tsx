import { Award, Target, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in insurance brokerage and client service.",
    },
    {
      icon: Heart,
      title: "Care",
      description:
        "Your peace of mind is our priority. We treat your business like our own.",
    },
    {
      icon: Target,
      title: "Results",
      description:
        "Focused on delivering tangible savings and superior coverage.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Long-term relationships built on trust, transparency, and expertise.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "President & Founder",
      bio: "With over 30 years in the insurance industry, John founded Superior Malpractice Insurance and led its evolution into Assurix Insurance Services. His expertise in professional liability and workers compensation has helped thousands of businesses secure optimal coverage.",
      image: null, // Placeholder for client to provide
    },
    {
      name: "Salman Smith",
      role: "Vice President",
      bio: "Salman brings a fresh perspective to traditional insurance brokerage, focusing on technology integration and streamlined client experiences. He specializes in life science and commercial real estate coverage.",
      image: null, // Placeholder for client to provide
    },
    {
      name: "Team Member",
      role: "Senior Broker",
      bio: "Our third broker specializes in restaurant and hospitality insurance, bringing extensive knowledge of the unique challenges facing food service businesses.",
      image: null, // Placeholder for client to provide
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
            <h1 className="text-4xl md:text-5xl mb-6">
              About Assurix Insurance
            </h1>
            <p className="text-xl text-blue-100">
              A family-owned business dedicated to protecting what matters most
              to you
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
                  Founded as Superior Malpractice Insurance, our agency built a
                  strong reputation serving healthcare professionals and life
                  science companies throughout California. As our client base
                  expanded and our expertise grew, we recognized the need to
                  evolve our brand to better reflect our comprehensive service
                  offerings.
                </p>
                <p className="mb-4">
                  In 2024, we rebranded as Assurix Insurance Services—a name
                  that represents our commitment to assurance, expertise, and
                  personalized service across multiple industries. While our
                  name has changed, our core values remain the same: providing
                  trusted insurance solutions with local, family-owned care.
                </p>
                <p>
                  Today, Assurix serves pharmacies, medical and dental
                  practices, restaurants, commercial real estate professionals,
                  and other businesses that require specialized insurance
                  expertise. We continue to work exclusively with A-rated
                  carriers, ensuring our clients receive coverage they can
                  depend on.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#2C4A7C] p-6 rounded-r-lg">
              <h3 className="mb-3">From Superior Malpractice to Assurix</h3>
              <p className="text-muted-foreground">
                Our rebranding reflects our growth from a specialty malpractice
                broker to a full-service insurance agency. We&apos;ve expanded
                our offerings while maintaining the specialized expertise and
                personal attention that made Superior Malpractice a trusted
                name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-xl text-foreground mb-8">
              To save our clients money while providing superior coverage and
              personalized service through trusted, A-rated insurance carriers.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that quality insurance shouldn&apos;t come with
              impersonal service. Every client deserves direct access to
              experienced brokers who understand their industry and care about
              their success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const gradients = [
                "from-[#C9A227] to-[#5A9F3F]",
                "from-[#5A9F3F] to-[#2C4A7C]",
                "from-[#2C4A7C] to-[#2B2E4A]",
                "from-[#2B2E4A] to-[#C9A227]",
              ];
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradients[index]} text-white rounded-full mb-4 shadow-md`}
                    >
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
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
              Experienced professionals dedicated to your protection and peace
              of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-[#5A9F3F] via-[#2C4A7C] to-[#2B2E4A] flex items-center justify-center">
                  {member.image ? (
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-16 h-16 text-[#2B2E4A]" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-green-50 border-2 border-[#C9A227] p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-muted-foreground">
              <strong>Note:</strong> Professional headshots and detailed bios
              will be added once photos are provided by the team.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-[#C9A227]">
                30+
              </div>
              <p className="text-white/90">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-[#C9A227]">
                500+
              </div>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-[#C9A227]">
                100%
              </div>
              <p className="text-white/90">A-Rated Carriers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2 text-[#C9A227]">
                24/7
              </div>
              <p className="text-white/90">Claims Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
