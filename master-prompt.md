# Master Prompt — Role-Based Developer Portfolio (for puku-cli)

Paste everything below this line into puku-cli as the project brief.

---

## Before you write any code

Check whatever design/UI skills I've imported into this environment and use them — I want glassmorphism as the visual language, but I do NOT want this to look like a generic AI-generated glassmorphism template (frosted white cards floating on a purple-blue gradient blob background, Inter font, rounded-everything, soft grey shadows on identical cards). If you have a frontend-design or UI-critique skill available, run your plan through it before building. Work in two passes: first propose a design plan (palette, type, layout concept, motion principle), self-critique it against "does this look like every other glassmorphism dribbble shot," revise, then build.

## Who this is for

I'm Sayed Ajlan Al Alif, a fresh CSE graduate (Comilla University, Bangladesh) applying for entry-level roles across a few adjacent tracks: Backend Developer, Full-Stack Developer, Database Administrator, and Infrastructure/IT Support. I'm not senior in any one of these yet — the site's job is to let each type of recruiter see *only what's relevant to them* in seconds, instead of scrolling past everything.

## The core mechanic

The landing/hero section asks the visitor (implicitly or via a control) "which role are you evaluating me for?" with options:
- Full-Stack Developer
- Backend Developer
- Database Administrator
- Infrastructure / IT Support
- (optional) "Show me everything"

Selecting a role instantly re-filters the Skills and Projects sections to what's relevant to that role — no page reload, smooth in-place transition. Education, Achievements, Training, and Contact stay visible regardless of role (they're not role-specific). Default the page to one role on first load (Backend Developer) rather than a blank state, so it's never empty before interaction.

## Content data (use exactly this — do not invent claims)

**Contact**
- Name: Sayed Ajlan Al Alif
- Phone: +8801706354819
- Email: ajlanalif@gmail.com
- LinkedIn: https://www.linkedin.com/in/sayed-ajlan-al-alif/
- GitHub: https://github.com/Ajlanalif
- Location: Dhaka, Bangladesh

**Education**
- B.Sc. Computer Science and Engineering, Comilla University — Feb 2022–Jul 2026 (Completed), CGPA 3.68/4.00

**Role → Skill mapping**

*Full-Stack Developer:* React, Next.js, HTML5/CSS3, Node.js, Express.js, Flask, FastAPI, PostgreSQL, MySQL, Prisma ORM, SQLAlchemy, REST APIs, JWT Authentication, Git/GitHub, Postman, Swagger/OpenAPI

*Backend Developer:* Node.js, Express.js, Flask, FastAPI, Spring Boot (basic), PostgreSQL, MySQL, Prisma ORM, SQLAlchemy, REST APIs, JWT Authentication, role-based access control, middleware architecture, Docker (basic), basic CI/CD

*Database Administrator:* PostgreSQL, MySQL, Oracle 19c, RMAN backup & recovery, user management, query optimization, normalization, ACID transactions, database monitoring & basic performance tuning, data validation/reconciliation

*Infrastructure / IT Support:* Linux (Ubuntu, RHEL), Windows Server 2019, Bash/Shell scripting, TCP/IP, DNS configuration, LAN setup, file sharing, user permissions, hardware/software troubleshooting, SSH (basic)

**Role → Project mapping** (use 2–3 per role, not all six every time)

1. **UniLab Nexus** (Full-Stack, Backend) — University Lab Management System. Node.js/Express, PostgreSQL, Prisma ORM. Modular backend with role-based access control, JWT auth, middleware architecture, RESTful APIs for lab/equipment management, query optimization. Repo: https://github.com/Ajlanalif/UniLab-Nexus

2. **WalletHub** (Full-Stack, Backend, DBA) — Personal Finance Management System. Flask, MySQL, SQLAlchemy. Multi-account tracking (wallet/bank/MFS), normalized schema, ACID-compliant transactions, REST APIs for income/expense/loan/transfer, analytics dashboards. Repo: https://github.com/Ajlanalif/WalletHub

3. **Momentum** (Full-Stack) — AI-powered Student Life Management System. Solvio AI Hackathon 2025 (Sheba.xyz), 11th Place. Node.js + JWT backend, FastAPI microservice calling Gemini API for personalized study plans, Node.js↔Python LLM service integration. Repo: https://github.com/Ajlanalif/Momentum_Gemini

4. **Zero Waste** (Backend) — Food Management & Sustainability Platform. BUBT INNOVATEX Hackathon 2025, 13th Place. REST APIs for food inventory/waste detection, rule-based sustainability logic, optimized PostgreSQL queries via Prisma. Repo: https://github.com/Hackovate/ZeroWaste

5. **Windows Server 2019 Client-Server Lab** (Infrastructure) — Configured Windows Server 2019 with client machines in a dual-boot lab; set up file sharing, DNS, user permissions, basic client-server networking.

