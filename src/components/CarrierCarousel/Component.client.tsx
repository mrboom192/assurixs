'use client'
import type { InsuranceCarrier } from '@/payload-types'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

interface CarrierCarouselClientProps {
  data: InsuranceCarrier[]
}

export const CarrierCarouselClient: React.FC<CarrierCarouselClientProps> = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true }),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row items-center">
        {data.map((slide) => (
          <div
            className="flex-none basis-full min-w-0 max-w-lg opacity-70 hover:opacity-100 transition-opacity"
            key={slide.id}
          >
            <Image
              src={slide.url || ''}
              alt={slide.name}
              width={200}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
