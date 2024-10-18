import React from 'react';
import clsx from 'clsx';
import styles from './Counter.module.scss';
import { CounterProps } from './types';

const Counter = React.forwardRef<HTMLOutputElement, CounterProps>(
  ({ count, className, 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <output
        ref={ref}
        className={clsx(styles.counter, `body-base-slim`, className)}
        aria-live="polite"
        aria-label={ariaLabel ?? `Current count: ${count}`}
        {...props}
      >
        {count}
      </output>
    );
  }
);

export default Counter;
