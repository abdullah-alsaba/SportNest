'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function DemoLoginButton() {
  const { login } = useAuth()
  const router = useRouter()

  const handleDemoLogin = () => {
    login({
      name: 'Alex',
      email: 'alex@example.com',
      role: 'owner',
    })
    router.push('/my-bookings')
  }

  return (
    <button
      type="button"
      className="btn btn-outline btn-secondary w-full"
      onClick={handleDemoLogin}
    >
      Demo Login (testing only)
    </button>
  )
}
