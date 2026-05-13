import { client } from '@/lib/sanity'
import { leadershipQuery } from '@/lib/queries'

export const revalidate = 60

export default async function OurLeadership() {
  const members = await client.fetch(leadershipQuery)

  return (
    <>
      <div className="page-header">
        <h1>Our Leadership</h1>
        <p>Command staff and senior leadership of the Berkeley City Police Department.</p>
      </div>
      <div className="container">
        <div className="leadership-grid">
          {members?.length > 0 ? members.map((m: any) => (
            <div key={m.name} className="card">
              {m.photo && (
                <img src={m.photo} alt={m.name} style={{ width: 80, height: 80, objectFit: 'cover', marginBottom: 16, border: '3px solid var(--line)' }} />
              )}
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
    </>
  )
}