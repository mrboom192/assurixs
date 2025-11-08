export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br bg-gray-900 text-white pt-32 pb-16 lg:pt-40 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy and data protection are important to us
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong>{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <h2>Introduction</h2>
            <p>
              Assurixs Insurance Services ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, company
                name, and other contact information you provide when requesting a quote or
                contacting us.
              </li>
              <li>
                <strong>Business Information:</strong> Industry type, business size, coverage needs,
                and other details relevant to providing insurance quotes.
              </li>
              <li>
                <strong>Technical Information:</strong> Browser type, IP address, device
                information, and usage data collected through cookies and similar technologies.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide insurance quotes and recommendations</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Insurance Carriers:</strong> To obtain quotes and provide coverage options
              </li>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist us in operating
                our business
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to protect our rights
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain processing of your information</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience. You can control cookies through your browser settings.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new policy on this page with an updated "Last Updated"
              date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact
              us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> ains@assurixs.com
              </li>
              <li>
                <strong>Phone:</strong> 714-729-0500
              </li>
              <li>
                <strong>Address:</strong> 3333 S. Brea Canyon Rd., Suite 116, Diamond Bar, CA 91765
              </li>
            </ul>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-[#1B9876] p-6 rounded-r-lg mt-8">
              <p className="text-muted-foreground mb-0">
                <strong>California Residents:</strong> If you are a California resident, you may
                have additional rights under the California Consumer Privacy Act (CCPA). Please
                contact us for more information about your rights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
