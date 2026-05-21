import Link from 'next/link'

export const metadata = {
  title: 'Register | SportNest',
}

export default function RegisterPage() {
  return (
    <div className="bg-base-200 min-h-[70vh] flex items-center py-12">
      <div className="container mx-auto px-4 max-w-md w-full">
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body gap-4">
            <h1 className="text-2xl font-bold text-secondary text-center">Register</h1>
            <p className="text-center text-sm text-base-content/60">
              Full registration form with validation — Step 3
            </p>
            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
