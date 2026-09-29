'use client';

import React from 'react';
import { RoleId, ROLES, PORTFOLIO_DATA } from '@/data/portfolio';
import { OrbitalRadar } from './OrbitalRadar';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

interface HeroSectionProps {
  activeRole: RoleId;
  cvAvailability: Record<RoleId, string>;
  onOpenRoleModal: () => void;
}

export function HeroSection({ activeRole, cvAvailability, onOpenRoleModal }: HeroSectionProps) {
  const currentConfig = ROLES.find((r) => r.id === activeRole) || ROLES[0];
  const cvHref = cvAvailability[activeRole] || '/cv/general.pdf';

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        padding: '5rem 1.5rem 4rem',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      {/* Top spotlight glow */}
      <div className="spotlight-top" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
        }}
        className="hero-grid-responsive"
      >
        {/* Left Column: Heading, Stats, Focus Bio, and Direct Action CTAs */}
        <div>
          <div className="pill-badge" style={{ marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            CSE Graduate · Comilla University
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#F8FAFC',
              marginBottom: '1.5rem',
            }}
          >
            From <span className="italic-accent" style={{ color: '#34D399' }}>Architecture</span> to Scale I Build Systems You <span className="italic-accent" style={{ color: '#A78BFA' }}>Rely On</span> ⚡
          </h1>

          {/* Key Metrics Stats */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              marginBottom: '2rem',
              paddingBottom: '1.75rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <div
                className="mono-val"
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 700,
                  color: 'var(--accent-emerald-light)',
                  lineHeight: 1,
                }}
              >
                700+
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                Algorithmic Problems
              </div>
            </div>

            <div>
              <div
                className="mono-val"
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1,
                }}
              >
                3.68
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                CGPA (Completed 2026)
              </div>
            </div>

            <div>
              <div
                className="mono-val"
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 700,
                  color: '#A78BFA',
                  lineHeight: 1,
                }}
              >
                4
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                Hackathon &amp; Honors
              </div>
            </div>
          </div>

          {/* Tailored Focus Description */}
          <div style={{ marginBottom: '2rem' }}>
            <p
              key={currentConfig.id}
              style={{
                fontSize: '1.0625rem',
                color: '#CBD5E1',
                lineHeight: 1.6,
                maxWidth: '620px',
                marginBottom: '1rem',
              }}
            >
              {currentConfig.heroSentence}
            </p>

            {/* Subtle Active Focus Indicator Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                }}
              />
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                Targeting focus:
              </span>
              <strong style={{ fontSize: '0.8125rem', color: '#FFFFFF', fontWeight: 600 }}>
                {currentConfig.label}
              </strong>
              <button
                type="button"
                onClick={onOpenRoleModal}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-violet)',
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: '0 0.2rem',
                  fontWeight: 500,
                }}
                title="Change active focus"
              >
                (Change)
              </button>
            </div>
          </div>

          {/* Direct CTA Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={cvHref}
              download
              className="btn-purple"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
            >
              Download {currentConfig.label} CV (PDF)
            </a>
            <a
              href="#projects"
              className="btn-emerald-outline"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
            >
              Explore Projects &rarr;
            </a>
          </div>

          {/* Direct Social & Contact Channels */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-badge-link"
              title="GitHub Profile: Ajlanalif"
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
              <span style={{ opacity: 0.5, fontSize: '0.75rem' }}>↗</span>
            </a>

            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-badge-link"
              title="LinkedIn Profile: Sayed Ajlan Al Alif"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
              <span style={{ opacity: 0.5, fontSize: '0.75rem' }}>↗</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="social-badge-link"
              title="Direct Email Contact"
            >
              <MailIcon size={16} />
              <span>{PORTFOLIO_DATA.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: High-Tech Orbital Radar Node Console */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <OrbitalRadar size={420} />

          {/* Floating Telemetry Tag */}
          <div
            className="glass-card"
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 10px #10B981',
              }}
            />
            <span style={{ fontSize: '0.8125rem', color: '#F8FAFC', fontWeight: 500 }}>
              Sayed Ajlan Al Alif · Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
