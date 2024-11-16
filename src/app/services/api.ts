import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout } from '../../features/auth/auth.slice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://192.168.1.18:8080/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('authentication', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: '/auth/tokens/access-token',
        method: 'POST',
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    health: builder.query({
      query: () => '/health',
    }),
  }),
});
