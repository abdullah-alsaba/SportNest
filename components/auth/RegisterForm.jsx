'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'
import GoogleButton from '@/components/auth/GoogleButton'
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validators'

export default function RegisterForm() {
  const router = useRouter()
  const { login } = useAuth()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
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
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirmPassword: validateConfirmPassword(form.password, form.confirmPassword),
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
        name: form.name.trim(),
        email: form.email.trim(),
        role: 'user',
      })
      toast.success('Account created successfully')
      router.push('/facilities')
    } catch {
      toast.error('Registration failed. Try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="card bg-base-100 shadow-lg border border-base-300">
      <div className="card-body gap-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary">Create Account</h1>
          <p className="text-sm text-base-content/60 mt-1">
            Join SportNest and start booking facilities
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <fieldset className="fieldset">
            <label className="label font-medium" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Alex Johnson"
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
          </fieldset>

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
            {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
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
                autoComplete="new-password"
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

          <fieldset className="fieldset">
            <label className="label font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="••••••••"
              className={`input input-bordered w-full ${errors.confirmPassword ? 'input-error' : ''}`}
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-error text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </fieldset>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={submitting}
          >
            {submitting ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              'Register'
            )}
          </button>
        </form>

        <div className="divider text-xs text-base-content/50">OR</div>

        <GoogleButton label="Sign up with Google" />

        <p className="text-center text-sm text-base-content/70">
          Already have an account?{' '}
          <Link href="/login" className="link link-primary font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
