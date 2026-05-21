'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'
import { cancelBooking, getMyBookings } from '@/services/booking.service'
import { formatDate } from '@/utils/mapData'
import { getErrorMessage } from '@/utils/getErrorMessage'

const statusConfig = {
  confirmed: { label: 'Confirmed', class: 'badge-success' },
  pending: { label: 'Pending', class: 'badge-info' },
  cancelled: { label: 'Cancelled', class: 'badge-error badge-outline' },
}

export default function BookingsTable() {
  const { user } = useAuth()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  const loadBookings = async () => {
    setLoading(true)
    try {
      const data = await getMyBookings()
      setBookings(data.bookings)
    } catch {
      setBookings([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBookings()
  }, [])

  const handleCancel = async (id) => {
    try {
      await cancelBooking(id)
      toast.success('Booking cancelled')
      loadBookings()
    } catch (error) {
      toast.error(getErrorMessage(error))
    }
  }

  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary">
            Welcome back, {user?.name}! Here are your upcoming games.
          </h1>
          <p className="text-base-content/70 mt-2">
            Track your schedule, manage attendance, and get ready to hit the field.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <span className="loading loading-spinner loading-lg text-primary" />
          </div>
        ) : (
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
                {bookings.map((booking) => {
                  const status = statusConfig[booking.status]
                  const facility = booking.facility
                  return (
                    <tr key={booking._id} className="hover:bg-base-200/50">
                      <td>
                        <div className="relative w-16 h-12 rounded overflow-hidden">
                          <Image
                            src={facility?.image || '/favicon.svg'}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="font-semibold text-secondary">
                          {facility?.name}
                        </p>
                        <p className="text-xs text-base-content/60">
                          {facility?.sportType} • {facility?.location}
                        </p>
                      </td>
                      <td>{formatDate(booking.date)}</td>
                      <td>{booking.timeSlot}</td>
                      <td className="text-primary font-semibold">
                        ${booking.price}.00
                      </td>
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
                            onClick={() => handleCancel(booking._id)}
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
            {bookings.length === 0 && (
              <p className="text-center py-10 text-base-content/60">No bookings yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
