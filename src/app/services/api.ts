import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('authentication', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    health: builder.query({
      query: () => '/health',
    }),
  }),
});
