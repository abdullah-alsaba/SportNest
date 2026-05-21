import PrivateRoute from '@/components/auth/PrivateRoute'
import BookingsTable from '@/components/bookings/BookingsTable'

export const metadata = {
  title: 'My Bookings | SportNest',
}

export default function MyBookingsPage() {
  return (
    <PrivateRoute>
      <BookingsTable />
    </PrivateRoute>
  )
}
