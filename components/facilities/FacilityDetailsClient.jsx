'use client'

import { useEffect, useState } from 'react'
import FacilityDetailsView from '@/components/facilities/FacilityDetailsView'
import { getFacilityById } from '@/services/facility.service'
import { mapFacility } from '@/utils/mapData'

export default function FacilityDetailsClient({ id }) {
  const [facility, setFacility] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getFacilityById(id)
        setFacility(mapFacility(data.facility))
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    )
  }

  if (error || !facility) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-base-content/70">Facility not found</p>
      </div>
    )
  }

  return <FacilityDetailsView facility={facility} />
}
