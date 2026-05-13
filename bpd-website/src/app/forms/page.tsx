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
    <div style={{ width: 'min(1120px, calc(100% - 36px))', margin: '0 auto' }}>
      <div style={{ padding: 'clamp(42px,7vw,78px) 0 28px' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1 }}>Forms</h1>
        <p style={{ maxWidth: 760, margin: '16px 0 0', color: 'var(--muted)', fontSize: '1.08rem' }}>Official forms for the Berkeley City Police Department.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 14, marginBottom: 32 }}>
        <button
          onClick={() => setFormOpen(true)}
          style={{ background: '#fff', border: '1px solid #d8dde5', padding: '18px 20px', color: '#171b22', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          <strong style={{ display: 'block' }}>Employee Interest Form</strong>
          <span style={{ display: 'block', marginTop: 4, color: '#5e6673', fontSize: '0.92rem' }}>Apply Today!</span>
        </button>
        <div style={{ background: '#eeeeeb', border: '1px solid #d8dde5', padding: '18px 20px', color: '#4d5562' }}>
          <strong style={{ display: 'block' }}>IA Report Form</strong>
          <span style={{ display: 'block', marginTop: 4, fontSize: '0.92rem' }}>Not yet available</span>
        </div>
      </div>

      {formOpen && settings?.employeeFormUrl && (
        <div style={{ marginBottom: 'clamp(42px,6vw,72px)' }}>
          <div style={{ background: '#fff', border: '1px solid #d8dde5', padding: 'clamp(18px,3vw,26px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(1.3rem,2.4vw,1.8rem)' }}>Employee Interest Form</h2>
              <button
                onClick={() => setFormOpen(false)}
                style={{ display: 'inline-flex', border: '1px solid #d8dde5', borderRadius: 3, background: '#f5f6f8', padding: '8px 12px', color: '#171b22', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Close
              </button>
            </div>
            <iframe
              src={settings.employeeFormUrl}
              title="Berkeley City Police Department Employee Interest Form"
              style={{ width: '100%', minHeight: 780, border: '1px solid #d8dde5', background: '#fff' }}
            >
              Loading...
            </iframe>
          </div>
        </div>
      )}
    </div>
  )
}