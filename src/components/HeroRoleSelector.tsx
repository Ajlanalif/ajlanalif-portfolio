'use client';

import React, { useRef } from 'react';
import { ROLES, RoleId, PORTFOLIO_DATA } from '@/data/portfolio';

interface HeroRoleSelectorProps {
  activeRole: RoleId;
  onRoleSelect: (role: RoleId) => void;
  cvAvailability: Record<RoleId, string>;
  isSticky?: boolean;
}

export function HeroRoleSelector({
  activeRole,
  onRoleSelect,
  cvAvailability,
  isSticky = false,
}: HeroRoleSelectorProps) {
  const currentConfig = ROLES.find((r) => r.id === activeRole) || ROLES[0];
  const cvHref = cvAvailability[activeRole] || '/cv/general.pdf';
  const roleGroupRef = useRef<HTMLDivElement>(null);

  // Arrow key navigation for accessible radiogroup
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % ROLES.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + ROLES.length) % ROLES.length;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      onRoleSelect(ROLES[nextIndex].id);
      const buttons = roleGroupRef.current?.querySelectorAll<HTMLButtonElement>('button[role="radio"]');
      if (buttons && buttons[nextIndex]) {
        buttons[nextIndex].focus();
      }
    }
  };

  if (isSticky) {
    return (
      <div
        style={{
          position: 'sticky',
          top: '0.75rem',
          zIndex: 40,
          marginBottom: '2rem',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>I&apos;m hiring for:</span>
            <div
              role="radiogroup"
              aria-label="Role selector"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}
            >
              {ROLES.map((role) => {
                const isSelected = role.id === activeRole;
                return (
                  <button
                    key={role.id}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => onRoleSelect(role.id)}
                    className={`role-btn ${isSelected ? 'role-btn-active' : ''}`}
                    style={{
                      width: 'auto',
                      minHeight: '36px',
                      padding: '0.35rem 0.7rem',
                      fontSize: '0.8125rem',
                    }}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>
          <a
            href={cvHref}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-amber)',
              color: '#080B10',
              fontWeight: 600,
              fontSize: '0.8125rem',
            }}
          >
            {currentConfig.cvLabel}
          </a>
        </div>
      </div>
    );
  }

  // Divide roles into clean 3+2 layout
  const firstRowRoles = ROLES.slice(0, 3);
  const secondRowRoles = ROLES.slice(3, 5);

  return (
    <header style={{ marginBottom: '2.5rem' }}>
      {/* Top Identity bar: Name, Location, separate spaced links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1.25rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '2rem',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '2.25rem',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
            }}
          >
            {PORTFOLIO_DATA.identity.name}
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
            {PORTFOLIO_DATA.identity.location}
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div className="spaced-links" style={{ justifyContent: 'flex-end' }}>
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`}>{PORTFOLIO_DATA.contact.email}</a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Hero statement card - visibly frosted over background SVG */}
      <div
        className="glass-panel"
        style={{
          padding: '2.25rem',
          position: 'relative',
        }}
      >
        {/* Dynamic hero sentence per role */}
        <p
          className="content-entering"
          key={currentConfig.id}
          style={{
            fontSize: '1.1875rem',
            lineHeight: 1.6,
            color: 'var(--text-primary)',
            maxWidth: '64ch',
            marginBottom: '2rem',
            fontWeight: 400,
          }}
        >
          {currentConfig.heroSentence}
        </p>

        {/* The Role Selector: Accessible Radiogroup with clean 3+2 layout */}
        <div style={{ marginBottom: '1.75rem' }}>
          <label
            id="role-selector-label"
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
            }}
          >
            I&apos;m hiring for:
          </label>

          <div
            ref={roleGroupRef}
            role="radiogroup"
            aria-labelledby="role-selector-label"
            className="role-grid-container"
          >
            {/* Row 1: 3 roles (Backend, Full-Stack, DBA) */}
            <div className="role-grid-row-3">
              {firstRowRoles.map((role, idx) => {
                const isSelected = role.id === activeRole;
                return (
                  <button
                    key={role.id}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    onClick={() => onRoleSelect(role.id)}
                    className={`role-btn ${isSelected ? 'role-btn-active' : ''}`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>

            {/* Row 2: 2 roles (Infrastructure, Everything) */}
            <div className="role-grid-row-2">
              {secondRowRoles.map((role, idx) => {
                const isSelected = role.id === activeRole;
                return (
                  <button
                    key={role.id}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    onKeyDown={(e) => handleKeyDown(e, idx + 3)}
                    onClick={() => onRoleSelect(role.id)}
                    className={`role-btn ${isSelected ? 'role-btn-active' : ''}`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic CV Download Action (Single clean action; Education/CGPA moved out of hero) */}
        <div>
          <a
            href={cvHref}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-amber)',
              color: '#080B10',
              fontWeight: 600,
              fontSize: '0.875rem',
              transition: 'background 150ms ease',
            }}
          >
            {currentConfig.cvLabel} (PDF)
          </a>
        </div>
      </div>
    </header>
  );
}
