'use client';

import React, { useState, useEffect } from 'react';
import { RoleId, ROLES, PORTFOLIO_DATA } from '@/data/portfolio';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { TechToolbox } from './TechToolbox';
import { MarqueeBanner } from './MarqueeBanner';
import { ProjectsShowcase } from './ProjectsShowcase';
import { CredentialsSection } from './CredentialsSection';
import { CompetitiveStrip } from './CompetitiveStrip';
import { FooterCTA } from './FooterCTA';
import { RoleInquiryModal } from './RoleInquiryModal';

interface PortfolioShellProps {
  initialRole: RoleId;
  cvAvailability: Record<RoleId, string>;
}

export function PortfolioShell({ initialRole, cvAvailability }: PortfolioShellProps) {
  const [activeRole, setActiveRole] = useState<RoleId>(initialRole);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  // Auto-detect whether to display the role inquiry popup, and sanitize unknown roles:
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const hasExplicitRole = params.has('role');
      const roleParam = params.get('role');
      const isDismissed = sessionStorage.getItem('role_inquiry_dismissed');
      const validRoles: RoleId[] = ['backend', 'fullstack', 'dba', 'infra', 'all'];

      // If URL has an unrecognized role (e.g. role=frontend or role=rubbish), normalize to 'all'
      if (hasExplicitRole && (!roleParam || !validRoles.includes(roleParam as RoleId))) {
        const url = new URL(window.location.href);
        url.searchParams.set('role', 'all');
        window.history.replaceState(null, '', url.toString());
        setActiveRole('all');
      }

      // If user came via targeted CV link (e.g. ?role=fullstack), do not show modal.
      // If direct visit to root without ?role and not previously dismissed, prompt them:
      if (!hasExplicitRole && !isDismissed) {
        const timer = setTimeout(() => {
          setIsModalOpen(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Sync role with URL without full page reload
  const handleRoleSelect = (role: RoleId) => {
    setActiveRole(role);
    const roleConfig = ROLES.find((r) => r.id === role);
    setAnnouncement(`Showing ${roleConfig?.label || role} skills and projects`);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('role', role);
      window.history.replaceState(null, '', url.toString());
    }
  };

  // Listen to browser popstate (back/forward)
  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get('role') as RoleId;
      const validRoles: RoleId[] = ['backend', 'fullstack', 'dba', 'infra', 'all'];
      if (roleParam && validRoles.includes(roleParam)) {
        setActiveRole(roleParam);
      } else if (params.has('role')) {
        const url = new URL(window.location.href);
        url.searchParams.set('role', 'all');
        window.history.replaceState(null, '', url.toString());
        setActiveRole('all');
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-base)' }}>
      {/* Screen Reader live region for role changes */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {announcement}
      </div>

      {/* Interactive Role Inquiry Popup ("How can I serve you?") */}
      <RoleInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectRole={handleRoleSelect}
        activeRole={activeRole}
      />

      {/* Floating Social Quick-Rail (Desktop) */}
      <div className="floating-social-rail" aria-label="Social channels">
        <a
          href={PORTFOLIO_DATA.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub: Ajlanalif"
          aria-label="GitHub Profile"
        >
          <GitHubIcon size={18} />
        </a>
        <a
          href={PORTFOLIO_DATA.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn: Sayed Ajlan Al Alif"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon size={18} />
        </a>
        <a
          href={`mailto:${PORTFOLIO_DATA.contact.email}`}
          title="Direct Email"
          aria-label="Email Ajlan Alif"
        >
          <MailIcon size={18} />
        </a>
      </div>

      {/* 1. Header / Navbar */}
      <Navbar
        activeRole={activeRole}
        onOpenRoleModal={() => setIsModalOpen(true)}
        cvAvailability={cvAvailability}
      />

      {/* 2. Hero Section */}
      <HeroSection
        activeRole={activeRole}
        onOpenRoleModal={() => setIsModalOpen(true)}
        cvAvailability={cvAvailability}
      />

      {/* 3. About Section ("Everything About Sayed") */}
      <AboutSection />

      {/* 4. Tech Toolbox (Skills Section with Spotlights) */}
      <TechToolbox activeRole={activeRole} />

      {/* 5. Slanted Tech Marquee Ribbon */}
      <MarqueeBanner />

      {/* 6. Projects Showcase (Featured Projects 2x2 Grid) */}
      <ProjectsShowcase activeRole={activeRole} />

      {/* 7. Competitive Programming Strip */}
      <CompetitiveStrip />

      {/* 8. Credentials & Recognition (Honors, Training, Leadership) */}
      <CredentialsSection activeRole={activeRole} />

      {/* 9. Footer & CTA ("Let's Build Something Exceptional") */}
      <FooterCTA activeRole={activeRole} cvAvailability={cvAvailability} />
    </div>
  );
}
