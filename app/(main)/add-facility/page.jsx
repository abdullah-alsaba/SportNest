import Link from 'next/link'
import PrivateRoute from '@/components/auth/PrivateRoute'

export const metadata = {
  title: 'Add Facility | SportNest',
}

function AddFacilityForm() {
  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-secondary mb-2">Add New Facility</h1>
        <p className="text-base-content/70 mb-8">
          Register a new sports venue to your SportNest portfolio.
        </p>
        <form className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body gap-4">
            <fieldset className="fieldset">
              <label className="label">Facility Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Elite Tennis Arena"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sport Type</label>
              <select className="select select-bordered w-full">
                <option>Football</option>
                <option>Tennis</option>
                <option>Basketball</option>
                <option>Swimming</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Location</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Downtown Sports Complex"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Price per Hour ($)</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="45"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Image URL</label>
              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="https://..."
              />
            </fieldset>
            <div className="card-actions justify-end gap-2 mt-4">
              <Link href="/manage-facilities" className="btn btn-ghost">
                Cancel
              </Link>
              <button type="button" className="btn btn-primary">
                Save Facility
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AddFacilityPage() {
  return (
    <PrivateRoute>
      <AddFacilityForm />
    </PrivateRoute>
  )
}
