import Link from 'next/link'
import DemoLoginButton from '@/components/auth/DemoLoginButton'

export const metadata = {
  title: 'Login | SportNest',
}

export default function LoginPage() {
  return (
    <div className="bg-base-200 min-h-[70vh] flex items-center py-12">
      <div className="container mx-auto px-4 max-w-md w-full">
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body gap-4">
            <h1 className="text-2xl font-bold text-secondary text-center">Login</h1>
            <p className="text-center text-sm text-base-content/60">
              Full login form with validation — Step 3
            </p>
            <DemoLoginButton />
            <p className="text-center text-sm">
              No account?{' '}
              <Link href="/register" className="link link-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
