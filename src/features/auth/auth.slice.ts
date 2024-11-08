import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
  _id: string | null;
  accessToken: string | null;
  username: string | null;
  email: string | null;
  givenName: string | null;
  familyName: string | null;
  password: string | null;
  role: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  _id: null,
  accessToken: null,
  username: null,
  email: null,
  givenName: null,
  familyName: null,
  password: null,
  role: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userId, accessToken } = action.payload;
      state._id = userId;
      state.accessToken = accessToken;
      state.isLoggedIn = true;
    },
    logout: () => initialState,
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
