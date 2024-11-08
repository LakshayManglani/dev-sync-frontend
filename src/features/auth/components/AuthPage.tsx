import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Link } from '../../../components';
import LoginForm from './login/LoginForm';
import RegisterForm from './register/RegisterForm';
import styles from '../Auth.module.scss';
import logoSvg from '../../../assets/logo.svg';
import { routes } from '../../../routes';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Slide from '../../../components/animation/slide/Slide';

const AuthPage = () => {
  const location = useLocation();

  const isRegisterPage = location.pathname === routes.register;

  const title = isRegisterPage ? 'Register' : 'Login';
  const subtitle = isRegisterPage
    ? 'Join the community and stay updated!'
    : 'Stay synced with frontend trends.';
  const redirectLink = isRegisterPage ? '/login' : '/register';
  const redirectText = isRegisterPage ? 'Login' : 'Register';

  return (
    <div className={styles.authPage}>
      <div className={clsx(styles.authContainer, 'glass')}>
        <header className={styles.header}>
          <img src={logoSvg} alt="Dev Sync logo" className={styles.logo} />
          <Slide>
            <Link to={redirectLink} size="large">
              {redirectText}
            </Link>
          </Slide>
        </header>

        <main className={styles.mainContent}>
          <section className={styles.mainHeader}>
            <h1 className="title-small">{title}</h1>
            <p className="text-secondary">{subtitle}</p>
          </section>
          <div className={styles.subContent}>
            <section className={styles.authOptions}>
              <Button
                leftIcon={<FaGoogle />}
                label="Google"
                status="rest"
                style={{ width: '100%' }}
              />
              <Button
                leftIcon={<FaGithub />}
                label="Github"
                status="rest"
                style={{ width: '100%' }}
              />
            </section>

            <div className={styles.divider}>
              <hr />
              <span className="text-secondary">Or</span>
              <hr />
            </div>

            {isRegisterPage ? <RegisterForm /> : <LoginForm />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthPage;
