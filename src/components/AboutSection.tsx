'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="about-grid-responsive"
      >
        {/* Left Column */}
        <div>
          <div className="pill-badge">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            About Me
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#F8FAFC',
              marginBottom: '1.5rem',
            }}
          >
            EVERYTHING ABOUT <span className="italic-accent" style={{ color: '#34D399' }}>ME</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem',
            }}
          >
            I am a Computer Science and Engineering graduate from{' '}
            <strong style={{ color: '#F8FAFC' }}>Comilla University, Bangladesh</strong> (Completed July 2026,{' '}
            <span className="mono-val" style={{ color: 'var(--accent-emerald-light)' }}>
              CGPA 3.68 / 4.00
            </span>
            ), applying for entry-level roles across Backend Engineering, Full-Stack Development, Database Administration, and IT Infrastructure.
          </p>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '1.75rem',
            }}
          >
            With <strong style={{ color: '#F8FAFC' }}>700+ algorithmic problems solved</strong> across competitive programming platforms and recognized distinctions including{' '}
            <strong style={{ color: 'var(--accent-emerald-light)' }}>NASA Space Apps Challenge 2025 Global Finalist</strong>, I build structured backend systems, design normalized relational schemas with strict ACID integrity, and configure dependable Linux and networking environments.
          </p>

          {/* Key pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '1rem',
                borderLeft: '3px solid var(--accent-emerald)',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#F8FAFC' }}>
                Backend &amp; Databases
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Node.js, Express, Flask, PostgreSQL, Oracle 19c
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1rem',
                borderLeft: '3px solid var(--accent-violet)',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#F8FAFC' }}>
                Systems &amp; Leadership
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                RHCSA Linux, Tech Team Lead (CSE Society)
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="btn-emerald-outline"
            >
              Send Message
            </a>
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              GitHub Profile &rarr;
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Schematic Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent-emerald-light)',
              marginBottom: '1rem',
            }}
          >
            Academic &amp; Systems Dossier
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#F8FAFC' }}>
              Comilla University
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              B.Sc. in Computer Science and Engineering
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--accent-emerald)', marginTop: '0.35rem' }}>
              Feb 2022 to Jul 2026 (Completed) · CGPA <span className="mono-val">3.68 / 4.00</span>
            </div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.5rem' }}>
              Key Technical Focus
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'REST APIs', 'JWT Auth', 'RBAC'].map(
                (item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.5rem' }}>
              Location &amp; Communication
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Dhaka, Bangladesh · Open for on-site &amp; remote roles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
