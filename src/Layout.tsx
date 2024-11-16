import { Navbar } from './components';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <>
      <Navbar />
      <main className={`full center`}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
