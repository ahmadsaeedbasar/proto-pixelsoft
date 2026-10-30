import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Blocks, Layers3, Rocket, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import { ROUTES } from '../routePaths';

/**
 * Content contracts used by the landing page.
 * Keeping these explicit makes copy updates safer and easier to review.
 */
interface ServiceItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
  detail: string;
}

interface ProjectItem {
  name: string;
  domain: string;
  impact: string;
  detail: string;
}

interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
}

interface ProductPreviewItem {
  name: string;
  status: string;
  desc: string;
}

const PRODUCT_PREVIEWS: ProductPreviewItem[] = [
  { name: 'ProjectFlow', status: 'Live', desc: 'UX sprint planning and design operations workspace.' },
  { name: 'DesignKit', status: 'Beta', desc: 'Component systems for consistent and scalable UI work.' },
  { name: 'AIStudio', status: 'Soon', desc: 'AI-assisted prototyping, copy, and micro-interaction suggestions.' },
];

/**
 * Replace these `src` values with your own GIF/WebP/video poster URLs.
 * The layout and animations are handled by shared classes in `index.css`.
 */
const SECTION_MEDIA = {
  // Professional Lottie animation for the landing hero card.
  // Keep local file or swap to a trusted JSON URL.
  hero: {
    src: 'https://lottiefiles.com/animation/underwater-trash-with-fish-floating-animation_10719813',
    alt: 'Underwater fish floating animation',
    label: 'Hero Visual',
  },
  stats: { src: '/media/stats-left.gif', alt: 'Performance and metrics animation', label: 'Metrics Story' },
  services: { src: '/media/services-right.gif', alt: 'Service workflow animation', label: 'Service Flow' },
  products: { src: '/media/products-left.gif', alt: 'Product toolkit animation', label: 'Product Suite' },
  projects: { src: '/media/projects-right.gif', alt: 'Case study walkthrough animation', label: 'Case Preview' },
  team: { src: '/media/team-left.gif', alt: 'Team collaboration animation', label: 'Team Culture' },
  testimonials: { src: '/media/testimonials-right.gif', alt: 'Client feedback animation', label: 'Client Voice' },
  pathways: { src: '/media/pathways-left.gif', alt: 'Programs and research animation', label: 'Growth Paths' },
  cta: { src: '/media/cta-right.gif', alt: 'Final call to action animation', label: 'Launch Ready' },
} satisfies Record<string, SectionMediaItem>;

/**
 * Landing page for the agency website.
 * Renders the full marketing flow: hero, social proof, capabilities, and conversion CTAs.
 */
