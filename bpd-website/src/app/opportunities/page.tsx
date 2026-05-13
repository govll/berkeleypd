import { client } from '@/lib/sanity'
import { opportunitiesQuery } from '@/lib/queries'
import { PortableText } from 'next-sanity'

export const revalidate = 60

export default async function Opportunities() {
  const opportunities = await client.fetch(opportunitiesQuery)

  return (
    <>
      <div className="page-header">
        <h1>Opportunities</h1>
        <p>Career and assignment opportunities within the Berkeley City Police Department.</p>
      </div>
      <div className="container" style={{ paddingBottom: 'clamp(40px,6vw,76px)' }}>
        <div className="content-stack">
          {opportunities?.map((opp: any) => (
            <article key={opp.title} className="card">
              <h2>{opp.title}</h2>
              <div className="portable-text">
                {opp.body && <PortableText value={opp.body} />}
              </div>
              {opp.eligibility && (
                <p className="eligibility-note">{opp.eligibility}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  )
}