import Link from 'next/link'
import { APP_NAME } from '@/utils/constants'

const FOOTER_LINKS = [
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'Help Center',
  'Partner Program',
]

export default function SimpleFooter() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xl font-bold text-primary">{APP_NAME}</p>
          <p className="text-sm text-neutral-content/70 mt-1">
            © 2024 SportNest Facility Management. All rights reserved.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          {FOOTER_LINKS.map((label) => (
            <li key={label}>
              <Link href="#" className="hover:text-primary transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
