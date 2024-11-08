import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentUser } from '../auth.slice';
import { routes } from '../../../routes';

const NoAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return user.isLoggedIn ? <Navigate to={routes.home} /> : <Outlet />;
};

export default NoAuth;
