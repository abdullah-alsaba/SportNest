import PagePlaceholder from '@/components/ui/PagePlaceholder'

export const metadata = {
  title: 'Add Facility | SportNest',
}

export default function AddFacilityPage() {
  return (
    <PagePlaceholder
      badge="Private Route"
      title="Add Facility"
      description="Facility creation form for owners — connects to POST /facility API."
    />
  )
}
