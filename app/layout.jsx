import './globals.css'
import ToasterProvider from '@/components/providers/ToasterProvider'
import { AuthProvider } from '@/context/AuthContext'
import { APP_NAME, APP_DESCRIPTION } from '@/utils/constants'

export const metadata = {
  title: `${APP_NAME} | Sports Facility Booking`,
  description: APP_DESCRIPTION,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="sportnest">
      <body className="min-h-screen bg-base-100 antialiased">
        <AuthProvider>
          <ToasterProvider />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
