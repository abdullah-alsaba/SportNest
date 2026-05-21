'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'
import { loginUser } from '@/services/auth.service'
import GoogleButton from '@/components/auth/GoogleButton'
import { getErrorMessage } from '@/utils/getErrorMessage'
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
      const data = await loginUser({
        email: form.email.trim(),
        password: form.password,
      })
      login(data.user)
      toast.success('Welcome back! Login successful.')
      router.push('/my-bookings')
    } catch (error) {
      toast.error(getErrorMessage(error))
    } finally {
      setSubmitting(false)
    }
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

        <GoogleButton />

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
