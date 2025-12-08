import { PersonStanding } from 'lucide-react'
import Link from 'next/link'

export default function AccessibilityButton() {
  return (
    <Link
      aria-label="Accessibility Options"
      href={'/ada'} // Accessibility page ada
      className="fixed bottom-4 right-4 z-50 rounded-full bg-gray-900 p-4 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
    >
      <PersonStanding size={32} color="#FFF" />
    </Link>
  )
}
