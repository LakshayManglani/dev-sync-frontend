import { Outlet, useParams } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { useGetUserByUsernameQuery } from '../../app/services/user';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { setSelectedProfile } from './profiles.slice';
import { selectCurrentUser } from '../auth/auth.slice';

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserByUsernameQuery(username, {
    skip: !username || username === user?.username,
  });

  useEffect(() => {
    if (username && (username === user?.username || userData)) {
      dispatch(setSelectedProfile(username));
    }
  }, [username, userData, dispatch, user]);

  if (!username) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Profile;
