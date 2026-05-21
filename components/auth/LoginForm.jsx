'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'
import { validateEmail, validatePassword } from '@/utils/validators'

export default function LoginForm() {
  const router = useRouter()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    }
    setErrors(nextErrors)
    return !Object.values(nextErrors).some(Boolean)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error('Please Fill The All Info')
      return
    }

    setSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      login({
        name: form.email.split('@')[0],
        email: form.email.trim(),
        role: 'user',
      })
      toast.success('Welcome back! Login successful.')
      router.push('/my-bookings')
    } catch {
      toast.error('Login failed. Please check your credentials.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogleLogin = () => {
    toast('Google login UI is ready — backend connection coming later.', {
      icon: 'ℹ️',
    })
  }

  return (
    <div className="card bg-base-100 shadow-lg border border-base-300">
      <div className="card-body gap-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary">Welcome Back</h1>
          <p className="text-sm text-base-content/60 mt-1">
            Sign in to book facilities and manage your games
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <fieldset className="fieldset">
            <label className="label font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-error text-xs mt-1">{errors.email}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <label className="label font-medium" htmlFor="password">
              Password
            </label>
            <label
              className={`input input-bordered flex items-center gap-2 ${errors.password ? 'input-error' : ''}`}
            >
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="••••••••"
                className="grow"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="text-xs text-base-content/60"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </label>
            {errors.password && (
              <p className="text-error text-xs mt-1">{errors.password}</p>
            )}
          </fieldset>

          <div className="flex justify-end">
            <button type="button" className="text-sm link link-hover text-primary">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={submitting}
          >
            {submitting ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="divider text-xs text-base-content/50">OR</div>

        <button
          type="button"
          className="btn btn-outline w-full gap-2"
          onClick={handleGoogleLogin}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-sm text-base-content/70">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="link link-primary font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
