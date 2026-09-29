export type RoleId = 'backend' | 'fullstack' | 'dba' | 'infra' | 'all';

export interface RoleConfig {
  id: RoleId;
  label: string;
  heroSentence: string;
  cvFilename: string;
  cvLabel: string;
}

export const ROLES: RoleConfig[] = [
  {
    id: 'backend',
    label: 'Backend Developer',
    heroSentence:
      'I build backend services with Node.js and Python, work with relational databases, and configure Linux environments.',
    cvFilename: 'backend.pdf',
    cvLabel: 'Download Backend CV',
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Developer',
    heroSentence:
      'I build web applications across the stack using React, Node.js, and relational databases.',
    cvFilename: 'fullstack.pdf',
    cvLabel: 'Download Full-Stack CV',
  },
  {
    id: 'dba',
    label: 'Database Administrator',
    heroSentence:
      'I manage relational database systems, schema design, and administration across PostgreSQL, MySQL, and Oracle 19c.',
    cvFilename: 'dba.pdf',
    cvLabel: 'Download DBA CV',
  },
  {
    id: 'infra',
    label: 'Infrastructure / IT Support',
    heroSentence:
      'I configure Linux and Windows Server environments, network services, and provide systems support.',
    cvFilename: 'infra.pdf',
    cvLabel: 'Download IT Support CV',
  },
  {
    id: 'all',
    label: 'Everything',
    heroSentence:
      'Computer Science and Engineering graduate from Comilla University building backend services, managing relational databases, and configuring systems.',
    cvFilename: 'general.pdf',
    cvLabel: 'Download CV',
  },
];

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  clientStack?: string[];
  serverStack?: string[];
  features: string[];
  repoUrl?: string;
  roles: RoleId[];
  domainTag: string;
  award?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  status?: string;
  points: string[];
  certificateUrl?: string;
  preferredForRole?: RoleId;
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  points: string[];
  preferredForRole?: RoleId;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year?: string;
  url?: string;
}

