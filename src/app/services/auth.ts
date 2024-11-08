import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    checkAvailability: build.query({
      query: ({ email, username }) => ({
        url: `/auth/register/check-availability`,
        method: 'GET',
        params: { email, username },
      }),
    }),
    sendVerificationEmail: build.mutation({
      query: (credentials) => ({
        url: '/auth/register/send-verification-email',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyAndCreate: build.mutation({
      query: (credentials) => ({
        url: '/auth/register/verify-and-create',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCheckAvailabilityQuery,
  useSendVerificationEmailMutation,
  useVerifyAndCreateMutation,
} = authApi;