6. **Oracle 19c Database & Data Guard Administration training** (DBA) — K2E Collab Center. Installed/configured Oracle Database 19c on Oracle Linux 8.9; practiced RMAN backup & recovery, user management, query optimization, database monitoring. Certificate: https://drive.google.com/file/d/1UxwtYO7Vjw0FH1SexRUfqDnr7gtuiJBd/view?usp=sharing

**Achievements** (always visible, unfiltered)
- Global Finalist — NASA Space Apps Challenge 2025 (Team Nomads) — https://www.spaceappschallenge.org/2025/find-a-team/team-nomads/
- 11th Position — Solvio AI Hackathon 2025 (Sheba.xyz)
- 13th Position — BUBT INNOVATEX Hackathon 2025
- 2nd Position — CoU CSE Intra Department Programming Contest 2022

**Competitive programming** (always visible, unfiltered, short strip not a big section)
- 700+ problems solved. Codeforces (Ajlan_Alif, max rating 1106), CodeChef (ajlan_alif), Beecrowd (464166), HackerRank (ajlanalif), AtCoder (Ajlan_Alif), VJudge (ajlan_alif)

**Extracurricular** (always visible, unfiltered)
- Technical Team Lead, CSE Society, Comilla University — led lab setup/security for national contests (IUPC, NCPC), diagnosed hardware/software issues, configured LAN connectivity, supported 100+ participants at departmental IT events
- Organized Chittagong Divisional IT Fest Programming Contest 2024

**Training** (always visible, unfiltered — but tag Oracle training as DBA-relevant, RHCSA as Infra-relevant so they can also surface inside the filtered project view if you build it that way)
- RHCSA Training, Linux Pathshala (Ongoing) — Linux admin, users/permissions, storage, networking, shell scripting, system services, process management, troubleshooting
- Oracle 19c Database & Data Guard Administration, K2E Collab Center (see above)

Do not include: PHP, Java, Google Workspace/MS Office, ML/CNN/kidney-classification research, Gradio, Spring Boot, accounting/bookkeeping — these appear in only one source CV variant each and aren't part of the role set we're targeting. Leave them out entirely rather than footnoting them.

## Visual direction — glassmorphism, but specific

Glassmorphism is the surface language (translucent layered panels, background blur, subtle light borders) but it needs to be grounded in something concrete rather than generic:

- **Ground it in subject matter.** This is a systems/backend-leaning engineer's site — lean into that visually. Think: a dark, precise, slightly technical atmosphere (terminal, schema diagram, circuit-board precision) rather than a soft consumer-app aesthetic. Glass panels over a dark base with a restrained, deliberate accent color (not the default violet/blue gradient blob — pick one considered accent, e.g. something in the cyan/teal or amber/copper family, and justify it) reads as "engineer's workspace," not "SaaS landing page template."
- **Avoid the generic glassmorphism tells**: floating blurred circles/blobs in the background as pure decoration, identical rounded-corner cards with the same soft shadow on everything, all-caps tracked-out section eyebrows, a single word in the headline picked out in a different color, a "→" tacked onto every button, middle-dot-separated meta strings.
- **One deliberate hero moment**, not decorative motion everywhere. Consider something that shows actual signal — e.g., the role selector itself IS the hero interaction and the skills/projects panel re-composes itself when a role is picked (glass panels re-sort/fade with intent, not a generic fade-slide-up on scroll for every section).
- **Typography**: pick one or two real typefaces deliberately (not the default system/Inter pairing), set a clear type scale, keep body line length under ~80 characters.
- **Respect accessibility**: visible keyboard focus states, sufficient contrast on glass panels (this is the most common way glassmorphism fails — text on blurred translucent backgrounds becoming unreadable), reduced-motion support.
- Build responsive down to mobile — glass blur effects are expensive, so make sure it stays performant on lower-end devices too.

## Tech requirements

- Next.js (App Router), deployed to Vercel
- Client-side role filtering with no page reload (React state is fine — no need for a backend for this)
- All content sourced from the data above, structured as a typed data file (e.g. `data/portfolio.ts`) so it's easy for me to edit later without touching layout code
- Clean component structure: Hero/RoleSelector, SkillsGrid, ProjectsGrid, Achievements, Training, CompetitiveProgramming, Contact/Footer
- SEO basics: meta title/description, Open Graph tags
- No placeholder Lorem Ipsum anywhere — every string should be real content from the data above or genuinely necessary UI copy (button labels, empty states) written in plain, active voice

## Deliverable

Working Next.js project, ready to deploy to Vercel, with the role-based filtering as the centerpiece interaction. Show me your design plan (palette hex values, type choices, layout concept) before you start writing components, so I can sanity-check it isn't the default AI glassmorphism look before you build it out.
