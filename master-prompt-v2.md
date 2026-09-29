# Master Prompt v2: Role-Based Developer Portfolio

Paste everything below this line into puku-cli.

---

## Context

You already produced a revised design plan (design_plan.md: obsidian base, single amber accent, Sora, per-role SVG layer behind glass panels, hidden non-matching skills). Keep that direction and its palette tokens. This prompt updates the plan with corrected content and fixes a few gaps. Use the UI/design skills I've imported for every visual decision, and self-critique against "does this look like generic AI glassmorphism" before building.

**Do not start building components yet.** First output the updated plan (see "Plan checkpoint" at the end) and stop for my approval.

## The site

A portfolio for Sayed Ajlan Al Alif, a fresh CSE graduate (Comilla University, Bangladesh), applying for entry-level roles. A role selector at the top ("I'm hiring for:") filters Skills and Projects so each recruiter sees only what's relevant. Roles: Backend Developer (default), Full-Stack Developer, Database Administrator, Infrastructure / IT Support, and Everything.

## Corrections to the previous plan

1. **UniLab Nexus is a full-stack project**, not backend-only. Stack: React + TypeScript + Vite client, Express + TypeScript + Prisma + PostgreSQL server, Cloudinary for file uploads.
2. **WalletHub** has an HTML/CSS/JavaScript frontend on top of its Flask + MySQL + SQLAlchemy backend.
3. **Momentum** is a PERN-stack app with a FastAPI microservice calling the Gemini API.
4. **Java and Spring Boot (basic) should be included, in the Backend view only.**
5. **Research projects are excluded entirely.** No kidney classification, no sleep/mobile-addiction study, no ML/CNN, Gradio, or Integrated Gradients.
6. **Training and Leadership are not project cards.** They appear once, in their own always-visible sections. In DBA and Infra views, reorder those sections so the role-relevant item comes first (Oracle for DBA, RHCSA and CSE Society for Infra). Reorder only, never hide.
7. **Contact is email, LinkedIn and GitHub only.** No phone number anywhere on the site or in metadata.
8. **No custom domain.** Deploys to a default Vercel subdomain. Use an environment variable (`NEXT_PUBLIC_SITE_URL`) for metadataBase and Open Graph URLs. No photo of me on the page.

## Content (use this wording; do not embellish or invent claims)

**Identity:** Sayed Ajlan Al Alif. B.Sc. in Computer Science and Engineering, Comilla University, Feb 2022 to Jul 2026 (completed), CGPA 3.68 / 4.00. Dhaka, Bangladesh.

**Links:** Email ajlanalif@gmail.com (mailto), LinkedIn https://www.linkedin.com/in/sayed-ajlan-al-alif/, GitHub https://github.com/Ajlanalif

**Hero line:** "Computer Science and Engineering graduate from Comilla University. I build backend services, work with relational databases, and configure Linux environments." Keep it plain; no "resilient", "scalable", "microservices".

### Skills by role (non-matching skills are hidden; group names come from the role)

**Backend Developer:** Runtime & Frameworks: Node.js, Express.js (TypeScript), Flask, FastAPI, Java, Spring Boot (basic). Architecture & Security: REST APIs, JWT authentication, role-based access control, middleware architecture. Databases & ORM: PostgreSQL, MySQL, Prisma ORM, SQLAlchemy. Delivery: Docker (basic), basic CI/CD, Git/GitHub.

**Full-Stack Developer:** Frontend: React, TypeScript, Vite, Next.js, HTML5, CSS3, JavaScript (ES6). Backend: Node.js, Express.js, Flask, FastAPI. Databases & ORM: PostgreSQL, MySQL, Prisma ORM, SQLAlchemy. APIs & Security: REST APIs, JWT authentication. Tooling: Git/GitHub, Postman, Swagger/OpenAPI.

**Database Administrator:** Engines: PostgreSQL, MySQL, Oracle 19c. Backup & Recovery: RMAN backup and recovery. Administration: user management, database monitoring and basic performance tuning. Schema & Transactions: query optimization, normalization, ACID transactions, data validation and reconciliation.

**Infrastructure / IT Support:** Operating Systems: Linux (Ubuntu, RHEL), Windows Server 2019. Scripting: Bash/Shell. Networking & Services: TCP/IP, DNS configuration, LAN setup, file sharing, SSH (basic). Support: user permissions, hardware and software troubleshooting.

**Everything:** all groups above, each under its native role heading.

### Projects (2 to 3 per role)

- **UniLab Nexus** (Backend, Full-Stack, DBA): University lab management system. Client: React + TypeScript + Vite. Server: Express + TypeScript + Prisma + PostgreSQL. Cloudinary for uploads. Role-based access control, JWT authentication, middleware architecture, RESTful APIs for lab and equipment management, query optimization. Repo: https://github.com/Ajlanalif/UniLab-Nexus
- **WalletHub** (Backend, Full-Stack, DBA): Personal finance management system. Flask, MySQL, SQLAlchemy backend; HTML/CSS/JavaScript frontend. Tracks wallet, bank and MFS transactions. Normalized schema, ACID-compliant transactions, REST APIs for income, expense, loan and transfer, analytics dashboards. Repo: https://github.com/Ajlanalif/WalletHub
- **Momentum** (Full-Stack): AI-powered student life management system. Solvio AI Hackathon 2025 (Sheba.xyz), 11th place. PERN stack with JWT authentication; a FastAPI microservice calls the Gemini API to generate personalized study plans. Repo: https://github.com/Ajlanalif/Momentum_Gemini
- **Zero Waste** (Full-Stack): Food management and sustainability platform. BUBT INNOVATEX Hackathon 2025, 13th place. REST APIs for food inventory tracking and waste detection, rule-based sustainability logic, optimized PostgreSQL queries with Prisma ORM. Repo: https://github.com/Hackovate/ZeroWaste
- **Windows Server 2019 client-server lab** (Infrastructure): Windows Server 2019 with client machines in a dual-boot lab; file sharing, DNS services, user permissions, basic client-server networking.

