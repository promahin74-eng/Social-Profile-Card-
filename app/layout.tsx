import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://goalzone.example.com'),
  title: {
    default: 'GoalZone | FIFA World Cup 2026 Football Platform',
    template: '%s | GoalZone',
  },
  description: 'Premium live scores, World Cup 2026 hub, football news, profiles, fan chat, polls and AI match insights.',
  applicationName: 'GoalZone',
  manifest: '/manifest.json',
  openGraph: {
    title: 'GoalZone',
    description: 'A premium football platform for the FIFA World Cup 2026 hype cycle.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#070B14',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
