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
      <div className="flex">
        {data.map((slide, index) => (
          <div className="flex-none basis-full min-w-0" key={index}>
            <Image
              src={slide.url || ''}
              alt={slide.name}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
