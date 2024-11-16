import React from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { Counter } from '..';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'large',
      status = 'ghost',
      border = 'full',
      leftIcon,
      label,
      counter,
      rightIcon,
      disabled,
      className,
      responsive = true,
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
          responsive && styles.responsive,
          'body-base-slim',
          className
        )}
        disabled={currentStatus === 'disabled'}
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {label && <span className="body-strong">{label}</span>}
        {counter !== undefined && (
          <span>
            <Counter {...counter} className={styles.counter} />
          </span>
        )}
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

export default Button;
