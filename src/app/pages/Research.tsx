import React from 'react';
import { ArrowRight, Blocks, Brain, Lightbulb, Microscope, Radio, TrendingUp, Users2 } from 'lucide-react';
import { Link } from 'react-router';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import { SectionAnimation } from '../components/SectionAnimation';
import { StatusBadge } from '../components/StatusBadge';
import { ROUTES } from '../routePaths';

const SECTION_MEDIA = {
  hero: { src: 'https://lottiefiles.com/free-animation/ux-ui-Qz7boeYI1a', alt: 'UX UI animation', label: 'Lab Visual' },
  vision: { src: 'https://lottiefiles.com/free-animation/zen-uxui-hub-HyyPZf8DWQ', alt: 'Zen UX/UI hub animation', label: 'Vision' },
  focus: { src: 'https://lottiefiles.com/free-animation/uiux-design-BgWDIBDbU6', alt: 'UI/UX design animation', label: 'Focus Areas' },
  experiments: { src: 'https://lottiefiles.com/free-animation/analytics-chart-446AFiFcN3', alt: 'Analytics chart animation', label: 'Experiments' },
  roadmap: { src: 'https://lottiefiles.com/free-animation/monthly-fluctuating-looped-graph-chart-m6lK0qqpL1', alt: 'Monthly graph animation', label: 'Roadmap' },
  cta: { src: 'https://lottiefiles.com/free-animation/contact-sent-email-DBnHqwgGQE', alt: 'Contact sent animation', label: 'Collaborate' },
} satisfies Record<string, SectionMediaItem>;

