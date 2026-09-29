'use client';

import React from 'react';
import { PORTFOLIO_DATA, RoleId } from '@/data/portfolio';

interface TechToolboxProps {
  activeRole: RoleId;
}

export function TechToolbox({ activeRole }: TechToolboxProps) {
  // Retrieve the full set of skills for the active role or all
  const roleGroups = PORTFOLIO_DATA.skillsByRole[activeRole] || PORTFOLIO_DATA.skillsByRole.all;

  const roleLabelMap: Record<RoleId, string> = {
    backend: 'BACKEND ENGINEERING',
    fullstack: 'FULL-STACK DEVELOPMENT',
    dba: 'DATABASE ADMINISTRATION',
    infra: 'INFRASTRUCTURE & IT SUPPORT',
    all: 'ALL DISCIPLINES',
  };

  return (
    <section
      id="toolbox"
      style={{
        padding: '6rem 1.5rem 5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Overhead Spotlight Beam from the top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '900px',
          height: '250px',
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16, 185, 129, 0.22) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative', zIndex: 10 }}>
        <div className="pill-badge" style={{ margin: '0 auto 1rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
          Tech Stack
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#F8FAFC',
          }}
        >
          MY TECH <span className="italic-accent" style={{ color: '#34D399' }}>TOOLBOX</span>
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Filtered strictly for: <strong style={{ color: 'var(--accent-emerald-light)' }}>{roleLabelMap[activeRole] || activeRole.toUpperCase()}</strong>
        </p>
      </div>

      {/* Grid of skill category cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {roleGroups.map((group) => (
          <div
            key={group.name}
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              borderTop: '2px solid rgba(16, 185, 129, 0.4)',
              background: 'rgba(13, 17, 23, 0.72)',
            }}
          >
            {/* Top Bar with Status Dots and Item Count */}
            <div
              style={{
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8B5CF6' }} />
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <div
                className="mono-val"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.02em',
                }}
              >
                {group.skills.length} skills
              </div>
            </div>

            {/* Category Title with Consistent Height Baseline */}
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--accent-emerald-light)',
                minHeight: '2.85rem',
                display: 'flex',
                alignItems: 'flex-start',
                lineHeight: 1.3,
                marginBottom: '1rem',
              }}
            >
              {group.name}
            </h3>

            {/* Skills chips starting immediately below the title */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                gap: '0.45rem',
              }}
            >
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="tech-tag"
                  style={{
                    background: 'rgba(16, 185, 129, 0.06)',
                    borderColor: 'rgba(16, 185, 129, 0.25)',
                    color: '#F1F5F9',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
