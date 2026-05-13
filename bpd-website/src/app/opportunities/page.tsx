import { client } from '@/lib/sanity'
import { opportunitiesQuery } from '@/lib/queries'
import { PortableText } from 'next-sanity'

export const revalidate = 60

export default async function Opportunities() {
  const opportunities = await client.fetch(opportunitiesQuery)

  return (
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1 }}>Opportunities</h1>
        <p style={{ maxWidth: 760, margin: '16px 0 0', color: 'var(--muted)', fontSize: '1.08rem' }}>Career and assignment opportunities within the Berkeley City Police Department.</p>
      </div>
      <div style={{ display: 'grid', gap: 18, paddingBottom: 'clamp(40px,6vw,76px)' }}>
        {opportunities?.map((opp: any) => (
          <article key={opp.title} className="card">
            <h2>{opp.title}</h2>
            <div className="portable-text">
              {opp.body && <PortableText value={opp.body} />}
            </div>
            {opp.eligibility && (
              <p style={{ marginTop: 16, padding: '10px 16px', background: 'var(--panel)', borderLeft: '4px solid var(--blue)', color: 'var(--blue-dark)', fontWeight: 600, fontSize: '0.9rem' }}>
                {opp.eligibility}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}