export interface CompetitiveProfile {
  platform: string;
  username: string;
  rating?: string;
  url: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: 'Sayed Ajlan Al Alif',
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Comilla University',
    duration: 'Feb 2022 to Jul 2026 (completed)',
    cgpa: '3.68 / 4.00',
    location: 'Dhaka, Bangladesh',
  },
  contact: {
    email: 'ajlanalif@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sayed-ajlan-al-alif/',
    github: 'https://github.com/Ajlanalif',
  },
  skillsByRole: {
    backend: [
      {
        name: 'Runtime & Frameworks',
        skills: ['Node.js', 'Express.js (TypeScript)', 'Python', 'Flask', 'FastAPI', 'Java', 'Spring Boot (basic)'],
      },
      {
        name: 'Architecture & Security',
        skills: ['REST APIs', 'JWT authentication', 'Role-based access control (RBAC)', 'Middleware architecture'],
      },
      {
        name: 'Databases & ORM',
        skills: ['PostgreSQL', 'MySQL', 'Oracle 19c', 'Prisma ORM', 'SQLAlchemy'],
      },
      {
        name: 'DevOps & Tooling',
        skills: ['Docker (basic)', 'Basic CI/CD', 'Git/GitHub', 'Postman', 'Swagger/OpenAPI'],
      },
      {
        name: 'Core Fundamentals',
        skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'System Design concepts'],
      },
    ],
    fullstack: [
      {
        name: 'Frontend Engineering',
        skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript (ES6)'],
      },
      {
        name: 'Backend & APIs',
        skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'FastAPI', 'REST APIs', 'JWT authentication'],
      },
      {
        name: 'Databases & ORM',
        skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'SQLAlchemy'],
      },
      {
        name: 'Tooling & Delivery',
        skills: ['Git/GitHub', 'Postman', 'Swagger/OpenAPI', 'Vite', 'Docker (basic)'],
      },
      {
        name: 'Core CS Foundations',
        skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Computer Networks'],
      },
    ],
    dba: [
      {
        name: 'Database Engines',
        skills: ['Oracle 19c', 'PostgreSQL', 'MySQL'],
      },
      {
        name: 'Backup & Recovery',
        skills: ['RMAN backup and recovery', 'Data Guard (concepts)', 'Disaster recovery workflows'],
      },
      {
        name: 'Administration & Monitoring',
        skills: ['User management', 'Database monitoring', 'Performance tuning', 'Tablespaces & Storage'],
      },
      {
        name: 'Schema & Transactions',
        skills: ['Query optimization', 'Normalization', 'ACID transactions', 'Data reconciliation'],
      },
      {
        name: 'Environment & Scripting',
        skills: ['Oracle Linux 8.9', 'SQL', 'Bash scripting', 'System troubleshooting'],
      },
    ],
    infra: [
      {
        name: 'Operating Systems',
        skills: ['Linux (Ubuntu, RHEL)', 'Windows Server 2019', 'Oracle Linux 8.9'],
      },
      {
        name: 'Scripting & Automation',
        skills: ['Bash/Shell scripting', 'Process management', 'System services (systemd)', 'Cron jobs'],
      },
      {
        name: 'Networking & Services',
        skills: ['TCP/IP', 'DNS configuration', 'LAN setup', 'File sharing', 'SSH'],
      },
      {
        name: 'Support & Operations',
        skills: ['User permissions & policy', 'Hardware & software troubleshooting', 'Lab firewall setup', 'IT maintenance'],
      },
    ],
    all: [
      {
        name: 'Programming Languages',
        skills: ['TypeScript', 'JavaScript (ES6)', 'Python', 'C', 'C++', 'Java', 'SQL'],
      },
      {
        name: 'Backend & Frameworks',
        skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Spring Boot (basic)', 'REST APIs', 'JWT Auth', 'RBAC'],
      },
      {
        name: 'Frontend & UI',
        skills: ['React', 'Next.js', 'TypeScript', 'Vite', 'HTML5', 'CSS3'],
      },
      {
        name: 'Databases & ORM',
        skills: ['PostgreSQL', 'MySQL', 'Oracle 19c', 'Prisma ORM', 'SQLAlchemy'],
      },
      {
        name: 'Database Administration',
        skills: ['RMAN backup & recovery', 'User management', 'Database monitoring', 'Performance tuning', 'Query optimization', 'Normalization', 'ACID transactions'],
      },
      {
        name: 'Systems & Infrastructure',
        skills: ['Linux (Ubuntu, RHEL)', 'Windows Server 2019', 'Bash/Shell', 'TCP/IP', 'DNS', 'LAN setup', 'SSH'],
      },
      {
        name: 'DevOps & Tooling',
        skills: ['Docker (basic)', 'Basic CI/CD', 'Git/GitHub', 'Postman', 'Swagger/OpenAPI'],
      },
      {
        name: 'Core Computer Science',
        skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
      },
      {
        name: 'AI-Assisted Workflow',
        skills: ['Gemini API', 'Claude Code', 'GitHub Copilot', 'Antigravity'],
      },
    ],
  } as Record<RoleId, SkillGroup[]>,

  projects: [
    {
      id: 'unilab-nexus',
      title: 'UniLab Nexus',
      description: 'University lab management system with role-based access control and equipment tracking.',
      clientStack: ['React', 'TypeScript', 'Vite'],
      serverStack: ['Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Cloudinary'],
      stack: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Cloudinary'],
      features: [
        'Role-based access control, JWT authentication, and modular middleware architecture',
        'RESTful APIs for lab and equipment reservation management',
        'Database query optimization with PostgreSQL via Prisma ORM',
      ],
      repoUrl: 'https://github.com/Ajlanalif/UniLab-Nexus',
      roles: ['backend', 'fullstack', 'dba'],
      domainTag: 'Full-Stack / Systems',
    },
    {
      id: 'wallethub',
      title: 'WalletHub',
      description: 'Personal finance management system with multi-account transaction tracking.',
      clientStack: ['HTML5', 'CSS3', 'JavaScript'],
      serverStack: ['Flask', 'MySQL', 'SQLAlchemy'],
      stack: ['Flask', 'MySQL', 'SQLAlchemy', 'JavaScript', 'HTML5/CSS3'],
      features: [
        'Multi-account tracking supporting wallet, bank, and MFS transactions',
        'Normalized schema with ACID-compliant transactions for financial ledger integrity',
        'REST APIs for income, expense, loan, and transfer management with analytics dashboards',
      ],
      repoUrl: 'https://github.com/Ajlanalif/WalletHub',
      roles: ['backend', 'fullstack', 'dba'],
      domainTag: 'Full-Stack / Database',
    },
    {
      id: 'zero-waste',
      title: 'Zero Waste',
      description: 'Food management and sustainability platform with rule-based tracking.',
      stack: ['REST APIs', 'PostgreSQL', 'Prisma ORM', 'Node.js'],
      features: [
        'REST APIs for food inventory tracking and waste detection',
        'Rule-based sustainability logic to calculate food shelf life and redistribution alerts',
        'Optimized PostgreSQL queries utilizing Prisma ORM',
      ],
      repoUrl: 'https://github.com/Hackovate/ZeroWaste',
      roles: ['backend', 'fullstack'],
      domainTag: 'Full-Stack / Platform',
      award: 'BUBT INNOVATEX Hackathon 2025 (13th Place)',
    },
    {
      id: 'momentum',
      title: 'Momentum',
      description: 'AI-powered student life management system with personalized study planning.',
      stack: ['PERN Stack', 'FastAPI', 'Gemini API', 'JWT'],
      features: [
        'PERN stack architecture with JWT authentication for student workspace management',
        'FastAPI microservice integrating Gemini API for generating personalized study schedules',
        'Cross-service communication between Node.js core server and Python AI service',
      ],
      repoUrl: 'https://github.com/Ajlanalif/Momentum_Gemini',
      roles: ['fullstack'],
      domainTag: 'Full-Stack / AI Microservice',
      award: 'Solvio AI Hackathon 2025 (Sheba.xyz) (11th Place)',
    },
    {
      id: 'windows-server-lab',
      title: 'Windows Server 2019 Client-Server Lab',
      description: 'Dual-boot enterprise lab configuration with network services and access management.',
      stack: ['Windows Server 2019', 'Active Directory / DNS', 'File Sharing', 'LAN Networking'],
      features: [
        'Configured Windows Server 2019 with client machines in a dual-boot university lab',
        'Configured file sharing, DNS services, and granular user permissions',
        'Diagnosed and verified client-server networking and workstation policy propagation',
      ],
      roles: ['infra'],
      domainTag: 'Infrastructure / Systems',
    },
  ] as Project[],

  // Project subsets per role as specified:
  // Backend = UniLab Nexus, WalletHub, Zero Waste
  // Full-Stack = UniLab Nexus, WalletHub, Momentum
  // DBA = WalletHub, UniLab Nexus
  // Infrastructure = Windows Server lab
  // Everything = all five
  roleProjectIds: {
    backend: ['unilab-nexus', 'wallethub', 'zero-waste'],
    fullstack: ['unilab-nexus', 'wallethub', 'momentum'],
    dba: ['wallethub', 'unilab-nexus'],
    infra: ['windows-server-lab'],
    all: ['unilab-nexus', 'wallethub', 'momentum', 'zero-waste', 'windows-server-lab'],
  } as Record<RoleId, string[]>,

  training: [
    {
      id: 'rhcsa',
      title: 'RHCSA Training',
      institution: 'Linux Pathshala',
      status: 'Ongoing',
      preferredForRole: 'infra',
      points: [
        'Linux administration (Ubuntu, RHEL), user permissions, and filesystem storage',
        'Networking configuration, system services, and process management',
        'Bash shell scripting and system troubleshooting',
      ],
    },
    {
      id: 'oracle',
      title: 'Oracle 19c Database & Data Guard Administration',
      institution: 'K2E Collab Center',
      preferredForRole: 'dba',
      certificateUrl: 'https://drive.google.com/file/d/1UxwtYO7Vjw0FH1SexRUfqDnr7gtuiJBd/view?usp=sharing',
      points: [
        'Installed and configured Oracle Database 19c on Oracle Linux 8.9',
        'Practiced RMAN backup and recovery workflows and user access administration',
        'Performed query optimization, database monitoring, and baseline performance verification',
      ],
    },
  ] as TrainingItem[],

  leadership: [
    {
      id: 'cse-society',
      title: 'Technical Team Lead',
      organization: 'CSE Society, Comilla University',
      preferredForRole: 'infra',
      points: [
        'Led lab setup and security (firewall IP restriction, system lockdown) for national contests (IUPC, NCPC)',
        'Diagnosed hardware, boot, and software issues; configured LAN connectivity with switches and hubs',
        'Provided on-site technical support for 100+ participants at departmental IT events',
      ],
    },
    {
      id: 'it-fest',
      title: 'Event Organizer',
      organization: 'Chittagong Divisional IT Fest Programming Contest 2024',
      points: [
        'Organized and coordinated programming contest logistics, lab readiness, and contest platform environment',
      ],
    },
  ] as LeadershipItem[],

  achievements: [
    {
      id: 'nasa',
      title: 'Global Finalist',
      event: 'NASA Space Apps Challenge 2025 (Team Nomads)',
      year: '2025',
      url: 'https://www.spaceappschallenge.org/2025/find-a-team/team-nomads/',
    },
    {
      id: 'solvio',
      title: '11th Place',
      event: 'Solvio AI Hackathon 2025 (Sheba.xyz)',
      year: '2025',
    },
    {
      id: 'bubt',
      title: '13th Place',
      event: 'BUBT INNOVATEX Hackathon 2025',
      year: '2025',
    },
    {
      id: 'cou-contest',
      title: '2nd Place',
      event: 'CoU CSE Intra Department Programming Contest',
      year: '2022',
    },
  ] as AchievementItem[],

  competitive: {
    problemCount: '700+',
    profiles: [
      {
        platform: 'Codeforces',
        username: 'Ajlan_Alif',
        rating: '1106',
        url: 'https://codeforces.com/profile/Ajlan_Alif',
      },
      {
        platform: 'CodeChef',
        username: 'ajlan_alif',
        url: 'https://www.codechef.com/users/ajlan_alif',
      },
      {
        platform: 'Beecrowd',
        username: '464166',
        url: 'https://www.beecrowd.com.br/judge/en/profile/464166',
      },
      {
        platform: 'HackerRank',
        username: 'ajlanalif',
        url: 'https://www.hackerrank.com/ajlanalif',
      },
      {
        platform: 'AtCoder',
        username: 'Ajlan_Alif',
        url: 'https://atcoder.jp/users/Ajlan_Alif',
      },
      {
        platform: 'VJudge',
        username: 'ajlan_alif',
        url: 'https://vjudge.net/user/ajlan_alif',
      },
    ] as CompetitiveProfile[],
  },
};
