'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { APP_NAME, NAV_LINKS } from '@/utils/constants'

export default function Navbar({ transparent = false }) {
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()

  const publicLinks = NAV_LINKS.filter((link) => !link.private)
  const visibleLinks = isAuthenticated
    ? NAV_LINKS
    : publicLinks

  const headerClass = transparent
    ? 'navbar absolute top-0 z-50 w-full bg-transparent'
    : 'navbar bg-base-100 border-b border-base-300 sticky top-0 z-50 shadow-sm'

  const linkClass = (href) => {
    const active = pathname === href
    const base = transparent
      ? 'text-white/90 hover:text-primary'
      : 'text-base-content hover:text-primary'
    const activeClass = active
      ? transparent
        ? 'text-primary border-b-2 border-primary'
        : 'text-primary font-semibold border-b-2 border-primary'
      : ''
    return `${base} transition pb-0.5 ${activeClass}`
  }

  return (
    <header className={headerClass}>
      <div className="navbar container mx-auto min-h-16 px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost btn-circle ${transparent ? 'text-white' : ''}`}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-56 p-2 shadow-lg border border-base-300"
            >
              {visibleLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              {!isAuthenticated && (
                <li>
                  <Link href="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link href="/" className="text-2xl font-bold text-primary">
            {APP_NAME}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex gap-6">
          {visibleLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-end gap-2">
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost gap-2 normal-case"
              >
                <span
                  className={`hidden sm:inline text-sm ${transparent ? 'text-white' : ''}`}
                >
                  {user?.role === 'owner' ? 'Owner Account' : user?.name || 'Profile'}
                </span>
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content w-9 rounded-full">
                    <span className="text-xs">
                      {(user?.name || 'U').charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow-lg border border-base-300"
              >
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link href="/my-bookings">My Bookings</Link>
                </li>
                <li>
                  <button type="button" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className={`btn btn-ghost btn-sm ${transparent ? 'text-white' : ''}`}
              >
                Login
              </Link>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-9 rounded-full">
                  <span className="text-xs">?</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
