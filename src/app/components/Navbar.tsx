import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ROUTES } from '../routePaths';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: ROUTES.services },
    { name: 'Products', path: ROUTES.products },
    { name: 'Internship', path: ROUTES.internship },
    { name: 'Research', path: ROUTES.research },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px] py-3">
          <Link to={ROUTES.home} className="flex items-center gap-2 group">
            <div className="relative p-[1px] rounded-[var(--radius)] bg-[var(--gradient-accent)]">
              <div className="w-8 h-8 bg-[var(--surface-contrast)] rounded-[7px] flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-[var(--text-primary)] font-bold text-sm">P</span>
              </div>
            </div>
            <div className="leading-tight">
              <span className="block font-semibold text-[var(--text-primary)]">ProtoDesignAgency</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">UI/UX and Prototyping</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 pill-nav p-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-[var(--radius)] text-sm transition-all ${
                  isActive(link.path)
                    ? 'text-[var(--primary-foreground)] bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/25'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to={ROUTES.contact}
              className="cta-primary px-4 py-2 text-sm"
            >
              Book a Sprint
            </Link>
          </div>

          <button
            className="squircle md:hidden p-2 text-[var(--text-secondary)] rounded-[var(--radius)] border border-border/80 bg-card/40 backdrop-blur-sm hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 mb-4 space-y-1 border border-border/60 rounded-[var(--radius)] bg-card/70 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`squircle block mx-2 px-3 py-2 rounded-[var(--radius)] text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[var(--primary)] bg-[var(--primary)]/5'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--muted)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={ROUTES.contact}
              onClick={() => setMobileMenuOpen(false)}
              className="squircle block mx-2 px-4 py-2 mt-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] text-center text-sm hover:bg-[var(--primary-hover)] transition-colors"
            >
              Book a Sprint
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
