import { selectCurrentUser } from '../auth.slice';
import { useAppSelector } from '../../../app/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '../../../routes';

const RequireAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return user.isLoggedIn ? <Outlet /> : <Navigate to={routes.login} />;
};

export default RequireAuth;
