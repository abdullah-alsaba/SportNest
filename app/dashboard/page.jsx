import PagePlaceholder from '@/components/ui/PagePlaceholder'

export const metadata = {
  title: 'Dashboard | SportNest',
}

export default function DashboardPage() {
  return (
    <PagePlaceholder
      badge="Protected — Step 8"
      title="Dashboard"
      description="Owner dashboard with stats — protected by JWT middleware."
    />
  )
}
