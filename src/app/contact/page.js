'use client';

import { useState } from 'react';

const CONTACT_TYPES = ['Feedback', 'Request', 'Feature suggestion', 'Assistance'];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    pronouns: '',
    contact: '',
    contactType: '',
    message: '',
    canContact: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend/Supabase
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="py-16 sm:py-20 px-4 sm:px-6 text-center" style={{ background: 'var(--color-hero-gradient)' }}>
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--color-accent-light)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight mb-4">Thank you</h1>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Your message has been received. {form.canContact && form.contact ? 'We may reach out to you using the contact information you provided.' : 'Thank you for taking the time to share your thoughts with us.'}</p>
            <button onClick={() => { setSubmitted(false); setForm({ name: '', pronouns: '', contact: '', contactType: '', message: '', canContact: false }); }} className="mt-6 px-6 py-2.5 rounded-xl text-sm cursor-pointer" style={{ border: '0.5px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>Send another message</button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center" style={{ background: 'var(--color-hero-gradient)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)' }}>Get in touch</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Contact us</h1>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Have feedback, a question, or a suggestion? We would love to hear from you. Your input helps us improve this resource for everyone.</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
              style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
            />
          </div>

          {/* Pronouns */}
          <div>
            <label className="block text-sm font-medium mb-1.5">Pronouns</label>
            <input
              type="text"
              value={form.pronouns}
              onChange={(e) => handleChange('pronouns', e.target.value)}
              placeholder="e.g. she/her, he/him, they/them"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
              style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
            />
          </div>

          {/* Contact (optional) */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Contact <span className="font-normal" style={{ color: 'var(--color-text-muted)' }}>(optional)</span>
            </label>
            <input
              type="text"
              value={form.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              placeholder="Email or other contact method"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
              style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
            />
          </div>

          {/* Contact Type */}
          <div>
            <label className="block text-sm font-medium mb-1.5">What is this regarding?</label>
            <div className="flex flex-wrap gap-2">
              {CONTACT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange('contactType', type)}
                  className="text-sm px-4 py-2 rounded-lg cursor-pointer transition-all"
                  style={{
                    background: form.contactType === type ? 'var(--color-accent-light)' : 'var(--color-bg-secondary)',
                    border: `1px solid ${form.contactType === type ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    color: form.contactType === type ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    fontWeight: form.contactType === type ? 500 : 400,
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Share your thoughts, questions, or suggestions..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 resize-y"
              style={{ background: 'var(--color-bg-secondary)', border: '0.5px solid var(--color-border)', color: 'var(--color-text)' }}
            />
          </div>

          {/* Can contact checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.canContact}
              onChange={(e) => handleChange('canContact', e.target.checked)}
              className="mt-0.5 rounded cursor-pointer"
            />
            <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I am comfortable being contacted regarding this submission
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-medium text-white cursor-pointer transition-opacity hover:opacity-90 mt-2"
            style={{ background: 'var(--color-accent)' }}
          >
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
