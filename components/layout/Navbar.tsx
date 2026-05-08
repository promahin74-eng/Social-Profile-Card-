'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useUIStore } from '@/lib/store/use-ui-store';

const links = [
  ['Home', '/'],
  ['Live', '/live'],
  ['News', '/news'],
  ['World Cup', '/worldcup'],
  ['Profile', '/profile'],
];

export function Navbar() {
  const { theme, toggleTheme } = useUIStore();

  useEffect(() => {
    const stored = window.localStorage.getItem('goalzone-theme') as 'dark' | 'light' | null;
    const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = preferred;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('goalzone-theme', theme);
  }, [theme]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="brand" aria-label="GoalZone home">
            <span className="brand-mark">GZ</span>
            <span>GoalZone</span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <div className="mobile-nav-inner">
          {links.map(([label, href]) => (
            <Link key={href} className="mobile-tab" href={href}>
              <span className="icon-mark" aria-hidden="true">{label.slice(0, 1)}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
