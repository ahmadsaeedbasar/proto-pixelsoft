import React, { useEffect, useRef } from 'react';

type SectionAnimVariant =
  | 'hero'
  | 'stats'
  | 'services'
  | 'products'
  | 'projects'
  | 'team'
  | 'testimonials'
  | 'pathways'
  | 'cta'
  | 'tracks'
  | 'journey'
  | 'vision'
  | 'focus'
  | 'experiments'
  | 'roadmap'
  | 'contact'
  | 'notfound';

interface SectionAnimationProps {
  variant: SectionAnimVariant;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASS: Record<string, string> = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
};

const SVG_BY_VARIANT: Record<string, string> = {
  hero: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <circle cx="60" cy="60" r="48" stroke="currentColor" stroke-width="1.5" opacity="0.15" class="sa-ring"/>
      <circle cx="60" cy="60" r="30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3" class="sa-ring-slow"/>
      <path d="M60 20 Q85 35 60 50 Q35 35 60 20" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-arc"/>
      <path d="M52 40 L60 32 L68 40 L60 48 Z" fill="currentColor" class="sa-spark"/>
      <circle cx="60" cy="34" r="2" fill="currentColor" class="sa-dot"/>
    </svg>
  `,
  stats: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <line x1="20" y1="100" x2="100" y2="100" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>
      <rect x="30" y="70" w="10" h="24" fill="currentColor" class="sa-bar-1"/>
      <rect x="48" y="55" w="10" h="39" fill="currentColor" class="sa-bar-2"/>
      <rect x="66" y="42" w="10" h="52" fill="currentColor" class="sa-bar-3"/>
      <rect x="84" y="60" w="10" h="34" fill="currentColor" class="sa-bar-4"/>
    </svg>
  `,
  services: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <circle cx="60" cy="60" r="22" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-ring-slow"/>
      <circle cx="60" cy="60" r="34" stroke="currentColor" stroke-width="1" opacity="0.3" class="sa-ring-fast"/>
      <path d="M44 60 L60 44 L76 60 L60 76 Z" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-diamond"/>
      <circle cx="60" cy="60" r="4" fill="currentColor"/>
    </svg>
  `,
  products: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <rect x="30" y="30" w="24" h="24" rx="4" fill="currentColor" opacity="0.9" class="sa-grid-1"/>
      <rect x="66" y="30" w="24" h="24" rx="4" fill="currentColor" opacity="0.6" class="sa-grid-2"/>
      <rect x="30" y="66" w="24" h="24" rx="4" fill="currentColor" opacity="0.6" class="sa-grid-3"/>
      <rect x="66" y="66" w="24" h="24" rx="4" fill="currentColor" opacity="0.9" class="sa-grid-1"/>
      <rect x="42" y="42" w="12" h="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    </svg>
  `,
  projects: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <rect x="24" y="38" w="30" h="18" rx="3" fill="currentColor" opacity="0.9" class="sa-block-1"/>
      <rect x="66" y="30" w="30" h="26" rx="3" fill="currentColor" opacity="0.7" class="sa-block-2"/>
      <rect x="32" y="78" w="26" h="18" rx="3" fill="currentColor" opacity="0.7" class="sa-block-3"/>
      <rect x="64" y="70" w="30" h="18" rx="3" fill="currentColor" opacity="0.5" class="sa-block-4"/>
    </svg>
  `,
  team: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <circle cx="48" cy="46" r="12" fill="currentColor" opacity="0.9" class="sa-user-1"/>
      <circle cx="72" cy="46" r="12" fill="currentColor" opacity="0.7" class="sa-user-2"/>
      <circle cx="60" cy="74" r="12" fill="currentColor" opacity="0.8" class="sa-user-3"/>
    </svg>
  `,
  testimonials: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <path d="M30 36 Q28 34 30 32 Q32 34 30 36" stroke="currentColor" stroke-width="3" fill="none" class="sa-quote-1"/>
      <path d="M38 36 Q36 34 38 32 Q40 34 38 36" stroke="currentColor" stroke-width="3" fill="none" class="sa-quote-2"/>
      <rect x="56" y="42" w="34" h="18" rx="5" fill="currentColor" opacity="0.15" class="sa-bubble-1"/>
      <rect x="62" y="70" w="26" h="12" rx="4" fill="currentColor" opacity="0.15" class="sa-bubble-2"/>
    </svg>
  `,
  pathways: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <path d="M28 100 Q54 58 92 100" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-path"/>
      <path d="M92 100 L88 92 L96 94 L92 100 Z" fill="currentColor" class="sa-rocket"/>
      <rect x="40" y="30" w="8" h="12" rx="2" fill="currentColor" opacity="0.6" class="sa-dot-1"/>
      <rect x="72" y="62" w="8" h="12" rx="2" fill="currentColor" opacity="0.6" class="sa-dot-2"/>
    </svg>
  `,
  cta: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <circle cx="60" cy="60" r="46" stroke="currentColor" stroke-width="2" opacity="0.3" class="sa-ring-pulse"/>
      <path d="M42 44 L78 60 L42 76" stroke="currentColor" stroke-width="3.5" fill="none" class="sa-arrow"/>
      <path d="M70 50 L78 60 L70 70" stroke="currentColor" stroke-width="3.5" fill="none" class="sa-arrow-head"/>
      <circle cx="60" cy="60" r="6" fill="currentColor" class="sa-dot-pulse"/>
    </svg>
  `,
  tracks: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <rect x="36" y="36" w="20" h="20" rx="3" fill="currentColor" class="sa-badge-1"/>
      <rect x="72" y="36" w="20" h="20" rx="3" fill="currentColor" opacity="0.7" class="sa-badge-2"/>
      <rect x="36" y="72" w="20" h="20" rx="3" fill="currentColor" opacity="0.7" class="sa-badge-3"/>
      <rect x="72" y="72" w="20" h="20" rx="3" fill="currentColor" opacity="0.5" class="sa-badge-4"/>
      <circle cx="24" cy="84" r="4" fill="currentColor" opacity="0.6" class="sa-clock-1"/>
      <circle cx="96" cy="84" r="4" fill="currentColor" opacity="0.6" class="sa-clock-2"/>
    </svg>
  `,
  journey: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <line x1="24" y1="60" x2="96" y2="60" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6" opacity="0.35"/>
      <circle cx="36" cy="60" r="6" fill="currentColor" class="sa-dot-j-1"/>
      <circle cx="60" cy="60" r="6" fill="currentColor" opacity="0.8" class="sa-dot-j-2"/>
      <circle cx="84" cy="60" r="6" fill="currentColor" opacity="0.6" class="sa-dot-j-3"/>
      <rect x="54" y="86" w="12" h="12" rx="3" fill="currentColor" class="sa-box-j"/>
    </svg>
  `,
  vision: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <circle cx="48" cy="52" r="20" stroke="currentColor" stroke-width="3" fill="none" class="sa-bulb-glow"/>
      <path d="M40 70 L40 90 L48 100 L56 90 L56 70 Z" fill="currentColor" opacity="0.9" class="sa-base"/>
      <path d="M48 52 L48 66" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <circle cx="42" cy="46" r="3" fill="currentColor" opacity="0.9" class="sa-ray-1"/>
      <circle cx="54" cy="46" r="3" fill="currentColor" opacity="0.7" class="sa-ray-2"/>
      <circle cx="58" cy="56" r="3" fill="currentColor" opacity="0.6" class="sa-ray-3"/>
      <circle cx="38" cy="58" r="3" fill="currentColor" opacity="0.6" class="sa-ray-4"/>
    </svg>
  `,
  focus: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <circle cx="60" cy="48" r="20" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-brain-ring"/>
      <path d="M46 42 Q52 36 62 42 Q72 36 78 42" stroke="currentColor" stroke-width="2" fill="none" class="sa-brain-wave"/>
      <rect x="30" y="70" w="18" h="18" rx="3" fill="currentColor" opacity="0.8" class="sa-block-1"/>
      <rect x="72" y="70" w="18" h="18" rx="3" fill="currentColor" opacity="0.8" class="sa-block-2"/>
      <circle cx="46" cy="100" r="5" fill="currentColor" opacity="0.6" class="sa-dot-1"/>
      <circle cx="74" cy="100" r="5" fill="currentColor" opacity="0.6" class="sa-dot-2"/>
    </svg>
  `,
  experiments: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <circle cx="60" cy="60" r="40" stroke="currentColor" stroke-width="2" opacity="0.25" class="sa-spin-ring"/>
      <path d="M60 26 A34 34 0 0 1 94 60" stroke="currentColor" stroke-width="3.5" fill="none" class="sa-progress-ring"/>
      <circle cx="60" cy="60" r="5" fill="currentColor" class="sa-dot-spin"/>
      <rect x="26" y="100" w="12" h="8" rx="2" fill="currentColor" opacity="0.7" class="sa-chip-1"/>
      <rect x="82" y="100" w="12" h="8" rx="2" fill="currentColor" opacity="0.7" class="sa-chip-2"/>
    </svg>
  `,
  roadmap: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <path d="M24 60 Q60 26 96 60" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-road-line"/>
      <rect x="16" y="56" w="16" h="16" rx="3" fill="currentColor" class="sa-marker-1"/>
      <rect x="52" y="56" w="16" h="16" rx="3" fill="currentColor" opacity="0.8" class="sa-marker-2"/>
      <rect x="88" y="56" w="16" h="16" rx="3" fill="currentColor" opacity="0.6" class="sa-marker-3"/>
      <path d="M96 60 L92 52 L100 54 L96 60 Z" fill="currentColor" class="sa-arrow-r"/>
    </svg>
  `,
  contact: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <rect x="28" y="44" w="28" h="38" rx="5" fill="currentColor" opacity="0.15" class="sa-card-c"/>
      <path d="M36 52 L52 68 L52 76 L36 92 Z" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-line-c"/>
      <circle cx="92" cy="52" r="12" fill="currentColor" opacity="0.9" class="sa-pin-c"/>
      <path d="M92 62 L92 78" stroke="currentColor" stroke-width="2.5" fill="none" opacity="0.6"/>
      <circle cx="44" cy="84" r="4" fill="currentColor" opacity="0.8" class="sa-dot-c-1"/>
      <circle cx="60" cy="84" r="4" fill="currentColor" opacity="0.6" class="sa-dot-c-2"/>
    </svg>
  `,
  notfound: `
    <svg viewBox="0 0 120 120" class="w-full h-full text-[var(--primary)]">
      <rect x="36" y="36" w="48" h="48" rx="6" stroke="currentColor" stroke-width="2.5" opacity="0.15" class="sa-box-n"/>
      <path d="M48 48 L84 84 M84 48 L48 84" stroke="currentColor" stroke-width="3" opacity="0.45" class="sa-cross-n"/>
      <path d="M60 38 L70 54 L86 48" stroke="currentColor" stroke-width="2.5" fill="none" class="sa-home-n"/>
      <path d="M70 54 L70 78 L50 78 L50 54 L60 46 Z" fill="currentColor" opacity="0.6" class="sa-house-n"/>
    </svg>
  `,
};

export function SectionAnimation({ variant, size }: SectionAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        'section-anim-wrap pointer-events-none select-none',
        SIZE_CLASS[size ?? 'md'],
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: SVG_BY_VARIANT[variant] }}
    />
  );
}