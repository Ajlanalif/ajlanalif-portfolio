'use client';

import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 36, className }: LogoProps) {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      title="Ajlan Alif"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.45))',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Card background */}
          <linearGradient id="logoCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B131E" />
            <stop offset="100%" stopColor="#05070A" />
          </linearGradient>

          {/* Primary Emerald Gradient for 'A' */}
          <linearGradient id="logoEmeraldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Secondary Violet Gradient for interlocking 'A' */}
          <linearGradient id="logoVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="logoEmeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Squircle container background */}
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="12"
          fill="url(#logoCardBg)"
          stroke="rgba(16, 185, 129, 0.4)"
          strokeWidth="1.5"
        />

        {/* Precision circuit ticks */}
        <path
          d="M 6 13 L 6 7 L 12 7"
          stroke="rgba(16, 185, 129, 0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 42 35 L 42 41 L 36 41"
          stroke="rgba(139, 92, 246, 0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Outer 'A' Monogram (Ajlan) in Radiant Emerald */}
        <path
          d="M 12 36 L 24 10 L 36 36"
          stroke="url(#logoEmeraldGrad)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Interlocking 'A' / Crossbar (Alif) in Electric Violet */}
        <path
          d="M 16.5 26.5 L 31.5 26.5"
          stroke="url(#logoVioletGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Inner Apex Chevron */}
        <path
          d="M 20 22 L 24 14 L 28 22"
          stroke="url(#logoVioletGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Glowing Core Apex Dot */}
        <circle
          cx="24"
          cy="10"
          r="2.2"
          fill="#34D399"
          filter="url(#logoEmeraldGlow)"
        />
      </svg>
    </div>
  );
}
