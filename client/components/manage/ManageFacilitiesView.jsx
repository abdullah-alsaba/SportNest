'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { deleteFacility, getMyFacilities } from '@/services/facility.service'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import EmptyState from '@/components/ui/EmptyState'
import { getErrorMessage } from '@/utils/getErrorMessage'

const sportBadge = {
  Tennis: 'badge-info',
  Basketball: 'badge-warning',
  Football: 'badge-success',
  Swimming: 'badge-primary',
  Badminton: 'badge-secondary',
}

export default function ManageFacilitiesView() {
  const [facilities, setFacilities] = useState([])
  const [loading, setLoading] = useState(true)

  const loadFacilities = async () => {
    setLoading(true)
    try {
      const data = await getMyFacilities()
      setFacilities(data.facilities)
    } catch (error) {
      setFacilities([])
      toast.error(getErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFacilities()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this facility?')) return
    try {
      await deleteFacility(id)
      toast.success('Facility deleted')
      loadFacilities()
    } catch (error) {
      toast.error(getErrorMessage(error))
    }
  }

  const totalBookings = facilities.reduce((sum, f) => sum + (f.bookingsCount || 0), 0)

  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="text-sm breadcrumbs text-base-content/60 mb-2">
          <ul>
            <li>Dashboard</li>
            <li>Facilities</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-secondary">Manage Your Facilities</h1>
            <p className="text-base-content/70 mt-1">
              Overview and management of your registered sports venues.
            </p>
          </div>
          <Link href="/add-facility" className="btn btn-primary">
            + Add New Facility
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="stat bg-base-100 rounded-xl shadow-sm border border-base-300">
            <div className="stat-title">Total Venues</div>
            <div className="stat-value text-secondary text-3xl">{facilities.length}</div>
            <div className="stat-desc">Facilities</div>
          </div>
          <div className="stat bg-base-100 rounded-xl shadow-sm border border-base-300">
            <div className="stat-title">Total Bookings</div>
            <div className="stat-value text-secondary text-3xl">{totalBookings}</div>
          </div>
          <div className="stat bg-base-100 rounded-xl shadow-sm border border-base-300">
            <div className="stat-title">Active Listings</div>
            <div className="stat-value text-primary text-3xl">{facilities.length}</div>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : facilities.length === 0 ? (
          <EmptyState
            title="No facilities yet"
            message="Add your first sports venue to start managing bookings."
            actionLabel="Add Facility"
            actionHref="/add-facility"
          />
        ) : (
          <div className="overflow-x-auto rounded-xl border border-base-300 shadow-md bg-base-100">
            <table className="table">
              <thead className="bg-secondary text-secondary-content">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Price/hr</th>
                  <th>Bookings</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {facilities.map((facility) => (
                  <tr key={facility._id} className="hover:bg-base-200/50">
                    <td>
                      <div className="relative w-12 h-12 rounded overflow-hidden">
                        <Image
                          src={facility.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    </td>
                    <td className="font-semibold text-secondary">{facility.name}</td>
                    <td>
                      <span
                        className={`badge ${sportBadge[facility.sportType] || 'badge-neutral'}`}
                      >
                        {facility.sportType}
                      </span>
                    </td>
                    <td className="text-sm">{facility.location}</td>
                    <td>${facility.pricePerHour}.00</td>
                    <td className="text-primary font-semibold">
                      {facility.bookingsCount || 0}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="btn btn-ghost btn-xs text-error"
                          onClick={() => handleDelete(facility._id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
