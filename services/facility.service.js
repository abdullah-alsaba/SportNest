import api from '@/services/api'

export async function getFacilities(params = {}) {
  const { data } = await api.get('/facility', { params })
  return data
}

export async function getFacilityById(id) {
  const { data } = await api.get(`/facility/${id}`)
  return data
}

export async function getMyFacilities() {
  const { data } = await api.get('/facility/my')
  return data
}

export async function createFacility(payload) {
  const { data } = await api.post('/facility', payload)
  return data
}

export async function updateFacility(id, payload) {
  const { data } = await api.put(`/facility/${id}`, payload)
  return data
}

export async function deleteFacility(id) {
  const { data } = await api.delete(`/facility/${id}`)
  return data
}
