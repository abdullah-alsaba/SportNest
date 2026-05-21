import PrivateRoute from '@/components/auth/PrivateRoute'
import AddFacilityForm from '@/components/manage/AddFacilityForm'

export const metadata = {
  title: 'Add Facility | SportNest',
}

export default function AddFacilityPage() {
  return (
    <PrivateRoute>
      <AddFacilityForm />
    </PrivateRoute>
  )
}
