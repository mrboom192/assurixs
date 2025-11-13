import Link from 'next/link'
import Image from 'next/image'

export default function AssurixsLogo({ dark }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={dark ? '/assurix_logo_dark.png' : '/assurix_logo_light.png'}
        alt="Assurixs Insurance Services"
        height={50}
        width={160}
        className="object-contain md:h-12 transition-opacity duration-300"
      />
    </Link>
  )
}
