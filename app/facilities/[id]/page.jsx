import PagePlaceholder from '@/components/ui/PagePlaceholder'

export async function generateMetadata({ params }) {
  const { id } = await params
  return {
    title: `Facility ${id} | SportNest`,
  }
}

export default async function FacilityDetailsPage({ params }) {
  const { id } = await params

  return (
    <PagePlaceholder
      badge={`Facility #${id}`}
      title="Facility Details"
      description="Gallery, amenities, reviews, and booking sidebar will be built in Step 2."
    />
  )
}
