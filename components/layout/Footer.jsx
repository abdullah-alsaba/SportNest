import Link from 'next/link'
import { APP_NAME } from '@/utils/constants'

const FOOTER_LINKS = [
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'Help Center',
  'Partner Program',
]

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-2xl font-bold text-primary">{APP_NAME}</p>
            <p className="text-sm text-neutral-content/70 mt-2">
              © 2024 SportNest Facility Management. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            {FOOTER_LINKS.map((label) => (
              <li key={label}>
                <Link href="#" className="hover:text-primary transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
