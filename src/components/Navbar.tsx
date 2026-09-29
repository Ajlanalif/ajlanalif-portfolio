'use client';

import React from 'react';
import { RoleId, ROLES, PORTFOLIO_DATA } from '@/data/portfolio';
import { Logo } from './Logo';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface NavbarProps {
  activeRole: RoleId;
  onOpenRoleModal: () => void;
  cvAvailability: Record<RoleId, string>;
}

const ROLE_NAV_LABELS: Record<RoleId, string> = {
  all: 'Everything',
  backend: 'Backend',
  fullstack: 'Full-Stack',
  dba: 'DBA',
  infra: 'IT Support',
};

export function Navbar({ activeRole, onOpenRoleModal, cvAvailability }: NavbarProps) {
  const currentConfig = ROLES.find((r) => r.id === activeRole) || ROLES[0];
  const cvHref = cvAvailability[activeRole] || '/cv/general.pdf';
  const displayRoleLabel = ROLE_NAV_LABELS[activeRole] || 'Everything';

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(6, 8, 11, 0.75)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Custom Logo & Brand Handle */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          <Logo size={38} />
          <span
            className="mono-val"
            style={{
              fontWeight: 700,
              fontSize: '1.05rem',
              color: '#F8FAFC',
              letterSpacing: '-0.02em',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Ajlan
            <span
              className="blinking-underscore"
              style={{
                color: 'var(--accent-emerald)',
                fontWeight: 800,
                margin: '0 1px',
              }}
            >
              _
            </span>
            Alif
          </span>
        </a>

        {/* Center Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexShrink: 0,
          }}
          className="desktop-nav-links"
        >
          <a href="#home" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            Home
          </a>
          <a href="#about" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            About
          </a>
          <a href="#toolbox" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            Tech Stack
          </a>
          <a href="#projects" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            Projects
          </a>
          <a href="#credentials" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            Credentials
          </a>
          <a href="#contact" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            Contact
          </a>
        </div>

        {/* Right Actions: Constant clean layout matching Everything role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
          {/* Subtle Role Focus Switcher Pill */}
          <button
            type="button"
            onClick={onOpenRoleModal}
            className="navbar-role-pill"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-full)',
              padding: '0.4rem 0.85rem',
              fontSize: '0.8125rem',
              color: '#E2E8F0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-emerald-light)';
              e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
            }}
            title={`Active role focus: ${currentConfig.label}. Click to customize`}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent-emerald)',
                boxShadow: '0 0 8px var(--accent-emerald)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>{displayRoleLabel}</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>▾</span>
          </button>

          {/* Social Links: GitHub & LinkedIn */}
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            title="GitHub: Ajlanalif"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            title="LinkedIn: Sayed Ajlan Al Alif"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={18} />
          </a>

          {/* Constant Download CV CTA */}
          <a
            href={cvHref}
            download
            className="btn-purple"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            title={`Download ${currentConfig.label} CV`}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
