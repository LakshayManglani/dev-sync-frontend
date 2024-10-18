import React from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.scss';
import clsx from 'clsx';
import Counter from '../counter';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'large',
      status = 'ghost',
      border = 'full',
      leftIcon,
      label,
      count,
      rightIcon,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const currentStatus = disabled ? 'disabled' : status;

    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[`size-${size}`],
          styles[`border-${border}`],
          styles[`variant-${variant}`],
          styles[`status-${currentStatus}`],
          'body-base-slim',
          className
        )}
        disabled={currentStatus === 'disabled'}
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {label && <span>{label}</span>}
        {count !== undefined && (
          <span>
            <Counter count={count} className={styles.counter} />
          </span>
        )}
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

export default Button;
