'use client';

import React from 'react';
import { RoleId } from '@/data/portfolio';

interface BackgroundTopologyProps {
  role: RoleId;
}

export function BackgroundTopology({ role }: BackgroundTopologyProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <div
        key={role}
        className="schema-entering"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 1000"
          preserveAspectRatio="xMidYMin slice"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <defs>
            <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#64748B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* =========================================================================
              BACKEND TOPOLOGY:
              Dense hairline ER tables passing BEHIND panels in text-free zones.
              - Panel right edge is at x=1150px.
              - Panel left edge is at x=290px.
              - Reading zone: x: 320 to 920px (100% CLEAR of any lines or nodes).
              ========================================================================= */}
          {(role === 'backend' || role === 'all') && (
            <g id="topology-backend">
              {/* ER Table 1: Upper Right (x: 1070 to 1310, y: 150 to 310)
                  Passes 80px BEHIND the empty right padding of Hero card (starts at 1070, border is 1150).
                  Outside panel on right: 1150 to 1310 (sharp lines).
                  Inside panel: 1070 to 1150 (diffused haze, zero text overlap!). */}
              <g transform="translate(1070, 150)">
                <rect x="0" y="0" width="240" height="150" fill="none" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="28" x2="240" y2="28" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="52" x2="240" y2="52" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="76" x2="240" y2="76" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="100" x2="240" y2="100" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="124" x2="240" y2="124" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="60" y1="0" x2="60" y2="150" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="170" y1="28" x2="170" y2="150" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1" />
              </g>

              {/* ER Table 2: Bottom-Left Inter-Section (x: 170 to 370, y: 470 to 600)
                  Passes 80px BEHIND the bottom-left empty margin of Hero card (border is 290px).
                  Inside panel: 290 to 370.
                  Outside panel: 170 to 290.
                  Located at y:470-600, well below the hero controls and above project body. */}
              <g transform="translate(170, 470)">
                <rect x="0" y="0" width="200" height="130" fill="none" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="26" x2="200" y2="26" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="48" x2="200" y2="48" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="70" x2="200" y2="70" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="92" x2="200" y2="92" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="114" x2="200" y2="114" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="50" y1="0" x2="50" y2="130" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
              </g>

              {/* ER Table 3: Middle Right (x: 1070 to 1310, y: 640 to 800)
                  Passes 80px BEHIND the right side of the Projects panel.
                  Zero text overlap! */}
              <g transform="translate(1070, 640)">
                <rect x="0" y="0" width="240" height="150" fill="none" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="28" x2="240" y2="28" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="52" x2="240" y2="52" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="76" x2="240" y2="76" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="100" x2="240" y2="100" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="124" x2="240" y2="124" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="65" y1="0" x2="65" y2="150" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
              </g>

              {/* Connecting Pipeline bus lines: Strictly routed in outer margins */}
              <path
                d="M 1310 220 L 1380 220 L 1380 710 L 1310 710"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 170 530 L 100 530 L 100 220 L 220 220"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Amber Accent Nodes (Exactly 2 small nodes, completely in margins) */}
              <circle cx="1380" cy="220" r="3.5" fill="#F59E0B" />
              <circle cx="100" cy="530" r="3.5" fill="#F59E0B" />
            </g>
          )}

          {/* =========================================================================
              FULL-STACK TOPOLOGY
              ========================================================================= */}
          {role === 'fullstack' && (
            <g id="topology-fullstack">
              <g transform="translate(1080, 160)">
                <rect x="0" y="0" width="230" height="140" fill="none" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="26" x2="230" y2="26" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="50" x2="230" y2="50" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="74" x2="230" y2="74" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="98" x2="230" y2="98" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="60" y1="0" x2="60" y2="140" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
              </g>

              <g transform="translate(170, 480)">
                <rect x="0" y="0" width="190" height="120" fill="none" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="24" x2="190" y2="24" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="1.5" />
                <line x1="0" y1="46" x2="190" y2="46" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="68" x2="190" y2="68" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="90" x2="190" y2="90" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="50" y1="0" x2="50" y2="120" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
              </g>

              <path
                d="M 1310 230 L 1380 230 L 1380 680 L 1260 680"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 170 540 L 90 540 L 90 200 L 220 200"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />

              <circle cx="1380" cy="230" r="3.5" fill="#F59E0B" />
              <circle cx="90" cy="540" r="3.5" fill="#F59E0B" />
            </g>
          )}

          {/* =========================================================================
              DATABASE ADMINISTRATOR TOPOLOGY
              ========================================================================= */}
          {role === 'dba' && (
            <g id="topology-dba">
              <g transform="translate(1080, 150)">
                <rect x="0" y="0" width="240" height="160" fill="none" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="28" x2="240" y2="28" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="52" x2="240" y2="52" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="0" y1="76" x2="240" y2="76" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="0" y1="100" x2="240" y2="100" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="0" y1="124" x2="240" y2="124" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="70" y1="0" x2="70" y2="160" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
              </g>

              <g transform="translate(160, 470)">
                <rect x="0" y="0" width="210" height="140" fill="none" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="26" x2="210" y2="26" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="48" x2="210" y2="48" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="0" y1="70" x2="210" y2="70" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="0" y1="92" x2="210" y2="92" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="0" y1="114" x2="210" y2="114" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
                <line x1="60" y1="0" x2="60" y2="140" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="1" />
              </g>

              <path
                d="M 1320 230 L 1390 230 L 1390 670 L 1260 670"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 160 540 L 80 540 L 80 210 L 220 210"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />

              <circle cx="1390" cy="230" r="3.5" fill="#F59E0B" />
              <circle cx="80" cy="540" r="3.5" fill="#F59E0B" />
            </g>
          )}

          {/* =========================================================================
              INFRASTRUCTURE / IT SUPPORT TOPOLOGY
              ========================================================================= */}
          {role === 'infra' && (
            <g id="topology-infra">
              <g transform="translate(1080, 150)">
                <rect x="0" y="0" width="240" height="150" fill="none" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="28" x2="240" y2="28" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="54" x2="240" y2="54" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="80" x2="240" y2="80" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="106" x2="240" y2="106" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="60" y1="0" x2="60" y2="150" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="150" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
              </g>

              <g transform="translate(160, 470)">
                <rect x="0" y="0" width="200" height="130" fill="none" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="26" x2="200" y2="26" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1.5" />
                <line x1="0" y1="52" x2="200" y2="52" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="78" x2="200" y2="78" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="0" y1="104" x2="200" y2="104" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
                <line x1="50" y1="0" x2="50" y2="130" stroke="rgba(148, 163, 184, 0.22)" strokeWidth="1" />
              </g>

              <path
                d="M 1320 220 L 1390 220 L 1390 690 L 1260 690"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 160 535 L 80 535 L 80 200 L 220 200"
                stroke="url(#slateGrad)"
                strokeWidth="1.5"
                fill="none"
              />

              <circle cx="1390" cy="220" r="3.5" fill="#F59E0B" />
              <circle cx="80" cy="535" r="3.5" fill="#F59E0B" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
