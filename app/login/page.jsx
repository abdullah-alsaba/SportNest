import PagePlaceholder from '@/components/ui/PagePlaceholder'

export const metadata = {
  title: 'Login | SportNest',
}

export default function LoginPage() {
  return (
    <PagePlaceholder
      badge="Auth — Step 3"
      title="Login"
      description="Login form with validation and toast will connect to Express JWT API."
    />
  )
}
