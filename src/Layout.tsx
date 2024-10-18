import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
