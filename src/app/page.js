import Link from 'next/link';

const FEATURES = [
  { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-13.29L7.7 10.3a1 1 0 001.41 1.41L11 9.83V17a1 1 0 002 0v-4h0l.5-3.5', title: 'At your own pace', desc: "Whether you're just beginning to explore or well into your journey, find information that meets you where you are." },
  { icon: 'pin', title: 'Find providers near you', desc: 'Browse a curated directory of healthcare providers who specialize in transgender care, mapped by location and specialty.' },
  { icon: 'book', title: 'Verified resources', desc: 'Access guides on social, legal, medical, and surgical transitions — all sourced and verified for accuracy.' },
  { icon: 'heart', title: 'Community first', desc: 'Built by and for the transgender community, with care and understanding at every step.' },
];

const JOURNEY = [
  { title: 'Social transition', desc: 'Names, pronouns, presentation, and navigating relationships with family, friends, and colleagues.' },
  { title: 'Legal transition', desc: 'Name changes, updated identification documents, and understanding your legal rights and protections.' },
  { title: 'Medical transition', desc: 'Hormone therapy options, finding knowledgeable providers, and understanding what to expect.' },
  { title: 'Surgical transition', desc: 'Available procedures, choosing experienced surgeons, preparing for surgery, and recovery guidance.' },
];

export default function HomePage() {
  return (
    <>
      <section className="py-20 sm:py-24 px-4 sm:px-6 text-center" style={{ background: 'var(--color-hero-gradient)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--color-accent)' }}>Your journey, your way</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-5">Resources, support, and guidance for every step of your transition</h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: 'var(--color-text-secondary)' }}>A safe and welcoming space to find verified information, connect with experienced providers, and access the resources you need — all in one place.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/getting-started" className="px-7 py-3 rounded-xl text-sm font-medium text-white hover:opacity-90 transition-opacity" style={{ background: 'var(--color-accent)' }}>Get started</Link>
            <Link href="/providers" className="px-7 py-3 rounded-xl text-sm hover:opacity-80 transition-opacity" style={{ border: '1px solid var(--color-border)' }}>Find a provider</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-accent)' }}>What we offer</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Everything in one place</h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We know how overwhelming it can be. That&apos;s why we&apos;ve gathered the information you need into a single, easy-to-navigate resource.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="rounded-xl p-6" style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', boxShadow: 'var(--color-card-shadow)' }}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: i % 2 === 0 ? 'var(--color-accent-light)' : 'var(--color-accent-blue-light)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent-blue)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                  {i === 1 && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></>}
                  {i === 2 && <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></>}
                  {i === 3 && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>}
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ background: 'var(--color-bg-tertiary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-accent)' }}>Understanding the journey</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Every journey is unique</h2>
            <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>There&apos;s no single path — and that&apos;s okay. Explore at your own pace, in any order that feels right for you.</p>
          </div>
          <div className="flex flex-col gap-3">
            {JOURNEY.map((step, i) => (
              <Link key={step.title} href={`/getting-started#${step.title.split(' ')[0].toLowerCase()}`} className="flex items-start gap-4 rounded-xl p-5 hover:scale-[1.005] transition-transform" style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', boxShadow: 'var(--color-card-shadow)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ background: i % 2 === 0 ? 'var(--color-accent-light)' : 'var(--color-accent-blue-light)', color: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent-blue)' }}>{i + 1}</div>
                <div>
                  <h3 className="text-sm font-medium mb-1">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ background: 'var(--color-hero-gradient)', border: '0.5px solid var(--color-border)' }}>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">Find the right provider for you</h2>
          <p className="max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>Browse our directory of over 300 healthcare providers across 30+ countries, filtered by specialty, location, and reviews.</p>
          <Link href="/providers" className="inline-block px-7 py-3 rounded-xl text-sm font-medium text-white hover:opacity-90 transition-opacity" style={{ background: 'var(--color-accent)' }}>Explore the directory</Link>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-12 text-center">
        <p className="text-xs leading-relaxed pt-6" style={{ color: 'var(--color-text-muted)', borderTop: '0.5px solid var(--color-border)' }}>This website is an informational resource and does not constitute medical advice. Always consult with qualified healthcare professionals before making decisions about your health or transition.</p>
      </section>
    </>
  );
}
