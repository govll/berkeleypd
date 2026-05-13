'use client'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'

export default function Forms() {
  const [settings, setSettings] = useState<any>(null)
  const [formOpen, setFormOpen] = useState(false)

  useEffect(() => {
    client.fetch(siteSettingsQuery).then(setSettings)
  }, [])

  return (
    <>
      <div className="page-header">
        <h1>Forms</h1>
        <p>Official forms for the Berkeley City Police Department.</p>
      </div>
      <div className="container" style={{ paddingBottom: 'clamp(40px,6vw,76px)' }}>
        <div className="forms-grid">
          <button
            onClick={() => setFormOpen(true)}
            style={{ background: '#fff', border: '1px solid var(--line)', padding: '18px 20px', color: 'var(--ink)', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            <strong style={{ display: 'block' }}>Employee Interest Form</strong>
            <span style={{ display: 'block', marginTop: 4, color: 'var(--muted)', fontSize: '0.92rem' }}>Apply Today!</span>
          </button>
          <div style={{ background: '#eeeeeb', border: '1px solid var(--line)', padding: '18px 20px', color: '#4d5562' }}>
            <strong style={{ display: 'block' }}>IA Report Form</strong>
            <span style={{ display: 'block', marginTop: 4, fontSize: '0.92rem' }}>Not yet available</span>
          </div>
        </div>

        {formOpen && settings?.employeeFormUrl && (
          <div style={{ marginBottom: 'clamp(42px,6vw,72px)' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
                <h2 style={{ margin: 0 }}>Employee Interest Form</h2>
                <button
                  onClick={() => setFormOpen(false)}
                  style={{ border: '1px solid var(--line)', borderRadius: 3, background: '#f5f6f8', padding: '8px 12px', color: 'var(--ink)', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Close
                </button>
              </div>
              <iframe
                src={settings.employeeFormUrl}
                title="Berkeley City Police Department Employee Interest Form"
                style={{ width: '100%', minHeight: 780, border: '1px solid var(--line)', background: '#fff' }}
              >
                Loading...
              </iframe>
            </div>
          </div>
        )}
      </div>
    </>
  )
}