Project sets: Backend = UniLab Nexus, WalletHub, Zero Waste. Full-Stack = UniLab Nexus, WalletHub, Momentum. DBA = WalletHub, UniLab Nexus. Infrastructure = Windows Server lab. Everything = all five, tagged by domain.

Because DBA and Infra have fewer project cards, the always-visible Training and Leadership sections carry more weight in those views (see item 6).

### Always visible in every view

- **Education:** as above.
- **Training:** RHCSA training, Linux Pathshala (ongoing): Linux administration, users and permissions, storage, networking, shell scripting, system services, process management, troubleshooting. Oracle 19c Database & Data Guard Administration, K2E Collab Center: installed and configured Oracle Database 19c on Oracle Linux 8.9; practiced RMAN backup and recovery, user management, query optimization, database monitoring. Certificate: https://drive.google.com/file/d/1UxwtYO7Vjw0FH1SexRUfqDnr7gtuiJBd/view?usp=sharing
- **Leadership:** Technical Team Lead, CSE Society, Comilla University. Led lab setup and security (firewall IP restriction, system lockdown) for national contests (IUPC, NCPC); diagnosed hardware, boot and software issues; configured LAN connectivity with switches and hubs; provided technical support for 100+ participants at departmental IT events. Also organized the Chittagong Divisional IT Fest Programming Contest 2024.
- **Achievements:** Global Finalist, NASA Space Apps Challenge 2025 (Team Nomads, https://www.spaceappschallenge.org/2025/find-a-team/team-nomads/). 11th, Solvio AI Hackathon 2025. 13th, BUBT INNOVATEX Hackathon 2025. 2nd, CoU CSE Intra Department Programming Contest 2022.
- **Competitive programming (short strip, not a big section):** 700+ problems solved. Codeforces Ajlan_Alif (max rating 1106), CodeChef ajlan_alif, Beecrowd 464166, HackerRank ajlanalif, AtCoder Ajlan_Alif, VJudge ajlan_alif, with links to each profile.

## Design requirements (carry over from the revised plan, plus fixes)

1. **Glass must be visibly glass.** The per-role SVG layer (backend pipeline, full-stack client-server, DBA ER diagram, infra network topology, combined for Everything) sits behind the panels so backdrop blur has something to diffuse. Panel opacity may go down to about 65% only if all text keeps at least 4.5:1 contrast **with the SVG lines behind it**. Test this; keep lines faint under body copy.
2. **No template chrome.** No `[SYS_ROLE]` tags, no numbered section markers (the sections aren't a sequence), no monospace bracket chips, no `→` or `↗` on every link, no status-light badges, no background grid, no tracked all-caps eyebrows, no single accented word in the headline.
3. **Restore the layout concept.** Give me a hero wireframe, section order, and alignment. Give me explicit corner-radius tokens (6 to 8px, varied by hierarchy, not one radius on everything).
4. **One bold moment, specified concretely.** Describe what animates when the role changes (schema layer transition, panel recomposition), in what order, for how long, and the reduced-motion fallback. State how page-height changes are handled when skill and project counts differ between roles. No other decorative scroll or hover animation.
5. **IBM Plex Mono only for code, versions and numbers.** Sora for everything else. Body line length under 68ch.
6. **Accessibility and performance.** Role selector is a radiogroup with arrow-key support and an `aria-live` announcement when content changes. Visible keyboard focus. `prefers-reduced-motion` respected. Solid-color fallback where `backdrop-filter` isn't supported. Responsive down to phones; lighten or simplify the SVG layer and blur on small or low-power devices.
7. **Copy voice:** plain, active, sentence case. "I'm hiring for:", "Everything", "Download Backend CV". No filler, no invented claims.

## Technical requirements

- Next.js (App Router), TypeScript, deployed to Vercel on the default subdomain.
- **Role lives in the URL:** `/?role=backend|fullstack|dba|infra|all`. Default is `backend`. Selecting a role updates the URL without a reload, and loading a URL with `?role=` shows that role immediately (so I can link recruiters straight to the right view). The default role renders real content on the server, not an empty shell.
- All content in one typed file, `data/portfolio.ts`, so I can edit without touching layout code.
- **CV downloads are static PDFs** in `/public/cv/` with these expected filenames: `backend.pdf`, `fullstack.pdf`, `dba.pdf`, `infra.pdf`, `general.pdf`. I'm still sorting my CVs, so create the folder with a README listing these names. The download button for the active role points to its file and falls back to `general.pdf` if that role's file is missing. Do not generate PDFs or add a CV route handler.
- Components: BackgroundTopology, HeroRoleSelector, SkillsSection, ProjectsSection, EducationSection, TrainingSection, LeadershipSection, AchievementsSection, CompetitiveSection, ContactSection.
- SEO: title, description, Open Graph tags.
- No Lorem Ipsum. Every string is real content from above or necessary UI copy.

## Plan checkpoint (do this first, then stop)

Output an updated design plan that includes: palette tokens with contrast figures verified against the SVG-layered background, type scale, hero wireframe and section order, radius tokens, the concrete spec for the one bold moment, the mobile and reduced-motion behavior, and a short note on what you changed from your previous plan and why. Wait for my approval before writing any components.
