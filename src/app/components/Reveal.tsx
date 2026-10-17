import React from 'react';
import useInView from '../hooks/useInView';

type Props = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}>;

export function Reveal({ as: Tag = 'div', className = '', children, style, delay = 0 }: Props) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ ...style, animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
