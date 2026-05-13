import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'

export const revalidate = 60

export default async function Home() {
  const settings = await client.fetch(siteSettingsQuery)

  return (
    <>
      <section style={{ background: 'var(--navy)', color: '#fff', borderBottom: '4px solid var(--blue)' }}>
        <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 240px', gap: 'clamp(28px,5vw,70px)', alignItems: 'center', minHeight: 360, padding: 'clamp(38px,6vw,72px) 0' }}>
          <div>
            <h1 style={{ margin: 0, lineHeight: 1, fontSize: 'clamp(2.6rem,6vw,5rem)' }}>Berkeley City Police Department</h1>
            <p style={{ maxWidth: 670, margin: '18px 0 0', color: 'rgba(255,255,255,0.84)', fontSize: '1.08rem' }}>{settings?.tagline}</p>
          </div>
          <div style={{ display: 'grid', placeItems: 'center', padding: 22, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.16)' }}>
            <img src="/assets/logo.png" alt="" style={{ width: 215 }} />
          </div>
        </div>
      </section>

      <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto', transform: 'translateY(-32px)', background: '#fff', border: '1px solid #d8dde5', borderLeft: '6px solid var(--blue)', padding: 'clamp(24px,4vw,38px)' }}>
        <h2 style={{ fontSize: 'clamp(1.45rem,2.4vw,2.15rem)', marginBottom: 8 }}>Mission Statement</h2>
        <p style={{ margin: 0, maxWidth: 980, color: '#303846', fontSize: '1.12rem' }}>{settings?.missionStatement}</p>
      </div>

      <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 310px', gap: 'clamp(24px,4vw,44px)', paddingBottom: 'clamp(40px,6vw,76px)' }}>
        <div>
          <article className="card">
            <p className="section-label">Department Overview</p>
            <h2>{settings?.overviewHeading}</h2>
            <p style={{ color: '#3f4754' }}>{settings?.overviewBody}</p>
          </article>
          <article className="card">
            <p className="section-label">Core Standards</p>
            <h2>{settings?.standardsHeading}</h2>
            <p style={{ color: '#3f4754' }}>{settings?.standardsBody}</p>
          </article>
        </div>
        <aside style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
          {[
            { heading: 'Recruitment', body: 'Interested in joining the department?', link: '/opportunities', label: 'View opportunities' },
            { heading: 'Leadership', body: 'Learn about the Chief and command staff.', link: '/meet-the-chief', label: 'Meet the Chief' },
            { heading: 'Recognition', body: 'View service awards and commendations.', link: '/service-recognition', label: 'Service recognition' },
            { heading: 'Public Information', body: 'Press releases and department news.', link: '/public-information', label: 'View updates' },
            { heading: 'Forms', body: 'Applications and department request forms.', link: '/forms', label: 'Open forms' },
          ].map((card) => (
            <div key={card.heading} style={{ background: 'var(--panel)', border: '1px solid var(--line)', padding: 22 }}>
              <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{card.heading}</h3>
              <p style={{ color: '#303846', marginBottom: 8 }}>{card.body}</p>
              <a href={card.link} style={{ color: '#303846', fontWeight: 700, textDecoration: 'none' }}>{card.label}</a>
            </div>
          ))}
        </aside>
      </div>
    </>
  )
}