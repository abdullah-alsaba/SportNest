'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function Error({ error, reset }) {
  useEffect(() => {
    toast.error('Something went wrong')
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-error">Error</h1>
        <p className="text-base-content/70 mt-3 mb-8">
          An unexpected problem occurred. Please try again.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" className="btn btn-primary" onClick={reset}>
            Try Again
          </button>
          <Link href="/" className="btn btn-ghost">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
