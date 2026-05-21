'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { createFacility } from '@/services/facility.service'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { SPORT_TYPES } from '@/utils/mockData'

export default function AddFacilityForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    sportType: 'Football',
    location: '',
    pricePerHour: '',
    image: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createFacility({
        name: form.name,
        sportType: form.sportType,
        location: form.location,
        pricePerHour: Number(form.pricePerHour),
        image: form.image,
        description: form.description,
      })
      toast.success('Facility added')
      router.push('/manage-facilities')
    } catch (error) {
      toast.error(getErrorMessage(error))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-secondary mb-2">Add New Facility</h1>
        <p className="text-base-content/70 mb-8">
          Register a new sports venue to your SportNest portfolio.
        </p>
        <form
          onSubmit={handleSubmit}
          className="card bg-base-100 shadow-md border border-base-300"
        >
          <div className="card-body gap-4">
            <fieldset className="fieldset">
              <label className="label">Facility Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Elite Tennis Arena"
                value={form.name}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sport Type</label>
              <select
                name="sportType"
                className="select select-bordered w-full"
                value={form.sportType}
                onChange={handleChange}
              >
                {SPORT_TYPES.map((sport) => (
                  <option key={sport} value={sport}>
                    {sport}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="Downtown Sports Complex"
                value={form.location}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Price per Hour ($)</label>
              <input
                type="number"
                name="pricePerHour"
                className="input input-bordered w-full"
                placeholder="45"
                value={form.pricePerHour}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Image URL</label>
              <input
                type="url"
                name="image"
                className="input input-bordered w-full"
                placeholder="https://images.unsplash.com/..."
                value={form.image}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                rows={3}
                value={form.description}
                onChange={handleChange}
              />
            </fieldset>
            <div className="card-actions justify-end gap-2 mt-4">
              <Link href="/manage-facilities" className="btn btn-ghost">
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  'Save Facility'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
