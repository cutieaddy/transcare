'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [mode, setMode] = useState('signin');

  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center" style={{ background: 'var(--color-hero-gradient)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>Account</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {mode === 'signin' ? 'Welcome back' : 'Create an account'}
          </h1>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            {mode === 'signin'
              ? 'Sign in to access your bookmarked providers and saved resources.'
              : 'Create an account to bookmark providers, save resources, and personalize your experience.'}
          </p>
        </div>
      </section>

      <section className="max-w-md mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Mode toggle */}
        <div className="flex rounded-xl mb-8 p-1" style={{ background: 'var(--color-bg-tertiary)' }}>
          <button
            onClick={() => setMode('signin')}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer"
            style={{
              background: mode === 'signin' ? 'var(--color-bg-secondary)' : 'transparent',
              color: mode === 'signin' ? 'var(--color-text)' : 'var(--color-text-muted)',
              boxShadow: mode === 'signin' ? 'var(--color-card-shadow)' : 'none',
            }}
          >
            Sign in
          </button>
          <button
            onClick={() => setMode('signup')}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer"
            style={{
              background: mode === 'signup' ? 'var(--color-bg-secondary)' : 'transparent',
              color: mode === 'signup' ? 'var(--color-text)' : 'var(--color-text-muted)',
              boxShadow: mode === 'signup' ? 'var(--color-card-shadow)' : 'none',
            }}
          >
            Create account
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium mb-1.5">Display name</label>
              <input
                type="text"
                placeholder="How you'd like to be addressed"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Pronouns <span className="font-normal" style={{ color: 'var(--color-text-muted)' }}>(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. she/her, he/him, they/them"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Password</label>
            <input
              type="password"
              placeholder={mode === 'signin' ? 'Your password' : 'Choose a password'}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
            />
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium mb-1.5">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-medium text-white cursor-pointer transition-opacity hover:opacity-90 mt-2"
            style={{ background: 'var(--color-accent)' }}
          >
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>

          {mode === 'signin' && (
            <button type="button" className="text-xs cursor-pointer" style={{ color: 'var(--color-accent)' }}>
              Forgot your password?
            </button>
          )}
        </form>

        {/* Coming soon notice */}
        <div className="mt-8 p-4 rounded-xl text-center" style={{ background: 'var(--color-bg-tertiary)', border: '0.5px solid var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Account features are coming soon. Once available, you will be able to bookmark providers, save resources, and customize your experience.
          </p>
        </div>
      </section>
    </>
  );
}
