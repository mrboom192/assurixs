'use client'
import { useState } from 'react'
import IndustryFilterBar from './IndustryFilterBar'
import { IndustriesServed, IndustryCategory, Media } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { DynamicIcon } from 'lucide-react/dynamic'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function IndustriesGridClient({
  categories,
  industries,
}: {
  categories: IndustryCategory[]
  industries: IndustriesServed[]
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredIndustries = selectedCategory
    ? industries.filter((industry) => {
        const category = industry.category as IndustryCategory
        return category && category.title === selectedCategory
      })
    : industries

  return (
    <div>
      <IndustryFilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Industries Showcase */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((industry, index) => {
              const image = industry.image as Media
              return (
                <Card
                  key={index}
                  className="overflow-hidden border border-gray-200 transition-all duration-300 group hover:shadow-2xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={image?.url || ''}
                      alt={industry.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Icon badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <DynamicIcon name={industry.icon} className="w-7 h-7 text-gray-900" />
                      </div>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3
                        className="text-white text-xl"
                        style={{ fontFamily: 'DM Sans', fontWeight: 700 }}
                      >
                        {industry.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p
                      className="text-muted-foreground mb-4 line-clamp-3"
                      style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
                    >
                      {industry.description}
                    </p>

                    {/* Challenges */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                      <h4
                        className="text-sm mb-3 text-gray-900"
                        style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                      >
                        Coverage Areas:
                      </h4>
                      <ul className="space-y-2">
                        {industry.coverageAreas.map((coverageArea) => (
                          <li
                            key={coverageArea.id}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                            <span>{coverageArea.area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all"
                      style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
