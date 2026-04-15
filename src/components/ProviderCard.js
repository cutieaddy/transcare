'use client';

export default function ProviderCard({ provider }) {
  const location = [provider.city, provider.state, provider.country]
    .filter(Boolean)
    .join(', ');

  return (
    <div
      className="rounded-xl p-5 transition-all hover:border-opacity-100"
      style={{
        background: 'var(--color-bg-secondary)',
        border: '0.5px solid var(--color-border)',
        boxShadow: 'var(--color-card-shadow)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium truncate">{provider.name}</h3>
            {provider.verified && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--color-accent-blue)"
                className="flex-shrink-0"
                aria-label="Verified provider"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )}
          </div>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>
        </div>

        {/* Rating */}
        {provider.rating && (
          <div className="flex-shrink-0 text-right">
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-medium">{provider.rating}</span>
            </div>
            {provider.reviewCount && (
              <p
                className="text-[0.68rem] mt-0.5"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {provider.reviewCount} review{provider.reviewCount !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Specialties */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {provider.specialties.map((spec) => (
          <span
            key={spec}
            className="text-[0.68rem] px-2 py-0.5 rounded-full"
            style={{
              background: 'var(--color-accent-light)',
              color: 'var(--color-pill-text)',
            }}
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Malpractice warning */}
      {provider.malpractice && (
        <div
          className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg mb-3"
          style={{
            background: 'rgba(226, 75, 74, 0.08)',
            color: '#A32D2D',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Malpractice history reported
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-1">
        {provider.website && (
          <a
            href={provider.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs py-2 rounded-lg transition-colors"
            style={{
              border: '0.5px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Visit website
          </a>
        )}
        {provider.realSelfLink && (
          <a
            href={provider.realSelfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs py-2 rounded-lg transition-colors"
            style={{
              border: '0.5px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
            }}
          >
            RealSelf reviews
          </a>
        )}
      </div>
    </div>
  );
}
