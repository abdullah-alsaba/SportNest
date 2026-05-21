'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function MainLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent={isHome} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
