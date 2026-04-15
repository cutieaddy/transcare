'use client';

import { useEffect } from 'react';

export default function EscapeHandler() {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        // Replace current history entry so back button won't return here
        window.location.replace('https://www.google.com');
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div
      className="text-center py-1.5 text-xs border-b"
      style={{
        background: 'var(--color-bg-tertiary)',
        color: 'var(--color-text-muted)',
        borderColor: 'var(--color-border)',
      }}
    >
      Press{' '}
      <kbd
        className="px-1.5 py-0.5 rounded text-xs"
        style={{
          border: '0.5px solid var(--color-border)',
          background: 'var(--color-bg-secondary)',
          fontFamily: 'inherit',
        }}
      >
        Esc
      </kbd>{' '}
      at any time to quickly leave this site
    </div>
  );
}
