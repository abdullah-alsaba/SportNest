'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import FacilityCard from '@/components/facilities/FacilityCard'
import EmptyState from '@/components/ui/EmptyState'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { getFacilities } from '@/services/facility.service'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { mapFacility } from '@/utils/mapData'
import { SPORT_TYPES } from '@/utils/mockData'

export default function FacilitiesPageClient() {
  const [facilities, setFacilities] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedSports, setSelectedSports] = useState([])
  const [maxPrice, setMaxPrice] = useState(200)
  const [sortBy, setSortBy] = useState('rating')

  const loadFacilities = useCallback(async () => {
    setLoading(true)
    try {
      const params = { search }
      if (selectedSports.length > 0) {
        params.sportType = selectedSports.join(',')
      }
      if (maxPrice < 200) {
        params.maxPrice = maxPrice
      }
      const data = await getFacilities(params)
      setFacilities(data.facilities.map(mapFacility))
    } catch (error) {
      setFacilities([])
      toast.error(getErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }, [search, selectedSports, maxPrice])

  useEffect(() => {
    const timer = setTimeout(() => {
      loadFacilities()
    }, 350)
    return () => clearTimeout(timer)
  }, [loadFacilities])

  const sorted = useMemo(() => {
    const list = [...facilities]
    if (sortBy === 'price-low') {
      return list.sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'price-high') {
      return list.sort((a, b) => b.price - a.price)
    }
    return list.sort((a, b) => b.rating - a.rating)
  }, [facilities, sortBy])

  const toggleSport = (sport) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport],
    )
  }

  const clearFilters = () => {
    setSearch('')
    setSelectedSports([])
    setMaxPrice(200)
    setSortBy('rating')
    toast.success('Filters cleared')
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
                    Price Range: $0 – ${maxPrice}
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

                <div className="flex flex-col gap-2 mt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm w-full"
                    onClick={loadFacilities}
                  >
                    Apply Filters
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm w-full"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <p className="text-base-content/70">
                Showing{' '}
                <span className="font-semibold text-secondary">{sorted.length}</span>{' '}
                facilities available
              </p>
              <select
                className="select select-bordered select-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Sort by: Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {loading ? (
              <LoadingSpinner />
            ) : sorted.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sorted.map((facility) => (
                  <FacilityCard key={facility.id} facility={facility} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No facilities found"
                message="Try changing your search or filter options."
                actionLabel="Clear Filters"
                actionHref="/facilities"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
