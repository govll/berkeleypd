import { client } from '@/lib/sanity'
import { pressReleaseBySlugQuery, pressReleasesQuery } from '@/lib/queries'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const releases = await client.fetch(pressReleasesQuery)
  return releases.map((r: any) => ({ slug: r.slug }))
}

export default async function PressReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const release = await client.fetch(pressReleaseBySlugQuery, { slug })

  if (!release) notFound()

  const embedUrl = release.bwcFootage?.includes('watch?v=')
    ? release.bwcFootage.replace('watch?v=', 'embed/')
    : release.bwcFootage

  return (
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <Link href="/public-information" style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          &larr; Back to Public Information
        </Link>
        {release.category && <p className="section-label">{release.category}</p>}
        <h1 style={{ margin: '8px 0 0', fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.05 }}>{release.title}</h1>
        {release.publishedAt && (
          <p style={{ margin: '12px 0 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
            {new Date(release.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: 'clamp(24px,4vw,48px)', paddingBottom: 'clamp(40px,6vw,76px)', alignItems: 'start' }}>
        <div>
          {release.summary && (
            <p style={{ fontSize: '1.12rem', color: '#303846', borderLeft: '4px solid var(--blue)', paddingLeft: 16, marginBottom: 28 }}>
              {release.summary}
            </p>
          )}
          {release.body && (
            <div className="portable-text card">
              <PortableText value={release.body} />
            </div>
          )}
          {release.bwcFootage && (
            <div style={{ marginTop: 28 }}>
              <p className="section-label" style={{ marginBottom: 12 }}>BWC / Video Footage</p>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', border: '1px solid var(--line)' }}>
                <iframe
                  src={embedUrl}
                  title="BWC Footage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>
            </div>
          )}
        </div>

        <aside style={{ background: 'var(--navy)', color: '#fff', padding: 24, borderRadius: 3 }}>
          <h3 style={{ color: '#fff', marginBottom: 16 }}>Department Notice</h3>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}>This release is an official communication from the Berkeley City Police Department, State of Nova.</p>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: '16px 0' }} />
          <Link href="/public-information" style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>&larr; All releases</Link>
        </aside>
      </div>
    </div>
  )
}