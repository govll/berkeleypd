'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 24, padding: '12px clamp(18px, 4vw, 52px)',
      background: 'rgba(255,255,255,0.97)',
      borderBottom: '1px solid #d8dde5',
    }}>
      <Link href="/" style={{
        display: 'flex', alignItems: 'center', gap: 12,
        textDecoration: 'none', color: 'inherit', minWidth: 250,
      }}>
        <Image src="/assets/logo.png" alt="BCPD Logo" width={58} height={58} style={{ objectFit: 'contain' }} />
        <span>
          <strong style={{ display: 'block', lineHeight: 1.12, fontSize: '1rem' }}>Berkeley City Police Department</strong>
          <small style={{ display: 'block', marginTop: 3, color: '#5e6673', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>ERLC | State of Nova</small>
        </span>
      </Link>

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          display: 'none', width: 42, height: 42,
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 5, border: '1px solid #d8dde5', borderRadius: 4,
          background: '#fff', cursor: 'pointer',
        }}
        className="nav-toggle"
      >
        <span style={{ width: 20, height: 2, background: '#171b22', display: 'block' }} />
        <span style={{ width: 20, height: 2, background: '#171b22', display: 'block' }} />
        <span style={{ width: 20, height: 2, background: '#171b22', display: 'block' }} />
      </button>

      <nav className={`site-nav${open ? ' is-open' : ''}`} style={{
        display: 'flex', alignItems: 'center', gap: 18,
        fontSize: '0.9rem', fontWeight: 700,
      }}>
        {[
          ['/', 'Home'],
          ['/opportunities', 'Opportunities'],
          ['/service-recognition', 'Service Recognition'],
          ['/meet-the-chief', 'Meet the Chief'],
          ['/our-leadership', 'Our Leadership'],
          ['/public-information', 'Public Information'],
          ['/forms', 'Forms'],
        ].map(([href, label]) => (
          <Link key={href} href={href} style={{ textDecoration: 'none', color: '#303846' }}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}