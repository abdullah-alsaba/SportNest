import PrivateRoute from '@/components/auth/PrivateRoute'
import ManageFacilitiesView from '@/components/manage/ManageFacilitiesView'

export const metadata = {
  title: 'Manage Facilities | SportNest',
}

export default function ManageFacilitiesPage() {
  return (
    <PrivateRoute>
      <ManageFacilitiesView />
    </PrivateRoute>
  )
}
