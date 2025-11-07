'use client'
import type { InsuranceCarrier, Media } from '@/payload-types'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

interface CarrierCarouselClientProps {
  data: InsuranceCarrier[]
}

export const CarrierCarouselClient: React.FC<CarrierCarouselClientProps> = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row items-center">
        {data.map((slide) => {
          const logo = slide.logo as Media
          return (
            <Link
              href={slide.website || '#'}
              className="flex-none basis-1/2 md:basis-1/3 lg:basis-1/5 min-w-0 max-w-lg opacity-70 hover:opacity-100 transition-opacity"
              key={slide.id}
              // open in new tab
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo.url || ''}
                alt={slide.name}
                width={150}
                height={90}
                objectFit="contain"
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
