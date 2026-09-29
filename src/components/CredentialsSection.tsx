'use client';

import React from 'react';
import { PORTFOLIO_DATA, RoleId } from '@/data/portfolio';

interface CredentialsSectionProps {
  activeRole: RoleId;
}

export function CredentialsSection({ activeRole }: CredentialsSectionProps) {
  // Reorder training per role: DBA puts Oracle first; Infra puts RHCSA first
  const trainingItems = [...PORTFOLIO_DATA.training].sort((a, b) => {
    if (activeRole === 'dba' && a.id === 'oracle') return -1;
    if (activeRole === 'infra' && a.id === 'rhcsa') return -1;
    return 0;
  });

  // Reorder leadership per role: Infra puts CSE Society first
  const leadershipItems = [...PORTFOLIO_DATA.leadership].sort((a, b) => {
    if (activeRole === 'infra' && a.id === 'cse-society') return -1;
    return 0;
  });

  return (
    <section
      id="credentials"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="pill-badge" style={{ margin: '0 auto 1rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
          Verified Credentials
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#F8FAFC',
          }}
        >
          HONORS, CERTIFICATIONS &amp; <span className="italic-accent" style={{ color: '#34D399' }}>LEADERSHIP</span>
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Proven competitive rigor and institutional execution
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
        }}
        className="credentials-grid-responsive"
      >
        {/* Left Column: Testimonial-styled Major Achievements Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            position: 'relative',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Big quotation mark matching reference image */}
          <div
            style={{
              fontSize: '4.5rem',
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
              color: 'var(--accent-violet)',
              opacity: 0.5,
              marginBottom: '-1rem',
            }}
          >
            “
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Recognized Global &amp; National Distinction
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {PORTFOLIO_DATA.achievements.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: 600, color: 'var(--accent-emerald-light)', fontSize: '0.95rem' }}>
                      {item.title}
                    </div>
                    {item.year && <span className="mono-val" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.year}</span>}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#F8FAFC', marginTop: '0.25rem' }}>
                    {item.event}
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        color: 'var(--accent-violet)',
                        marginTop: '0.35rem',
                      }}
                    >
                      View NASA Team Roster &rarr;
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Comilla University CSE intra &amp; inter-university track record
            </span>
          </div>
        </div>

        {/* Right Column: Training & Leadership */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Training Cards */}
          {trainingItems.map((train) => (
            <div
              key={train.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderLeft: '4px solid var(--accent-emerald)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC' }}>
                  {train.title}
                </h4>
                {train.status && (
                  <span
                    className="tech-tag"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      borderColor: 'rgba(16, 185, 129, 0.4)',
                      color: 'var(--accent-emerald-light)',
                    }}
                  >
                    {train.status}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--accent-emerald-light)', marginBottom: '0.85rem' }}>
                {train.institution}
              </div>

              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
                {train.points.map((pt, idx) => (
                  <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {pt}
                  </li>
                ))}
              </ul>

              {train.certificateUrl && (
                <a
                  href={train.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple"
                  style={{
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.75rem',
                  }}
                >
                  Verify Certificate &rarr;
                </a>
              )}
            </div>
          ))}

          {/* Leadership Card */}
          {leadershipItems.map((lead) => (
            <div
              key={lead.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderLeft: '4px solid var(--accent-violet)',
              }}
            >
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC' }}>
                {lead.title}
              </h4>
              <div style={{ fontSize: '0.8125rem', color: '#A78BFA', marginBottom: '0.85rem' }}>
                {lead.organization}
              </div>

              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {lead.points.map((pt, idx) => (
                  <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
