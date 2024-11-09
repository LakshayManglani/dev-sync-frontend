import clsx from 'clsx';
import styles from './Counter.module.scss';
import { CounterProps } from './types';
import React from 'react';

const Counter = React.forwardRef<HTMLOutputElement, CounterProps>(
  ({ count, unit = '', className, 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <output
        ref={ref}
        className={clsx(styles.counter, `body-base-slim`, className)}
        aria-live="polite"
        aria-label={ariaLabel ?? `Current count: ${count}`}
        {...props}
      >
        {`${count} ${unit}`}
      </output>
    );
  }
);

export default Counter;
