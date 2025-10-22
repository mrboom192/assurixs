import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  Building,
  HeartPulse,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      icon: Briefcase,
      title: "Workers Compensation",
      shortDesc:
        "Protect your employees and your business with comprehensive workers comp coverage",
      details: [
        "Competitive rates for California businesses",
        "Pay-as-you-go options to improve cash flow",
        "Expert claims management and support",
        "Industry-specific coverage for restaurants, healthcare, and retail",
        "Safety program development to reduce premiums",
        "Annual audits and compliance support",
      ],
      savings: "Average savings of 20-35% compared to standard market rates",
    },
    {
      icon: Building,
      title: "Commercial Real Estate Coverage",
      shortDesc:
        "Comprehensive protection for property owners, managers, and investors",
      details: [
        "Property insurance for commercial buildings",
        "General liability coverage",
        "Errors & omissions for property managers",
        "Loss of income protection",
        "Tenant discrimination and fair housing liability",
        "Umbrella policies for additional protection",
      ],
      savings: "Bundled coverage packages save 15-25% on premiums",
    },
    {
      icon: HeartPulse,
      title: "Medical, Dental & Life Science Coverage",
      shortDesc:
        "Specialized insurance for healthcare professionals and facilities",
      details: [
        "Professional liability (malpractice) insurance",
        "General liability for medical offices",
        "Cyber liability for HIPAA compliance",
        "Employment practices liability",
        "Clinical trials insurance for researchers",
        "Pharmacy professional liability",
      ],
      savings: "Specialty expertise reduces premiums by 10-20%",
    },
    {
      icon: Users,
      title: "Employee Benefits",
      shortDesc:
        "Attract and retain top talent with competitive benefit packages",
      details: [
        "Group health insurance",
        "Dental and vision plans",
        "Life and disability insurance",
        "Health Savings Accounts (HSA)",
        "Flexible Spending Accounts (FSA)",
        "Employee assistance programs",
      ],
      savings: "Group purchasing power saves 10-30% on individual plans",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Insurance",
      shortDesc:
        "Complete coverage for food service and hospitality businesses",
      details: [
        "General liability for slip-and-fall incidents",
        "Liquor liability for establishments serving alcohol",
        "Food contamination coverage",
        "Equipment breakdown insurance",
        "Business interruption protection",
        "Workers compensation for kitchen and service staff",
      ],
      savings: "Industry-focused packages reduce costs by 15-25%",
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive insurance solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-muted-foreground">
              Click on any service below to learn more about coverage options,
              benefits, and potential savings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all cursor-pointer ${
                  expandedService === index ? "shadow-lg" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full text-left"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5A9F3F] to-[#2C4A7C] text-white rounded-lg flex items-center justify-center shadow-md">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="mb-2">{service.title}</h3>
                            <p className="text-muted-foreground">
                              {service.shortDesc}
                            </p>
                          </div>
                          <div className="flex-shrink-0 text-primary">
                            {expandedService === index ? (
                              <ChevronUp className="w-6 h-6" />
                            ) : (
                              <ChevronDown className="w-6 h-6" />
                            )}
                          </div>
                        </div>

                        {expandedService === index && (
                          <div className="mt-6 pt-6 border-t border-border">
                            <h4 className="mb-4">Coverage Includes:</h4>
                            <ul className="space-y-2 mb-6">
                              {service.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">
                                    {detail}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <p className="text-sm">
                                <span className="font-semibold text-green-900">
                                  Savings Potential:{" "}
                                </span>
                                <span className="text-green-700">
                                  {service.savings}
                                </span>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">What Sets Our Services Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3">No Insurance Jargon</h3>
                  <p className="text-muted-foreground">
                    We explain everything in plain English, so you understand
                    exactly what you&apos;re getting and why it matters.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Our relationships with A-rated carriers and industry
                    expertise help us secure better rates for our clients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3">Customized Solutions</h3>
                  <p className="text-muted-foreground">
                    Every business is unique. We tailor coverage to your
                    specific needs, industry, and risk profile.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3">Ongoing Support</h3>
                  <p className="text-muted-foreground">
                    We don&apos;t disappear after the sale. Annual reviews,
                    claims assistance, and policy updates are all included.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Discuss Your Coverage Needs?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a personalized quote and discover how much you could save with
            Assurix.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-[#C9A227] text-[#2B2E4A] hover:bg-[#C9A227]/90 px-8 py-6 text-lg shadow-lg"
          >
            Request a Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
