import { Phone, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', id: '/' },
    { name: 'About Us', id: '/about' },
    { name: 'Services', id: '/our-services' },
    { name: 'Industries', id: '/industries-we-serve' },
    { name: 'Contact', id: '/contact' },
  ]

  const trustedCarriers = [
    'Hartford',
    'Hanover',
    'CNA',
    'Employers',
    'Liberty Mutual',
    'Medical Protective',
    'The Doctors Company',
    'Amtrust',
    'Dentist Advantage',
    'Guideone',
    'Great American',
    'PHLT Insurance',
    'Indigo',
    'Lonestar Alliance',
    'Proassurance',
    'Biberk',
  ]

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-gray-300 mb-4">
              Trusted insurance solutions for your business. Personalized service with A-rated
              carriers.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>3333 S. Brea Canyon Rd., Suite 116</p>
              <p>Diamond Bar, CA 91765</p>
              <p className="mt-2">License #: 0N03278</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.id} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
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
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  714-729-0500
                </a>
                <p className="text-sm text-gray-400 mt-1 ml-6">24/7 Support</p>
              </li>
              <li>
                <a
                  href="mailto:ais@assurixs.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  ais@assurixs.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/assurix-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
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
            <ul className="space-y-2 text-gray-300">
              {trustedCarriers.slice(0, 6).map((carrier) => (
                <li key={carrier} className="text-sm">
                  {carrier}
                </li>
              ))}
              <li className="text-sm text-gray-400 mt-3">+ 10 more carriers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/ada" className="hover:text-white transition-colors">
              ADA Compliance
            </Link>
          </div>
          <p className="text-center text-gray-400">
            &copy; {currentYear} Assurixs Insurance Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
