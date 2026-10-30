import React from 'react';
import { Link } from 'react-router';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { ROUTES } from '../routePaths';

export function Footer() {
  return (
    <footer className="relative mt-20 md:mt-24 border-t border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(100,108,255,0.18),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(65,209,255,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-14">
          <div>
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to={ROUTES.services} className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">UX Strategy</Link></li>
              <li><Link to={ROUTES.services} className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">UI Design</Link></li>
              <li><Link to={ROUTES.services} className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Rapid Prototyping</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to={ROUTES.products} className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Products</Link></li>
              <li><Link to={ROUTES.internship} className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Internship</Link></li>
              <li><Link to={ROUTES.research} className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Research</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Playbooks</a></li>
              <li><a href="#" className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Insights</a></li>
              <li><a href="#" className="inline-flex squircle px-2 py-1 rounded-[var(--radius)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="squircle inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius)] border border-border/80 bg-card/40 backdrop-blur-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="squircle inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius)] border border-border/80 bg-card/40 backdrop-blur-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="squircle inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius)] border border-border/80 bg-card/40 backdrop-blur-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-7 md:pt-8 border-t border-border/70 gap-4">
          <div className="flex items-center gap-2">
            <div className="relative p-[1px] rounded-[var(--radius)] bg-[var(--gradient-accent)]">
              <div className="w-7 h-7 bg-[var(--surface-contrast)] rounded-[calc(var(--radius)-2px)] flex items-center justify-center">
                <span className="text-[var(--text-primary)] font-bold text-xs">P</span>
              </div>
            </div>
            <span className="text-sm text-[var(--text-secondary)]">(c) 2026 ProtoDesignAgency. All rights reserved.</span>
          </div>
          <div className="flex gap-3 text-sm">
            <a href="#" className="inline-flex squircle px-3 py-1.5 rounded-[var(--radius)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Privacy</a>
            <a href="#" className="inline-flex squircle px-3 py-1.5 rounded-[var(--radius)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

