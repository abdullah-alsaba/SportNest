import FacilityDetailsClient from '@/components/facilities/FacilityDetailsClient'

export const metadata = {
  title: 'Facility Details | SportNest',
}

export default async function FacilityDetailsPage({ params }) {
  const { id } = await params
  return <FacilityDetailsClient id={id} />
}
