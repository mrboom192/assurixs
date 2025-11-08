'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { AdminBar } from '@/components/AdminBar'

export function Header({ isAdminBarEnabled }: { isAdminBarEnabled?: boolean }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: '/' },
    { name: 'About Us', id: '/about' },
    { name: 'Services', id: '/our-services' },
    { name: 'Industries', id: '/industries-we-serve' },
  ]

  // Pages with light backgrounds need dark text when not scrolled
  const lightBackgroundPages = ['/', '/our-services']
  const hasLightBackground = lightBackgroundPages.includes(pathname)

  // Determine which logo to use based on background
  const shouldUseDarkLogo = isScrolled || hasLightBackground

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <AdminBar
        adminBarProps={{
          preview: isAdminBarEnabled,
        }}
      />
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900 text-white py-2'
            : hasLightBackground
              ? 'bg-gray-900 text-white py-2'
              : 'bg-gray-900/95 text-white py-2 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a
            href="tel:714-729-0500"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">714-729-0500</span>
          </a>
          <a
            href="mailto:ains@assurixs.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">ains@assurixs.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`container mx-auto px-4 py-3 transition-all duration-300 ${
          !isScrolled ? 'backdrop-blur-sm' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={shouldUseDarkLogo ? '/assurix_logo_dark.png' : '/assurix_logo_light.png'}
              alt="Assurixs Insurance Services"
              height={40}
              width={150}
              className="object-contain md:h-12 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`transition-colors ${
                  isScrolled
                    ? pathname === item.id
                      ? 'text-gray-900'
                      : 'text-foreground hover:text-gray-900'
                    : hasLightBackground
                      ? pathname === item.id
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                      : pathname === item.id
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                className={`transition-colors ${
                  isScrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : hasLightBackground
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-900' : hasLightBackground ? 'text-gray-900' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className={`lg:hidden mt-4 pb-4 flex flex-col gap-4 ${
              isScrolled
                ? 'bg-white'
                : hasLightBackground
                  ? 'bg-white backdrop-blur-sm'
                  : 'bg-gray-900/95 backdrop-blur-sm'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`text-left py-2 transition-colors ${
                  isScrolled
                    ? pathname === item.id
                      ? 'text-gray-900'
                      : 'text-foreground hover:text-gray-900'
                    : hasLightBackground
                      ? pathname === item.id
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                      : pathname === item.id
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`w-full transition-colors ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : hasLightBackground
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
