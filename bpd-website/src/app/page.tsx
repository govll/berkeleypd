import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import Link from 'next/link'

export const revalidate = 60

export default async function Home() {
  const settings = await client.fetch(siteSettingsQuery)

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>Berkeley City Police Department</h1>
            <p>{settings?.tagline}</p>
          </div>
          <div className="hero-logo">
            <img src="/assets/logo.png" alt="Berkeley City Police Department" />
          </div>
        </div>
      </section>

      <div className="mission">
        <h2>Mission Statement</h2>
        <p>{settings?.missionStatement}</p>
      </div>

      <div className="home-layout">
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
        <aside className="sidebar-stack">
          {[
            { heading: 'Recruitment', body: 'Interested in joining the department?', link: '/opportunities', label: 'View opportunities' },
            { heading: 'Leadership', body: 'Learn about the Chief and command staff.', link: '/meet-the-chief', label: 'Meet the Chief' },
            { heading: 'Recognition', body: 'View service awards and commendations.', link: '/service-recognition', label: 'Service recognition' },
            { heading: 'Public Information', body: 'Press releases and department news.', link: '/public-information', label: 'View updates' },
            { heading: 'Forms', body: 'Applications and department request forms.', link: '/forms', label: 'Open forms' },
          ].map((card) => (
            <div key={card.heading} className="sidebar-card">
              <h3>{card.heading}</h3>
              <p style={{ color: '#303846', marginBottom: 8 }}>{card.body}</p>
              <Link href={card.link} style={{ color: '#303846', fontWeight: 700, textDecoration: 'none' }}>{card.label}</Link>
            </div>
          ))}
        </aside>
      </div>
    </>
  )
}