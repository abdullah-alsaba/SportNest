import Image from 'next/image'
import BookingPanel from '@/components/facilities/BookingPanel'

const AMENITIES = [
  { label: 'Parking', icon: 'P' },
  { label: 'Showers', icon: '🚿' },
  { label: 'Equipment', icon: '⚽' },
  { label: 'Water', icon: '💧' },
]

const REVIEWS = [
  {
    name: 'Marcus Thorne',
    time: '2 days ago',
    text: 'Best turf in the city. Surface is always perfect and staff are super helpful.',
  },
  {
    name: 'Sarah Jenkins',
    time: '1 week ago',
    text: 'Great lighting for night games. Booking process was seamless.',
  },
]

export default function FacilityDetailsView({ facility }) {
  const images = [facility.image, facility.image, facility.image]

  return (
    <div className="bg-base-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-4 mb-10">
          <div className="lg:col-span-2 relative h-72 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={images[0]}
              alt={facility.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <span className="badge badge-neutral absolute bottom-4 left-4 gap-1">
              ⭐ {facility.rating} (124 reviews)
            </span>
          </div>
          <div className="grid grid-rows-2 gap-4">
            {images.slice(1).map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden h-full min-h-[140px]">
                <Image src={img} alt="" fill className="object-cover" sizes="33vw" />
                {i === 1 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold">
                    +8 Photos
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-3">Description</h2>
              <p className="text-base-content/80 leading-relaxed">
                Experience world-class {facility.sport.toLowerCase()} at {facility.name}.
                Premium FIFA-standard turf, professional night lighting, locker rooms, and
                synthetic surface maintained daily. Located at {facility.location}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Facility Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {AMENITIES.map((item) => (
                  <div
                    key={item.label}
                    className="border border-base-300 rounded-xl p-4 text-center"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-2 font-medium text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Reviews</h2>
              <div className="space-y-4">
                {REVIEWS.map((review) => (
                  <div
                    key={review.name}
                    className="border border-base-300 rounded-xl p-4 flex gap-4"
                  >
                    <div className="avatar placeholder shrink-0">
                      <div className="bg-primary text-primary-content w-12 rounded-full">
                        <span>{review.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-xs text-base-content/50 mb-1">{review.time}</p>
                      <p className="italic text-base-content/80 text-sm">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <BookingPanel
              facilityId={facility.id}
              facilityName={facility.name}
              price={facility.price}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
