import React from 'react';
import { ArrowRight, BarChart3, Shield, Sparkles, TrendingUp, Users2, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import Reveal from '../components/Reveal';
import { StatusBadge } from '../components/StatusBadge';
import { ROUTES } from '../routePaths';

const SECTION_MEDIA = {
  hero: { src: '/media/products-hero-right.gif', alt: 'Products hero animation', label: 'Product Visual' },
  catalog: { src: '/media/products-catalog-left.gif', alt: 'Product catalog animation', label: 'Catalog' },
  velocity: { src: '/media/products-velocity-right.gif', alt: 'Design velocity animation', label: 'Design Velocity' },
  cta: { src: '/media/products-cta-left.gif', alt: 'Product collaboration animation', label: 'Collaboration' },
} satisfies Record<string, SectionMediaItem>;

export default function Products() {
  const products = [
    {
      name: 'ProjectFlow',
      tagline: 'UX sprint planning workspace',
      description: 'A collaborative board for mapping user journeys, design tasks, and review cycles.',
      status: 'live' as const,
      icon: Zap,
      features: ['Design Sprint Boards', 'Client Feedback', 'Review Workflow', 'Progress Dashboards'],
      gradient: 'tone-3',
    },
    {
      name: 'DesignKit',
      tagline: 'Scalable UI system',
      description: 'Reusable components, interaction patterns, and token-driven visual consistency.',
      status: 'beta' as const,
      icon: Sparkles,
      features: ['200+ Components', 'Design Tokens', 'Figma Assets', 'Usage Docs'],
      gradient: 'tone-5',
    },
    {
      name: 'ProtoLab',
      tagline: 'Interactive prototype engine',
      description: 'Rapidly turn wireframes into testable high-fidelity clickable experiences.',
      status: 'coming-soon' as const,
      icon: Sparkles,
      features: ['Clickable Flows', 'Smart Transitions', 'User Testing Links', 'Version Snapshots'],
      gradient: 'tone-1',
    },
    {
      name: 'InsightLens',
      tagline: 'UX analytics simplified',
      description: 'Understand user friction points with behavior and interaction dashboards.',
      status: 'live' as const,
      icon: BarChart3,
      features: ['Flow Drop-offs', 'Heatmaps', 'Session Signals', 'Report Export'],
      gradient: 'tone-4',
    },
    {
      name: 'SecureVault',
      tagline: 'Protected design operations',
      description: 'Role-based access and secure sharing for sensitive product design workflows.',
      status: 'beta' as const,
      icon: Shield,
      features: ['Access Controls', 'Audit Trails', 'Secure Sharing', 'Compliance Logs'],
      gradient: 'tone-6',
    },
    {
      name: 'GrowthHub',
      tagline: 'Conversion design toolkit',
      description: 'Optimize onboarding, checkout, and retention experiences with experiment-ready tooling.',
      status: 'coming-soon' as const,
      icon: TrendingUp,
      features: ['A/B Tests', 'Experiment Notes', 'Cohort Views', 'Decision Logs'],
      gradient: 'tone-2',
    },
  ];

  const innovation = [
    { title: 'Designer-first', desc: 'Built for practical design and prototyping workflows.' },
    { title: 'Validation-focused', desc: 'Every tool supports faster decision making with users.' },
    { title: 'Team-ready', desc: 'Collaboration and handoff built into every product.' },
    { title: 'Evolving', desc: 'Continuously improved through real project usage.' },
  ];

  return (
    <div className="page-shell">
      <section className="section-wrap hero-wrap hero-section">
        <div className="hero-glow" />

        <div className="hero-layout">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="chip mb-8">
              <Sparkles size={12} className="text-[var(--primary)]" />
              Products for design and prototype teams
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Digital Products
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              Internal products crafted to accelerate UX design, prototyping, and experimentation.
            </p>
          </div>
          <SectionMedia media={SECTION_MEDIA.hero} />
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 cards-grid">
              {products.map((product, idx) => {
                const Icon = product.icon;
                return (
                  <Reveal as="article" key={product.name} className="group card-equal card-pad surface-panel" delay={idx * 70}>
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 ${product.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon size={22} className="text-[var(--text-primary)]" />
                      </div>
                      <StatusBadge variant={product.status} />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">{product.name}</h3>
                    <p className="text-xs font-medium text-[var(--primary)] mb-3">{product.tagline}</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">{product.description}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                          <div className="w-1 h-1 bg-[var(--primary)] rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="inline-flex items-center gap-2 text-sm text-[var(--primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight size={14} />
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.catalog} />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad">
          <div className="section-with-media media-right">
            <div className="section-body">
              <div className="section-head">
                <h2 className="section-title">Built for Design Velocity</h2>
                <p className="section-lead">Every product is shaped by real agency workflows and live client constraints.</p>
              </div>
              <div className="grid md:grid-cols-4 cards-grid">
                {innovation.map((item) => (
                  <article key={item.title} className="card-equal card-pad surface-panel text-center hover:border-[var(--primary)]/30 transition-colors">
                    <h3 className="font-semibold mb-1 text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.velocity} />
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="hero-panel text-center">
              <div className="relative">
                <Users2 size={46} className="mx-auto mb-5 text-[var(--text-primary)]" />
                <h2 className="hero-panel-title text-3xl md:text-4xl mb-4">Want to co-create a product?</h2>
                <p className="hero-panel-copy text-lg mb-8 max-w-2xl mx-auto">
                  We partner with teams to build design-driven tools from concept to launch.
                </p>
                <Link to={ROUTES.contact} className="cta-contrast">
                  Start Collaboration
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

