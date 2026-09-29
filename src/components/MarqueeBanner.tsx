'use client';

import React from 'react';

const TECH_ITEMS = [
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'Express.js',
  'FastAPI',
  'PostgreSQL',
  'Oracle 19c',
  'MySQL',
  'Prisma ORM',
  'SQLAlchemy',
  'Docker',
  'Linux (RHEL)',
  'REST APIs',
  'JWT Authentication',
  'GitHub',
  'Vercel',
];

export function MarqueeBanner() {
  return (
    <div className="marquee-ribbon" aria-hidden="true">
      <div className="marquee-track">
        {/* Render twice for continuous loop */}
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, index) => (
          <div
            key={index}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{item}</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.9rem' }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
