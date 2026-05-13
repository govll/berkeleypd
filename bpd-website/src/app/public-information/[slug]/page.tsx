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

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const release = await client.fetch(pressReleaseBySlugQuery, { slug })

  if (!release) notFound()

  return (
    <>
      <div className="page-header">
        <Link href="/public-information" className="back-link">
          {'<'} Back to Public Information
        </Link>
        {release.category && <p className="section-label">{release.category}</p>}
        <h1 style={{ margin: '8px 0 0' }}>{release.title}</h1>
        {release.publishedAt && (
          <p style={{ margin: '12px 0 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
            {new Date(release.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </p>
        )}
      </div>

      <div className="container">
        <div className="release-layout">
          <div>
            {release.summary && (
              <p className="release-summary">{release.summary}</p>
            )}
            {release.body && (
              <div className="portable-text card">
                <PortableText value={release.body} />
              </div>
            )}
            {release.bwcFootage && (
              <div style={{ marginTop: 28 }}>
                <p className="section-label" style={{ marginBottom: 12 }}>BWC / Video Footage</p>
                <a href={release.bwcFootage} target="_blank" rel="noopener noreferrer" className="bwc-button">
                  View BWC Footage
                </a>
              </div>
            )}
          </div>
          <aside className="release-aside">
            <h3 style={{ color: '#fff', marginBottom: 16 }}>Department Notice</h3>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}>
              This release is an official communication from the Berkeley City Police Department, State of Nova.
            </p>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: '16px 0' }} />
            <Link href="/public-information" style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>
              {'<'} All releases
            </Link>
          </aside>
        </div>
      </div>
    </>
  )
}