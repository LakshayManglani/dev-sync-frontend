import React from 'react';
import styles from './NavLink.module.scss';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLinkProps } from './type';
import clsx from 'clsx';

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      status = 'simple',
      size = 'large',
      border = 'full',
      label,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        className={({ isActive, ...classProps }) =>
          clsx(
            styles['nav-link'],
            styles[`status-${status}`],
            styles[`size-${size}`],
            styles[`border-${border}`],
            'body-base-slim',
            isActive && styles['status-active'],
            className &&
              (typeof className === 'string'
                ? className
                : className({ isActive, ...classProps }))
          )
        }
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {label && <span>{label}</span>}
        {rightIcon && <span>{rightIcon}</span>}
      </RouterNavLink>
    );
  }
);

export default NavLink;
