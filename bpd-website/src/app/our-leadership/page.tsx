import { client } from '@/lib/sanity'
import { leadershipQuery } from '@/lib/queries'

export const revalidate = 60

export default async function OurLeadership() {
  const members = await client.fetch(leadershipQuery)

  return (
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1 }}>Our Leadership</h1>
        <p style={{ maxWidth: 760, margin: '16px 0 0', color: 'var(--muted)', fontSize: '1.08rem' }}>Command staff and senior leadership of the Berkeley City Police Department.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18, paddingBottom: 'clamp(40px,6vw,76px)' }}>
        {members?.length > 0 ? members.map((m: any) => (
          <div key={m.name} className="card">
            {m.photo && <img src={m.photo} alt={m.name} style={{ width: 80, height: 80, objectFit: 'cover', marginBottom: 16, border: '3px solid var(--line)' }} />}
            <h3>{m.name}</h3>
            <p style={{ color: 'var(--blue-dark)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{m.rank}</p>
            {m.division && <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 8 }}>{m.division}</p>}
            {m.bio && <p style={{ color: '#3f4754', fontSize: '0.9rem' }}>{m.bio}</p>}
          </div>
        )) : (
          <p style={{ color: 'var(--muted)' }}>Leadership profiles coming soon.</p>
        )}
      </div>
    </div>
  )
}