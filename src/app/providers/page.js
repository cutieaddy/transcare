'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import providersData from '../../data/providers.json';
import ProviderCard from '../../components/ProviderCard';

const ProviderMap = dynamic(() => import('../../components/ProviderMap'), { ssr: false });

const ALL_SPECIALTIES = [
  'Facial feminization surgery', 'Facial masculinization surgery',
  'Vaginoplasty', 'Phalloplasty', 'Orchiectomy', 'Mastectomy',
  'Breast augmentation', 'Body feminization', 'Body masculinization',
  'Tracheal shave', 'Voice feminization', 'Vocal training',
  'Hair transplant', 'Brazilian butt lift', 'Hair removal',
];

const ALL_COUNTRIES = [...new Set(providersData.map((p) => p.country))].sort();

export default function ProvidersPage() {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [sortBy, setSortBy] = useState('name');

  const filtered = useMemo(() => {
    let results = providersData.filter((p) => p.operational !== false);

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.city && p.city.toLowerCase().includes(q)) ||
          (p.state && p.state.toLowerCase().includes(q)) ||
          p.country.toLowerCase().includes(q)
      );
    }

    if (selectedCountry) {
      results = results.filter((p) => p.country === selectedCountry);
    }

    if (selectedSpecialty) {
      results = results.filter((p) => p.specialties.includes(selectedSpecialty));
    }

    if (verifiedOnly) {
      results = results.filter((p) => p.verified);
    }

    results.sort((a, b) => {
      if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      if (sortBy === 'reviews') {
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      }
      return a.name.localeCompare(b.name);
    });

    return results;
  }, [search, selectedCountry, selectedSpecialty, verifiedOnly, sortBy]);

  return (
    <>
      {/* Header */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-6 text-center"
        style={{ background: 'var(--color-hero-gradient)' }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
            Provider directory
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Find a provider
          </h1>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Browse our curated directory of {providersData.length} healthcare providers across {ALL_COUNTRIES.length} countries specializing in transgender care.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Search and filters */}
        <div className="mb-6">
          {/* Search bar */}
          <div className="relative mb-4">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, city, or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: 'var(--color-bg-secondary)',
                border: '0.5px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            />
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="text-sm px-4 py-2.5 rounded-lg outline-none cursor-pointer"
              style={{
                background: 'var(--color-bg-secondary)',
                border: '0.5px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <option value="">All countries</option>
              {ALL_COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="text-sm px-4 py-2.5 rounded-lg outline-none cursor-pointer"
              style={{
                background: 'var(--color-bg-secondary)',
                border: '0.5px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <option value="">All specialties</option>
              {ALL_SPECIALTIES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm px-4 py-2.5 rounded-lg outline-none cursor-pointer"
              style={{
                background: 'var(--color-bg-secondary)',
                border: '0.5px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <option value="name">Sort by name</option>
              <option value="rating">Sort by rating</option>
              <option value="reviews">Sort by reviews</option>
            </select>

            <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: 'var(--color-text-secondary)' }}>
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="rounded cursor-pointer"
              />
              Verified only
            </label>

            <button
              onClick={() => setShowMap(!showMap)}
              className="text-sm px-4 py-2.5 rounded-lg cursor-pointer transition-colors ml-auto"
              style={{
                background: 'var(--color-bg-secondary)',
                border: '0.5px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
              }}
            >
              {showMap ? 'Hide map' : 'Show map'}
            </button>
          </div>
        </div>

        {/* Map */}
        {showMap && (
          <div className="mb-8">
            <ProviderMap providers={filtered} />
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {filtered.length} provider{filtered.length !== 1 ? 's' : ''} found
          </p>
          {(search || selectedCountry || selectedSpecialty || verifiedOnly) && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedCountry('');
                setSelectedSpecialty('');
                setVerifiedOnly(false);
              }}
              className="text-xs px-3 py-1.5 rounded-lg cursor-pointer"
              style={{ color: 'var(--color-accent)', background: 'var(--color-accent-light)' }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Provider grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              No providers found matching your criteria.
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </section>

      {/* Disclaimer */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8 text-center">
        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)', borderTop: '0.5px solid var(--color-border)', paddingTop: '1.5rem' }}>
          Provider information is compiled from publicly available sources and is verified to the best of our ability. Always conduct your own research and consult directly with providers before making healthcare decisions. Inclusion in this directory does not constitute an endorsement.
        </p>
      </section>
    </>
  );
}
