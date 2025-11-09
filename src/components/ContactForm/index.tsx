'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const industries = [
    'Pharmacy',
    'Medical/Dental Practice',
    'Life Science/Research',
    'Restaurant/Food Service',
    'Commercial Real Estate',
    'Professional Services',
    'Other',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = `Quote Request from ${formData.name} - ${formData.company}`
    const body = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.company}
        Industry: ${formData.industry}

        Message:
        ${formData.message}
    `.trim()

    const mailtoLink = `mailto:ains@assurixs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open mailto link
    window.location.href = mailtoLink

    // Show success message
    setTimeout(() => {
      toast.success('Quote request prepared! Your email client should open shortly.')
      setIsSubmitting(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: '',
      })
    }, 1000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="lg:col-span-2">
      <Card className="border-gray-200">
        <CardContent className="p-8">
          <h2 className="mb-6">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  required
                  placeholder="Your Company LLC"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="industry">Industry *</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleChange('industry', value)}
                required
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Tell Us About Your Insurance Needs</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Please describe your current coverage, what you're looking for, or any specific concerns..."
                rows={6}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-yellow-200"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Preparing...' : 'Request Quote'}
            </Button>

            <p className="text-gray-600 text-sm text-muted-foreground text-center">
              By submitting this form, you agree to be contacted by Assurix Insurance Services
              regarding your quote request. We respect your privacy and will never share your
              information.
            </p>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 bg-gray-50 border-2 border-gray-900 rounded-lg p-6">
        <h3 className="mb-3">What Happens Next?</h3>
        <ol className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
              1.
            </span>
            <span>We&apos;ll review your information and reach out within 24 hours</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
              2.
            </span>
            <span>Schedule a brief consultation to understand your specific needs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
              3.
            </span>
            <span>Receive customized quotes from A-rated carriers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 700 }}>
              4.
            </span>
            <span>Compare options and finalize coverage that fits your budget</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
