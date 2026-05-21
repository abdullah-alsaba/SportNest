import Image from 'next/image'
import Link from 'next/link'
import { MANAGE_FACILITIES } from '@/utils/mockData'

const sportBadge = {
  Tennis: 'badge-info',
  Basketball: 'badge-warning',
  Football: 'badge-success',
}

export default function ManageFacilitiesView() {
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
            <div className="stat-value text-secondary text-3xl">12</div>
            <div className="stat-desc">Facilities</div>
          </div>
          <div className="stat bg-base-100 rounded-xl shadow-sm border border-base-300">
            <div className="stat-title">Avg. Bookings</div>
            <div className="stat-value text-secondary text-3xl">84%</div>
          </div>
          <div className="stat bg-base-100 rounded-xl shadow-sm border border-base-300">
            <div className="stat-title">Monthly Revenue</div>
            <div className="stat-value text-primary text-3xl">$12,450</div>
          </div>
        </div>

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
              {MANAGE_FACILITIES.map((facility) => (
                <tr key={facility.id} className="hover:bg-base-200/50">
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
                    <span className={`badge ${sportBadge[facility.sport] || 'badge-neutral'}`}>
                      {facility.sport}
                    </span>
                  </td>
                  <td className="text-sm">{facility.location}</td>
                  <td>${facility.price}.00</td>
                  <td className="text-primary font-semibold">{facility.bookings}</td>
                  <td>
                    <div className="flex gap-2">
                      <button type="button" className="btn btn-ghost btn-xs" aria-label="Edit">
                        ✏️
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-xs text-error"
                        aria-label="Delete"
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

        <div className="flex flex-wrap justify-between items-center mt-6 gap-4 text-sm text-base-content/70">
          <p>Showing 3 of 12 facilities</p>
          <div className="join">
            <button type="button" className="join-item btn btn-sm">
              Previous
            </button>
            <button type="button" className="join-item btn btn-sm btn-active">
              1
            </button>
            <button type="button" className="join-item btn btn-sm">
              2
            </button>
            <button type="button" className="join-item btn btn-sm">
              3
            </button>
            <button type="button" className="join-item btn btn-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
