import { client } from '@/lib/sanity'
import { pressReleasesQuery } from '@/lib/queries'
import Link from 'next/link'

export const revalidate = 60

export default async function PublicInformation() {
  const releases = await client.fetch(pressReleasesQuery)

  return (
    <>
      <div className="page-header">
        <h1>Public Information</h1>
        <p>Press releases, community notices, and department updates from the Berkeley City Police Department.</p>
      </div>
      <div className="container" style={{ paddingBottom: 'clamp(40px,6vw,76px)' }}>
        <div className="content-stack">
          {releases?.length > 0 ? releases.map((r: any, i: number) => (
            <article key={r.slug ?? i} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  {r.category && <p className="section-label">{r.category}</p>}
                  <h2 style={{ fontSize: 'clamp(1.3rem,2.4vw,1.8rem)', marginBottom: 8 }}>
                    {r.slug ? (
                      <Link href={`/public-information/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {r.title}
                      </Link>
                    ) : r.title}
                  </h2>
                  {r.summary && <p style={{ color: '#3f4754', marginBottom: 12 }}>{r.summary}</p>}
                  {r.slug && (
                    <Link href={`/public-information/${r.slug}`} style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                      Read full release →
                    </Link>
                  )}
                </div>
                {r.publishedAt && (
                  <span className="date-badge">
                    {new Date(r.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                )}
              </div>
            </article>
          )) : (
            <div className="card">
              <p style={{ color: 'var(--muted)' }}>No public information posts yet. Add them through the Studio.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}