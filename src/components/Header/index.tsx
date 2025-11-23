'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { AdminBar } from '@/components/AdminBar'
import AssurixsLogo from '../AssurixsLogo'
import Sidebar from '../Sidebar'

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
  const shouldUseDarkLogo = isScrolled || hasLightBackground || mobileMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <AdminBar
        adminBarProps={{
          preview: isAdminBarEnabled,
        }}
      />
      <div className={`transition-all duration-300 bg-gray-900 text-white py-2`}>
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a
            href="tel:714-729-0500"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">714-729-0500</span>
          </a>
          <a
            href="mailto:ais@assurixs.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">ais@assurixs.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`container mx-auto px-4 py-3 transition-all duration-300 ${
          !isScrolled || !mobileMenuOpen ? 'backdrop-blur-sm' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <AssurixsLogo dark={shouldUseDarkLogo} />

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
          <Link className="hidden lg:block" href="/contact">
            <Button
              className={`transition-colors ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : hasLightBackground
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Get Your Free Quote
            </Button>
          </Link>

          <Sidebar shouldInvert={shouldUseDarkLogo} navLinks={navItems} />
        </div>
      </div>
    </header>
  )
}
