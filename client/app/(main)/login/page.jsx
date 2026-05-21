import LoginForm from '@/components/auth/LoginForm'

export const metadata = {
  title: 'Login | SportNest',
}

export default function LoginPage() {
  return (
    <div className="bg-base-200 min-h-[75vh] flex items-center py-12">
      <div className="container mx-auto px-4 max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}
