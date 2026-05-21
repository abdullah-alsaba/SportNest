import Image from 'next/image'
import Link from 'next/link'
import { FEATURED_FACILITIES } from '@/utils/mockData'

export default function FeaturedFacilities() {
  return (
    <section className="py-16 md:py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-secondary">Featured Facilities</h2>
            <p className="text-base-content/70 mt-1">
              Top-rated venues ready for your next session
            </p>
          </div>
          <Link href="/facilities" className="link link-primary font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="card bg-base-100 shadow-md overflow-hidden"
            >
              <figure className="relative h-48">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="badge badge-neutral absolute top-3 right-3">
                  {facility.sport}
                </span>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-secondary">{facility.name}</h3>
                <p className="text-sm text-base-content/70">📍 {facility.location}</p>
                <div className="card-actions justify-between items-center mt-2">
                  <span className="text-primary font-bold">${facility.price} /hr</span>
                  <Link
                    href={`/facilities/${facility.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
