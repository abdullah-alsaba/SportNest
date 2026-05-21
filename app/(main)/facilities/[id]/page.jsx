import FacilityDetailsView from '@/components/facilities/FacilityDetailsView'
import { getFacilityById } from '@/utils/mockData'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { id } = await params
  const facility = getFacilityById(id)
  return {
    title: `${facility.name} | SportNest`,
  }
}

export default async function FacilityDetailsPage({ params }) {
  const { id } = await params
  const facility = getFacilityById(id)

  if (!facility) {
    notFound()
  }

  return <FacilityDetailsView facility={facility} />
}
