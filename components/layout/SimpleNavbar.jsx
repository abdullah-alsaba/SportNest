import Link from 'next/link'
import { APP_NAME, NAV_LINKS } from '@/utils/constants'

export default function SimpleNavbar({ transparent = false }) {
  const navClass = transparent
    ? 'navbar absolute top-0 z-50 w-full bg-transparent text-white'
    : 'navbar bg-base-100 shadow-sm sticky top-0 z-50'

  return (
    <header className={navClass}>
      <div className="navbar container mx-auto px-4">
        <div className="flex-1">
          <Link
            href="/"
            className={`text-2xl font-bold ${transparent ? 'text-primary' : 'text-primary'}`}
          >
            {APP_NAME}
          </Link>
        </div>
        <div className="flex-none hidden lg:flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition ${transparent ? 'text-white/90' : 'text-base-content'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex-none gap-2">
          <Link
            href="/login"
            className={`btn btn-ghost btn-sm ${transparent ? 'text-white' : ''}`}
          >
            Login
          </Link>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-9 rounded-full">
              <span className="text-xs">SN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
