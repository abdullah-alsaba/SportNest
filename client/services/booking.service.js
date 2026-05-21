import api from '@/services/api'

export async function createBooking(payload) {
  const { data } = await api.post('/booking', payload)
  return data
}

export async function getMyBookings() {
  const { data } = await api.get('/booking/my')
  return data
}

export async function cancelBooking(id) {
  const { data } = await api.patch(`/booking/${id}/cancel`)
  return data
}
