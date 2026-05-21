'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'
import { createBooking } from '@/services/booking.service'
import { getErrorMessage } from '@/utils/getErrorMessage'

export default function BookingPanel({ facilityId, facilityName, price }) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [date, setDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('10:00 - 11:00')
  const [duration, setDuration] = useState(2)
  const [submitting, setSubmitting] = useState(false)

  const subtotal = price * duration
  const total = subtotal + 5

  const handleBook = async () => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }

    if (!date) {
      toast.error('Please select a date')
      return
    }

    setSubmitting(true)
    try {
      await createBooking({
        facilityId,
        date,
        timeSlot,
        duration,
      })
      toast.success('Booking confirmed')
      router.push('/my-bookings')
    } catch (error) {
      toast.error(getErrorMessage(error))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="card bg-base-100 shadow-lg border border-base-300 sticky top-24">
      <div className="card-body">
        <h3 className="card-title text-secondary">Book Facility</h3>
        <fieldset className="fieldset">
          <label className="label">Facility Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={facilityName}
            readOnly
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">Date</label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">Starting Time</label>
          <select
            className="select select-bordered w-full"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option>10:00 - 11:00</option>
            <option>18:00 - 20:00</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">Duration (Hours)</label>
          <div className="join w-full">
            <button
              type="button"
              className="btn join-item"
              onClick={() => setDuration((d) => Math.max(1, d - 1))}
            >
              −
            </button>
            <input
              type="text"
              className="input input-bordered join-item w-full text-center"
              value={duration}
              readOnly
            />
            <button
              type="button"
              className="btn join-item"
              onClick={() => setDuration((d) => d + 1)}
            >
              +
            </button>
          </div>
        </fieldset>
        <div className="divider my-1" />
        <div className="flex justify-between text-sm">
          <span>
            ${price}.00 × {duration} hrs
          </span>
          <span>${subtotal}.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Service Fee</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total Price</span>
          <span className="text-primary">${total}.00</span>
        </div>
        {isAuthenticated ? (
          <button
            type="button"
            className="btn btn-primary w-full mt-4"
            onClick={handleBook}
            disabled={submitting}
          >
            {submitting ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              'Proceed to Booking'
            )}
          </button>
        ) : (
          <Link href="/login" className="btn btn-primary w-full mt-4">
            Proceed to Booking
          </Link>
        )}
      </div>
    </div>
  )
}
