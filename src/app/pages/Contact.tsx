import React from 'react';
import { ArrowRight, Mail, MapPin, Send } from 'lucide-react';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import { SectionAnimation } from '../components/SectionAnimation';

const SECTION_MEDIA = {
  hero: { src: 'https://lottiefiles.com/free-animation/send-a-message-fW7mmuNj9F', alt: 'Send message animation', label: 'Start Sprint' },
  form: { src: 'https://lottiefiles.com/free-animation/contact-sent-email-DBnHqwgGQE', alt: 'Contact sent animation', label: 'Brief Intake' },
  cta: { src: 'https://lottiefiles.com/free-animation/contact-sent-email-DBnHqwgGQE', alt: 'Contact sent animation', label: 'Quick Review' },
} satisfies Record<string, SectionMediaItem>;

export default function Contact() {
  return (
    <div className="page-shell">
      <section className="section-wrap hero-wrap hero-section">
        <div className="hero-glow" />

        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="max-w-3xl mb-14 md:mb-16 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
                Start your design sprint
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                Share your product challenge and we&apos;ll propose a UX strategy plus prototype execution plan.
              </p>
              <SectionAnimation variant="hero" size="lg" className="mt-12 lg:mt-0 lg:ml-14" />
            </div>

            <div className="section-with-media media-left">
              <div className="section-body">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 p-2 md:p-3 max-w-5xl mx-auto">
                  <aside className="space-y-6">
                    <div className="surface-panel card-pad relative">
                      <SectionAnimation variant="contact" size="sm" className="absolute top-4 right-4" />
                      <h2 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">Discovery Call</h2>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        We discuss audience, goals, product stage, and constraints to shape the right sprint scope.
                      </p>
                    </div>

                    <div className="surface-panel card-pad space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-[var(--radius)] flex items-center justify-center flex-shrink-0">
                          <Mail size={20} className="text-[var(--primary)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1 text-[var(--text-primary)]">Email</h3>
                          <p className="text-sm text-[var(--text-secondary)]">hello@protodesignagency.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-[var(--radius)] flex items-center justify-center flex-shrink-0">
                          <MapPin size={20} className="text-[var(--primary)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1 text-[var(--text-primary)]">Studio</h3>
                          <p className="text-sm text-[var(--text-secondary)]">
                            123 Innovation Street
                            <br />
                            San Francisco, CA 94102
                          </p>
                        </div>
                      </div>
                    </div>
                  </aside>

                  <div className="surface-panel card-pad hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/8 transition-all">
                    <form className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="squircle w-full px-4 py-3 bg-input-background border border-border rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all text-sm"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="squircle w-full px-4 py-3 bg-input-background border border-border rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all text-sm"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="squircle w-full px-4 py-3 bg-input-background border border-border rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all text-sm"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                          Project Brief
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="squircle w-full px-4 py-3 bg-input-background border border-border rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all resize-none text-sm"
                          placeholder="What are you designing or validating?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="squircle w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/25 font-semibold text-sm"
                      >
                        Send Inquiry
                        <Send size={17} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <SectionMedia media={SECTION_MEDIA.form} />
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.hero} />
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
          <div className="surface-elevated card-pad flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
            <SectionAnimation variant="cta" size="md" className="absolute top-4 right-4" />
            <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Need a fast prototype review?</h3>
                <p className="text-[var(--text-secondary)]">Book a 30-minute session with our senior UX team.</p>
              </div>
              <button className="squircle inline-flex items-center gap-2 px-6 py-3 bg-[var(--surface-contrast)] text-[var(--text-primary)] rounded-[var(--radius)] hover:bg-[color-mix(in_oklab,var(--surface-contrast),white_6%)] transition-colors font-medium self-start md:self-auto">
                Schedule Call
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.cta} />
        </div>
      </section>
    </div>
  );
}

