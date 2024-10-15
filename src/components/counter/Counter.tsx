// import styles from './Counter.module.scss';
import { useEffect, useRef, useState } from 'react';
import { CounterProps } from './types';
import { StyledCounter } from './Counter.styles';

function Counter({
  count,
  status = 'rest',
  className,
  ariaLabel,
}: Readonly<CounterProps>) {
  const [animate, setAnimate] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender) {
      // Skip animation on the first render
      isFirstRender.current = false;
      return;
    }

    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <StyledCounter
      $status={status}
      $animate={animate}
      className={className}
      aria-live="polite"
      aria-label={ariaLabel ?? `Current count: ${count}`}
    >
      {count}
    </StyledCounter>
  );
}

export default Counter;
