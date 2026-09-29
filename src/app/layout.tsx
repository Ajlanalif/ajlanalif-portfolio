import type { Metadata } from 'next';
import { Sora, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sora',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-sayed-ajlan.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sayed Ajlan Al Alif | Portfolio',
  description:
    'Computer Science and Engineering graduate from Comilla University. I build backend services, work with relational databases, and configure Linux environments.',
  openGraph: {
    title: 'Sayed Ajlan Al Alif | Portfolio',
    description:
      'Computer Science and Engineering graduate from Comilla University. I build backend services, work with relational databases, and configure Linux environments.',
    url: siteUrl,
    siteName: 'Sayed Ajlan Al Alif Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
