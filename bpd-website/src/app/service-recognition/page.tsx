import { client } from '@/lib/sanity'
import { awardsQuery } from '@/lib/queries'

export const revalidate = 60

export default async function ServiceRecognition() {
  const awards = await client.fetch(awardsQuery)

  return (
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1 }}>Service Recognition</h1>
        <p style={{ maxWidth: 760, margin: '16px 0 0', color: 'var(--muted)', fontSize: '1.08rem' }}>Recognising the dedication and achievements of Berkeley City Police Department officers.</p>
      </div>
      <div style={{ display: 'grid', gap: 18, paddingBottom: 'clamp(40px,6vw,76px)' }}>
        {awards?.length > 0 ? awards.map((award: any) => (
          <article key={award.recipientName + award.awardTitle} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
            <div>
              <p className="section-label">{award.awardTitle}</p>
              <h3>{award.recipientName}</h3>
              {award.rank && <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 8 }}>{award.rank}</p>}
              {award.description && <p style={{ color: '#3f4754' }}>{award.description}</p>}
            </div>
            {award.date && (
              <span style={{ background: 'var(--navy)', color: '#fff', padding: '6px 14px', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                {new Date(award.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            )}
          </article>
        )) : (
          <div className="card">
            <p style={{ color: 'var(--muted)' }}>No awards on record yet. Add them through the Studio.</p>
          </div>
        )}
      </div>
    </div>
  )
}