export default function Landing() {
  const services: ServiceItem[] = [
    {
      icon: Sparkles,
      title: 'UX Strategy',
      description: 'Research-backed product direction, user journeys, and decision frameworks.',
    },
    {
      icon: Layers3,
      title: 'UI Design',
      description: 'High-fidelity interfaces with reusable components and visual consistency.',
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Clickable prototypes to validate flows fast before development.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Iterative UX improvements driven by user behavior and metrics.',
    },
  ];

  const stats: StatItem[] = [
    { value: '180+', label: 'UX Projects Delivered', detail: 'Cross-platform redesigns and product launches' },
    { value: '95+', label: 'Design Partners', detail: 'Startups, enterprises, and scale-up teams' },
    { value: '60+', label: 'Prototype Sprints', detail: 'Rapid validation cycles completed with users' },
    { value: '18+', label: 'Industries Served', detail: 'Fintech, health, SaaS, commerce, and more' },
  ];

  const projects: ProjectItem[] = [
    {
      name: 'FinEdge Onboarding Redesign',
      domain: 'Fintech',
      impact: '+34% onboarding completion',
      detail: 'Reframed multi-step onboarding and KYC into a guided flow with clearer decision states.',
    },
    {
      name: 'OpsGrid Enterprise Dashboard',
      domain: 'SaaS',
      impact: '2x faster task execution',
      detail: 'Built a modular dashboard system with role-based views and reusable data interaction patterns.',
    },
    {
      name: 'MedFlow Prototype Sprint',
      domain: 'HealthTech',
      impact: 'Validated in 9 days',
      detail: 'Delivered interactive prototypes for patient booking, triage, and follow-up journey testing.',
    },
  ];

  const team: TeamMember[] = [
    {
      name: 'Ayesha Khan',
      role: 'Lead UX Strategist',
      focus: 'Research planning, journey architecture, and decision frameworks.',
    },
    {
      name: 'Hamza Saeed',
      role: 'Senior UI Designer',
      focus: 'Interface systems, visual direction, and accessibility-first component design.',
    },
    {
      name: 'Mariam Ali',
      role: 'Prototype Director',
      focus: 'Rapid validation sprints and high-fidelity interaction prototyping.',
    },
    {
      name: 'Zain Ahmed',
      role: 'Design Ops Lead',
      focus: 'Design-to-dev handoff, quality reviews, and cross-team workflow scaling.',
    },
  ];

  const testimonials: TestimonialItem[] = [
    {
      quote: 'The prototype sprint clarified our product direction in one week and removed months of uncertainty.',
      author: 'Head of Product, FinEdge',
    },
    {
      quote: 'Their design system work gave our team speed, consistency, and confidence across every release.',
      author: 'VP Engineering, OpsGrid',
    },
    {
      quote: 'Best UX collaboration we have had. Structured process, strong craft, measurable outcomes.',
      author: 'Founder, MedFlow',
    },
  ];

  return (
    <div className="page-shell">
      {/* Hero and primary conversion actions */}
      <section className="section-wrap hero-wrap hero-section">
        <div className="hero-glow" />

        <div className="hero-layout">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="chip mb-8 font-medium">
              <Zap size={13} className="text-[var(--primary)]" />
              UI/UX designer and prototyper agency
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight text-[var(--text-primary)]">
              Design products people
              <span className="block bg-[var(--gradient-primary)] bg-clip-text text-transparent">actually enjoy using</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10">
              We help teams turn ideas into validated UI/UX concepts, production-ready
              prototypes, and polished digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link to={ROUTES.contact} className="group cta-primary px-7">
                Book Prototype Sprint
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to={ROUTES.products} className="cta-secondary px-7">
                See Product Work
              </Link>
            </div>
          </div>

          <SectionMedia media={SECTION_MEDIA.hero} />
        </div>
      </section>

      {/* Delivery metrics and social proof */}
      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad-tight">
          <div className="section-with-media media-left">
            <div className="section-body">
              <div className="section-head mb-10">
                <h2 className="section-title text-2xl md:text-3xl">Trusted Product Design Outcomes</h2>
                <p className="section-lead mt-3 text-base">
                  Measurable delivery quality across strategy, interface systems, and prototype validation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 cards-grid">
                {stats.map((stat) => (
                  <article key={stat.label} className="card-equal surface-panel p-6">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] mt-3">{stat.label}</div>
                    <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">{stat.detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.stats} />
          </div>
        </div>
      </section>

      {/* Core service capabilities */}
      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">What we do best</h2>
              <p className="section-lead">Strategy, interface design, and prototyping integrated into one delivery flow.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 cards-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group card-equal card-pad surface-panel hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:-translate-y-1 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--gradient-accent)]/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon size={20} className="text-[var(--primary)]" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.services} />
        </div>
      </section>

      {/* Productized internal tools */}
      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad">
          <div className="section-with-media media-left">
            <div className="section-body">
              <div className="section-head">
                <h2 className="section-title">Design Products</h2>
                <p className="section-lead">Internal tools and frameworks built for designers, researchers, and product teams.</p>
              </div>

              <div className="grid md:grid-cols-3 cards-grid">
                {PRODUCT_PREVIEWS.map((product) => (
                  <Link
                    key={product.name}
                    to={ROUTES.products}
                    className="group card-equal block card-pad surface-panel hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[var(--gradient-primary)] opacity-90" />
                      <span className="status-success text-xs px-2 py-1 rounded-md border font-medium">
                        {product.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{product.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{product.desc}</p>
                    <div className="mt-5 text-sm text-[var(--primary)] font-medium inline-flex items-center gap-2">
                      Learn more
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.products} />
          </div>
        </div>
      </section>

      {/* Portfolio highlights */}
      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-lead">Professional case-study engagements across fintech, SaaS, and health products.</p>
            </div>

            <div className="grid md:grid-cols-3 cards-grid">
              {projects.map((project) => (
                <article key={project.name} className="card-equal surface-panel card-pad hover:border-[var(--primary)]/30 transition-all">
                  <div className="inline-flex items-center rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-[var(--text-secondary)] mb-4">
                    {project.domain}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{project.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{project.detail}</p>
                  <div className="status-success inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                    {project.impact}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.projects} />
        </div>
      </section>

      {/* Team credibility */}
      <section className="border-y border-border/70 bg-card/20">
        <div className="section-wrap section-pad">
          <div className="section-with-media media-left">
            <div className="section-body">
              <div className="section-head">
                <h2 className="section-title">Team</h2>
                <p className="section-lead">A cross-functional UI/UX and prototyping team focused on fast, high-quality product outcomes.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 cards-grid">
                {team.map((member) => (
                  <article key={member.name} className="card-equal surface-panel card-pad">
                    <div className="w-11 h-11 rounded-full bg-[var(--gradient-accent)] mb-4" />
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{member.name}</h3>
                    <p className="text-sm text-[var(--primary)] mt-1 mb-3">{member.role}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{member.focus}</p>
                  </article>
                ))}
              </div>
            </div>
            <SectionMedia media={SECTION_MEDIA.team} />
          </div>
        </div>
      </section>

      {/* Client quotes */}
      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="section-head">
              <h2 className="section-title">Testimonials</h2>
              <p className="section-lead">Feedback from teams we partnered with across strategy, UI design, and prototyping.</p>
            </div>

            <div className="grid md:grid-cols-3 cards-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="card-equal surface-panel card-pad">
                  <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-5">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <footer className="text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.testimonials} />
        </div>
      </section>

      {/* Secondary navigation cards */}
      <section className="section-wrap section-pad">
        <div className="section-with-media media-left">
          <div className="section-body">
            <div className="grid md:grid-cols-2 gap-8 p-2 md:p-3">
              <Link to={ROUTES.internship} className="group relative overflow-hidden surface-panel card-pad hover:shadow-xl transition-all">
                <div className="relative">
                  <Rocket size={30} className="text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Internship Program</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    Hands-on training for aspiring UI/UX designers and prototypers.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--primary)] font-medium">
                    View Programs
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link to={ROUTES.research} className="group relative overflow-hidden surface-panel card-pad hover:shadow-xl transition-all">
                <div className="relative">
                  <Blocks size={30} className="text-[var(--info)] mb-4" />
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Research Lab</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    Usability research, behavior insights, and future interaction studies.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--info)] font-medium">
                    Explore Research
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.pathways} />
        </div>
      </section>

      {/* Final call-to-action */}
      <section className="section-wrap section-pad">
        <div className="section-with-media media-right">
          <div className="section-body">
            <div className="hero-panel">
              <div className="relative text-center">
                <h2 className="hero-panel-title text-3xl md:text-5xl mb-5">
                  Ready to prototype your next product?
                </h2>
                <p className="hero-panel-copy text-lg max-w-2xl mx-auto mb-9">
                  We turn rough ideas into testable experiences, then into polished launches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={ROUTES.contact} className="cta-contrast">
                    Talk to a Designer
                    <ArrowRight size={18} />
                  </Link>
                  <Link to={ROUTES.services} className="cta-contrast-outline">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SectionMedia media={SECTION_MEDIA.cta} />
        </div>
      </section>
    </div>
  );
}
