'use client';

import React from 'react';
import { PORTFOLIO_DATA, RoleId, ROLES } from '@/data/portfolio';
import { Logo } from './Logo';

interface FooterCTAProps {
  activeRole: RoleId;
  cvAvailability: Record<RoleId, string>;
}

export function FooterCTA({ activeRole, cvAvailability }: FooterCTAProps) {
  const currentConfig = ROLES.find((r) => r.id === activeRole) || ROLES[0];
  const cvHref = cvAvailability[activeRole] || '/cv/general.pdf';

  return (
    <footer id="contact" style={{ position: 'relative', marginTop: '6rem' }}>
      {/* Bottom spotlight */}
      <div className="spotlight-purple" />

      {/* Main CTA Banner */}
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F8FAFC',
            marginBottom: '1rem',
          }}
        >
          Let&apos;s Build Something <span className="italic-accent" style={{ color: '#34D399' }}>Exceptional</span>
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '60ch',
            margin: '0 auto 2.5rem',
          }}
        >
          Open for entry-level opportunities across Backend Engineering, Full-Stack Development, Database Administration, and Infrastructure Support.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a href={cvHref} download className="btn-purple" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
            {currentConfig.cvLabel} (PDF)
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="btn-emerald-outline"
            style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            Email: {PORTFOLIO_DATA.contact.email}
          </a>
        </div>
      </div>

      {/* Bottom Information Bar matching reference image */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: 'rgba(6, 8, 11, 0.95)',
          padding: '3rem 1.5rem 2rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Logo & Slogan */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Logo size={44} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: '#F8FAFC' }}>
                Sayed Ajlan Al Alif
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                B.Sc. in CSE, Comilla University (CGPA 3.68)
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.25rem', color: '#F8FAFC', fontWeight: 600 }}>
              Is there a technical <span className="italic-accent" style={{ color: '#A78BFA' }}>challenge</span> brewing in your team?
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                style={{
                  color: 'var(--accent-emerald-light)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                {PORTFOLIO_DATA.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Links & Copyright */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#toolbox">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Sayed Ajlan Al Alif. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
