import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '28px clamp(18px, 4vw, 52px)',
      display: 'flex', justifyContent: 'space-between',
      gap: 20, background: '#0b1220',
      color: 'rgba(255,255,255,0.78)',
    }}>
      <div>
        <strong style={{ display: 'block', color: '#fff' }}>Berkeley City Police Department</strong>
        <span style={{ display: 'block', fontSize: '0.85rem' }}>ERLC, State of Nova</span>
      </div>
      <nav style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        {[
          ['/', 'Home'],
          ['/opportunities', 'Opportunities'],
          ['/forms', 'Forms'],
          ['/public-information', 'Public Information'],
        ].map(([href, label]) => (
          <Link key={href} href={href} style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem' }}>
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}