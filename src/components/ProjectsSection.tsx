'use client';

import React from 'react';
import { PORTFOLIO_DATA, RoleId } from '@/data/portfolio';

interface ProjectsSectionProps {
  activeRole: RoleId;
}

export function ProjectsSection({ activeRole }: ProjectsSectionProps) {
  const allowedProjectIds = PORTFOLIO_DATA.roleProjectIds[activeRole] || PORTFOLIO_DATA.roleProjectIds.backend;
  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => allowedProjectIds.includes(p.id));

  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
          marginBottom: '1.25rem',
        }}
      >
        Projects
      </h2>

      <div
        className="smooth-height-grid"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="glass-panel content-entering"
            style={{
              padding: '1.75rem',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '0.75rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {project.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.award && (
                  <span
                    className="restrained-tag"
                    style={{
                      borderColor: 'rgba(245, 158, 11, 0.3)',
                      color: 'var(--accent-amber)',
                      background: 'rgba(245, 158, 11, 0.08)',
                    }}
                  >
                    {project.award}
                  </span>
                )}
                <span className="restrained-tag">{project.domainTag}</span>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '1.25rem',
                maxWidth: '68ch',
              }}
            >
              {project.description}
            </p>

            {/* Stack chips */}
            <div style={{ marginBottom: '1.25rem' }}>
              {project.clientStack && project.serverStack ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Client:</span>
                    {project.clientStack.map((tech) => (
                      <span key={tech} className="restrained-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Server:</span>
                    {project.serverStack.map((tech) => (
                      <span key={tech} className="restrained-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.stack.map((tech) => (
                    <span key={tech} className="restrained-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bullet features */}
            <ul
              style={{
                paddingLeft: '1.25rem',
                marginBottom: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
              }}
            >
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    maxWidth: '68ch',
                  }}
                >
                  {feat}
                </li>
              ))}
            </ul>

            {/* Repository link */}
            {project.repoUrl && (
              <div>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    color: 'var(--accent-amber)',
                    fontWeight: 500,
                  }}
                >
                  Repository
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
