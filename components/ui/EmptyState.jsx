import Link from 'next/link'

export default function EmptyState({ title, message, actionLabel, actionHref }) {
  return (
    <div className="text-center py-16 px-4">
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
      <p className="text-base-content/60 mt-2 max-w-md mx-auto">{message}</p>
      {actionLabel && actionHref && (
        <Link href={actionHref} className="btn btn-primary btn-sm mt-6">
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
