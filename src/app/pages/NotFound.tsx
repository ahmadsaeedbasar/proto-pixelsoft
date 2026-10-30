import React from 'react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { SectionMedia, type SectionMediaItem } from '../components/SectionMedia';
import { SectionAnimation } from '../components/SectionAnimation';
import { ROUTES } from '../routePaths';

const SECTION_MEDIA = {
  notFound: { src: 'https://lottiefiles.com/free-animation/404-page-zKcjdAJgNP', alt: '404 page animation', label: '404 Visual' },
} satisfies Record<string, SectionMediaItem>;

export default function NotFound() {
  return (
    <div className="page-shell min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="section-with-media media-right w-full max-w-5xl">
        <div className="section-body">
          <div className="text-center surface-panel card-pad md:p-12">
            <div className="text-9xl font-bold text-[var(--primary)]/20 mb-4">404</div>
            <h1 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Page Not Found</h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <SectionAnimation variant="notfound" size="lg" className="mx-auto mb-6" />
            <Link to={ROUTES.home} className="cta-primary px-8 py-4">
              <Home size={20} />
              Back to Home
            </Link>
          </div>
        </div>
        <SectionMedia media={SECTION_MEDIA.notFound} />
      </div>
    </div>
  );
}
