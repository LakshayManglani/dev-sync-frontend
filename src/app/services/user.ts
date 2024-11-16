import { logout, setCredentials } from '../../features/auth/auth.slice';
import { setProfile } from '../../features/profile/profiles.slice';
import { api } from './api';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    self: build.query({
      query: () => ({
        url: '/users/self',
        method: 'GET',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          if (data.data) {
            const userData = data.data;

            dispatch(setCredentials(userData));

            dispatch(setProfile(userData));
          } else {
            throw new Error('User data is invalid');
          }
        } catch (error) {
          dispatch(logout());
          console.error('Failed to fetch user data: ', error);
        }
      },
    }),
    getUserByUsername: build.query({
      query: (username) => ({
        url: `/users/${username}`,
        method: 'GET',
      }),
      onQueryStarted: async (username, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          if (data.data) {
            const userData = data.data;

            dispatch(setProfile(userData));
          } else {
            throw new Error('User data is invalid');
          }
        } catch (error) {
          console.error(
            `Failed to fetch user data for username ${username}: `,
            error
          );
        }
      },
    }),
  }),
});

export const { useSelfQuery, useGetUserByUsernameQuery } = userApi;
