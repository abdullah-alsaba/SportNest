import Link from 'next/link'

export default function PagePlaceholder({ title, description, badge }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        {badge && <span className="badge badge-primary mb-4">{badge}</span>}
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
          {title}
        </h1>
        <p className="text-base-content/70 mb-6">{description}</p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
