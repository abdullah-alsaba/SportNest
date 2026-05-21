'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import toast from 'react-hot-toast'
import FacilityDetailsView from '@/components/facilities/FacilityDetailsView'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { getFacilityById } from '@/services/facility.service'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { mapFacility } from '@/utils/mapData'

export default function FacilityDetailsClient({ id }) {
  const [facility, setFacility] = useState(null)
  const [loading, setLoading] = useState(true)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getFacilityById(id)
        setFacility(mapFacility(data.facility))
      } catch (error) {
        if (error?.response?.status === 404) {
          setMissing(true)
        } else {
          toast.error(getErrorMessage(error))
        }
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return <LoadingSpinner className="min-h-[50vh]" />
  }

  if (missing) {
    notFound()
  }

  if (!facility) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-base-content/70">Facility not found</p>
      </div>
    )
  }

  return <FacilityDetailsView facility={facility} />
}
