import api from '@/services/api'

export async function loginUser({ email, password }) {
  const { data } = await api.post('/auth/login', { email, password })
  return data
}

export async function loginWithGoogle() {
  throw new Error('Google login is not configured yet')
}
