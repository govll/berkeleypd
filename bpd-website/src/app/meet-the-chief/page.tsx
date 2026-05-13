import { client } from '@/lib/sanity'
import { chiefQuery } from '@/lib/queries'
import { PortableText } from 'next-sanity'

export const revalidate = 60

export default async function MeetTheChief() {
  const chief = await client.fetch(chiefQuery)

  return (
    <>
      <div className="page-header">
        <h1>Meet the Chief</h1>
        <p>A message from the Chief of the Berkeley City Police Department.</p>
      </div>
      <div className="two-col">
        <div>
          <article className="card">
            {chief?.photo && (
              <img src={chief.photo} alt={chief.name} style={{ width: 120, height: 120, objectFit: 'cover', marginBottom: 20, border: '3px solid var(--line)' }} />
            )}
            <h2>{chief?.name}</h2>
            <h3 style={{ color: 'var(--muted)', fontWeight: 400, marginBottom: 20 }}>{chief?.rank}</h3>
            <div className="portable-text">
              {chief?.bio && <PortableText value={chief.bio} />}
            </div>
          </article>
        </div>
        <aside className="side-box">
          <h2 style={{ color: '#fff', fontSize: '1.5rem' }}>Chief&apos;s Office</h2>
          <p>{chief?.officeDescription}</p>
        </aside>
      </div>
    </>
  )
}