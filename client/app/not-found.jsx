import Link from 'next/link'
import { APP_NAME } from '@/utils/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        <p className="text-primary font-bold text-2xl mb-2">{APP_NAME}</p>
        <h1 className="text-7xl font-bold text-secondary">404</h1>
        <h2 className="text-2xl font-bold text-secondary mt-2">Page Not Found</h2>
        <p className="text-base-content/70 mt-3 mb-8">
          The page you requested does not exist or was moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/facilities" className="btn btn-outline btn-secondary">
            Browse Facilities
          </Link>
        </div>
      </div>
    </div>
  )
}
