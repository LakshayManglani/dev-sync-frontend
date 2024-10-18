import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkProps } from './types';
import styles from './Link.module.scss';
import clsx from 'clsx';

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <RouterLink
        className={clsx(styles.link, 'body-link', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Link.displayName = 'Link';

export default Link;
