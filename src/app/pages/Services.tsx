import React from 'react';
import { ArrowRight, Check, Code2, Globe, Lightbulb, Palette, Smartphone, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import Reveal from '../components/Reveal';
import { ROUTES } from '../routePaths';

const SECTION_MEDIA = {
  hero: { src: '/media/services-hero-right.gif', alt: 'Services hero animation', label: 'Service Visual' },
  services: { src: '/media/services-grid-left.gif', alt: 'Service cards animation', label: 'Core Services' },
  projects: { src: '/media/services-projects-right.gif', alt: 'Project outcomes animation', label: 'Case Outcomes' },
  process: { src: '/media/services-process-left.gif', alt: 'Delivery process animation', label: 'Delivery Flow' },
  cta: { src: '/media/services-cta-right.gif', alt: 'Service CTA animation', label: 'Start Sprint' },
} satisfies Record<string, SectionMediaItem>;

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'UX Research',
      description: 'Understand behavior, pain points, and decision patterns before designing.',
      features: ['Stakeholder Interviews', 'User Testing', 'Journey Mapping', 'Insight Reports'],
      gradient: 'tone-1',
    },
    {
      icon: Sparkles,
      title: 'UI Design Systems',
      description: 'Scalable interface systems with reusable components and interaction standards.',
      features: ['Design Tokens', 'Component Libraries', 'Interaction Rules', 'Accessibility Audit'],
      gradient: 'tone-5',
    },
    {
      icon: Smartphone,
      title: 'App & Web Interface Design',
      description: 'Polished product interfaces for mobile apps, dashboards, and web platforms.',
      features: ['Mobile UX', 'Responsive Web UI', 'User Flows', 'Micro-interactions'],
      gradient: 'tone-3',
    },
    {
      icon: Code2,
      title: 'Prototype to Production Support',
      description: 'Bridge design and development with implementation-ready handoff systems.',
      features: ['Design QA', 'Handoff Docs', 'Frontend Collaboration', 'Iteration Cycles'],
      gradient: 'tone-4',
    },
    {
      icon: Globe,
      title: 'Product UX Strategy',
      description: 'Prioritize roadmap decisions with product goals and user outcomes aligned.',
      features: ['Experience Roadmaps', 'Feature Prioritization', 'Experience Metrics', 'Experiment Plans'],
      gradient: 'tone-6',
    },
    {
      icon: Lightbulb,
      title: 'Rapid Prototyping Sprints',
      description: 'Turn product ideas into clickable prototypes within days, not months.',
      features: ['Sprint Workshops', 'Low/High Fidelity Prototypes', 'Validation Sessions', 'Pitch-ready Demos'],
      gradient: 'tone-2',
    },
  ];

  const process = [
    { step: '01', title: 'Audit', desc: 'Understand product context and user needs.' },
    { step: '02', title: 'Structure', desc: 'Map flows, information architecture, and priorities.' },
    { step: '03', title: 'Design', desc: 'Create visual direction and interaction patterns.' },
    { step: '04', title: 'Prototype', desc: 'Build interactive prototypes for quick validation.' },
    { step: '05', title: 'Test', desc: 'Run usability checks and refine critical touchpoints.' },
    { step: '06', title: 'Handoff', desc: 'Deliver implementation-ready files and guidance.' },
  ];

  const projects = [
    {
      name: 'FinEdge Banking App',
      category: 'Mobile UX Redesign',
      impact: '+34% onboarding completion',
      summary: 'Reworked account setup and KYC flow with simplified microcopy and progressive disclosure.',
    },
    {
      name: 'OpsGrid Dashboard',
      category: 'Design System + Web App',
      impact: '2x faster design-to-dev handoff',
      summary: 'Built a tokenized component system and responsive dashboard patterns for multi-team delivery.',
    },
    {
      name: 'MedFlow Prototype Sprint',
      category: 'Rapid Prototyping',
      impact: 'Validated in 9 days',
      summary: 'Created high-fidelity clickable flows to test booking, triage, and follow-up journeys with users.',
    },
  ];

  return (
    <div className="page-shell">
      <section className="section-wrap hero-wrap hero-section">
        <div className="hero-glow" />
        <div className="hero-layout">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="chip mb-8">
              <Sparkles size={12} className="text-[var(--primary)]" />
              End-to-end UX and prototyping services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Services for product experience teams
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              We combine research, UI craftsmanship, and prototyping to reduce guesswork in product decisions.
            </p>
          </div>
          <SectionMedia media={SECTION_MEDIA.hero} />
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 cards-grid">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Reveal as="article" key={service.title} className={`group card-equal card-pad surface-panel anim-service`} delay={idx * 80}>
                    <div className={`w-12 h-12 ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform service-icon`}>
                      <Icon size={22} className="text-[var(--text-primary)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{service.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <Check size={14} className="text-[var(--primary)] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.services} />
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-lead">Recent design and prototyping engagements delivered for product teams.</p>
            </div>

            <div className="grid md:grid-cols-3 cards-grid">
              {projects.map((project, idx) => (
                <Reveal as="article" key={project.name} className="card-equal surface-panel card-pad anim-project" delay={idx * 100}>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)] mb-3">{project.category}</p>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{project.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{project.summary}</p>
                  <div className="status-success inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                    {project.impact}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.projects} />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad">
          <div className="section-with-media media-left">
            <div className="section-body">
              <div className="section-head">
                <h2 className="section-title">Our Delivery Flow</h2>
                <p className="section-lead">Structured design process to keep speed high and quality consistent.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 cards-grid">
                {process.map((phase, idx) => (
                  <Reveal as="article" key={phase.step} className="card-equal card-pad surface-panel anim-process hover:border-[var(--primary)]/30 hover:shadow-lg transition-all" delay={idx * 90}>
                    <div className="text-4xl font-bold text-[var(--primary)]/15 mb-4 step-badge">{phase.step}</div>
                    <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{phase.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{phase.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.process} />
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="hero-panel text-center">
              <div className="relative">
                <h2 className="hero-panel-title text-3xl md:text-4xl mb-4">Need a UX partner?</h2>
                <p className="hero-panel-copy text-lg mb-8 max-w-2xl mx-auto">
                  Let us transform your concept into a validated prototype and polished interface system.
                </p>
                <Link to={ROUTES.contact} className="cta-contrast">
                  Book a Sprint
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.cta} />
        </div>
      </section>
    </div>
  );
}


