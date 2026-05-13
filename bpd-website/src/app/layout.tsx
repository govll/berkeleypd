import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Berkeley City Police Department | ERLC State of Nova',
  description: 'Berkeley City Police Department, ERLC, State of Nova.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f6f6f4', color: '#171b22', fontFamily: '"Segoe UI", "Trebuchet MS", Arial, sans-serif', lineHeight: 1.55 }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}