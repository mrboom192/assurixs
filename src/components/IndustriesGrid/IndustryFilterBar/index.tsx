import { Category, IndustryCategory } from '@/payload-types'
import { CheckCircle2 } from 'lucide-react'

export default function IndustryFilterBar({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: IndustryCategory[]
  selectedCategory: string | null
  setSelectedCategory: (title: string | null) => void
}) {
  return (
    <section className="bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
              selectedCategory
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : `bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg`
            }`}
            style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
          >
            All
            {!selectedCategory && <CheckCircle2 className="w-4 h-4 inline ml-2" />}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === category.title
                  ? `bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
            >
              {category.title}
              {selectedCategory === category.title && (
                <CheckCircle2 className="w-4 h-4 inline ml-2" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
