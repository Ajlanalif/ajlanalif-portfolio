'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function CompetitiveStrip() {
  return (
    <section
      id="competitive"
      style={{
        padding: '5rem 1.5rem 3rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.75rem', position: 'relative' }}>
        <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
          <span className="pill-badge">ALGORITHMIC RIGOR</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}
        >
          FOUNDATIONS IN PROBLEM <span className="italic-accent">SOLVING</span>
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9375rem',
            maxWidth: '650px',
            margin: '0.75rem auto 0',
            lineHeight: 1.6,
          }}
        >
          Demonstrated algorithmic discipline, time-complexity control, and structured data
          handling through continuous problem solving across global competitive platforms.
        </p>
      </div>

      {/* Main Competitive Card */}
      <div
        className="glass-card"
        style={{
          padding: '2.25rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(13, 17, 23, 0.75) 50%, rgba(139, 92, 246, 0.04) 100%)',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Left Side: Stat & Core Focus */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', maxWidth: '480px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.875rem', flexWrap: 'wrap' }}>
            <span
              className="mono-val"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                fontWeight: 800,
                color: 'var(--accent-emerald-light)',
                lineHeight: 1,
                textShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
              }}
            >
              {PORTFOLIO_DATA.competitive.problemCount}
            </span>
            <span
              style={{
                fontSize: '1.125rem',
                color: '#FFFFFF',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              Algorithmic Problems Solved
            </span>
          </div>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Data Structures &bull; Graph Theory &bull; Dynamic Programming &bull; Greedy Algorithms &bull; Complexity Optimization
          </p>
        </div>

        {/* Right Side: Interactive Platform Chips */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {PORTFOLIO_DATA.competitive.profiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-tag"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1rem',
                background: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                color: '#F8FAFC',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-emerald-light)';
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <strong style={{ color: 'var(--accent-emerald-light)', fontWeight: 600 }}>
                {profile.platform}
              </strong>
              {profile.rating && (
                <span
                  className="mono-val"
                  style={{
                    color: 'var(--accent-violet)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    background: 'rgba(139, 92, 246, 0.15)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                  }}
                >
                  {profile.rating}
                </span>
              )}
              <span style={{ fontSize: '0.75rem', opacity: 0.5, marginLeft: '0.2rem' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
