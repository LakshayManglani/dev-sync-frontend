import {
  Book16Filled,
  Bookmark16Filled,
  Document16Filled,
  Folder16Filled,
  Info16Filled,
  PuzzlePiece16Filled,
  Tag16Filled,
  Video16Filled,
} from '@fluentui/react-icons';
import { NavLink } from '../../../../components';
import { routes } from '../../../../routes';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';

const getProfileRoute = (route: string, username: string) => {
  return route.replace(':username', username);
};

const Navbar = () => {
  const { username } = useParams();

  if (!username) {
    return null;
  }

  const linkOptions = [
    {
      label: 'Info',
      to: getProfileRoute(routes.info, username),
      icon: <Info16Filled />,
    },
    {
      label: 'Posts',
      to: getProfileRoute(routes.posts, username),
      icon: <Document16Filled />,
    },
    {
      label: 'Projects',
      to: getProfileRoute(routes.projects, username),
      icon: <Folder16Filled />,
    },
    {
      label: 'Components',
      to: getProfileRoute(routes.components, username),
      icon: <PuzzlePiece16Filled />,
    },
    {
      label: 'Articles',
      to: getProfileRoute(routes.articles, username),
      icon: <Book16Filled />,
    },
    {
      label: 'Videos',
      to: getProfileRoute(routes.videos, username),
      icon: <Video16Filled />,
    },
    {
      label: 'Saved',
      to: getProfileRoute(routes.saved, username),
      icon: <Bookmark16Filled />,
    },
    {
      label: 'Tagged',
      to: getProfileRoute(routes.tagged, username),
      icon: <Tag16Filled />,
    },
  ];
  return (
    <nav className={clsx(styles.nav, 'glass full')}>
      <div className={styles.navLinks}>
        {linkOptions.map(({ to, label, icon }) => (
          <NavLink
            to={to}
            key={label}
            leftIcon={icon}
            label={label}
            size="small"
            status="simple"
            border="small"
            end
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
