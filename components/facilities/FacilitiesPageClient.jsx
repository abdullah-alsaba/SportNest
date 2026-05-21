'use client'

import { useMemo, useState } from 'react'
import FacilityCard from '@/components/facilities/FacilityCard'
import { ALL_FACILITIES, SPORT_TYPES } from '@/utils/mockData'

export default function FacilitiesPageClient() {
  const [search, setSearch] = useState('')
  const [selectedSports, setSelectedSports] = useState([])
  const [maxPrice, setMaxPrice] = useState(200)

  const filtered = useMemo(() => {
    return ALL_FACILITIES.filter((facility) => {
      const matchesSearch = facility.name
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesSport =
        selectedSports.length === 0 || selectedSports.includes(facility.sport)
      const matchesPrice = facility.price <= maxPrice
      return matchesSearch && matchesSport && matchesPrice
    })
  }, [search, selectedSports, maxPrice])

  const toggleSport = (sport) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport],
    )
  }

  return (
    <div className="bg-base-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <label className="input input-bordered flex items-center gap-2 w-full max-w-2xl mx-auto bg-base-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search by facility name"
              className="grow"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <div className="card bg-base-100 shadow-md border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-secondary text-lg">Filters</h2>

                <div>
                  <p className="font-semibold text-sm mb-2">Sport Type</p>
                  <div className="space-y-2">
                    {SPORT_TYPES.map((sport) => (
                      <label key={sport} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          checked={selectedSports.includes(sport)}
                          onChange={() => toggleSport(sport)}
                        />
                        <span className="text-sm">{sport}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-2">
                    Price Range: $0 – ${maxPrice}+
                  </p>
                  <input
                    type="range"
                    min={10}
                    max={200}
                    value={maxPrice}
                    className="range range-primary range-xs"
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>

                <div>
                  <p className="font-semibold text-sm mb-2">Location</p>
                  <select className="select select-bordered select-sm w-full">
                    <option>All Cities</option>
                    <option>Downtown</option>
                    <option>Westside</option>
                  </select>
                </div>

                <button type="button" className="btn btn-primary btn-sm w-full mt-2">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <p className="text-base-content/70">
                Showing <span className="font-semibold text-secondary">{filtered.length}</span>{' '}
                facilities available
              </p>
              <select className="select select-bordered select-sm">
                <option>Sort by: Highest Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-base-content/60">
                No facilities match your filters.
              </div>
            )}

            <div className="text-center mt-10">
              <button type="button" className="btn btn-outline btn-secondary">
                Load More Facilities ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
