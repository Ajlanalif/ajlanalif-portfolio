'use client';

import React from 'react';
import { PORTFOLIO_DATA, RoleId } from '@/data/portfolio';

interface ProjectsShowcaseProps {
  activeRole: RoleId;
}

export function ProjectsShowcase({ activeRole }: ProjectsShowcaseProps) {
  const allowedProjectIds =
    PORTFOLIO_DATA.roleProjectIds[activeRole] || PORTFOLIO_DATA.roleProjectIds.backend;
  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) =>
    allowedProjectIds.includes(p.id)
  );

  return (
    <section
      id="projects"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="pill-badge" style={{ margin: '0 auto 1rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
          Featured Projects
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#F8FAFC',
          }}
        >
          SYSTEMS ENGINEERED FOR <span className="italic-accent" style={{ color: '#A78BFA' }}>RELIABILITY</span>
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Showing projects tailored for: <strong style={{ color: 'var(--accent-emerald-light)' }}>{activeRole.toUpperCase()}</strong>
        </p>
      </div>

      {/* 2x2 Grid matching reference image */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem',
        }}
        className="projects-grid-responsive"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Top Showcase Graphic Banner */}
            <div
              style={{
                height: '180px',
                width: '100%',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(6, 8, 11, 0.8) 100%)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                overflow: 'hidden',
              }}
            >
              {/* Subtle circuit lines background inside banner */}
              <svg
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, opacity: 0.3 }}
              >
                <path d="M 0 50 L 150 50 L 200 120 L 400 120" stroke="#10B981" strokeWidth="1.5" fill="none" />
                <path d="M 50 180 L 180 180 L 260 80 L 500 80" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
                <circle cx="200" cy="120" r="4" fill="#10B981" />
                <circle cx="260" cy="80" r="4" fill="#8B5CF6" />
              </svg>

              <div
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  padding: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                  }}
                >
                  {project.title}
                </div>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--accent-emerald-light)',
                    marginTop: '0.35rem',
                  }}
                >
                  {project.domainTag}
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Award badge if any */}
                {project.award && (
                  <div style={{ marginBottom: '0.85rem' }}>
                    <span
                      className="tech-tag"
                      style={{
                        background: 'rgba(139, 92, 246, 0.15)',
                        borderColor: 'rgba(139, 92, 246, 0.4)',
                        color: '#C4B5FD',
                      }}
                    >
                      🏆 {project.award}
                    </span>
                  </div>
                )}

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Stack breakdown */}
                <div style={{ marginBottom: '1.25rem' }}>
                  {project.clientStack && project.serverStack ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Client:</span>
                        {project.clientStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Server:</span>
                        {project.serverStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key features */}
                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                  }}
                >
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Production Architecture
                </span>
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-purple"
                    style={{
                      padding: '0.45rem 1rem',
                      fontSize: '0.8125rem',
                    }}
                  >
                    View Code &rarr;
                  </a>
                ) : (
                  <span style={{ fontSize: '0.8125rem', color: 'var(--accent-emerald-light)' }}>
                    Enterprise Lab
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
