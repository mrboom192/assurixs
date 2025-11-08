'use client'

import { SetStateAction, useState } from 'react'
import {
  Eye,
  Type,
  Minus,
  Plus,
  Moon,
  Sun,
  MousePointer,
  Keyboard,
  ZoomIn,
  ZoomOut,
  RefreshCw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'

export function ADAPage() {
  const [fontSize, setFontSize] = useState(100)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [cursorSize, setCursorSize] = useState(1)

  const resetSettings = () => {
    setFontSize(100)
    setLineHeight(1.5)
    setLetterSpacing(0)
    setCursorSize(1)
  }

  const applySettings = () => {
    document.documentElement.style.fontSize = `${fontSize}%`
    document.documentElement.style.lineHeight = `${lineHeight}`
    document.documentElement.style.letterSpacing = `${letterSpacing}px`
    document.documentElement.style.cursor =
      cursorSize > 1
        ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='10' fill='black'/%3E%3C/svg%3E\"), auto"
        : 'default'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-32 pb-16 lg:pt-40 overflow-hidden">
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
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Accessibility
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'DM Sans', fontWeight: 400 }}>
              Our commitment to digital accessibility for all users
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Settings */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-2xl md:text-3xl mb-3 text-gray-900"
                style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
              >
                Accessibility Settings
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'DM Sans', fontWeight: 400 }}>
                Customize your viewing experience with these accessibility tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Font Size */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Type className="w-5 h-5 text-gray-900" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
                      Font Size
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFontSize(Math.max(50, fontSize - 10))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <Slider
                        value={[fontSize]}
                        onValueChange={(value: SetStateAction<number>[]) => setFontSize(value[0])}
                        min={50}
                        max={200}
                        step={10}
                        className="w-full"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFontSize(Math.min(200, fontSize + 10))}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600 min-w-[50px]">{fontSize}%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Line Height */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-5 h-5 text-gray-900" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
                      Line Spacing
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLineHeight(Math.max(1, lineHeight - 0.1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <Slider
                        value={[lineHeight * 10]}
                        onValueChange={(value: number[]) => setLineHeight(value[0] / 10)}
                        min={10}
                        max={30}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLineHeight(Math.min(3, lineHeight + 0.1))}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600 min-w-[50px]">
                      {lineHeight.toFixed(1)}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Letter Spacing */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ZoomIn className="w-5 h-5 text-gray-900" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
                      Letter Spacing
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLetterSpacing(Math.max(0, letterSpacing - 0.5))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <Slider
                        value={[letterSpacing]}
                        onValueChange={(value: SetStateAction<number>[]) =>
                          setLetterSpacing(value[0])
                        }
                        min={0}
                        max={5}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLetterSpacing(Math.min(5, letterSpacing + 0.5))}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600 min-w-[50px]">
                      {letterSpacing.toFixed(1)}px
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Cursor Size */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MousePointer className="w-5 h-5 text-gray-900" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
                      Cursor Size
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCursorSize(Math.max(1, cursorSize - 0.5))}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <Slider
                        value={[cursorSize]}
                        onValueChange={(value: SetStateAction<number>[]) => setCursorSize(value[0])}
                        min={1}
                        max={3}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCursorSize(Math.min(3, cursorSize + 0.5))}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600 min-w-[50px]">
                      {cursorSize.toFixed(1)}x
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                onClick={applySettings}
                className="bg-gray-900 text-white hover:bg-gray-800 px-8"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                Apply Settings
              </Button>
              <Button
                onClick={resetSettings}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Our Commitment to Accessibility
            </h2>
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Assurixs Insurance Services is committed to ensuring digital accessibility for people
              with disabilities. We are continually improving the user experience for everyone and
              applying the relevant accessibility standards to ensure we provide equal access to all
              of our users.
            </p>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Conformance Status
            </h2>
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              standards. These guidelines explain how to make web content more accessible for people
              with disabilities and more user-friendly for everyone.
            </p>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Accessibility Features
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Our website includes the following accessibility features:
            </p>
            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-gray-700"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              <li>Clear and consistent navigation structure</li>
              <li>Descriptive page titles and headings</li>
              <li>Text alternatives for non-text content</li>
              <li>Sufficient color contrast for readability</li>
              <li>Keyboard navigation support</li>
              <li>Responsive design that works on various devices</li>
              <li>Forms with clear labels and instructions</li>
              <li>Customizable display settings for personalized accessibility</li>
            </ul>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Keyboard Navigation
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Our website supports full keyboard navigation:
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
              <ul
                className="space-y-3 text-gray-700"
                style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
              >
                <li className="flex items-start gap-3">
                  <Keyboard className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Tab:</strong> Move forward through interactive elements
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Keyboard className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Shift + Tab:</strong> Move backward through interactive elements
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Keyboard className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Enter/Space:</strong> Activate buttons and links
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Keyboard className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Arrow Keys:</strong> Navigate through menus and options
                  </div>
                </li>
              </ul>
            </div>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Assistive Technologies
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-gray-700"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              <li>Screen readers (such as JAWS, NVDA, and VoiceOver)</li>
              <li>Browser text size adjustment tools</li>
              <li>Keyboard-only navigation</li>
              <li>Voice recognition software</li>
              <li>Screen magnification software</li>
            </ul>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Ongoing Efforts
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              While we strive to adhere to accessibility standards, we acknowledge that some areas
              of our website may not yet be fully accessible. We are actively working to:
            </p>
            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-gray-700"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              <li>Regularly audit our website for accessibility issues</li>
              <li>Provide training to our team on accessibility best practices</li>
              <li>Update and improve our content to enhance accessibility</li>
              <li>Work with accessibility consultants to identify and address barriers</li>
            </ul>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Feedback and Contact Information
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              We welcome your feedback on the accessibility of our website. If you encounter any
              accessibility barriers or have suggestions for improvement, please let us know:
            </p>
            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg mb-6">
              <ul
                className="space-y-2 text-gray-700"
                style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
              >
                <li>
                  <strong>Email:</strong> ains@assurixs.com
                </li>
                <li>
                  <strong>Phone:</strong> 714-729-0500
                </li>
                <li>
                  <strong>Address:</strong> 3333 S. Brea Canyon Rd., Suite 116, Diamond Bar, CA
                  91765
                </li>
              </ul>
            </div>
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              We aim to respond to accessibility feedback within 5 business days and will work with
              you to provide the information or service you require in an accessible format.
            </p>

            <h2
              className="text-2xl md:text-3xl mb-6 text-gray-900 mt-12"
              style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
            >
              Alternative Access
            </h2>
            <p
              className="text-gray-700 mb-4 leading-relaxed"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              If you have difficulty accessing any part of our website, please don't hesitate to
              contact us directly. Our team is available to:
            </p>
            <ul
              className="list-disc pl-6 mb-6 space-y-2 text-gray-700"
              style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              <li>Provide information in alternative formats</li>
              <li>Assist you with quote requests over the phone</li>
              <li>Arrange in-person consultations at our office</li>
              <li>Email you detailed information about our services</li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg mt-8">
              <p
                className="text-gray-700 mb-0 leading-relaxed"
                style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
              >
                <strong>Note:</strong> This accessibility statement was last reviewed on{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                . We are committed to maintaining and improving the accessibility of our website on
                an ongoing basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
