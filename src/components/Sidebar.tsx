'use client'
export const dynamic = 'force-dynamic'

import * as React from 'react'
import { Dialog, VisuallyHidden } from 'radix-ui'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AssurixsLogo from './AssurixsLogo'
import { Button } from './ui/button'

interface SidebarProps {
  shouldInvert: boolean
  navLinks?: { id: string; name: string }[]
}

const Sidebar = ({ shouldInvert, navLinks }: SidebarProps) => {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden hover:cursor-pointer"
          aria-label="Open sidebar navigation menu"
        >
          <Menu
            strokeWidth={1.5}
            className={`w-6 h-6 transition-all duration-300 ${
              shouldInvert ? 'text-gray-900' : 'text-white'
            }`}
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black/5 " />
        <Dialog.Content
          className="
    fixed inset-y-0 right-0 z-50 w-64 bg-white focus:outline-none shadow-xl
  "
        >
          <VisuallyHidden.Root>
            <Dialog.Title>Mobile navigation menu</Dialog.Title>
          </VisuallyHidden.Root>
          <Dialog.Close asChild>
            <button
              className="absolute right-6 top-6 inline-flex appearance-none items-center justify-center focus:outline-none"
              aria-label="Close"
            >
              <X strokeWidth={1.5} className="size-6 hover:text-gray-500" />
            </button>
          </Dialog.Close>
          <div className="ml-6 mt-12 flex flex-col space-y-4">
            <nav className="flex flex-col space-y-4">
              {navLinks?.map((link) => (
                <Link
                  key={link.id}
                  href={link.id}
                  className="flex transition-colors duration-300 hover:text-gray-500"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  Get Your Free Quote
                </Button>
              </Link>
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Sidebar
