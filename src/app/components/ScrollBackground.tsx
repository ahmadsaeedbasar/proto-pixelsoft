import { useCallback, useEffect, useRef } from 'react';

const TOTAL_FRAMES = 238;
const RESOURCE_ROOT = '/resources';

const pad = (n: number) => String(n).padStart(3, '0');

export default function ScrollBackground() {
  const aRef = useRef<HTMLImageElement | null>(null);
  const bRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const lastRenderedRef = useRef(-1);

  const preload = useCallback(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${RESOURCE_ROOT}/ezgif-frame-${pad(i)}.jpg`;
    }
  }, []);

  const render = useCallback(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress =
      maxScroll <= 0 ? 0 : Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

    targetProgressRef.current = scrollProgress;

    const diff = targetProgressRef.current - progressRef.current;
    progressRef.current += diff * 0.18;

    const raw = progressRef.current * (TOTAL_FRAMES - 1);
    const base = Math.floor(raw);
    const frac = raw - base;
    const indexA = Math.min(base + 1, TOTAL_FRAMES - 1) + 1;
    const indexB = Math.min(base + 2, TOTAL_FRAMES - 1) + 1;

    const active = lastRenderedRef.current % 2 === 0 ? 'a' : 'b';
    const inactive = active === 'a' ? 'b' : 'a';

    const elA = active === 'a' ? aRef.current : bRef.current;
    const elB = inactive === 'a' ? aRef.current : bRef.current;

    if (elA && elB) {
      elA.src = `${RESOURCE_ROOT}/ezgif-frame-${pad(indexA)}.jpg`;
      elA.style.opacity = String(1 - frac);
      elB.src = `${RESOURCE_ROOT}/ezgif-frame-${pad(indexB)}.jpg`;
      elB.style.opacity = String(frac);
    }

    lastRenderedRef.current += 1;
    rafRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    preload();
    rafRef.current = requestAnimationFrame(render);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [preload, render]);

  return (
    <div
      className="fixed inset-0 z-[-1] w-full h-full overflow-hidden"
      style={{ background: '#07080a' }}
    >
      <img
        ref={aRef}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          imageRendering: 'crisp-edges',
          willChange: 'transform, opacity, src',
          transform: 'translateZ(0)',
          transition: 'none',
          display: 'block',
        }}
        decoding="async"
        fetchPriority="high"
        src={`${RESOURCE_ROOT}/ezgif-frame-001.jpg`}
      />
      <img
        ref={bRef}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          imageRendering: 'crisp-edges',
          willChange: 'transform, opacity, src',
          transform: 'translateZ(0)',
          transition: 'none',
          display: 'block',
          opacity: '0',
        }}
        decoding="async"
      />
    </div>
  );
}
