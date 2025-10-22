import image_0202f8f9d3f71b8afdd42072617fd2cb8245e7a3 from "figma:asset/0202f8f9d3f71b8afdd42072617fd2cb8245e7a3.png";
import image_bf6f2bf52c353d0e6ac0ed10f17f4172ac354261 from "figma:asset/bf6f2bf52c353d0e6ac0ed10f17f4172ac354261.png";
import image_8ec06bd4494a0c44549402698ea5f369124bb1f3 from "figma:asset/8ec06bd4494a0c44549402698ea5f369124bb1f3.png";
import { Phone, Mail, Linkedin } from "lucide-react";
import logo from "figma:asset/8ec06bd4494a0c44549402698ea5f369124bb1f3.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Industries", id: "industries" },
    { name: "Contact", id: "contact" },
  ];

  const trustedCarriers = [
    "The Hartford",
    "Travelers",
    "Liberty Mutual",
    "CNA",
    "Chubb",
    "AmTrust",
  ];

  return (
    <footer className="bg-[#2B2E4A] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-blue-100 mb-4">
              Trusted insurance solutions for your business. Personalized
              service with A-rated carriers.
            </p>
            <div className="text-sm text-blue-200 space-y-1">
              <p>3333 S. Brea Canyon Rd., Suite 116</p>
              <p>Diamond Bar, CA 91765</p>
              <p className="mt-2">License #: 0G12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-blue-100 hover:text-[#C9A227] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:714-729-0500"
                  className="flex items-center gap-2 text-blue-100 hover:text-[#C9A227] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  714-729-0500
                </a>
                <p className="text-sm text-blue-200 mt-1 ml-6">24/7 Support</p>
              </li>
              <li>
                <a
                  href="mailto:ains@assurix.com"
                  className="flex items-center gap-2 text-blue-100 hover:text-[#C9A227] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  ains@assurix.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/assurix-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-[#C9A227] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Trusted Carriers */}
          <div>
            <h3 className="mb-4">Trusted A-Rated Carriers</h3>
            <ul className="space-y-2 text-blue-100">
              {trustedCarriers.map((carrier) => (
                <li key={carrier} className="text-sm">
                  {carrier}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-8 pt-8 text-center text-blue-200">
          <p>
            &copy; {currentYear} Assurix Insurance Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
