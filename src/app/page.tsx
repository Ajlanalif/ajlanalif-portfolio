import fs from 'fs';
import path from 'path';
import { ROLES, RoleId } from '@/data/portfolio';
import { PortfolioShell } from '@/components/PortfolioShell';

interface PageProps {
  searchParams: Promise<{ role?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const rawRole = resolvedParams?.role;

  // Specific targeted CV roles:
  const validSpecificRoles: RoleId[] = ['backend', 'fullstack', 'dba', 'infra'];

  // If role is a known specific role, use it.
  // If role is unknown (e.g. 'frontend', 'rubbish'), 'all', or missing, route to 'all' (Everything):
  const initialRole: RoleId = rawRole && validSpecificRoles.includes(rawRole as RoleId)
    ? (rawRole as RoleId)
    : 'all';

  // Server-side build-time / request-time check for static CV files
  const cvAvailability: Record<RoleId, string> = {
    backend: '/cv/general.pdf',
    fullstack: '/cv/general.pdf',
    dba: '/cv/general.pdf',
    infra: '/cv/general.pdf',
    all: '/cv/general.pdf',
  };

  const cvDir = path.join(process.cwd(), 'public', 'cv');
  ROLES.forEach((role) => {
    const roleFile = path.join(cvDir, role.cvFilename);
    if (fs.existsSync(roleFile)) {
      cvAvailability[role.id] = `/cv/${role.cvFilename}`;
    } else {
      cvAvailability[role.id] = '/cv/general.pdf';
    }
  });

  return <PortfolioShell initialRole={initialRole} cvAvailability={cvAvailability} />;
}
