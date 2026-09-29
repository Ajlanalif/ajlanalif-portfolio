'use client';

import React from 'react';

interface OrbitalRadarProps {
  size?: number;
}

export function OrbitalRadar({ size = 420 }: OrbitalRadarProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 75%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <svg
        viewBox="0 0 400 400"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
          </linearGradient>

          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Radar Rings */}
        <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" />

        {/* Circuit Connecting Wires from center to nodes */}
        {/* Wire 1: Top-Right to Node.js */}
        <path d="M 200 170 L 200 90 L 290 90" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" />
        {/* Wire 2: Top-Left to FastAPI */}
        <path d="M 180 180 L 110 180 L 110 110" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" />
        {/* Wire 3: Bottom-Left to Linux */}
        <path d="M 175 220 L 80 220 L 80 280" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1.5" />
        {/* Wire 4: Bottom-Right to Oracle 19c */}
        <path d="M 225 220 L 320 220 L 320 290" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" />
        {/* Wire 5: Top center */}
        <path d="M 200 140 L 200 40" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />

        {/* Center Core Chip */}
        <rect
          x="170"
          y="170"
          width="60"
          height="60"
          rx="14"
          fill="#0B1017"
          stroke="#10B981"
          strokeWidth="2"
          filter="url(#nodeGlow)"
        />
        <text
          x="200"
          y="207"
          textAnchor="middle"
          fill="#10B981"
          fontSize="18"
          fontWeight="700"
          fontFamily="var(--font-mono)"
        >
          &lt;/&gt;
        </text>

        {/* Orbiting Satellite Tech Nodes */}
        {/* Node 1: Node.js */}
        <g transform="translate(290, 70)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#0E1622" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
          <text x="20" y="25" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="600" fontFamily="var(--font-mono)">
            JS
          </text>
        </g>

        {/* Node 2: FastAPI / Python */}
        <g transform="translate(90, 90)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#0E1622" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1.5" />
          <text x="20" y="25" textAnchor="middle" fill="#A78BFA" fontSize="13" fontWeight="600" fontFamily="var(--font-mono)">
            Py
          </text>
        </g>

        {/* Node 3: Linux RHEL */}
        <g transform="translate(60, 260)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#0E1622" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
          <text x="20" y="25" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">
            RHEL
          </text>
        </g>

        {/* Node 4: Oracle 19c */}
        <g transform="translate(300, 270)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#0E1622" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1.5" />
          <text x="20" y="25" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">
            19c
          </text>
        </g>

        {/* Node 5: PostgreSQL */}
        <g transform="translate(180, 20)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#0E1622" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
          <text x="20" y="25" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="600" fontFamily="var(--font-mono)">
            PG
          </text>
        </g>

        {/* Node 6: Docker */}
        <g transform="translate(180, 340)">
          <rect x="0" y="0" width="40" height="40" rx="10" fill="#0E1622" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          <text x="20" y="25" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">
            DOC
          </text>
        </g>
      </svg>
    </div>
  );
}
