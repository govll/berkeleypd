import { client } from '@/lib/sanity'
import { awardsQuery } from '@/lib/queries'

export const revalidate = 60

export default async function ServiceRecognition() {
  const awards = await client.fetch(awardsQuery)

  return (
    <>
      <div className="page-header">
        <h1>Service Recognition</h1>
        <p>Recognising the dedication and achievements of Berkeley City Police Department officers.</p>
      </div>
      <div className="container" style={{ paddingBottom: 'clamp(40px,6vw,76px)' }}>
        <div className="content-stack">
          {awards?.length > 0 ? awards.map((award: any, i: number) => (
            <article key={i} className="card">
              <div className="award-row">
                <div>
                  <p className="section-label">{award.awardTitle}</p>
                  <h3>{award.recipientName}</h3>
                  {award.rank && <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 8 }}>{award.rank}</p>}
                  {award.description && <p style={{ color: '#3f4754' }}>{award.description}</p>}
                </div>
                {award.date && (
                  <span className="navy-badge">
                    {new Date(award.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                )}
              </div>
            </article>
          )) : (
            <div className="card">
              <p style={{ color: 'var(--muted)' }}>No awards on record yet. Add them through the Studio.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}