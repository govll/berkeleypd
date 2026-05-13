import { client } from '@/lib/sanity'
import { chiefQuery } from '@/lib/queries'
import { PortableText } from 'next-sanity'

export const revalidate = 60

export default async function MeetTheChief() {
  const chief = await client.fetch(chiefQuery)

  return (
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1 }}>Meet the Chief</h1>
        <p style={{ maxWidth: 760, margin: '16px 0 0', color: 'var(--muted)', fontSize: '1.08rem' }}>A message from the Chief of the Berkeley City Police Department.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(280px,0.72fr)', gap: 'clamp(24px,4vw,54px)', alignItems: 'start', paddingBottom: 'clamp(40px,6vw,76px)' }}>
        <div>
          <article className="card">
            {chief?.photo && <img src={chief.photo} alt={chief.name} style={{ width: 120, height: 120, objectFit: 'cover', marginBottom: 20, border: '3px solid var(--line)' }} />}
            <h2>{chief?.name}</h2>
            <h3 style={{ color: 'var(--muted)', fontWeight: 400, marginBottom: 20 }}>{chief?.rank}</h3>
            <div className="portable-text">
              {chief?.bio && <PortableText value={chief.bio} />}
            </div>
          </article>
        </div>
        <aside style={{ padding: 24, background: 'var(--navy)', color: '#fff', borderRadius: 3 }}>
          <h2 style={{ color: '#fff', fontSize: '1.5rem' }}>Chief&apos;s Office</h2>
          <p style={{ color: 'rgba(255,255,255,0.82)' }}>{chief?.officeDescription}</p>
        </aside>
      </div>
    </div>
  )
}