import Image from 'next/image'
import Link from 'next/link'

const sportBadgeClass = {
  Football: 'badge-success',
  Tennis: 'badge-info',
  Basketball: 'badge-warning',
  Swimming: 'badge-primary',
  Badminton: 'badge-secondary',
}

export default function FacilityCard({ facility, layout = 'grid' }) {
  const badge =
    sportBadgeClass[facility.sport] || 'badge-neutral'

  if (layout === 'list') {
    return (
      <div className="card card-side bg-base-100 shadow-sm border border-base-300 overflow-hidden">
        <figure className="relative w-40 min-h-[120px] shrink-0">
          <Image
            src={facility.image}
            alt={facility.name}
            fill
            className="object-cover"
            sizes="160px"
          />
        </figure>
        <div className="card-body py-4">
          <h3 className="card-title text-secondary text-lg">{facility.name}</h3>
          <p className="text-sm text-base-content/70">📍 {facility.location}</p>
          <div className="card-actions justify-between items-center">
            <span className="text-primary font-bold">${facility.price}/hr</span>
            <Link href={`/facilities/${facility.id}`} className="btn btn-secondary btn-sm">
              Book
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card bg-base-100 shadow-md border border-base-300 overflow-hidden">
      <figure className="relative h-48">
        <Image
          src={facility.image}
          alt={facility.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={`badge ${badge} absolute top-3 right-3`}>
          {facility.sport}
        </span>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start gap-2">
          <h3 className="card-title text-secondary text-lg">{facility.name}</h3>
          <span className="text-sm font-semibold">⭐ {facility.rating}</span>
        </div>
        <p className="text-sm text-base-content/70">📍 {facility.location}</p>
        <div className="mt-2">
          <p className="text-xs uppercase text-base-content/50">Starting at</p>
          <p className="text-primary font-bold text-lg">${facility.price}/hr</p>
        </div>
        <div className="card-actions justify-end mt-2">
          <Link href={`/facilities/${facility.id}`} className="btn btn-secondary btn-sm">
            Book
          </Link>
        </div>
      </div>
    </div>
  )
}
