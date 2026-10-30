import React from 'react';

export interface SectionMediaItem {
  src: string;
  alt: string;
  label: string;
}

interface SectionMediaProps {
  media: SectionMediaItem;
}

export function SectionMedia({ media }: SectionMediaProps) {
  const isLottie = /(\.json$|lottiefiles\.com)/i.test(media.src);

  return (
    <aside className="section-media media-sticky">
      <div className="media-frame">
        {isLottie ? (
          <lottie-player
            src={media.src}
            background="transparent"
            speed="1"
            loop
            autoplay
            className="media-image"
            aria-label={media.alt}
          />
        ) : (
          <img src={media.src} alt={media.alt} className="media-image" loading="lazy" />
        )}
        <div className="media-overlay" />
        <span className="media-tag">{media.label}</span>
      </div>
    </aside>
  );
}

