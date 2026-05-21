import Link from 'next/link'
import PrivateRoute from '@/components/auth/PrivateRoute'

export const metadata = {
  title: 'Dashboard | SportNest',
}

function DashboardContent() {
  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-secondary mb-6">Owner Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/manage-facilities" className="card bg-base-100 hover:shadow-lg transition border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-secondary">Manage Facilities</h2>
              <p className="text-sm text-base-content/70">View and edit your venues</p>
            </div>
          </Link>
          <Link href="/add-facility" className="card bg-base-100 hover:shadow-lg transition border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-secondary">Add Facility</h2>
              <p className="text-sm text-base-content/70">Register a new venue</p>
            </div>
          </Link>
          <Link href="/my-bookings" className="card bg-base-100 hover:shadow-lg transition border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-secondary">My Bookings</h2>
              <p className="text-sm text-base-content/70">Track your reservations</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <DashboardContent />
    </PrivateRoute>
  )
}
