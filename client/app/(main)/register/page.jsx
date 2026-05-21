import RegisterForm from '@/components/auth/RegisterForm'

export const metadata = {
  title: 'Register | SportNest',
}

export default function RegisterPage() {
  return (
    <div className="bg-base-200 min-h-[75vh] flex items-center py-12">
      <div className="container mx-auto px-4 max-w-md w-full">
        <RegisterForm />
      </div>
    </div>
  )
}
