'use client';

import React, { useEffect, useState } from 'react';
import { RoleId, ROLES } from '@/data/portfolio';

interface RoleInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: RoleId) => void;
  activeRole: RoleId;
}

export function RoleInquiryModal({
  isOpen,
  onClose,
  onSelectRole,
  activeRole,
}: RoleInquiryModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const roleIcons: Record<RoleId, string> = {
    backend: '⚙️',
    fullstack: '⚡',
    dba: '🗄️',
    infra: '🖥️',
    all: '🌐',
  };

  const handleSelect = (roleId: RoleId) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('role_inquiry_dismissed', 'true');
    }
    onSelectRole(roleId);
    onClose();
  };

  // If user dismisses or clicks skip, route to Everything ('all')
  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('role_inquiry_dismissed', 'true');
    }
    onSelectRole('all');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="role-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(3, 5, 8, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem 2rem',
          position: 'relative',
          borderRadius: '20px',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(13, 17, 23, 0.95) 40%, rgba(139, 92, 246, 0.06) 100%)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(16, 185, 129, 0.15)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.85rem' }}>
            <span className="pill-badge">WELCOME RECRUITER &amp; VISITOR</span>
          </div>

          <h2
            id="role-modal-title"
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '0.65rem',
              lineHeight: 1.25,
            }}
          >
            What kind of <span className="italic-accent" style={{ color: '#34D399' }}>engineer</span> are you looking for?
          </h2>

          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              maxWidth: '460px',
              margin: '0 auto',
              lineHeight: 1.55,
            }}
          >
            Select your hiring focus to customize relevant projects, architecture, and tech stack:
          </p>
        </div>

        {/* Clean Role Buttons List (Subheadings removed) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
          {ROLES.map((role) => {
            const isSelected = role.id === activeRole;
            const icon = roleIcons[role.id];

            return (
              <button
                key={role.id}
                onClick={() => handleSelect(role.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: isSelected
                    ? 'linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(139, 92, 246, 0.08) 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected
                    ? '1px solid var(--accent-emerald)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? '0 0 20px rgba(16, 185, 129, 0.2)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: isSelected
                        ? 'rgba(16, 185, 129, 0.25)'
                        : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isSelected ? '#FFFFFF' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {role.label}
                    {isSelected && (
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          background: 'var(--accent-emerald)',
                          color: '#06080B',
                          fontWeight: 700,
                        }}
                      >
                        ACTIVE
                      </span>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    color: isSelected ? 'var(--accent-emerald-light)' : 'rgba(255, 255, 255, 0.3)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginLeft: '1rem',
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info & Skip button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            You can change this anytime from the navigation bar.
          </span>
          <button
            onClick={handleDismiss}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-emerald-light)',
              fontSize: '0.8125rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '0.25rem 0.5rem',
              fontWeight: 500,
            }}
          >
            Skip &amp; view general portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
