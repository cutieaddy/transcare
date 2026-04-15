'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Getting started', href: '/getting-started' },
  { label: 'Find a provider', href: '/providers' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        background: dark ? 'rgba(26,26,29,0.92)' : 'rgba(255,255,255,0.92)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-semibold"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-blue))',
            }}
          >
            T
          </div>
          <span className="font-medium text-base tracking-tight">TransCare</span>
          <span
            className="text-[0.65rem] font-medium px-1.5 py-0.5 rounded"
            style={{
              background: 'var(--color-pill-bg)',
              color: 'var(--color-pill-text)',
            }}
          >
            beta
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer"
              style={{
                border: '0.5px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                background: 'transparent',
              }}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
              {dark ? 'Light' : 'Dark'}
            </button>
            <Link
              href="/account"
              className="px-4 py-1.5 rounded-lg text-xs font-medium text-white cursor-pointer"
              style={{ background: 'var(--color-accent)' }}
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg cursor-pointer"
          style={{ color: 'var(--color-text-secondary)' }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 pb-4"
          style={{
            background: 'var(--color-bg-secondary)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex flex-col gap-1 pt-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm py-2.5 px-3 rounded-lg transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2 pt-2" style={{ borderTop: '0.5px solid var(--color-border)' }}>
              <button
                onClick={toggleTheme}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs cursor-pointer"
                style={{
                  border: '0.5px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  background: 'transparent',
                }}
              >
                {dark ? 'Light mode' : 'Dark mode'}
              </button>
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center py-2 rounded-lg text-xs font-medium text-white"
                style={{ background: 'var(--color-accent)' }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
