import Image from 'next/image'
import { MOCK_BOOKINGS } from '@/utils/mockData'

const statusConfig = {
  confirmed: { label: 'Confirmed', class: 'badge-success' },
  pending: { label: 'Pending', class: 'badge-info' },
  cancelled: { label: 'Cancelled', class: 'badge-error badge-outline' },
}

export default function BookingsTable() {
  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary">
            Welcome back, Alex! Here are your upcoming games.
          </h1>
          <p className="text-base-content/70 mt-2">
            Track your schedule, manage attendance, and get ready to hit the field.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-base-300 shadow-md bg-base-100">
          <table className="table">
            <thead className="bg-secondary text-secondary-content">
              <tr>
                <th>Facility</th>
                <th>Name & Details</th>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_BOOKINGS.map((booking) => {
                const status = statusConfig[booking.status]
                return (
                  <tr key={booking.id} className="hover:bg-base-200/50">
                    <td>
                      <div className="relative w-16 h-12 rounded overflow-hidden">
                        <Image
                          src={booking.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </td>
                    <td>
                      <p className="font-semibold text-secondary">{booking.facilityName}</p>
                      <p className="text-xs text-base-content/60">{booking.details}</p>
                    </td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td className="text-primary font-semibold">${booking.price}.00</td>
                    <td>
                      <span className={`badge ${status.class} gap-1`}>
                        {status.label}
                      </span>
                    </td>
                    <td>
                      {booking.status === 'cancelled' ? (
                        <button type="button" className="btn btn-ghost btn-sm" disabled>
                          Archived
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline btn-error btn-sm"
                        >
                          ✕ Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
