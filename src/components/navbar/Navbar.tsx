import {
  CompassNorthwest16Filled,
  Home16Filled,
  Person16Filled,
  Chat16Filled,
  Code16Filled,
} from '@fluentui/react-icons';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import NavLink from '../navLink';
import Slide from '../animation/slide';

const linkOptions = [
  {
    label: 'Home',
    to: '/',
    icon: <Home16Filled />,
  },
  {
    label: 'Explore',
    to: '/explore',
    icon: <CompassNorthwest16Filled />,
  },
  {
    label: 'Chat',
    to: '/chat',
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

function Navbar() {
  const [showLabel, setShowLabel] = useState(false);
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

  return (
    <nav
      className={clsx(styles.nav, 'glass')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {linkOptions.map(({ to, label, icon }) => (
        <NavLink
          to={to}
          key={label}
          leftIcon={icon}
          label={showLabel ? <Slide>{label}</Slide> : undefined}
          status="simple"
          style={{ justifyContent: 'left' }}
        />
      ))}
    </nav>
  );
}

export default Navbar;
