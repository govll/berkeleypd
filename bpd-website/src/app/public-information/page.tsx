import { client } from '@/lib/sanity'
import { pressReleasesQuery } from '@/lib/queries'
import Link from 'next/link'

export const revalidate = 60

export default async function PublicInformation() {
  const releases = await client.fetch(pressReleasesQuery)

  return (
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1 }}>Public Information</h1>
        <p style={{ maxWidth: 760, margin: '16px 0 0', color: 'var(--muted)', fontSize: '1.08rem' }}>Press releases, community notices, and department updates from the Berkeley City Police Department.</p>
      </div>
      <div style={{ display: 'grid', gap: 18, paddingBottom: 'clamp(40px,6vw,76px)' }}>
        {releases?.length > 0 ? releases.map((r: any) => (
          <article key={r.slug} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
            <div>
              {r.category && <p className="section-label" style={{ marginBottom: 6 }}>{r.category}</p>}
              <h2 style={{ fontSize: 'clamp(1.3rem,2.4vw,1.8rem)', marginBottom: 8 }}>
                <Link href={`/public-information/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {r.title}
                </Link>
              </h2>
              {r.summary && <p style={{ color: '#3f4754', marginBottom: 12 }}>{r.summary}</p>}
              <Link href={`/public-information/${r.slug}`} style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                Read full release &rarr;
              </Link>
            </div>
            {r.publishedAt && (
              <span style={{ background: 'var(--panel)', border: '1px solid var(--line)', padding: '6px 14px', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap', color: 'var(--muted)' }}>
                {new Date(r.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            )}
          </article>
        )) : (
          <div className="card">
            <p style={{ color: 'var(--muted)' }}>No public information posts yet. Add them through the Studio.</p>
          </div>
        )}
      </div>
    </div>
  )
}