import React, { forwardRef } from 'react';
import useInView from '../hooks/useInView';

type Props = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}>;

export const Reveal = forwardRef<HTMLElement, Props>(
  ({ as: Tag = 'div', className = '', children, style, delay = 0 }, forwardedRef) => {
    const { ref, inView } = useInView<HTMLElement>();

    // Merge internal ref (from useInView) with forwarded ref
    const setRefs = (node: HTMLElement | null) => {
      // assign to useInView ref
      // @ts-ignore
      ref.current = node;
      // assign to forwarded ref if provided
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef && 'current' in forwardedRef) {
        // @ts-ignore
        forwardedRef.current = node;
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
      // @ts-ignore
      <Tag ref={setRefs} className={`reveal ${inView ? 'in-view' : ''} ${className}`} style={{ ...style, animationDelay: `${delay}ms` }}>
        {children}
      </Tag>
    );
  }
);

export default Reveal;
