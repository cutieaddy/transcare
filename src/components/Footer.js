import Link from 'next/link';

const FOOTER_SECTIONS = [
  {
    title: 'Information',
    links: [
      { label: 'Getting started', href: '/getting-started' },
      { label: 'Social transition', href: '/getting-started#social' },
      { label: 'Legal transition', href: '/getting-started#legal' },
      { label: 'Medical transition', href: '/getting-started#medical' },
      { label: 'Surgical transition', href: '/getting-started#surgical' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Provider directory', href: '/providers' },
      { label: 'Interactive map', href: '/providers#map' },
      { label: 'Research & studies', href: '/resources' },
      { label: 'WPATH guidelines', href: '/resources#wpath' },
      { label: 'Funding resources', href: '/resources#funding' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Send feedback', href: '/contact' },
      { label: 'Accessibility', href: '/resources#accessibility' },
      { label: 'Disclaimer', href: '/resources#disclaimer' },
      { label: 'Privacy policy', href: '/resources#privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-12 pb-6 px-4 sm:px-6"
      style={{
        background: 'var(--color-footer-bg)',
        color: 'var(--color-footer-text)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-semibold"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-blue))',
                }}
              >
                T
              </div>
              <span className="font-medium text-sm">TransCare</span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-[260px]"
              style={{ color: 'var(--color-footer-muted)' }}
            >
              A comprehensive resource supporting transgender individuals through
              every step of their journey.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <p
                className="text-[0.72rem] font-medium tracking-wider uppercase mb-3"
                style={{ color: 'var(--color-footer-muted)' }}
              >
                {section.title}
              </p>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[0.82rem] transition-opacity hover:opacity-80"
                    style={{ color: 'var(--color-footer-text)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-footer-muted)' }}
          >
            &copy; {new Date().getFullYear()} TransCare. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--color-footer-muted)' }}
          >
            Made with care for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
