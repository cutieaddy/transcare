import Link from 'next/link';

const SECTIONS = [
  {
    id: 'social', title: 'Social transition', subtitle: 'Names, pronouns, and presenting as yourself',
    content: [
      { heading: 'What is social transition?', text: "Social transition refers to the process of changing how you present yourself to the world in your daily life. This can include updating your name and pronouns, changing your wardrobe and grooming habits, and communicating your identity to the people around you. Social transition is often the first step many people take, and it can happen at any pace that feels comfortable for you." },
      { heading: 'Coming out to family and friends', text: "Coming out is a deeply personal process and there is no single right way to do it. Some people choose to tell close friends first, while others prefer to share with family members initially. It can be helpful to prepare what you want to say, choose a comfortable setting, and have resources available for those who may want to learn more. Remember that people may need time to process, and their initial reaction may not reflect their long-term response." },
      { heading: 'Navigating the workplace', text: "Transitioning in the workplace can involve conversations with HR, managers, and colleagues. Many workplaces have policies in place to support transitioning employees. It can be helpful to familiarize yourself with your organization's policies and any legal protections in your area before initiating these conversations." },
    ],
  },
  {
    id: 'legal', title: 'Legal transition', subtitle: 'Name changes, identification, and legal rights',
    content: [
      { heading: 'Changing your legal name', text: "The process for legally changing your name varies by jurisdiction. In many places, it involves filing a petition with a court, publishing the name change, and receiving a court order. Once you have a legal name change, you can update your identification documents, bank accounts, and other records. Research the specific requirements in your area, as some jurisdictions have simplified processes for transgender individuals." },
      { heading: 'Updating identification documents', text: "After a legal name change, you will need to update various identification documents including your driver's license or ID card, passport, social security card (in the US), birth certificate, and other official records. The requirements for updating gender markers vary by document and jurisdiction." },
      { heading: 'Understanding your legal protections', text: "Legal protections for transgender individuals vary widely by country, state, or province. It is important to understand what protections exist in your area regarding employment, housing, healthcare, and public accommodations. Local LGBTQ+ legal services can provide guidance on your specific rights." },
    ],
  },
  {
    id: 'medical', title: 'Medical transition', subtitle: 'Hormone therapy and healthcare guidance',
    content: [
      { heading: 'Hormone therapy overview', text: "Hormone therapy is one of the most common medical interventions for transgender individuals. For transfeminine individuals, this typically involves estrogen and anti-androgen medications. For transmasculine individuals, testosterone is commonly prescribed. Hormone therapy can produce significant physical changes over time, and it is important to work with a knowledgeable healthcare provider who can monitor your health throughout the process." },
      { heading: 'Finding a healthcare provider', text: "Finding a healthcare provider who is experienced in transgender care is an important step. Look for providers who follow established guidelines such as those from WPATH. Our provider directory can help you find experienced providers in your area." },
      { heading: 'What to expect', text: "The effects of hormone therapy develop gradually over months and years. Your provider should discuss expected timelines, potential side effects, and any health monitoring that will be needed. Every person's experience is different, and results vary based on factors including age, genetics, and dosage." },
    ],
  },
  {
    id: 'surgical', title: 'Surgical transition', subtitle: 'Procedures, preparation, and recovery',
    content: [
      { heading: 'Understanding your options', text: "There are many surgical options available to transgender individuals, and not everyone chooses to pursue surgery. Common procedures include facial feminization surgery (FFS), facial masculinization surgery (FMS), breast augmentation or mastectomy, vaginoplasty, phalloplasty, and others. Our provider directory includes detailed information about surgeons and their specialties." },
      { heading: 'Choosing a surgeon', text: "Choosing a surgeon is one of the most important decisions in the surgical transition process. Consider factors such as the surgeon's experience with specific procedures, their results, patient reviews, location, cost, and whether they accept insurance. It can be valuable to speak with previous patients about their experiences." },
      { heading: 'Preparing for surgery and recovery', text: "Preparation for surgery typically includes medical evaluations, potential lifestyle changes, and logistical planning. Recovery timelines vary by procedure but can range from weeks to several months. Having a support system in place and following your surgeon's instructions closely are important factors in a successful recovery." },
    ],
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center" style={{ background: 'var(--color-hero-gradient)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>Getting started</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Understanding your journey</h1>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Explore the different aspects of transitioning at your own pace. Every journey is unique — take what resonates with you and leave the rest for later.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-xs px-4 py-2 rounded-full transition-colors" style={{ background: 'var(--color-accent-light)', color: 'var(--color-pill-text)' }}>{s.title}</a>
          ))}
        </div>
      </section>

      {SECTIONS.map((section, sIdx) => (
        <section key={section.id} id={section.id} className="py-12 sm:py-16 px-4 sm:px-6" style={{ background: sIdx % 2 === 1 ? 'var(--color-bg-tertiary)' : 'transparent' }}>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ background: sIdx % 2 === 0 ? 'var(--color-accent-light)' : 'var(--color-accent-blue-light)', color: sIdx % 2 === 0 ? 'var(--color-accent)' : 'var(--color-accent-blue)' }}>{sIdx + 1}</div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{section.title}</h2>
              </div>
              <p className="text-sm ml-11" style={{ color: 'var(--color-text-secondary)' }}>{section.subtitle}</p>
            </div>
            <div className="flex flex-col gap-6 sm:ml-11">
              {section.content.map((block) => (
                <div key={block.heading}>
                  <h3 className="text-base font-medium mb-2">{block.heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-xl font-semibold mb-3">Ready to find a provider?</h2>
        <p className="text-sm leading-relaxed max-w-md mx-auto mb-6" style={{ color: 'var(--color-text-secondary)' }}>Our directory includes over 300 verified providers across 30+ countries.</p>
        <Link href="/providers" className="inline-block px-7 py-3 rounded-xl text-sm font-medium text-white hover:opacity-90 transition-opacity" style={{ background: 'var(--color-accent)' }}>Browse providers</Link>
      </section>
    </>
  );
}
