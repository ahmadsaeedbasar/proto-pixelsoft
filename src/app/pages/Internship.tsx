import React from 'react';
import { ArrowRight, Award, Brain, Check, Clock, Code2, LineChart, Palette } from 'lucide-react';
import { Link } from 'react-router';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import { SectionAnimation } from '../components/SectionAnimation';
import { StatusBadge } from '../components/StatusBadge';
import { ROUTES } from '../routePaths';

const SECTION_MEDIA = {
  hero: { src: 'https://lottiefiles.com/free-animation/join-the-team-qWVWPNee3i', alt: 'Join the team animation', label: 'Program Visual' },
  tracks: { src: 'https://lottiefiles.com/free-animation/ux-ui-Qz7boeYI1a', alt: 'UX UI animation', label: 'Learning Tracks' },
  journey: { src: 'https://lottiefiles.com/free-animation/analytics-chart-446AFiFcN3', alt: 'Analytics chart animation', label: 'Program Journey' },
  outcomes: { src: 'https://lottiefiles.com/free-animation/creative-team-eBolNfIgIj', alt: 'Creative team animation', label: 'Outcomes' },
} satisfies Record<string, SectionMediaItem>;

export default function Internship() {
  const tracks = [
    {
      icon: Palette,
      title: 'UI/UX Design Track',
      duration: '12 weeks',
      status: 'active' as const,
      description: 'Learn user-centered design, interface craft, and usability thinking.',
      topics: ['UX Research', 'UI Systems', 'Figma Mastery', 'Interaction Design', 'Case Studies'],
      gradient: 'tone-1',
    },
    {
      icon: Code2,
      title: 'Design-to-Frontend Track',
      duration: '14 weeks',
      status: 'active' as const,
      description: 'Bridge design and frontend execution with modern implementation practices.',
      topics: ['Design Handoff', 'Component Thinking', 'Responsive UI', 'Accessibility', 'QA Workflow'],
      gradient: 'tone-3',
    },
    {
      icon: Brain,
      title: 'AI for Designers',
      duration: '10 weeks',
      status: 'active' as const,
      description: 'Use AI workflows to accelerate ideation, prototyping, and UX documentation.',
      topics: ['Prompt Workflows', 'UX Automation', 'AI-assisted Prototypes', 'Content Systems', 'Ethics'],
      gradient: 'tone-5',
    },
    {
      icon: LineChart,
      title: 'UX Research & Analytics',
      duration: '12 weeks',
      status: 'active' as const,
      description: 'Measure, interpret, and improve experiences using qualitative and quantitative signals.',
      topics: ['Research Methods', 'Usability Testing', 'Behavior Analysis', 'Insights Reporting', 'Experiment Design'],
      gradient: 'tone-4',
    },
  ];

  const roadmap = [
    { phase: 'Application', duration: 'Week 1', desc: 'Profile review and motivation check.' },
    { phase: 'Onboarding', duration: 'Week 2', desc: 'Tools setup and learning roadmap.' },
    { phase: 'Mentored Learning', duration: 'Week 3-9', desc: 'Structured sessions with weekly assignments.' },
    { phase: 'Prototype Lab', duration: 'Week 10-11', desc: 'Build and test a capstone prototype.' },
    { phase: 'Portfolio Review', duration: 'Week 12', desc: 'Feedback rounds and final presentation.' },
  ];

  return (
    <div className="page-shell">
      <section className="section-wrap hero-wrap hero-section">
        <div className="hero-glow" />

        <div className="hero-layout">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="chip mb-8">
              <Award size={12} className="text-[var(--primary)]" />
              Internship-led learning for designers and prototypers
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Internship Program
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              Practical cohorts built to help emerging talent become production-ready UI/UX professionals.
            </p>
            <Link
              to={ROUTES.contact}
              className="cta-primary px-7"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
            <SectionAnimation variant="hero" size="lg" className="mt-12 lg:mt-0 lg:ml-14" />
          </div>
          <SectionMedia media={SECTION_MEDIA.hero} />
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">Learning Tracks</h2>
              <p className="section-lead">Specialized tracks to build real-world UX, UI, and prototyping capability.</p>
            </div>

            <div className="grid md:grid-cols-2 cards-grid">
              {tracks.map((track) => {
                const Icon = track.icon;
                return (
                  <article
                    key={track.title}
                    className="group card-equal card-pad surface-panel hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/8 transition-all hover:-translate-y-1 relative"
                  >
                    {track.title === tracks[0].title && (
                      <SectionAnimation variant="tracks" size="sm" className="absolute top-4 right-4" />
                    )}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 ${track.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon size={22} className="text-[var(--text-primary)]" />
                      </div>
                      <StatusBadge variant={track.status} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{track.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-4">
                      <Clock size={14} />
                      <span>{track.duration}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{track.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-xs text-[var(--text-primary)]">Curriculum focus</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {track.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                            <Check size={12} className="text-[var(--primary)] flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.tracks} />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad">
          <div className="section-with-media media-right">
            <div className="section-body">
              <div className="section-head">
                <h2 className="section-title">Program Journey</h2>
                <p className="section-lead">A clear progression from onboarding to portfolio-ready outcomes.</p>
              </div>

              <div className="grid md:grid-cols-5 cards-grid-tight">
                {roadmap.map((phase, index) => (
                <article key={phase.phase} className="card-equal card-pad surface-panel hover:border-[var(--primary)]/30 transition-colors relative">
                  {phase.phase === roadmap[0].phase && (
                    <SectionAnimation variant="journey" size="sm" className="absolute top-4 right-4" />
                  )}
                  <div className="w-8 h-8 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] flex items-center justify-center font-bold text-sm mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold mb-1 text-sm text-[var(--text-primary)]">{phase.phase}</h3>
                    <p className="text-xs text-[var(--primary)] mb-2">{phase.duration}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{phase.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.journey} />
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="hero-panel">
              <div className="relative grid md:grid-cols-2 gap-12 items-center p-12 md:p-16">
                <div className="text-[var(--text-primary)]">
                  <h2 className="hero-panel-title text-3xl md:text-4xl mb-6">Program Outcomes</h2>
                  <ul className="space-y-4">
                    {[
                      { title: 'Portfolio-ready projects', desc: 'Case studies built from real product scenarios.' },
                      { title: 'Prototype expertise', desc: 'Confidence in flow design and interactive prototypes.' },
                      { title: 'Mentored growth', desc: 'Weekly critique and iterative improvement loops.' },
                      { title: 'Career launch support', desc: 'Guidance on applications, interviews, and presentation.' },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <Check size={20} className="flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                          <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="squircle bg-card/60 backdrop-blur-sm rounded-[var(--radius)] p-8 border border-border/80 relative">
                  <SectionAnimation variant="team" size="sm" className="absolute top-4 right-4" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Ready to join?</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    Enrollment is open for the upcoming internship cohort.
                  </p>
                  <Link to={ROUTES.contact} className="w-full cta-contrast">
                    Apply Today
                  </Link>
                  <p className="text-xs text-[var(--text-secondary)] text-center mt-4">Applications close in 14 days</p>
                </div>
              </div>
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.outcomes} />
        </div>
      </section>
    </div>
  );
}