export default function Research() {
  const focusAreas = [
    {
      icon: Brain,
      title: 'Behavioral UX Research',
      description: 'Study decision patterns and friction points to improve experience outcomes.',
      projects: ['Decision Mapping', 'Task Analysis', 'Cognitive Load Studies'],
      gradient: 'tone-5',
    },
    {
      icon: Blocks,
      title: 'Design Systems R&D',
      description: 'Explore scalable components, tokens, and governance for large product ecosystems.',
      projects: ['Token Frameworks', 'System Architecture', 'Adoption Models'],
      gradient: 'tone-3',
    },
    {
      icon: Radio,
      title: 'Interaction Prototyping',
      description: 'Investigate motion, transitions, and flow clarity through advanced prototypes.',
      projects: ['Micro-interactions', 'Flow Experiments', 'Prototype Performance'],
      gradient: 'tone-1',
    },
    {
      icon: Microscope,
      title: 'Accessibility & Inclusion',
      description: 'Create frameworks for inclusive interface patterns and accessible systems.',
      projects: ['A11y Pattern Library', 'Screen Reader Flows', 'Inclusive Testing'],
      gradient: 'tone-4',
    },
  ];

  const experiments = [
    { title: 'Neural Design Assistant', desc: 'AI-assisted UX ideation and wireframe guidance', status: 'active' as const, progress: 75 },
    { title: 'Prototype Stress Testing', desc: 'Performance and usability under complex journeys', status: 'active' as const, progress: 60 },
    { title: 'Immersive Flow Mapping', desc: 'Spatial prototyping for multi-step user tasks', status: 'active' as const, progress: 45 },
    { title: 'Adaptive UI Framework', desc: 'Context-aware interface behavior system', status: 'beta' as const, progress: 85 },
    { title: 'Design QA Intelligence', desc: 'Automated checks for design consistency', status: 'new' as const, progress: 30 },
    { title: 'Trust-centered Forms', desc: 'Reduce friction and increase completion in forms', status: 'active' as const, progress: 55 },
  ];

  const roadmap = [
    { quarter: 'Q1 2026', items: ['Behavioral research report', 'A11y toolkit v1', 'Prototype benchmark model'] },
    { quarter: 'Q2 2026', items: ['Design system R&D release', 'Motion testing suite', 'UX governance framework'] },
    { quarter: 'Q3 2026', items: ['Prototype automation beta', 'Research workshops', 'Partner experiments'] },
    { quarter: 'Q4 2026', items: ['Research symposium', 'Open pattern publication', 'Lab expansion'] },
  ];

  return (
    <div className="page-shell">
      <section className="section-wrap hero-wrap hero-section">
        <div className="hero-glow" />

        <div className="hero-layout">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="chip mb-8">
              <Microscope size={12} className="text-[var(--primary)]" />
              Research lab for UX and prototyping innovation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Research
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              We investigate user behavior, interface patterns, and design systems to improve product outcomes.
            </p>
            <SectionAnimation variant="hero" size="lg" className="mt-12 lg:mt-0 lg:ml-14" />
          </div>
          <SectionMedia media={SECTION_MEDIA.hero} />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad-tight">
          <div className="section-with-media media-left">
            <div className="section-body max-w-5xl mx-auto text-center relative">
              <SectionAnimation variant="vision" size="sm" className="absolute top-4 right-4" />
              <Lightbulb size={46} className="mx-auto mb-6 text-[var(--primary)]" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">Research Vision</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Build a practical knowledge base that helps teams design faster, prototype smarter,
                and ship experiences that are easier to use.
              </p>
            </div>
            <SectionMedia media={SECTION_MEDIA.vision} />
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">Focus Areas</h2>
              <p className="section-lead">Applied UX research streams with clear product impact.</p>
            </div>

            <div className="grid md:grid-cols-2 cards-grid">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article
                    key={area.title}
                    className="group card-equal card-pad surface-panel hover:border-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/8 transition-all hover:-translate-y-1 relative"
                  >
                    {area.title === focusAreas[0].title && (
                      <SectionAnimation variant="focus" size="sm" className="absolute top-4 right-4" />
                    )}
                    <div className={`w-12 h-12 ${area.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                      <Icon size={22} className="text-[var(--text-primary)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{area.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{area.description}</p>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-xs text-[var(--text-primary)]">Active projects</h4>
                      <ul className="space-y-1">
                        {area.projects.map((project) => (
                          <li key={project} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                            <div className="w-1 h-1 bg-[var(--primary)] rounded-full" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.focus} />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad">
          <div className="section-with-media media-left">
            <div className="section-body">
              <div className="section-head">
                <h2 className="section-title">Ongoing Experiments</h2>
                <p className="section-lead">Current UX and prototype research initiatives.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 cards-grid">
                {experiments.map((experiment) => (
                  <article
                    key={experiment.title}
                    className="card-equal card-pad surface-panel hover:border-[var(--primary)]/30 hover:shadow-lg transition-all relative"
                  >
                    {experiment.title === experiments[0].title && (
                      <SectionAnimation variant="experiments" size="sm" className="absolute top-4 right-4" />
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold flex-1 text-sm text-[var(--text-primary)]">{experiment.title}</h3>
                      <StatusBadge variant={experiment.status} />
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mb-4">{experiment.desc}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[var(--text-secondary)]">Progress</span>
                        <span className="font-medium text-[var(--text-primary)]">{experiment.progress}%</span>
                      </div>
                      <div className="w-full bg-[var(--muted)] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[var(--primary)] h-full rounded-full transition-all" style={{ width: `${experiment.progress}%` }} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.experiments} />
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">Research Roadmap</h2>
              <p className="section-lead">Planned milestones for our UX research lab.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 cards-grid">
              {roadmap.map((quarter) => (
                <article key={quarter.quarter} className="card-equal card-pad surface-panel hover:border-[var(--primary)]/30 transition-colors relative">
                  {quarter.quarter === roadmap[0].quarter && (
                    <SectionAnimation variant="roadmap" size="sm" className="absolute top-4 right-4" />
                  )}
                  <div className="inline-block px-3 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] text-xs font-medium mb-4">{quarter.quarter}</div>
                  <ul className="space-y-2">
                    {quarter.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs">
                        <TrendingUp size={14} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.roadmap} />
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="hero-panel text-center">
              <div className="relative">
                <Users2 size={46} className="mx-auto mb-6 text-[var(--text-primary)]" />
                <h2 className="hero-panel-title text-3xl md:text-4xl mb-4">Collaborate with our UX lab</h2>
                <p className="hero-panel-copy text-lg mb-8 max-w-2xl mx-auto">
                  We partner with teams seeking evidence-backed design and prototyping decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={ROUTES.contact} className="cta-contrast">
                    Partner With Us
                    <ArrowRight size={18} />
                  </Link>
                  <button className="cta-contrast-outline">
                    Read Findings
                  </button>
                </div>
                <SectionAnimation variant="cta" size="md" className="mt-8 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2" />
              </div>
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.cta} />
        </div>
      </section>
    </div>
  );
}

