import {
  CompassNorthwest16Filled,
  Home16Filled,
  Person16Filled,
  Chat16Filled,
  Code16Filled,
} from '@fluentui/react-icons';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { NavLink, SlideAnimation } from '..';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentUser } from '../../features/auth/auth.slice';
import { routes } from '../../routes';
import { useLocation } from 'react-router-dom';

const linkOptions = [
  {
    label: 'Home',
    to: routes.home,
    icon: <Home16Filled />,
  },
  {
    label: 'Explore',
    to: routes.explore,
    icon: <CompassNorthwest16Filled />,
  },
  {
    label: 'Chat',
    to: routes.chat,
    icon: <Chat16Filled />,
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: <Person16Filled />,
  },
  {
    label: 'Dev',
    to: '/dev/components',
    icon: <Code16Filled />,
  },
];

// TODO: Improve the navbar logic

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const [showLabel, setShowLabel] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1280);
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;

    const matchedOption = linkOptions.find((option) => {
      if (option.to === routes.home) {
        return currentPath === routes.home;
      }
      return currentPath.startsWith(option.to);
    });

    if (matchedOption) {
      setSelectedLabel(matchedOption.label);
    }
  }, [location.pathname]);

  let hoverTimer: number;

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setShowLabel(true);
    }, 600); // 0.6 seconds
  };
  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setShowLabel(false);
  };

  const handleLinkClick = (label: string) => {
    setSelectedLabel(label);
  };

  linkOptions.forEach((option) => {
    if (option.label === 'Profile') {
      option.to = `/${user?.username}`;
    }
  });

  return (
    <nav
      className={clsx(styles.nav, 'glass')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      {...props}
    >
      {linkOptions.map(({ to, label, icon }) => (
        <NavLink
          to={to}
          key={label}
          leftIcon={icon}
          label={
            (isTablet && selectedLabel === label) ||
            (!isTablet && showLabel) ? (
              <SlideAnimation>{label}</SlideAnimation>
            ) : undefined
          }
          status="simple"
          style={{ justifyContent: 'left' }}
          onClick={() => handleLinkClick(label)}
        />
      ))}
    </nav>
  );
});

export default Navbar;
