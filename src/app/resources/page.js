const RESOURCE_SECTIONS = [
  {
    id: 'guidelines',
    title: 'Clinical guidelines',
    desc: 'Established standards of care and clinical guidelines for transgender healthcare.',
    resources: [
      { title: 'WPATH Standards of Care (SOC-8)', desc: 'The World Professional Association for Transgender Health provides comprehensive guidelines for the health of transgender and gender diverse people.', url: 'https://www.wpath.org/soc8', tag: 'Guidelines' },
      { title: 'Endocrine Society Guidelines', desc: 'Clinical practice guidelines for endocrine treatment of gender-dysphoric/gender-incongruent persons.', url: 'https://www.endocrine.org/', tag: 'Medical' },
      { title: 'UCSF Transgender Care Guidelines', desc: 'Primary care protocols for transgender patient care developed by the University of California, San Francisco.', url: 'https://transcare.ucsf.edu/', tag: 'Medical' },
    ],
  },
  {
    id: 'funding',
    title: 'Funding and financial assistance',
    desc: 'Resources to help navigate the financial aspects of transitioning.',
    resources: [
      { title: 'Jim Collins Foundation', desc: 'Provides financial assistance to transgender people for gender-confirming surgeries.', url: 'https://jimcollinsfoundation.org/', tag: 'Funding' },
      { title: 'Point of Pride', desc: 'Provides financial aid and donated items to trans folks in need of gender-affirming support.', url: 'https://www.pointofpride.org/', tag: 'Funding' },
      { title: 'GoFundMe Charity', desc: 'Many individuals and organizations run fundraising campaigns for transition-related costs.', url: 'https://www.gofundme.com/', tag: 'Crowdfunding' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal resources',
    desc: 'Organizations that provide legal assistance and advocacy for transgender rights.',
    resources: [
      { title: 'Lambda Legal', desc: 'National organization committed to achieving full recognition of the civil rights of LGBTQ+ people.', url: 'https://www.lambdalegal.org/', tag: 'Legal' },
      { title: 'Transgender Law Center', desc: 'Largest national trans-led organization advocating for a world in which all people are free to define themselves.', url: 'https://transgenderlawcenter.org/', tag: 'Legal' },
      { title: 'National Center for Transgender Equality', desc: 'Advocates for policy changes to advance transgender equality.', url: 'https://transequality.org/', tag: 'Advocacy' },
    ],
  },
  {
    id: 'support',
    title: 'Support and community',
    desc: 'Mental health resources, support lines, and community organizations.',
    resources: [
      { title: 'Trans Lifeline', desc: 'A grassroots hotline and microgrants organization offering direct emotional and financial support to trans people in crisis.', url: 'https://translifeline.org/', tag: 'Crisis support' },
      { title: 'The Trevor Project', desc: 'Provides crisis intervention and suicide prevention services to LGBTQ+ young people.', url: 'https://www.thetrevorproject.org/', tag: 'Crisis support' },
      { title: 'PFLAG', desc: 'The first and largest organization dedicated to supporting, educating, and advocating for LGBTQ+ people and their families.', url: 'https://pflag.org/', tag: 'Family support' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center" style={{ background: 'var(--color-hero-gradient)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>Resources</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Resources and research</h1>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>A curated collection of important resources, guidelines, and organizations to support you throughout your journey.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {RESOURCE_SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-xs px-4 py-2 rounded-full transition-colors" style={{ background: 'var(--color-accent-light)', color: 'var(--color-pill-text)' }}>{s.title}</a>
          ))}
        </div>
      </section>

      {RESOURCE_SECTIONS.map((section, sIdx) => (
        <section key={section.id} id={section.id} className="py-10 sm:py-14 px-4 sm:px-6" style={{ background: sIdx % 2 === 1 ? 'var(--color-bg-tertiary)' : 'transparent' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">{section.title}</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>{section.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.resources.map((r) => (
                <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="rounded-xl p-5 transition-all hover:scale-[1.01] block" style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', boxShadow: 'var(--color-card-shadow)' }}>
                  <span className="inline-block text-[0.68rem] px-2 py-0.5 rounded-full mb-3" style={{ background: 'var(--color-accent-blue-light)', color: 'var(--color-accent-blue)' }}>{r.tag}</span>
                  <h3 className="text-sm font-medium mb-2">{r.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{r.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="disclaimer" className="py-10 px-4 sm:px-6" style={{ background: 'var(--color-bg-tertiary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Disclaimer</h2>
          <div className="text-sm leading-relaxed flex flex-col gap-3" style={{ color: 'var(--color-text-secondary)' }}>
            <p>TransCare is an informational resource created to help transgender individuals access information and find healthcare providers. The content on this website does not constitute medical, legal, or professional advice.</p>
            <p>While we make every effort to ensure the accuracy and currency of the information presented, we cannot guarantee that all information is complete, accurate, or up-to-date. Medical information changes frequently, and individual circumstances vary.</p>
            <p>Always consult with qualified healthcare professionals before making decisions about your health or transition. The inclusion of any provider in our directory does not constitute an endorsement or recommendation.</p>
            <p>If you are in crisis or need immediate support, please contact a crisis hotline in your area. In the US, you can reach the Trans Lifeline at 877-565-8860 or the 988 Suicide and Crisis Lifeline by dialing 988.</p>
          </div>
        </div>
      </section>
    </>
  );
}
