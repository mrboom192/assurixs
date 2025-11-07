import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-white/90">
              Let's discuss your insurance needs and find the best coverage at the right price
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Phone</h3>
                        <a href="tel:714-729-0500" className="text-gray-900 hover:underline">
                          714-729-0500
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">24/7 Support Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Email</h3>
                        <a
                          href="mailto:ains@assurixs.com"
                          className="text-gray-900 hover:underline break-all"
                        >
                          ains@assurixs.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          3333 S. Brea Canyon Rd., Suite 116
                          <br />
                          Diamond Bar, CA 91765
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Support Hours</h3>
                        <p className="text-muted-foreground">
                          Available 24/7
                          <br />
                          We're here when you need us
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
