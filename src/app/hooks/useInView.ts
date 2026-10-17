import { useEffect, useRef, useState, RefObject } from 'react';

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (observer) observer.unobserve(node);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref.current]);

  return { ref: ref as RefObject<T>, inView };
}

export default useInView;
