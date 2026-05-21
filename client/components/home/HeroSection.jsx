import Image from 'next/image'
import Link from 'next/link'
import { APP_TAGLINE, APP_DESCRIPTION } from '@/utils/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
        alt="Sports complex aerial view"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {APP_TAGLINE}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">{APP_DESCRIPTION}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/facilities" className="btn btn-primary btn-lg">
            Explore Facilities
          </Link>
          <button type="button" className="btn btn-outline btn-lg text-white border-white hover:bg-white/10">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
