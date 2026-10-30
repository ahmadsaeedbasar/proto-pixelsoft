import { useEffect, useRef, useState, RefObject } from 'react';

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is not available, immediately mark as in view.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    let didCancel = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !didCancel) {
            setInView(true);
            try {
              observer.unobserve(entry.target);
            } catch (e) {
              /* ignore */
            }
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(node);

    return () => {
      didCancel = true;
      observer.disconnect();
    };
    // We intentionally include ref.current so the effect runs when the element mounts.
  }, [ref.current]);

  return { ref: ref as RefObject<T>, inView };
}

export default useInView;
