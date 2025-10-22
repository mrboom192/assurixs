import image_5053957a31d22f3266e44c1a849421b9934c470e from "figma:asset/5053957a31d22f3266e44c1a849421b9934c470e.png";
import image_5fbb5aae366a85cc612e2bea7c255384185cc87e from "figma:asset/5fbb5aae366a85cc612e2bea7c255384185cc87e.png";
import image_a3c4484a3ff39e44e9a0a192415c13a1d9bb21ae from "figma:asset/a3c4484a3ff39e44e9a0a192415c13a1d9bb21ae.png";
import { useState } from "react";
import image_c9a78abffa3a363c8009626ef067abc60ea343a5 from "figma:asset/c9a78abffa3a363c8009626ef067abc60ea343a5.png";
import image_36dc3f7ba5f0f3990ae677ff978059b5185e7f3e from "figma:asset/36dc3f7ba5f0f3990ae677ff978059b5185e7f3e.png";
import image_7ef82c84805ea004958c1025e48dc07a0cbf743c from "figma:asset/7ef82c84805ea004958c1025e48dc07a0cbf743c.png";
import aetnaLogo from "figma:asset/584f286fdb007ecd3749a0312a4329d835679d0c.png";
import anthemLogo from "figma:asset/7ef82c84805ea004958c1025e48dc07a0cbf743c.png";
import cignaLogo from "figma:asset/444a42043dbedf0604acb7b88d1c61fd425810c7.png";
import unitedHealthcareLogo from "figma:asset/873de5852330d4d0812460aa7e45a9b104bc730f.png";
import blueCrossLogo from "figma:asset/d6e1c8f3a5b2e9d4c7a6f8b3e2d1c9a7b5f4e3d2.png";
import wellCareLogo from "figma:asset/7a08c3f9e1b6d2a5c8f4e3d9b7a6c5f8e2d1b0a9.png";
import ambetterLogo from "figma:asset/4e5d6c7b8a9f0e1d2c3b4a5f6e7d8c9b0a1f2e3d.png";
import brightHealthLogo from "figma:asset/9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e.png";
import molinaLogo from "figma:asset/8d8b0e168f0f9c7fdfbef5cd217b1605ced1e4dd.png";
import kaiserLogo from "figma:asset/247821331f9da6b803fb1c4681e89dde97398f66.png";
import healthNetLogo from "figma:asset/d194410a51e92fd00b864ecc9ee93d448b45bacd.png";
import {
  Shield,
  Users,
  TrendingDown,
  Clock,
  Award,
  CheckCircle2,
  Stethoscope,
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
} from "lucide-react";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { FloatingTestimonial } from "./FloatingTestimonial";
import Image from "next/image";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const floatingTestimonials = [
    {
      quote:
        "Assurix helped us find comprehensive coverage at 25% less than our previous provider. Their expertise made all the difference.",
      author: "Dr. Sarah Chen",
      role: "Family Practice Physician",
      rating: 5,
      position: "right" as const,
    },
    {
      quote:
        "The personalized service and A-rated carriers gave us peace of mind. Highly recommend for any medical practice.",
      author: "Dr. Michael Rodriguez",
      role: "Dental Practice Owner",
      rating: 5,
      position: "right" as const,
    },
    {
      quote:
        "Outstanding support and competitive rates. They truly understand the insurance needs of healthcare providers.",
      author: "Jennifer Walsh",
      role: "Urgent Care Director",
      rating: 5,
      position: "right" as const,
    },
    {
      quote:
        "Professional, responsive, and trustworthy. Assurix delivered exactly what they promised.",
      author: "Dr. James Patterson",
      role: "Surgery Center Administrator",
      rating: 5,
      position: "right" as const,
    },
  ];

  const industries = [
    {
      name: "Medical Doctors",
      description: "Comprehensive insurance for medical practices",
      icon: Stethoscope,
      image:
        "https://images.unsplash.com/photo-1682706841478-88eb8995357b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzYwOTIyNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dentists",
      description: "Specialized coverage for dental practices",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1639390159821-1cf308998c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZGVudGFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDkyMjYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Allied Healthcare Provider",
      description: "Protection for healthcare service providers",
      icon: Pill,
      image:
        "https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvdmlkZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc2MDkyMjYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Lab, MRI, Diagnostics Center",
      description: "Coverage for diagnostic and imaging facilities",
      icon: TestTube,
      image:
        "https://images.unsplash.com/photo-1758206523917-ebcf4a571e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFiJTIwZGlhZ25vc3RpY3xlbnwxfHx8fDE3NjA5MjI2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Urgent Care",
      description: "Insurance solutions for urgent care facilities",
      icon: Siren,
      image:
        "https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmdlbnQlMjBjYXJlJTIwY2xpbmljfGVufDF8fHx8MTc2MDkyMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Surgery Centers",
      description: "Specialized protection for surgical facilities",
      icon: Scissors,
      image:
        "https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZXJ5JTIwY2VudGVyJTIwb3BlcmF0aW5nfGVufDF8fHx8MTc2MDkyMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Hospitals",
      description: "Comprehensive coverage for hospital facilities",
      icon: Hospital,
      image:
        "https://images.unsplash.com/photo-1643055419804-397de33fe331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjA5MjI2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Medical Technology",
      description: "Insurance for medical tech companies",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1758691463569-66de91d76452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYwOTE4Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Insurance Brokers",
      description: "Professional liability for insurance brokers",
      icon: Umbrella,
      image:
        "https://images.unsplash.com/photo-1594665964721-d96c7e10981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBicm9rZXIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjA5MjI2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Technology Company",
      description: "Coverage for tech businesses and startups",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3NjA4NjAxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "House of Worship & Nonprofit Organization",
      description:
        "Tailored protection for nonprofits and religious organizations",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1758790636662-2f8eec12077e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjaGFyaXR5JTIwb3JnYW5pemF0aW9ufGVufDF8fHx8MTc2MDkyMjYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "A-Rated Carriers Only",
      description:
        "We partner exclusively with financially strong, trusted insurance companies.",
    },
    {
      icon: TrendingDown,
      title: "Save Money",
      description:
        "Competitive rates and expert negotiation to reduce your insurance costs.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Direct access to dedicated brokers who understand your industry.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick quotes and claims support when you need it most.",
    },
  ];

  const whyChoosePoints = [
    "Local, family-owned business with deep industry expertise",
    "Direct relationships with decision-makers at top carriers",
    "Proactive policy reviews to ensure optimal coverage",
    "No automated phone trees or outsourced support",
    "Decades of combined experience in specialty insurance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-12 lg:py-16 overflow-hidden">
        {/* Floating Testimonials evenly spaced with 15px gaps */}
        <FloatingTestimonial {...floatingTestimonials[0]} className="top-56" />
        <FloatingTestimonial
          {...floatingTestimonials[1]}
          className="top-[25.94rem]"
        />
        <FloatingTestimonial
          {...floatingTestimonials[2]}
          className="top-[37.88rem]"
        />
        <FloatingTestimonial
          {...floatingTestimonials[3]}
          className="top-[49.81rem]"
        />

        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C4A7C]/5 via-transparent to-[#5A9F3F]/5"></div>

        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large shapes behind text - center */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#2C4A7C]/[0.03]"></div>
          <div className="absolute top-32 left-1/2 translate-x-12 w-80 h-80 rounded-full bg-[#5A9F3F]/[0.025]"></div>
          <div className="absolute top-48 left-1/2 -translate-x-40 w-64 h-64 bg-[#C9A227]/[0.02] rotate-45"></div>

          {/* Medium shapes */}
          <div className="absolute top-16 left-1/4 w-48 h-48 rounded-full bg-[#2B2E4A]/[0.03]"></div>
          <div className="absolute top-24 right-1/4 w-56 h-56 bg-[#2C4A7C]/[0.025] -rotate-12"></div>

          {/* Small accent shapes - edges */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#2C4A7C]/[0.04]"></div>
          <div className="absolute top-32 right-16 w-32 h-32 rounded-full bg-[#5A9F3F]/[0.05]"></div>
          <div className="absolute top-64 left-32 w-24 h-24 rounded-full bg-[#C9A227]/[0.04]"></div>
          <div className="absolute bottom-40 right-40 w-28 h-28 bg-[#2B2E4A]/[0.03] rotate-12"></div>
          <div className="absolute bottom-24 left-16 w-20 h-20 bg-[#2C4A7C]/[0.04] rotate-45"></div>
          <div className="absolute top-1/2 right-24 w-16 h-16 rounded-full bg-[#5A9F3F]/[0.04]"></div>
        </div>

        {/* Thin company carousel */}
        <div className="relative z-10 mb-8 overflow-hidden">
          <div className="container mx-auto px-4">
            <p
              className="text-center text-xs mb-3 text-gray-500"
              style={{ fontFamily: "DM Sans", fontWeight: 500 }}
            >
              TRUSTED BY LEADING CARRIERS
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-12 px-4 whitespace-nowrap flex-shrink-0">
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={aetnaLogo}
                    alt="Aetna"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={cignaLogo}
                    alt="Cigna"
                    className="h-10 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={anthemLogo}
                    alt="Anthem"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={unitedHealthcareLogo}
                    alt="United Healthcare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={image_7ef82c84805ea004958c1025e48dc07a0cbf743c}
                    alt="Blue Cross Blue Shield"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={image_a3c4484a3ff39e44e9a0a192415c13a1d9bb21ae}
                    alt="WellCare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={image_5fbb5aae366a85cc612e2bea7c255384185cc87e}
                    alt="Ambetter"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={image_5053957a31d22f3266e44c1a849421b9934c470e}
                    alt="Bright Health"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={molinaLogo}
                    alt="Molina Healthcare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={kaiserLogo}
                    alt="Kaiser Permanente"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={healthNetLogo}
                    alt="Health Net"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
              </div>
              {/* Second set for seamless loop */}
              <div className="flex items-center gap-12 px-4 whitespace-nowrap flex-shrink-0">
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={aetnaLogo}
                    alt="Aetna"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={cignaLogo}
                    alt="Cigna"
                    className="h-10 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={anthemLogo}
                    alt="Anthem"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={unitedHealthcareLogo}
                    alt="United Healthcare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={blueCrossLogo}
                    alt="Blue Cross Blue Shield"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={wellCareLogo}
                    alt="WellCare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={ambetterLogo}
                    alt="Ambetter"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={brightHealthLogo}
                    alt="Bright Health"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={molinaLogo}
                    alt="Molina Healthcare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={kaiserLogo}
                    alt="Kaiser Permanente"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={healthNetLogo}
                    alt="Health Net"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
              </div>
              {/* Third set for seamless loop */}
              <div className="flex items-center gap-12 px-4 whitespace-nowrap flex-shrink-0">
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={aetnaLogo}
                    alt="Aetna"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={cignaLogo}
                    alt="Cigna"
                    className="h-10 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={anthemLogo}
                    alt="Anthem"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={unitedHealthcareLogo}
                    alt="United Healthcare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={blueCrossLogo}
                    alt="Blue Cross Blue Shield"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={wellCareLogo}
                    alt="WellCare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={ambetterLogo}
                    alt="Ambetter"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={brightHealthLogo}
                    alt="Bright Health"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={molinaLogo}
                    alt="Molina Healthcare"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={kaiserLogo}
                    alt="Kaiser Permanente"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="h-12 px-6 flex items-center justify-center">
                  <Image
                    src={healthNetLogo}
                    alt="Health Net"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Two column layout - text left, card right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
              {/* Left side - text content */}
              <div className="text-left">
                <p
                  className="text-[#2C4A7C] mb-4"
                  style={{ fontFamily: "DM Sans", fontWeight: 500 }}
                >
                  Assurix Insurance
                </p>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#2B2E4A] leading-tight"
                  style={{ fontFamily: "DM Sans", fontWeight: 700 }}
                >
                  Your Gateway to{" "}
                  <span className="italic text-[#5A9F3F] font-bold font-[DM_Sans]">
                    Optimal
                  </span>
                  <br />
                  Insurance Solution
                </h1>
                <p
                  className="text-base md:text-lg text-gray-600 mb-8 max-w-xl"
                  style={{ fontFamily: "DM Sans", fontWeight: 400 }}
                >
                  Insurance coverage you can trust with{" "}
                  <span className="text-[#5A9F3F]" style={{ fontWeight: 600 }}>
                    savings you&apos;ll appreciate.
                  </span>
                  <br className="hidden md:block" />
                  Personalized solutions from local experts working exclusively
                  with A-rated carriers.
                </p>
              </div>

              {/* Right side - CTA card with background shape */}
              <div className="relative max-w-md ml-auto">
                {/* Darker shape behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2C4A7C]/[0.12] to-[#5A9F3F]/[0.10] rounded-3xl -rotate-3"></div>

                {/* Glass-like card */}
                <div className="relative bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Glossy highlight overlay - liquid glass effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Content - positioned above glossy overlay */}
                  <div className="relative z-10">
                    <h3
                      className="text-xl mb-2 text-[#2B2E4A]"
                      style={{ fontFamily: "DM Sans", fontWeight: 700 }}
                    >
                      Get Started Today
                    </h3>
                    <p
                      className="text-sm mb-5 text-gray-700"
                      style={{ fontFamily: "DM Sans", fontWeight: 400 }}
                    >
                      Find the right insurance solution for your practice
                    </p>

                    <div className="space-y-3">
                      <Button
                        onClick={() => onNavigate("contact")}
                        className="bg-[#2C4A7C] text-white hover:bg-[#2B2E4A] w-full py-5"
                        style={{ fontFamily: "DM Sans", fontWeight: 600 }}
                      >
                        Request a Quote
                      </Button>

                      <Button
                        onClick={() => onNavigate("services")}
                        variant="outline"
                        className="border-2 border-[#2C4A7C] text-[#2C4A7C] hover:bg-[#2C4A7C] hover:text-white w-full py-5 bg-white/50"
                        style={{ fontFamily: "DM Sans", fontWeight: 600 }}
                      >
                        View Our Services
                      </Button>
                    </div>

                    <div className="mt-5 pt-5 border-t border-gray-300/60">
                      <p
                        className="text-xs text-gray-600 text-center"
                        style={{ fontFamily: "DM Sans", fontWeight: 400 }}
                      >
                        Working exclusively with A-rated carriers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero images grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* First image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[280px]">
                <ImageWithFallback
                  src={image_36dc3f7ba5f0f3990ae677ff978059b5185e7f3e}
                  alt="Bright medical office consultation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second image - spans 2 columns */}
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg h-[280px]">
                <ImageWithFallback
                  src={image_c9a78abffa3a363c8009626ef067abc60ea343a5}
                  alt="Female doctor consulting patient in clinic"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Third image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[280px]">
                <ImageWithFallback
                  src={image_a93b98454ff6a992c83fbfc94eeb62c22f6c2fb6}
                  alt="Modern healthcare consultation in bright office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* CTA Card below images */}
            <div className="mt-8 max-w-md mx-auto md:mx-0 md:ml-auto"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5A9F3F] to-[#2C4A7C] text-white rounded-full mb-4 shadow-lg">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focused Industries Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in providing tailored insurance solutions for
              businesses in these key sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries
              .slice(0, showAllIndustries ? industries.length : 6)
              .map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => onNavigate("industries")}
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
                      <h3 className="mb-2">{industry.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
          <div className="text-center mt-8 space-y-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllIndustries(!showAllIndustries)}
              className="gap-2"
            >
              {showAllIndustries ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show More Industries ({industries.length - 6} more)
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
            <div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("industries")}
              >
                View All Industries Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Assurix Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Why Choose Assurix Over Large 1-800 Companies?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Unlike impersonal call centers, Assurix provides the
                personalized attention and expertise your business deserves.
              </p>
              <ul className="space-y-4">
                {whyChoosePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" onClick={() => onNavigate("contact")}>
                  Experience the Difference
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={image_a93b98454ff6a992c83fbfc94eeb62c22f6c2fb6}
                  alt="Business consultation"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C9A227] text-white p-6 rounded-lg shadow-xl max-w-xs hidden lg:block border-4 border-white">
                <p className="text-sm">
                  &quot;Assurix saved us over 30% on our workers&apos; comp
                  while improving our coverage. Their team truly cares.&quot;
                </p>
                <p className="mt-2 text-xs opacity-75">
                  — Local Pharmacy Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Save on Your Insurance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a personalized quote from our expert team. No obligations, just
            honest advice.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-[#C9A227] text-white hover:bg-[#D4AE3A] px-8 py-6 text-lg shadow-lg"
          >
            Request Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
